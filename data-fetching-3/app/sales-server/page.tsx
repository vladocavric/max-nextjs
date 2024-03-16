import Link from 'next/link';
export default async function SalesServerPage() {
	const sales = await getSales();

	return (
		<>
			<Link href={'/'}>Home</Link>
			<h1>Sales Server</h1>

			<ul>
				{sales.map((sale) => (
					<li key={sale.id}>
						<Link href={`/${sale.id}`}>
							{sale.username} - {sale.volume}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

async function getSales() {
	'use server';
	const response = await fetch(
		'https://nextjs-a5656-default-rtdb.firebaseio.com/Sales.json',
		{ cache: 'no-store' }
	);
	const data = await response.json();

	const transformedSales = [];
	for (const key in data) {
		transformedSales.push({
			id: key,
			username: data[key].username,
			volume: data[key].volume,
		});
	}

	return transformedSales;
}
