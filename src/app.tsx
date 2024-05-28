import { useReducer } from 'react'
import { useDidHide, useLaunch } from '@tarojs/taro'
import { AppContext, appReducer } from '@/store'
import { getCustomNavBarRect } from '@/utils'
// 全局样式
import './app.less'

function App(props) {

  const [state, dispatch] = useReducer(appReducer, {
    token: null
  });

  useLaunch(() => {
    getCustomNavBarRect()
    dispatch({ type: 'saveUserInfo', payload: { name: "zhagnsan", time: Date.now() } })
  })

  // 对应 onHide
  useDidHide(() => { })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default App
