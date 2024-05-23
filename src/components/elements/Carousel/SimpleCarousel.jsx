import React from "react";
import Slider from "react-slick";
import {useMediaQuery} from "@mantine/hooks";

export default function SimpleCarousel({children}) {
	// const is800 = useMediaQuery("(max-width: 800px)");
	
	
	var settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:false,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	};
	return (
		<Slider {...settings}>
			{children}
		</Slider>
	);
}
