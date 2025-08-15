import { gql, useQuery } from "@apollo/client";


const GET_UNIQUEBRAND = gql`
    query GetUniqueBrand($id: ID!) {
        findUniqueBrand(id: $id) {
            id
            name
            models {
                id
                name
                image
                price
                type
            }
        }
    }
`

export const useFindUniqueBrand = (id) => {
    const { data, error, loading } = useQuery(GET_UNIQUEBRAND, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading
    }
}