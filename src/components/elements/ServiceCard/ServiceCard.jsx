import React from 'react';
import styles from './service_сard.module.css';
import BtnReceiveHelp from "@/components/elements/Button/BtnReceiveHelp";

const ServiceCard = ({img, title, option}) => {
	return (
		<div className={styles.service}>
			<img className={styles.service__img} src={`${img}`} alt={title}/>
			<h3 className={`filled ${styles.service__title}`}>{title}</h3>
			<ul className={styles.service__options}>
				{option.map((option) => {
					return <li key={option}>- {option}</li>;
				})}
			</ul>
			<div className={styles.service__btn}>
				<BtnReceiveHelp/>
			</div>
		</div>
	);
};

export default ServiceCard;
