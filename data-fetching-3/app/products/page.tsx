import fs from 'fs/promises';
import path from 'path';
import { Product } from '../../types/types.d';
import Link from 'next/link';

export default async function ProductsPage() {
	const { products } = await getData();

  if (!products) <h1>Loading...</h1>

	return (
		<ul>
			{products.map(({ id, title }) => (
				<li key={id}><Link href={`/products/${id}`}>{title}</Link></li>
			))}
		</ul>
	);
}

async function getData(): Promise<{ products: Product[] }> {
	'use server';
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath, 'utf8')
  const data = await JSON.parse(jsonData) 
	return {
    ...data
	};
}
