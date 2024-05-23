import React from 'react';
import styles from './about.module.css';
import Title from "@/components/elements/Title/Title";

const About = () => {
	return (
		<section className={`${styles.about} section-c`}>
			<div className="container-c">
				<Title title="Обо мне"/>
				
				<p className={styles.about__desc}>Здравствуйте! Меня зовут Светлана. Являюсь опытным тарологом, потомственной гадалкой и ясновидящей. Если в
					Вашей судьбе пошло что-то не так как Вы хотите - самое время начать над ней работать! Приложу все силы, дабы
					помочь Вам в решении запутанных, сложных жизненных ситуаций. Привнесу свет, добро, мир, порядок в Ваш дом и
					семью. Наша жизнь полна самых различных событий и не каждое из них может радовать нас. Большой опыт дает мне
					возможность помогать людям с разными ситуациями. Часто обращаются с любовными вопросами, желанием избавится от
					соперников и любовниц, а также наладить отношения в семье. Помните, что не бывает абсолютно безвыходных
					ситуаций, даже если Вы потеряли веру в себя, Бога и Вселенную, нельзя опускать руки, нужно сделать все для
					того,
					чтобы изменить свою жизнь к лучшему, и бороться за свое личное счастье. Принимаю лично и дистанционно по всему
					Казахстану.
					<br/>
					<br/>
					<br/>
					* Результат может отличаться в каждом индивидуальном (отдельном) случае</p>
			</div>
		</section>
	);
};

export default About;