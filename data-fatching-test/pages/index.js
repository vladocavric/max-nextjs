import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import { getAllEvents } from '../events-api';

function HomePage(props) {
	const { featuredEvents } = props;

	if (!featuredEvents) <h1>Loading...</h1>;

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export async function getStaticProps() {
  const transomedData = await getAllEvents()

	const featuredEvents = transomedData.filter(
		(data) => data.isFeatured === true
	);

	return { props: { featuredEvents }, revalidate: 10 };
}

export default HomePage;
