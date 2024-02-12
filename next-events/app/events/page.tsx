'use client'
import { useRouter } from 'next/navigation';
import EventSearch from '@/components/events/events-search';
import EventList from '@/components/events/event-list';
import { getAllEvents } from '@/data/dummy-data';
import { useEffect } from 'react';

export default function EventsPage() {
    const router = useRouter();
	const events = getAllEvents();
	

    const handleNavigation = (year: string, month: string) => {
        router.push(`/events?year=${year}&month=${month}`)
    }

	useEffect(() => {
		console.log(router);
	}, []);


	return (
		<>
			<EventSearch handleNavigation={handleNavigation}/>
			<EventList events={events} />
		</>
	);
}
