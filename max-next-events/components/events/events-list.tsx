import EventItem from "./event-item";
import styles from './events-list.module.scss';


export default function EventsList(props: any) {
    const { events } = props;
    return (
        <ul className={styles.list}>
        {events.map((event: any) => (<EventItem key={event.id} {...event} />))}
        </ul>
    );
}