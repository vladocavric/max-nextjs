'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sale } from '@/types/types.d';
import useSWR from 'swr';


export default function SalesClientPage() {


	const { error, isLoading, data: sales } = useSWR<Sale[]>(
		'https://nextjs-a5656-default-rtdb.firebaseio.com/Sales.json',
		async (url: string) => {
			const response = await fetch(url);
			const loadedData = await response.json();
			const transformedSales = [];
			for (const key in loadedData) {
				transformedSales.push({
					id: key,
					username: loadedData[key].username,
					volume: loadedData[key].volume,
				});
			}
			return transformedSales;
		}
	);


    

	return (
		<>
			<Link href={'/'}>Home</Link>
			<h1>Sales Client</h1>
			{isLoading && <h1>Loading...</h1>}
			{!isLoading && (
				<ul>
					{sales?.map((sale) => (
						<li key={sale.id}>
							<Link href={`/${sale.id}`}>
								{sale.username} - {sale.volume}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}


