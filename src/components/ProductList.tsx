import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productInfoType } from "../assets/types";

interface Props {
	items: productInfoType[];
	placeholder: string;
}

const ProductList: React.FunctionComponent<Props> = ({
	items,
	placeholder,
}) => {
	const [searchTerm, setSearchTerm] = React.useState("");

	function convertTimeToTimeDesc(modifiedTime: number) {
		let date = new Date(modifiedTime);

		// Extract month, day, and year
		var month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
		var day = date.getDate();
		var year = date.getFullYear();

		// Extract hours, minutes, and am/pm
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? "pm" : "am";

		// Convert hours to 12-hour format
		hours = hours % 12;
		hours = hours ? hours : 12; // The hour '0' should be '12'

		// Format month, day, and year to ensure they have two digits if necessary
		var formattedMonth = month < 10 ? "0" + month : month;
		var formattedDay = day < 10 ? "0" + day : day;
		var formattedYear = year;

		// Format hours and minutes to ensure they have two digits
		var formattedHours = hours < 10 ? "0" + hours : hours;
		var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

		// Concatenate formatted date and time in mm/dd/yyyy hh:mm am/pm format
		var dateTimeString =
			formattedMonth +
			"/" +
			formattedDay +
			"/" +
			formattedYear +
			" at " +
			formattedHours +
			":" +
			formattedMinutes +
			" " +
			ampm;

		return dateTimeString;
	}

	return (
		<>
			<div className="search-bar-row">
				<div>
					<span className="red">{items.length + " "}</span>
					<span>results</span>
				</div>
				<div className="search-container">
					<div className="search-icon">
						<FontAwesomeIcon icon={faSearch} />
					</div>
					<input
						className="search-field"
						type="text"
						placeholder={"Search " + placeholder}
						onChange={(e) => {
							setSearchTerm(e.target.value);
						}}
					/>
				</div>
			</div>
			<div className="category-content">
				<table>
					<tbody>
						{items
							.filter((item: productInfoType) => {
								if (searchTerm === "") return item;
								else if (
									item.name.toLowerCase().includes(searchTerm.toLowerCase())
								)
									return item;
								else return null;
							})
							.map((item: productInfoType) => (
								<tr key={"row" + item.id}>
									<td className="tr-name">{item.name}</td>
									<td className="tr-time">
										last modified: {convertTimeToTimeDesc(item.modifiedTime)}
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ProductList;
