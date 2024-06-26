import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import { getAllEvents } from '../../api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  const router = useRouter();
  const {events} = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    
    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
				<title>all events</title>
				<meta name='description' content='lorem ipsum' />
			</Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {events},
    revalidate: 1800
  }
}

export default AllEventsPage;
