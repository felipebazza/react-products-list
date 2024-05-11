import { gql } from "@apollo/client";

const GET_PRODUCTS = gql`
    query {
        products(search: "suppressor") {
            items {
                id
                name
                sku
                image {
                    url
                }
                price {
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`;

export { GET_PRODUCTS as default };