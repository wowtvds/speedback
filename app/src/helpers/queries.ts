import { DocumentNode, gql } from "@apollo/client";

const Queries: { [key: string]: DocumentNode } = {};

Queries.getLandingPage = gql`
	query {
		landingPage(where: { id: "cku9ux4uoe39q0c10qw2549nj" }) {
			heroTitle
			heroDescription
			heroVisual {
				url
				width
				height
			}
			featuresEyebrow
			featuresTitle
			featuresDescription
			features {
				id
				title
				description
				icon
			}
			forWhomEyebrow
			forWhomTitle
			forWhomDescription
			targetAudiences {
				id
				title
				description
				visual {
					url
					width
					height
				}
				usps {
					id
					title
					description
				}
			}
			pricing {
				eyebrow
				title
				description
				monthlyCost
				yearlyCost
			}
		}

		global(where: { id: "ckuefco8wf1950b076fop8ulj" }) {
			footerDescription
			footerVisual {
				url
				width
				height
			}
		}
	}
`;

Queries.getContentPage = gql`
	query ($id: ID!) {
		contentPage(where: { id: $id }) {
			eyebrow
			title
			content {
				html
			}
		}

		global(where: { id: "ckuefco8wf1950b076fop8ulj" }) {
			footerDescription
			footerVisual {
				url
				width
				height
			}
		}
	}
`;

Queries.getGlobals = gql`
	query ($projectId: String!) {
		comments(
			first: 1
			where: { project: { id: $projectId }}
			orderBy: createdAt_DESC
		) {
			createdAt
		}
		commentsConnection(where: { project: { id: $projectId }}) {
			aggregate {
				count
			}
		}
		}
`;

Queries.getUser = gql`
	query ($issuer: String!) {
		authUser(where: {issuer: $issuer}) {
			id
			email
			pricingPlan
		}
	}
`;

Queries.getProject = gql`
	query ($id: ID!) {
		project(
			where: {
				id: $id
			}
		) {
			id
			name
			url
			description
			createdByAuthUser {
				email
			}
			authUser {
				issuer
				email
			}
			comments {
				id
				text
				pathname
				resolved
				metaInfo
				createdAt
			}
		}
	}
`;

Queries.getAllProjects = gql`
	query {
		projects {
			id
		}
	}
`;

Queries.getProjects = gql`
	query ($issuer: String)  {
		projects(
			where: {
				authUser_every: { issuer: $issuer }
			}
		) {
			id
			name
			url
			description
			comments {
				id
			}
		}
	}
`;

Queries.getComments = gql`
	query {
		comments(
			orderBy: createdAt_ASC
		) {
			id
			project {
				id
			}
		}
	}
`;

Queries.getComment = gql`
	query ($id: ID!) {
		comment(
			where: { id: $id },
		) {
			id
			text
			resolved
			metaInfo
			elementSelector
		}
	}
`;

Queries.getCommentsByProject = gql`
	query ($projectId: ID!, $pathname: String) {
		comments(
			where: { project: { id: $projectId }, pathname: $pathname },
			orderBy: createdAt_ASC
		) {
			id
			text
			resolved
			metaInfo
			elementSelector
		}
	}
`;

export default Queries;