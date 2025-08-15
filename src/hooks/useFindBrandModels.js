import { gql } from "@apollo/client"


const GET_FINDBRANDMODELS = gql`
query {
  findBrandModels(
    id: 1,
    sortBy: { field: name, order: ASC }
  ) {
    id
    name
    price
    image
  }
}


`

export const useFindBrandModels = (id) => {



}