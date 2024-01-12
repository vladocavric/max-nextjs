import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

import React from 'react';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>React meetups</div>
            <nav >
                <ul>
                    <li>
                        <NavLink end to='/'>All Meetups </NavLink>
                    </li>
                    <li>
                        <NavLink to='/meetups/new'>Add New Meetup </NavLink>
                    </li>
                    <li>
                        <NavLink to='/meetups/favorites'>Favorite Meetups</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
