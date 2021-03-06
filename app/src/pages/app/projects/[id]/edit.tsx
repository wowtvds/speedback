import Head from 'next/head';
import { useQuery } from '@apollo/client';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import { Heading, NewProjectForm } from '../../../../components';
import { AppLayout } from '../../../../layouts';
import { ApolloClient, Queries } from '../../../../helpers';

const AppEditProject: NextPage = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { data } = useQuery(Queries.getProject, {
		variables: { id }
	});

	const formData = data ? {
		name: data.project.name,
		url: data.project.url,
		description: data.project.description,
	} : {};

	return (
		<AppLayout>
			<Head>
				<title>Edit project - speedback</title>
			</Head>

			<main>
				<Heading title="Edit project" backLink={{ url: `/app/projects/${data?.project.id}`, label: "Back to project" }} />

				<section className="2xl:container container-spacing section-spacing">
					<NewProjectForm className="max-w-xl" data={formData} id={data?.project.id as string} />
				</section>
			</main>
		</AppLayout>
	)
}

export const getStaticPaths = async () => {
	const { data: { projects } } = await ApolloClient.query({
		query: Queries.getAllProjects,
	});

	const paths = projects.map((project: any) => ({
		params: { id: project.id },
	}));

	return {
		paths,
		fallback: 'blocking'
	};
}

export const getStaticProps: GetStaticProps = ({ params }) => {
	return {
		props: {
			id: params?.id,
		},
	}
}

export default AppEditProject;
