const ADDITION = 'ADDITION';
const SUBSTRACTION = 'SUBSTRACTION';


const calcuationReducer = (state = 0, action) => {
    switch (action.type) {
        case ADDITION:
            console.log('workdg');
            state++
            //counter.textContent = state.toString();
            return action;
        case SUBSTRACTION:
            console.log('workdg');
            state--
            //counter.textContent = state.toString();
            return action;
        default:
                console.log(action);
                return state;
    }
}