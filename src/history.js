import createBrowserHistory from 'history/createBrowserHistory'

// Create a history of your choosing (we're using a browser history in this case)
// 创建一个history，我们这里import的是history模块下的createBrowserHistory，所以创建的是browser history
// 如果你想创建hashHistory的话，应该import history/createHashHistory
const history = createBrowserHistory()

export default history