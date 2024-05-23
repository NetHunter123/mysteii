import React from 'react';
import Title from "@/components/elements/Title/Title";
import styles from "./contacts.module.css";
import {FaPhoneVolume, FaWhatsapp} from "react-icons/fa";

const Contacts = () => {
	return (
		<section className={`${styles.contacts} section-c`}>
			<div className="container-c">
				<Title title="Мои контакты"/>
				<p className={styles.contacts__decs}>Вы можете обращаться ко мне в любое время. Я всегда на связи. Звоните или
					пишите.</p>
				<a href="tel:992232444123" className={`filled ${styles.contacts__phone}`}><FaPhoneVolume/>
					+9 922 324-44-13</a>
				<a href="#" className={`${styles.contacts__wapp}`}><FaWhatsapp/>
					Написать в WhatsApp</a>
			</div>
		</section>
	);
};

export default Contacts;
