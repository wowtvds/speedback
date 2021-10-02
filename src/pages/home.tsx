import Head from 'next/head';
import type { NextPage } from "next";

import { MarketingLayout } from '../layouts';
import { Cta, Features, Hero } from '../components';

const Home: NextPage = () => {
	return (
		<MarketingLayout>
			<Head>
				<title>Welcome @ speedback</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero />
				<Features eyebrow="features" title="De titel" />
				<Cta title="Title of the cta" subtitle="subtitle for the cta" />
			</main>
		</MarketingLayout>
	)
}

export default Home;
