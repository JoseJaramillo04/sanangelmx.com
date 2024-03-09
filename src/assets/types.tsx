export interface productInfoType {
	id: string;
	hidden: boolean;
	available: boolean;
	name: string;
	unitName: string;
	modifiedTime: number;
}

export interface categoryType {
	id: string;
	name: string;
	sortOrder: number;
}
