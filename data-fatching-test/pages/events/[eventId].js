import { Fragment } from 'react';
import { useRouter } from 'next/router';

// import { getEventById } from '../../dummy-data';
import { getEventById } from '../../events-api';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import { notFound } from 'next/navigation';

function EventDetailPage(props) {
  const {event} = props

	if (!event) {
		return (
			<ErrorAlert>
				<p>No event found!</p>
			</ErrorAlert>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const { eventId } = context.params;
  const event = await getEventById(eventId)
	return { props: {event} };
}

export default EventDetailPage;
