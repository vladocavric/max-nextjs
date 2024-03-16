import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const {featuredEvents} = props;

  if(!featuredEvents) <h1>Loading...</h1>

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://nextjs-a5656-default-rtdb.firebaseio.com/events.json')
  const data = await response.json()
  const transomedData = []
  for (const key in data) {
    transomedData.push({
      id: key,
      ...data[key]
    })
  }

  const featuredEvents = transomedData.filter(data => data.isFeatured === true)

  return { props: { featuredEvents }, revalidate: 10}
}

export default HomePage;
