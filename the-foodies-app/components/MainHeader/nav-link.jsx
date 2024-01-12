'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.scss';

export default function NavLink({ href, children }) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				href={href}
				className={
					pathname.startsWith(href)
						? `${styles.active} ${styles.link}`
						: styles.link
				}>
				{children}
			</Link>
		</li>
	);
}
