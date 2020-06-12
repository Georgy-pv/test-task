import { createStore, combineReducers } from "redux";
import gameDataReducer from "./game-reducer";



let reducersPatch = combineReducers({
    gameData: gameDataReducer
});

let store = createStore(reducersPatch);

window.store = store;


export default store

