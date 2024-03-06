import EventsList from "@/components/events/events-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/data/dummy-data";
import { useRouter } from "next/router";

export default function EventsListPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year:number, month:number) { 
        router.push(`/events/${year}/${month}`);
    }
    return (
        <div>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventsList events={events} />
        <p>Here are all the events!</p>
        </div>
    );
}