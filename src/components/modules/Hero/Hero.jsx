import React from 'react';
import styles from './hero.module.css';
import Logo from "@/components/modules/Logo/Logo";
import {FaPhoneVolume, FaWhatsapp} from "react-icons/fa";
import BtnReceiveHelp from "@/components/elements/Button/BtnReceiveHelp";

const Hero = () => {
	return (
		<section className={`${styles.hero} section-c`}>
			<div className="container-c">
				<div className={styles.hero__wrap}>
					<Logo/>
					<p className={`filled subtitle ${styles.hero__subtitle}`}>ПОТОМСТВЕННЫЙ ГАДАЛЬЩИК И ЭКСТРАСЕНС
					</p>
					<p className={styles.hero__desc}>В своей практике использую различные старинные и авторские обряды и ритуалы.
						Веду личный прием и онлайн.
						Работаю по всему Казахстану. Обращайтесь в любое время (ОБЩАЮСЬ ТОЛЬКО В ВОТСАП)</p>
					<div className={styles.hero__decor}></div>
					<a href="https://wa.me/77002195257" className={`filled ${styles.hero__phone}`}><FaPhoneVolume/>
						+7 700 219 5257 <sub style={{fontSize:"70%"}}>(whatsapp)</sub></a>
					<a href="https://wa.me/77002195257" className={`${styles.hero__wapp}`}><FaWhatsapp />
						Написать в WhatsApp</a>
					
					<div className={` ${styles.hero__btn}`}>
						<BtnReceiveHelp/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
