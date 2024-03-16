import { ParamsType, Product } from '@/types/types.d';
import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: ParamsType }) {
	const { productId } = params;
    const { title, description } = await getData(productId)
	return (
		<>
			<h1>{title}</h1>
			<p>{description}</p>
		</>
	);
}

async function getData(id: string): Promise<Product> {
	'use server';
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
	const jsonData = await fs.readFile(filePath, 'utf8');
	const {products} = await JSON.parse(jsonData);
	const product =  products.find((product: Product) => product.id === id);
	if(!product) notFound()
	return product;
}
