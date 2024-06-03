import React from 'react';
import styles from './button.module.css';
import {Button} from "@mantine/core";

const BtnReceiveHelp = ({children}) => {
	return (
		<a href="https://wa.me/77072291099" className={` ${styles.btn}`}>Получить помощь</a>
	);
};

export default BtnReceiveHelp;
