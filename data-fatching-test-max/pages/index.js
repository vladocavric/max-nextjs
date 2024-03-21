import { getFeaturedEvents } from '../api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';
import ResultsTitle from '../components/events/results-title';

function HomePage(props) {
	const { featuredEvents } = props;

	return (
		<>
			<Head>
				<title>next events</title>
				<meta name='description' content='lorem ipsum' />
			</Head>
			<div>
				<EventList items={featuredEvents} />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const featuredEvents = await getFeaturedEvents();

	return {
		props: { featuredEvents },
		revalidate: 1800,
	};
}

export default HomePage;
