import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middlewares = [thunk]

process.env.NODE_ENV === 'development' && middlewares.push(logger)

console.log(middlewares)

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)