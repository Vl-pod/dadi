import React from 'react';
import styles from './Social.module.css'

export const Social = () => {
	return (
		<section className={styles.social}>
		<ul className={styles.list}>
			<li className={` ${styles.instagramm}`}>
				<a href="https://www.instagram.com/dadiwinebar/"> 
				
				</a>
			</li>
			<li className={`${styles.list_item} ${styles.facebook}`}>
				<a href="ссылка на фейсбук">

				</a>
			</li>
			<li className={`${styles.list_item} ${styles.telegram}`}>
				<a href="ссылка на телеграм">
					
				</a>
			</li>
			<li className={`${styles.list_item} ${styles.whatsup}`}>
				<a href="ссылка на ватсап">
	
				</a>
			</li>
			<li className={`${styles.list_item} ${styles.mail}`}>
				<a href="ссылка на почту">
	
				</a>
			</li>
		</ul>
		</section>
	);
}

// TODO разобраться с подключением 2х классов
// TODO вставить рабочие ссылки и сделать изображения ссылками