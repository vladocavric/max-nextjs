import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getEventById, getFeaturedEvents } from '../../api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  const {event} = props
  // const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!event) {
    return (
      // <ErrorAlert>
      //   <p>No event found!</p>
      // </ErrorAlert>
      <h1 className="center">Loading...</h1>
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

export async function getStaticProps(context) {
  const {eventId} = context.params
  const event = await getEventById(eventId)
  if (!event) {
    return {
      notFound: true,
    }
  }
  return {
    props: {event},
    revalidate: 300
  }
}

export async function getStaticPaths() {
  const featuredEvents = await getFeaturedEvents()
  const paths = featuredEvents.map((event) => ({
    params: {eventId: event.id}
  }))
  return {
    paths,
    fallback: true
  }
}

export default EventDetailPage;
