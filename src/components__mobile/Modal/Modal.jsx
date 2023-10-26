import React from 'react';
import styles from './Modal.module.css';
import { ReactComponent as IconClose } from '../../images/svg/icon-close.svg';


export const Modal = () => {
	return (
		<>
			<div className={styles.modal}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<button className={styles.close__button}>
							<IconClose />
						</button>
					</div>
				</div>
			</div>
		</>
	);
}