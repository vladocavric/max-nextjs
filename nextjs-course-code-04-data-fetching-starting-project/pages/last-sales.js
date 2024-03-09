import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function LastSalesPage(props) {
	const [sales, setSales] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { data, error } = useSWR(
		'https://nextjs-a5656-default-rtdb.firebaseio.com/Sales.json',
		(url) => fetch(url).then((res) => res.json())
	);
	useEffect(() => {
		if (data) {
			const transformedSales = [];
			for (const key in data) {
				transformedSales.push({
					id: key,
					username: data[key].username,
					volume: data[key].volume,
				});
			}
			setSales(transformedSales);
			setIsLoading(false);
		}
	}, [data]);

	// useEffect(() => {
	//     fetch('https://nextjs-a5656-default-rtdb.firebaseio.com/Sales.json')
	//     .then(response => response.json())
	//     .then(data => {
	//         const transformedSales = [];
	//         for (const key in data) {
	//             transformedSales.push({
	//                 id: key,
	//                 username: data[key].username,
	//                 volume: data[key].volume
	//             });
	//         }

	//         setSales(transformedSales);
	//         setIsLoading(false);
	//     });
	// }, []);

	if (error) {
		return <h1>filed to load</h1>;
	}

	if (isLoading || !data) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			{sales.map(({ username, id, volume }) => (
				<li key={id}>
					{username} - {volume}
				</li>
			))}
		</div>
	);
}
