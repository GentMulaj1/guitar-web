import { gql, useQuery } from "@apollo/client";


const GET_BRANDS = gql`
  query {
    findAllBrands {
      id
      name
      image
      categories
    }
  }
`;

export const useFindAllBrands = () => {
  const { error, data, loading } = useQuery(GET_BRANDS);

  return {
    error, 
    data,
    loading
  }
}