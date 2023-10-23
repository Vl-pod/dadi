import React from 'react';
import styles from './Header.module.css'
import Logo from './../../images/img/logo.png'

export const Header = () => {
	return(
		<header className={styles.header}>
			<div className={styles.logo}>
				<img className={styles.logo__img} src={Logo} alt='Logo'></img>
				<span>wine bar and shop</span>
			</div>
		</header>
	)
}

