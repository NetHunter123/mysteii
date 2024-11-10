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
					пишите. Обращайтесь в любое время (ОБЩАЮСЬ ТОЛЬКО В ВОТСАП)	</p>
				<a href="https://wa.me/77002195257" className={`filled ${styles.contacts__phone}`}><FaPhoneVolume/>
					+7-700-219-5257 <sub style={{fontSize: "70%"}}>(whatsapp)</sub></a>
				<a href="https://wa.me/77002195257" className={`${styles.contacts__wapp}`}><FaWhatsapp/>
					Звоните или пишите мне в ВОТСАП</a>
			</div>
		</section>
	);
};

export default Contacts;
