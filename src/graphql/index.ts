import { ClientProps } from "@/types";
import { gql, request } from "graphql-request";
import axios from 'axios';

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;

export const getAbout = async () => {
    const query = gql`
        query About {
            aboutsConnection {
                edges {
                    cursor
                    node {
                        id
                        publishedAt
                        description
                    }
                }
            }
        }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.aboutsConnection.edges;
};

export const getProjects = async () => {
    const query = gql`
        query Projects {
            projectsConnection{
                edges {
                    cursor
                    node {
                        id
                        title
                        view
                        github
                        stack
                        createdAt
                        publishedAt
                        description
                        
                    }
                }
            }
        }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.projectsConnection.edges;
};

export const getTags = async () => {
    const query = gql`
        query Categories {
            categoriesConnection {
                edges {
                    cursor
                    node {
                        id
                        name
                        description
                    }
                }
            }
        }
    `;

    const result: any = await request(graphqlAPI, query);
    return result.categoriesConnection.edges;
};



export const getClient = async (object: ClientProps) => {
    const result = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    });
    console.log("result:", result, result.json());

    return result;
    // const result = await axios.post('/api/contact', object);

    // return result;
};
