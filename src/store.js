import {compose, applyMiddleware, createStore} from "redux"

//saga意指一长串事件
import createSagaMiddleware from 'redux-saga'

import {persistStore, autoRehydrate} from 'redux-persist'

import reducers from "./reducers/index"

//react-router-redux用于保持路由与应用状态（state）同步，它加强了React Router库中history这个实例，以允许将history中接受到的变化反应到stae中去。
import { routerMiddleware } from 'react-router-redux'

//引入创建好的browserHistory
import history from "./history"

// import rootSaga from './sagas'

// Build the middleware for intercepting and dispatching navigation actions
// 生成拦截和分发导航actions的中间件
const routeMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(
  sagaMiddleware,
  routeMiddleware,
)

const store = createStore(reducers, undefined, compose(middleware, autoRehydrate())) 
//注意autoRehydrate是一个enhancer to your store (而不是一个middleware)
//persistStore(store, [config, callback])
/**
createStore允许传入三个参数
第一个参数：store —— 待持久化的redux store
第二个参数：config —— 是一个对象，可包含如下属性：
blacklist：不要持久化的keys，是个数组
whitelist：需要持久化的keys，是个数组，如果传了的话，将会忽略掉其它所有未传的值
storage：存储引擎，可选值见这里 https://github.com/rt2zz/redux-persist#storage-engines
transforms：是个数组，表示transforms to be applied during storage and during rehydration.
debounce：int, debounce interval applied to storage calls (in miliseconds).
keyPrefix: 持久化之后的key的前缀 (默认是reduxPersist:)
 */

// sagaMiddleware.run(rootSaga)

//开始周期性地持久化保存store
persistStore(store, {
  blacklist: [
    'connection',
    'exchangeForm',
    'paymentForm',
    'joinPaymentForm',
    'createKeyStore',
    'importKeystore',
    'utils',
  ] //blacklist中这些将不持久化
})

export default store
