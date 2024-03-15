import fs from 'fs';
import Link from 'next/link';
import path from 'path';

type Product = {
	id: string;
	title: string;
	description: string;
};

export default async function HomePage() {
	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

	const data = fs.readFileSync(filePath, 'utf8');
	const { products } = JSON.parse(data);

	return (
		<ul>
			{products.map(({ id, title }: Product) => <Link href={`/products/${id}`}><li key={id}>{title}</li></Link>)}
		</ul>
	);
}
