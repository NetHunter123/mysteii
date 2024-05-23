import React from 'react';
import styles from './title.module.css';
const Title = ({title}) => {
	return (
		<h2 className={`filled ${styles.title}`}>
			{title}
		</h2>
	);
};

export default Title;
