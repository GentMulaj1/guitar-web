import { gql, useQuery } from "@apollo/client";

const GET_FINDUNIQUEMODEL = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      description
      price
      image
      musicians {
        name
        musicianImage
      }
      specs {
        bodyWood
        neckWood
        fingerboardWood
        tuners
        pickups
        scaleLength
        bridge
      }
    }
  }
`;

export const useFindUniqueModel = (brandId, modelId) => {
  const skip = !brandId || !modelId;

  const { data, error, loading } = useQuery(GET_FINDUNIQUEMODEL, {
    variables: { brandId, modelId },
    skip,
  });

  return { data, error, loading };
};
