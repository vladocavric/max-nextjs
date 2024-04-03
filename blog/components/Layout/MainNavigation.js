import Link from 'next/link';
import Logo from './Logo';
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
	return (
		<header className={styles.header}>
            <Logo />
			<ul>
				<li>
					<Link href='/contact'>contact</Link>
				</li>
				<li>
					<Link href='/blogs'>blogs</Link>
				</li>
				<li>
					<Link href='/blogs/nesto/edit'>edit single blog</Link>
				</li>
				<li>
					<Link href='/blogs/new'>create blog</Link>
				</li>
			</ul>
		</header>
	);
};

export default MainNavigation;
