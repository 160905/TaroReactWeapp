import { View } from "@tarojs/components"
import { FaceAngry } from '@nutui/icons-react-taro'

export const QuickAccess = () => {
    const items = [
        { icon: <FaceAngry />, text: "今日新品", url: '' },
        { icon: <FaceAngry />, text: "VIP栏目", url: '' },
        { icon: <FaceAngry />, text: "热门店铺", url: '' },
        { icon: <FaceAngry />, text: "促销专区", url: '' },
    ]
    return (
        <View>
            {
                items.map(item => {
                    return (
                        <View key={item.text}>
                            {item.icon}
                            <View>{item.text}</View>
                        </View>
                    )
                })
            }
        </View>
    )
}