import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

import MainHeaderBackground from './MainHeaderBackground';
import NavLink from './nav-link';

import styles from './MainNav.module.scss';

export default function MainNav() {
	return (
		<>
			<MainHeaderBackground />
			<header className={styles.header}>
				<Link href='/' className={styles.logo}>
					<Image src={Logo} alt='NextLevel Food' priority />
					NextLevel Food
				</Link>
				<nav className={styles.nav}>
					<ul>
						<NavLink href='/meals'>Browse Meals</NavLink>
						<NavLink href='/community'>Foodies Community</NavLink>
					</ul>
				</nav>
			</header>
		</>
	);
}
