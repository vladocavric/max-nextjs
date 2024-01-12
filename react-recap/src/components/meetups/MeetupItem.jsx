import React from 'react';
import styles from './MeetupItem.module.scss';
import Card from '../ui/Card';

const MeetupItem = ({ title, image, address, description, id }) => {
	return (
		<Card>
			<li className={styles.item}>
				<div className={styles.image}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={styles.actions}>
					<button>To Favorites</button>
				</div>
			</li>
		</Card>
	);
};

export default MeetupItem;
