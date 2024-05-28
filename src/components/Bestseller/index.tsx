import { View, Text } from "@tarojs/components"
import { Row, Col, Cell, Image, Price } from "@nutui/nutui-react-taro"
import { ArrowRight } from '@nutui/icons-react-taro'

const ProductCard = () => {
    return (
        <View>
            <Image src=""></Image>
            <View>Title</View>
            <View>
                <Text>规格:</Text>
                <Text>2000* 2000 </Text>
            </View>
            <View>
                <Text>厂家:</Text>
                <Text>xxxxxx</Text>
            </View>
            <View>
                <Text>专销价:</Text>
                <Price price={0} size="normal" thousands />
                <Price price={1513.88} thousands line />
            </View>
        </View>
    )
}

export const Bestseller = () => {
    const onJumpclick = (event, url) => {
        //
    }

    return (
        <View>
            <Cell
                className="nutui-cell-clickable"
                title="URL 跳转"
                extra={
                    <>
                        <span style={{ marginRight: '5px' }}>更多</span>
                        <ArrowRight />
                    </>
                }
                align="center"
                onClick={(
                    event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
                ) => {
                    onJumpclick(event, '/pages/index/index')
                }}
            />
            <Row gutter={24}>
                <Col span={12}>
                    <ProductCard></ProductCard>
                </Col>
                <Col span={12}>
                    <ProductCard></ProductCard>
                </Col>
            </Row>
        </View>
    )
}