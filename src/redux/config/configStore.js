import { createStore } from "redux"
import { combineReducers } from "redux"
// import todos from "../modules/counter"

const rootReducer = combineReducers({
    todos
})
const store = createStore()

export default store