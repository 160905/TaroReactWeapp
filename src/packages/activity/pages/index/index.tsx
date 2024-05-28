import { Text } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import styles from './index.module.less'
import { PageContainer } from '@/components'
import { useDidShow, useDidHide, useLoad } from '@tarojs/taro'
import { request } from '@/utils'

function Index() {

  useLoad((params) => {
    console.debug('order load', params)
  })

  useDidShow(() => {
    request('https://api.xygeng.cn/openapi/one')
  })

  // 对应 onHide
  useDidHide(() => {
    console.debug('order hide')
  })

  return (
    <PageContainer className={styles.page}>
      <Button type="primary">Activity package</Button>
      <Text>Welcome activity page</Text>
    </PageContainer>
  )
}

export default Index
