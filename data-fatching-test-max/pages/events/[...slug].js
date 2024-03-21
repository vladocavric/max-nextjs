import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../api-util';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEventsPage(props) {
	const { filteredEvents, hasError } = props;
  const date = new Date(props.date.year, props.date.month - 1)

	{
		hasError && (
			<Fragment>
				<ErrorAlert>
					<p>Invalid filter. Please adjust your values!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No events found for the chosen filter!</p>
				</ErrorAlert>
				<div className='center'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<ResultsTitle date={date} />
			<EventList items={filteredEvents} />
		</Fragment>
	);
}

export async function getServerSideProps(context) {
	const year = +context.params.slug[0];
	const month = +context.params.slug[1];
	if (
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12
	) {
		return {
			props: { hasError: true },
		};
	}
	const filteredEvents = await getFilteredEvents({ year, month });
	

	return {
		props: {
			filteredEvents,
			date: {
				year,
				month,
			},
		},
	};
}

export default FilteredEventsPage;
