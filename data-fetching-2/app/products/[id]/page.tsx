import fs from 'fs';
import Link from 'next/link';
import path from 'path';
import { notFound } from 'next/navigation';

type Product = {
	id: string;
	title: string;
	description: string;
};

export default async function HomePage({ params }: {params: any}) {
 
	

	const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');

	const data = fs.readFileSync(filePath, 'utf8');
	const { products } = JSON.parse(data);
	const product: Product = products.find(
		(product: Product) => product.id === params.id
	);

    const res = await fetch(
		'https://timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam',
		{
			cache: 'no-store',
            // next: {
            //     revalidate: 5,
            // }
		}
	);
	const timeData = await res.json();

    if(!timeData) <h1>Loading...</h1>

	if (!product) notFound();

	return (
		<>
			<h1>product detail page</h1>
			<p>{params.id}</p>
			<strong>{product.title}</strong>
			<br />
			<i>{product.description}</i>
			<br />
			<b>{timeData.seconds}</b>
		</>
	);
}

// export async function getTime() {
//     const res = await fetch('http://worldtime.com/api/timezone/America/Chicago')
//     try {
//         const data: string = await res.json()
//         return data
//     } catch (err) {
//         console.log(err)
//     }
// }
