import React from 'react';
import styles from './Policity.module.css'

export const Policity = () => {
	return (  
		<section className={styles.policity}>
			<button className={styles.modal__show}>TERMS AND CONDITIONS </button>
			<button className={styles.modal__show}> PRIVACY POLICY </button>
			<button className={styles.modal__show}> DELIVERY AND RETURN POLICY </button>
			<p className={styles.rights}>© All rights reserved DADI wine bar and shop, 2018 - 2023</p>
		</section>
		
	);
}

// TODO вставить рабочие ссылки
// ! сверстать отдельные страницы для информации или сделать moдалки