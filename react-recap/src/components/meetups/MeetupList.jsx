import React from 'react';
import MeetupItem from './MeetupItem';
import styles from './MeetupList.module.scss';

const MeetupList = ({ meetups }) => {
	return (
		<>
			{meetups.map((meetup) => (
				<ul key={meetup.id} className={styles.list}>
					<MeetupItem {...meetup} />
				</ul>
			))}
		</>
	);
};

export default MeetupList;
