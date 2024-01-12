import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			<main className={styles.main}>{children}</main>
		</>
	);
};

export default Layout;
