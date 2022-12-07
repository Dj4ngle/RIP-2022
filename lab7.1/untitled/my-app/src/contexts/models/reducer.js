export const initialState = {
    models:[],
    cart:[],
};

export function reducer(state, action) {
    switch (action.type) {
        case 'GET_DATA':
            return {
                models: action.payload
            }
        case 'GET_MODEL':
            return {
                models: action.payload
            }
        case 'GET_CART':
            return {
                cart: action.payload
            }
        default:
            return state
    }
}