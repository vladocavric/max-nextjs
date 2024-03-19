import { Fragment } from 'react';
import { useRouter } from 'next/router';

// import { getAllEvents } from '../../dummy-data';
import { getAllEvents } from '../../events-api';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  const router = useRouter();
  const {events} = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  if(!events) <h1>Loading...</h1>

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const transomedData = await getAllEvents()

	return { props: { events: transomedData }, revalidate: 10 };
}

export default AllEventsPage;
