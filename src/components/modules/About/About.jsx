import React from 'react';
import styles from './about.module.css';
import Title from "@/components/elements/Title/Title";

const About = () => {
	return (
		<section className={`${styles.about} section-c`}>
			<div className="container-c">
				<Title title="Обо мне"/>
				
				<p className={styles.about__desc}>Здравствуйте! Меня зовут Андрей. Я опытный таролог, потомственный гадалка и ясновидящий. Если в вашей жизни что-то пошло не так, как вы хотели, настал момент, чтобы начать работать над своей судьбой! Я готов вложить все свои силы в решение самых сложных и запутанных ситуаций, которые вас тревожат. Помогу привнести свет, добро и порядок в ваш дом и семью.

					Жизнь полна разных событий, и не все из них радуют. Но с многолетним опытом я могу предложить помощь в самых разных вопросах. Очень часто ко мне обращаются с любовными проблемами, желанием избавиться от соперников и любовниц, а также с просьбами наладить отношения в семье.

					Помните, нет абсолютно безвыходных ситуаций, даже если вы потеряли веру в себя и окружающий мир. Нужно бороться за свое счастье, и я помогу вам поверить в себя и в лучшее будущее. Принимаю консультации лично и дистанционно по всему Казахстану.
					</p>
			</div>
		</section>
	);
};

export default About;
