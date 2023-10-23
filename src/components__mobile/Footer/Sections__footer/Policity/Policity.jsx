import React from 'react';
import styles from './Policity.module.css'

export const Policity = () => {
	return (  
		<div className={styles.policity}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<a href='https://dadi.wine/terms_and_conditions_en'> TERMS AND CONDITIONS </a>
					</li>
					<li className={styles.item}>
						<a href='# '> PRIVACY POLICY </a>
					</li>
					<li className={styles.item}>
						<a href='# '> DELIVERY AND RETURN POLICY </a>
					</li>
				</ul>

				<p className={styles.rights}>© All rights reserved DADI wine bar and shop, 2018 - 2023</p>
			</div>
	);
}

// TODO вставить рабочие ссылки
// ! сверстать отдельные страницы для информации или сделать moдалки