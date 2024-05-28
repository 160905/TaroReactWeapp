import { View } from "@tarojs/components"
import { Row, Col, Cell, Image } from '@nutui/nutui-react-taro'

export const ShopPreference = () => {

    return (
        <View>
            <Cell
                className="nutui-cell-clickable"
                title="店铺优选"
                align="center"
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