
const productsReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_PRODUCTS':
            return action.productsFixture.data.products.items;
        default:
            return state;
    };
};

export { productsReducer as default };
