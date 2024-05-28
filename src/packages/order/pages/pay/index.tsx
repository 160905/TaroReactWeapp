import { View, Text } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import styles from './index.module.less'
import { PageContainer } from '@/components'
import { useDidShow, useDidHide, useLoad } from '@tarojs/taro'
import { useState } from 'react'

function Index() {
  const [loading, setLoading] = useState<boolean>()

  useLoad((params) => {
    console.debug('order load', params)
  })

  useDidShow(() => {
    console.debug('order show')
  })

  // 对应 onHide
  useDidHide(() => {
    console.debug('order hide')
  })

  return (
    <PageContainer loading={loading}>
      <Button type="primary">Order package</Button>
      <Text>Welcome</Text>

      <View className={styles.width}></View>

      <Button type="primary" onClick={() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 5000)
      }}>Show loading</Button>
    </PageContainer>
  )
}

export default Index
