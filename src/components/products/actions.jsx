import ProductData from '../../productsData.json'

const ACTIONS = {
    GET_PRODUCTS: "GET_PRODUCTS"
}

export const getProducts = (page, count) => async dispatch => {
    try {
        //it's better to create a server app to request the API data
        //currently I use this function to simulate the restful API request
        const requestProductsData = (page, count) => {
            if (page <= 0 || count <= 0) {
                throw new Error('Invalid request');
            }

            const start = parseInt((page - 1) * count);
            const end = parseInt(page * count);

            return {
                products: ProductData.slice(start, end),
                total: ProductData.length
            };
        }

        const data = requestProductsData(page, count)

        dispatch({
            type: ACTIONS.GET_PRODUCTS, payload: { data }
        })
    } catch (error) {
        console.log(error)
    }
}
