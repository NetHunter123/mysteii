import React from 'react';
import styles from './contact_me.module.css';

const ContactMe = () => {
	return (
		<section className={`${styles.contact_me} section-c`}>
			<h2 className={`filled ${styles.contact_me__title}`}>
				СВЯЖИСЬ СО МНОЙ ДЛЯ КОНСУЛЬТАЦИИ
			</h2>
			
			<p className={styles.contact_me__sub_title}>Получите <span>консультацию от меня.</span> Просто нажмите на кнопку
				WhatsApp.</p>
			
			<a href="#" className={styles.contact_me__btn}>WhatsApp</a>
		</section>
	);
};

export default ContactMe;
