import { useState, useEffect } from 'react'
import { View, Swiper, SwiperItem, Image, Navigator, Text } from '@tarojs/components'
import { Button, Tabs, ConfigProvider, SearchBar, Toast, Cell, Row, Col } from "@nutui/nutui-react-taro"
import { PageContainer } from '@/components'
import { ArrowRight, User, Message } from '@nutui/icons-react-taro'
import { HomeSearchBarConfig } from '@/config'
import './index.less'

const TopSwiper = () => {
  const [items, setItems] = useState<{ url: string, imageSrc: string }[]>([])
  const [data, setData] = useState<{ title: string, copyright: string, url: string }>()

  useEffect(() => {
  }, [])

  return (
    <>
      <Swiper
        className='test-h'
        // indicatorColor='#999'
        // indicatorActiveColor='#333'
        vertical={false}
        circular
        indicatorDots
        autoplay
      >
        {
          items.map((item, index) => (
            <SwiperItem key={index}>
              <Navigator url={`${item.url}?index=${index}`}>
                <Image src={item.imageSrc} mode="scaleToFill"></Image>
              </Navigator>
            </SwiperItem>
          ))
        }
      </Swiper>
      {data && (
        <View>
          <Text>{data.title}</Text>
          <View>{data.copyright}</View>
          <Image src={data.url}></Image>
        </View>
      )}
    </>
  )
}

function Index() {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [show, SetShow] = useState(false)
  const toastShow = () => {
    SetShow(true)
  }

  return (
    <PageContainer navCustom className="home-page">
      <ConfigProvider theme={HomeSearchBarConfig}>
        <Row type="flex" gutter="10" align="center">
          <Col span="22">
            <SearchBar shape="round" onSearch={() => toastShow()} />
          </Col>
          <Col span="2">
            <Message color="white" />
          </Col>
        </Row>
      </ConfigProvider>
      <TopSwiper></TopSwiper>
      <Tabs
        duration={0} // 不需要动画
        value={tab1value}
        onChange={(value) => {
          setTab1value(value)
        }}
      >
        <Tabs.TabPane title="厂家">
          <View className="index">
            <Button type="primary" className="btn">
              NutUI React Button
            </Button>
          </View>
        </Tabs.TabPane>
        <Tabs.TabPane title="经销商"> 经销商 </Tabs.TabPane>
        <Tabs.TabPane title="其它"> 其它 </Tabs.TabPane>
        <Tabs.TabPane title="团购"> 团购 </Tabs.TabPane>
      </Tabs>
      <Cell
        title="链接"
        align="center"
        extra={<ArrowRight />}
      />
      https://juejin.cn/post/6990660075207524366
      <Toast
        type="text"
        visible={show}
        content="search callback"
        onClose={() => {
          SetShow(false)
        }}
      />
    </PageContainer>
  )
}

export default Index
