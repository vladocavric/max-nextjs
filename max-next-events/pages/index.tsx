import { getFeaturedEvents } from '../data/dummy-data';
import EventsList from '../components/events/events-list';
export default function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
}