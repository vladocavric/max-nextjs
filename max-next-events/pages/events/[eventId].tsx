import EventContent from '@/components/event-detail/event-content';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import { getEventById } from '../../data/dummy-data';
import { useRouter } from 'next/router';
export default function EventSinglePage() {
	const router = useRouter();
	const id = router.query.eventId;
	const event = getEventById(id);
	if (!event) {
		return <p>No event found!</p>;
	}
	return (
		<>
			<EventSummary title={event?.title} />
			<EventLogistics
				date={event?.date}
				address={event?.location}
				image={event?.image}
				imageAlt={event?.title}
			/>
			<EventContent>
				<p>{event?.description}</p>
			</EventContent>
		</>
	);
}
