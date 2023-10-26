import React from 'react';
import styles from './OpeningHours.module.css'
import { ReactComponent as IconTelephone } from '../../../../images/svg/telephone-icon.svg';

export const OpeningHours = () => {
	return (
		<section className={styles.text__container}>
			<div>
				<p>Opening hours</p>
				<p>Daily</p>
				<p>10:00 AM – 01:00 AM</p>
			</div>
			<div>
				<p>Monday</p>
				<p>14:00 PM – 01:00 AM</p>
			</div>
			<span className={styles.telephone}>
				<IconTelephone />
				<a href='tel:+995 591049868' alt ='telephone' className={styles.number}>+995 591049868</a>
			</span>
			
		</section>
	);
}
