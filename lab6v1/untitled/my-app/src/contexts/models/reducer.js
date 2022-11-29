export const initialState = {
    models:[]
};

export function reducer(state, action) {
    switch (action.type) {
        case 'GET_DATA':
            return {
                models: action.payload
            }
        default:
            return state
    }
}