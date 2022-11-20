import {combineReducers, createStore} from "redux";
import calcuationReducer from "./reducers/calcuation-reducer";
import StartPage from "../pages/StartPage";

const counter = document.getElementById('counter')

function render(){
     counter.textContent = state.toString();
}
let reducers = combineReducers({
    calcuationButtons: calcuationReducer,
});

const initialState = { tech: "React" };
let store = createStore(reducers, initialState);

function setTechnology (text) {
    return {
        type: "SET_TECHNOLOGY",
        text: text
    }
}

function dispatchBtnAction(e) {
    const tech = "help";
    store.dispatch(setTechnology(tech));
}

export default store;


// const counter = document.getElementById('counter')
// const addBtn = document.getElementById('add')
// const subBtn = document.getElementById('sub')
//
// let state = 0
//
// function render(){
//     counter.textContent = state.toString();
// }
//
// const setListener = (element, type, handler) => {
//     if (!element){
//         return;
//     }
//     element.addEventListener(type, handler);
//     return () => {
//         element.removeEventListener(type, handler);
//     };
// }
//
// setListener(addBtn, 'click', () => {
//     console.log('workdg');
//     state ++
//     render();
// });
//
// setListener(subBtn, 'click', () => {
//     state --
//     render();
// });