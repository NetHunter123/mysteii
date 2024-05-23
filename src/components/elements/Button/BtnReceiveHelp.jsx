import React from 'react';
import styles from './button.module.css';
import {Button} from "@mantine/core";

const BtnReceiveHelp = ({children}) => {
	return (
		<a href="#" className={` ${styles.btn}`}>Получить помощь</a>
	);
};

export default BtnReceiveHelp;
