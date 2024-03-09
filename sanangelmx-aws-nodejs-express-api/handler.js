const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/", (req, res, next) => {
	return res.status(200).json({
		message: "Hello from root!",
	});
});

app.get("/hello", async (req, res) => {
	return res.json(["hi"]);
});

app.get("/products/items", async (req, res) => {
	let offset = 0;
	let items = [];
	const hideTagName = "hideFromWebsite";

	let data = [];

	//Loop queries ALL products, despite the 1000 hard limit
	do {
		const options = {
			method: "GET",
			url: `https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/items?expand=tags&limit=1000&offset=${offset}`,
			headers: { authorization: `Bearer ${process.env.CLOVER_API_KEY}` },
		};

		data = await axios
			.request(options)
			.then((response) => {
				return response.data.elements;
			})
			.catch((error) => {
				console.error(error);
			});

		items = items.concat(data);
		offset = items.length;
	} while (data.length === 1000);

	//Clean up the JSON
	items.forEach((element) => {
		delete element.autoManage;
		delete element.alternateName;
		delete element.code;
		delete element.sku;
		delete element.price;
		delete element.priceType;
		delete element.defaultTaxRates;
		delete element.cost;
		delete element.isRevenue;
		delete element.priceWithoutVat;
	});

	const filteredArray = items.filter((item) => {
		// Check if the item has tags
		if (item.tags && item.tags.elements) {
			// Check if any tag matches the desired tag name
			return !item.tags.elements.some((tag) => tag.name === hideTagName);
		}
		return true; // Include items without tags
	});

	res.json(filteredArray);
});

app.get("/category", async (req, res) => {
	let offset = 0;
	let categories = [];
	const dontShowIds = [
		{ id: "94A1BMC858PB0", name: "Botanas $1.00" },
		{ id: "T8MN186ZTXCKW", name: "Bebidas por Pieza" },
		{ id: "F4WYRVJFYE4DT", name: "Galletas Y Dulces Por Pieza" },
		{ id: "PQBXWH92V1ANJ", name: "Snack" },
	];

	let data = [];

	//Loop queries ALL products, despite the 1000 hard limit
	do {
		const options = {
			method: "GET",
			url: `https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories?limit=1000&offset=${offset}`,
			headers: { authorization: `Bearer ${process.env.CLOVER_API_KEY}` },
		};

		data = await axios
			.request(options)
			.then((response) => {
				return response.data.elements;
			})
			.catch((error) => {
				console.error(error);
			});

		if (data === undefined) {
			res.json([]);
			return;
		}

		categories = categories.concat(data);
		offset = categories.length;
	} while (data.length === 1000);

	const filteredArray = categories.filter(
		(item) => !dontShowIds.some((dontShowItem) => dontShowItem.id === item.id)
	);

	res.json(filteredArray.reverse());
});

app.get("/category/:categoryId", async (req, res) => {
	const { categoryId } = req.params;
	let offset = 0;
	let items = [];
	const hideTagName = "hideFromWebsite";

	let data = [];

	//Loop queries ALL products, despite the 1000 hard limit
	do {
		const options = {
			method: "GET",
			url: `https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories/${categoryId}/items?expand=tags&limit=1000&offset=${offset}`,
			headers: { authorization: `Bearer ${process.env.CLOVER_API_KEY}` },
		};

		data = await axios
			.request(options)
			.then((response) => {
				return response.data.elements;
			})
			.catch((error) => {
				console.error(error);
			});

		if (data === undefined) {
			res.json([]);
			return;
		}

		items = items.concat(data);
		offset = items.length;
	} while (data.length === 1000);

	//Clean up the JSON
	items.forEach((element) => {
		delete element.autoManage;
		delete element.alternateName;
		delete element.code;
		delete element.sku;
		delete element.price;
		delete element.priceType;
		delete element.defaultTaxRates;
		delete element.cost;
		delete element.isRevenue;
		delete element.priceWithoutVat;
	});

	const filteredArray = items.filter((item) => {
		// Check if the item has tags
		if (item.tags && item.tags.elements) {
			// Check if any tag matches the desired tag name
			return !item.tags.elements.some((tag) => tag.name === hideTagName);
		}
		return true; // Include items without tags
	});

	res.json(filteredArray);
});

app.get("/category/:categoryId/name", async (req, res) => {
	const { categoryId } = req.params;

	let data = [];

	//Loop queries ALL products, despite the 1000 hard limit

	const options = {
		method: "GET",
		url: `https://api.clover.com/v3/merchants/${process.env.MERCHANT_ID}/categories/${categoryId}`,
		headers: { authorization: `Bearer ${process.env.CLOVER_API_KEY}` },
	};

	data = await axios
		.request(options)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.error(error);
		});

	if (data === undefined) {
		res.json([]);
		return;
	}

	res.json(data);
});

app.use((req, res, next) => {
	return res.status(404).json({
		error: "Not Found",
	});
});

module.exports.handler = serverless(app);
