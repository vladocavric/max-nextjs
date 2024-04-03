import Link from 'next/link';
import Hero from '../components/HomePage/Hero';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';

export const DUMMY_DATA = [
	{
		title: 'Getting Started with NextJS',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs-1',
		image: 'getting-started-nextjs.png',
		excerpt: 'Vestibulum ullamcorper mauris at ligula',
		content: '# This is a first post'
	},
	{
		title: 'Getting Started with NextJS',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs-2',
		image: 'getting-started-nextjs.png',
		excerpt: 'Vestibulum ullamcorper mauris at ligula',
		content: '# This is a first post'
	},
	{
		title: 'Getting Started with NextJS',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs-3',
		image: 'getting-started-nextjs.png',
		excerpt: 'Vestibulum ullamcorper mauris at ligula',
	},
	{
		title: 'Getting Started with NextJS',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs-4',
		image: 'getting-started-nextjs.png',
		excerpt: 'Vestibulum ullamcorper mauris at ligula',
		content: '# This is a first post'
	},
	{
		title: 'Getting Started with NextJS',
		date: '2022-02-10',
		slug: 'getting-started-with-nextjs-5',
		image: 'getting-started-nextjs.png',
		excerpt: 'Vestibulum ullamcorper mauris at ligula',
		content: '# This is a first post'
	},
];

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts blogs={DUMMY_DATA}/>
		</>
	);
};

export default HomePage;
