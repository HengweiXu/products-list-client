import { handleActions } from 'redux-actions'

const initialState = {
    products: [],
    total: 0
}

export default handleActions(
    {
        GET_PRODUCTS: (state, { payload }) => ({
            ...state,
            products: payload.data.products,
            total: payload.data.total
        }),
    },
    initialState
)
