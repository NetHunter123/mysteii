import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {ColorSchemeScript} from "@mantine/core";
import Hero from "@/components/modules/Hero/Hero";
import About from "@/components/modules/About/About";
import Services from "@/components/modules/Services/Services";
import ContactMe from "@/components/modules/ContactMe/ContactMe";
import Reviews from "@/components/modules/Reviews/Reviews";
import Contacts from "@/components/modules/Contacts/Contacts";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	return (
		<>
			<Head>
				<title>Анна Астахова</title>
				<meta name="description" content="Помогу с любым вопросом"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="icon" href="/favicon.ico"/>
				<ColorSchemeScript defaultColorScheme="dark"/>
			</Head>
			<main className={`${styles.main}`}>
				<Hero/>
				<div className="main_wrap">
					<About/>
					<Services/>
					<ContactMe/>
					<Reviews/>
					<Contacts/>
				</div>
			</main>
		</>
	);
}
