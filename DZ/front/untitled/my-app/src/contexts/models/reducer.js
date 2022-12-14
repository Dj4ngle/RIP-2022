export const initialState = {
    models:[],
    cart:[],
    purchases:[],
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
        case 'GET_PURCHASES':
            return {
                purchases: action.payload
            }
        case 'GET_PURCHASE':
            return {
                purchases: action.payload
            }
        default:
            return state
    }
}