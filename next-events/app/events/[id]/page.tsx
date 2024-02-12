import EventContent from '@/components/event-detail/event-content';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import { getEventById } from '@/data/dummy-data';
export default function EventSinglePage({
	params,
}: {
	params: { id: string };
}) {
	const id = params.id;
	console.log(id);
	const event = getEventById(id);
	console.log(event);
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
