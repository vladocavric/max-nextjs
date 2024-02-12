import Link from 'next/link';
import styles from './nav.module.css';
export default function Nav() {
	return (
		<nav className={styles.header}>
				<div className={styles.logo}>
					<Link className={styles.logo} href='/'>NextEvents</Link>
				</div>
			<ul className={styles.navigation}>
				<li>
					<Link className={styles.events} href='/events'>Browse All Events</Link>
				</li>
			</ul>
		</nav>
	);
}
