import React from 'react'
import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { PageContainer, Authorize } from '@/components'
import { AppContext } from '@/store'
import Taro from '@tarojs/taro'
import './index.less'
import type { IAppContextType } from '@/interface'

@Authorize()
class Index extends React.Component<{}, IAppContextType> {
  static contextType = AppContext

  render() {
    return (
      <PageContainer className="nutui-react-demo">
        <View className="index">
          欢迎使用 NutUI React 开发 Taro 多端项目。
        </View>
        <View className="index">
          <Button type="primary" className="btn" onClick={() => {
            Taro.navigateTo({
              url: '/packages/order/pages/pay/index?autoLoad=1'
            })
          }}>
            Go order page
          </Button>
        </View>
      </PageContainer>
    )
  }
}

export default Index
