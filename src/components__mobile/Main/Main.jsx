import React from 'react';
import styles from './Main.module.css';

import Events from './Buttons/Events/Events';
import Wines from './Buttons/Wines/Wines';
import Food from './Buttons/Food/Food';
import Shop from './Buttons/Shop/Shop';


export const Main = () => {
	return(
		<main className={styles.container}>
			<Events />
			<Wines />
			<Food />
			<Shop />
		</main>
	)
}
