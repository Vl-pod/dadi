import React from 'react';
import styles from './Footer.module.css';

import { OpeningHours } from './Sections__footer/OpeningHours/OpeningHours';
import { Partners } from './Sections__footer/Partners/Partners';
import { Social } from './Sections__footer/Social/Social';
import { Location } from './Sections__footer/Location/Location';
import { Policity } from './Sections__footer/Policity/Policity';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.back__logo}></div>
			<OpeningHours />
			<Social />
			<Partners />
			<Location />
			<Policity />
		</footer>
	);
}
