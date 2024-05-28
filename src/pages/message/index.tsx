import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { PageContainer } from '@/components'
import { useDispatch } from '@/store'
import './index.less'
import Taro from '@tarojs/taro'

function Index() {
  const dispatch = useDispatch()

  const handleNotice = () => {
    dispatch({ type: 'saveNoticeBar', payload: 'NutUI-React 是京东风格的 React 移动端组件库，开发和服务于移动 Web 界面的企业级产品。' })
  }

  const handleToastLoading = () => {
    Taro.showLoading({ title: 'loading' })
  }

  return (
    <PageContainer className="nutui-react-demo">

      <View className="index">
        <Button type="primary" className="btn" onClick={handleNotice}>
          Global Notice
        </Button>
        <Button type="primary" className="btn" onClick={handleToastLoading}>
          Toast loading
        </Button>
      </View>
    </PageContainer>
  )
}

export default Index
