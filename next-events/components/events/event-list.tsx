import EventItem from './event-item';
import styles from './event-list.module.css';
export default function EventsList({ events }) {
    return (
        <ul className={styles.list}>
        {events.map((event:any) => (
           <EventItem key={event.id} {...event} />
        ))}
        </ul>
    );
}