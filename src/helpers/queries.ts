import { DocumentNode, gql } from "@apollo/client";

const Queries: { [key: string]: DocumentNode } = {};

Queries.getGlobals = gql`
	query ($issuer: String!) {
		comments(first: 1, orderBy: createdAt_DESC) {
			createdAt
		}
		commentsConnection {
			aggregate {
				count
			}
		}
		authUser(where: { issuer: $issuer }) {
			pricingPlan
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
		project(where: {id: $id}) {
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
			}
		}
	}
`;

Queries.getProjects = gql`
	query {
		projects {
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

export default Queries;