import Link from 'next/link';
import style from './event-item.module.css';
import Button from '../button';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
export default function EventItem({
	title,
	image,
	date,
	location,
	id,
}: {
	title: string;
	image: string;
	date: string;
	location: string;
	id: string;
}) {
	return (
		<li className={style.item}>
			<img src={'/' + image} alt={title} />
			<div className={style.content}>
				<div>
					<h2>{title}</h2>
					<div className={style.date}>
                        <DateIcon />
						<time>{date}</time>
					</div>
					<div className={style.address}>
                        <AddressIcon />
						<address>{location}</address>
					</div>
				</div>
				<div className={style.actions}>
					<Button href={`events/${id}`}>
						Explore Event
						<span className={style.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}
