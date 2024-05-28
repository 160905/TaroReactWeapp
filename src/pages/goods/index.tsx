import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { PageContainer } from '@/components'
import './index.less'

function Index() {
  return (
    <PageContainer className="nutui-react-demo">
      <View className="index">
        欢迎使用 NutUI React 开发 Taro 多端项目。
      </View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>
    </PageContainer>
  )
}

export default Index
