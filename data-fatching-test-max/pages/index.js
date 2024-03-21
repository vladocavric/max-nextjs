import { getFeaturedEvents } from '../api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const {featuredEvents} = props;

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {featuredEvents},
    revalidate: 1800
  }
}

export default HomePage;
