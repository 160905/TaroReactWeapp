import { ConfigProvider, SearchBar, Row, Col } from "@nutui/nutui-react-taro"
import { PageContainer, QuickAccess, HomeSwiper, AdvertisingSlot, Bestseller, BrandRecommendation, ShopPreference } from '@/components'
import { Message } from '@nutui/icons-react-taro'
import { HomeSearchBarConfig } from '@/config'
import './index.less'

function Index() {

  // home onSearch
  const onSearch = () => {
    //
  }

  return (
    <PageContainer navCustom className="home-page">

      <ConfigProvider theme={HomeSearchBarConfig}>
        <Row type="flex" gutter="10" align="center">
          <Col span="22">
            <SearchBar shape="round" onSearch={onSearch} />
          </Col>
          <Col span="2">
            <Message color="white" />
          </Col>
        </Row>
      </ConfigProvider>

      <HomeSwiper></HomeSwiper>

      <QuickAccess></QuickAccess>

      <AdvertisingSlot></AdvertisingSlot>

      <Bestseller></Bestseller>

      <BrandRecommendation></BrandRecommendation>

      <ShopPreference></ShopPreference>

    </PageContainer>
  )
}

export default Index
