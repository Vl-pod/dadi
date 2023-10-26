import React from 'react';
import styles from './Social.module.css'

export const Social = () => {
	return (
		<section className={styles.social}>
			<ul className={styles.list}>
				<li className={styles.list__item}>
					<a href="https://www.instagram.com/dadiwinebar/" className={`${styles.link} ${styles.instagram}`}> 
						<span className={styles.hidden}>instagram</span>
						<span className={styles.text__under}>instagram</span>
					</a>
				</li>
				<li className={styles.list__item}>
					<a href="https://www.facebook.com/dadiwinebar" className={`${styles.link} ${styles.facebook}`}> 
						<span className={styles.hidden}>facebook</span>
						<span className={styles.text__under}>facebook</span>
					</a>
				</li>
				<li className={styles.list__item}>
					<a href="https://t.me/Dadivinebar" className={`${styles.link} ${styles.telegram}`}> 
						<span className={styles.hidden}>telegram</span>
						<span className={styles.text__under}>telegram</span>
					</a>
				</li>
				<li className={styles.list__item}>
					<a href="#1" className={`${styles.link} ${styles.whatsup}`}> 
						<span className={styles.hidden}>whatsup</span>
						<span className={styles.text__under}>whatsup</span>
					</a>
				</li>
				<li className={styles.list__item}>
					<a href="mailto:dadiwineshop@gmail.com" className={`${styles.link} ${styles.mail}`}> 
						<span className={styles.hidden}>mail</span>
						<span className={styles.text__under}>mail</span>
					</a>
				</li>
			</ul>
		</section>
	);
}

// TODO ссылку на ватсап
