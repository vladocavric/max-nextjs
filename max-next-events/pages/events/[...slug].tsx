import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/data/dummy-data';
import EventsList from '@/components/events/events-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
export default function FilteredEvens() {
	const router = useRouter();
	const filterData = router.query.slug ?? [];
	if (!filterData) {
		return <p className='center'>Loading...</p>;
	}
	const year = +filterData[0];
	const month = +filterData[1];
	if (
		isNaN(year) ||
		isNaN(month) ||
		year > 2030 ||
		year < 2021 ||
		month < 1 ||
		month > 12
	) {
		return (
			<>
				<ErrorAlert>
					Invalid filter. Please adjust your values!
				</ErrorAlert>
				<div className='center'>
					<Button href='/events'>Show All Events</Button>
				</div>
			</>
		);
	}
	const filteredEvents = getFilteredEvents({ year, month });

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<ErrorAlert>No events found for the chosen filter!</ErrorAlert>
				<div className='center'>
					<Button href='/events'>Show All Events</Button>
				</div>
			</>
		);
	}

	const date = new Date(year, month - 1);
	return (
		<div>
			<ResultsTitle date={date} />
			<EventsList events={filteredEvents} />
		</div>
	);
}
