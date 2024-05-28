import { View } from "@tarojs/components"
import { ArrowRight } from '@nutui/icons-react-taro'
import { Row, Col, Image, Cell } from '@nutui/nutui-react-taro'

export const BrandRecommendation = () => {

    const onJumpclick = (event, url) => {
        //
    }

    return (
        <View>
            <Cell
                className="nutui-cell-clickable"
                title="品牌推荐"
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
                <Col span={8}>
                    <View>
                        <Image></Image>
                    </View>
                </Col>
                <Col span={8}>
                    <View>
                        <Image></Image>
                    </View>
                </Col>
                <Col span={8}>
                    <View>
                        <Image></Image>
                    </View>
                </Col>
            </Row>
        </View>
    )
}