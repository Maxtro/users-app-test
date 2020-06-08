import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import reducer from './reducer'
import { watchLoadUsers } from './sagas'

let rootReduser = combineReducers({ 
    reducer,
    form: formReducer
})
const sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchLoadUsers)

export default store