import EventsList from '@/components/events/event-list';
import { getFeaturedEvents } from '../data/dummy-data';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
      <EventsList events={featuredEvents} />
  );
}
