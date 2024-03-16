export type Product = {
	id: string | number;
	title: string;
	description: string;
};

export interface ParamsType {
	productId: string;
	slug: string | number;
}

export type Sale = {
	id: string,
	username: string,
	volume: number,

}
