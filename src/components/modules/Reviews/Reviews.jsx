import React from 'react';
import styles from './reviews.module.css';
import SimpleCarousel from "@/components/elements/Carousel/SimpleCarousel";
import Title from "@/components/elements/Title/Title";
import BtnReceiveHelp from "@/components/elements/Button/BtnReceiveHelp";


const Reviews = () => {
	const options = {loop: true}
	const autoplayOptions = {delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true}
	
	const reviews = [{
		img: "./r1.png",
		name: "Лиза",
		text: "С дорогой моей Андреем мы знакомы уже тысячу лет. Это мой духовный наставник, моя помощница, целительница и просто очень важный человек в моей жизни! Столько раз выручала меня, спасала от бед, уберегала от неверных шагов. Долгих лет здоровья вам, и спасибо за то, что делаете!"
	}, {
		img: "./r2.png",
		name: "Владислав",
		text: "Андрей, Вы оказывается были правы. Прошло 4 месяца и все сбылось как Вы и предсказывали. Вы так мягко давали свои советы относительно моей ситуации, что я не счел нужным им последовать. Быть хозяином своей жизни не так легко как кажется многим. Но я удивлен. И буду к Вам обращаться. Спасибо, и еще раз спасибо!!"
	}, {
		img: "./r3.png",
		name: "Айгерим",
		text: "Мне крайне было приятно с вами познакомиться! Вы просто мастер своего дела. Какой тонкий красивый подход к ситуации, а ведь таких как я у Вас много. Вы просто умница, хочется Вас крепко обнять!",
	}, {
		img: "./r4.png",
		name: "Дарья",
		text: "Хочу выразить благодарность Андрею, направила меня в нужное направление в моей семейной жизни. Словами не описать весь восторг, спасибо огромное за понимание и за оказанную помощь."
	}]
	
	return (
		<section className={`${styles.reviews} section-c`}>
			<Title title="Отзывы"/>
			<div className={styles.reviews__wrap}>
				<SimpleCarousel>
					
					{reviews.map(review => {
						return (
							<div className={styles.reviews__slide}>
								<img className={styles.reviews__img} src={`${review.img}`} alt={review.name}/>
								<h3 className={`filled ${styles.reviews__name}`}>{review.name}</h3>
								<p className={styles.reviews__text}>{review.text}</p>
							</div>
						)
					})}
				</SimpleCarousel>
			</div>
			
			<BtnReceiveHelp/>
			
		</section>
	);
};

export default Reviews;
