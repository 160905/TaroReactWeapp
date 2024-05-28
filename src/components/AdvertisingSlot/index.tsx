import { Row, Col, Space } from "@nutui/nutui-react-taro"

export const AdvertisingSlot = () => {
    return (
        <Space direction="vertical">
            <Row gutter={24} wrap="nowrap">
                <Col span="12">
                    <div className="layout-flex-content">span:12</div>
                </Col>
                <Col span="12">
                    <div className="layout-flex-content">span:6</div>
                </Col>
            </Row>
            <Row wrap="nowrap">
                <Col span="24">
                    <div className="layout-flex-content">span:12</div>
                </Col>
            </Row>
        </Space>
    )
}