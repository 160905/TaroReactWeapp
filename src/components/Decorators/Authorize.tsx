import { ComponentClass } from "react"
import { LoginButton } from '../LoginButton'
import Taro from "@tarojs/taro"
import { EventName } from '@/constants'
import { Dialog } from '@nutui/nutui-react-taro'
import { View } from "@tarojs/components"

export function Authorize() {
    return function WithAuthorize<T extends ComponentClass>(Component: T) {
        console.debug('yi lan jie')

        // @ts-ignore
        return class extends Component {
            state = {
                dialogVisible: false
            }
            onLoginSuccess = () => {
                this.setState({ dialogVisible: false })
                super.componentDidMount?.();
            };

            componentDidMount = async () => {
                // 如果未登录
                // @ts-ignore
                if (!this.context.state.token) {
                    this.setState({ dialogVisible: true })
                    Taro.eventCenter.on(EventName.LOGIN_SUCCESS, this.onLoginSuccess); // 注册登录成功监听
                } else {
                    super.componentDidMount?.();
                }
            };

            componentWillUnmount = () => {
                Taro.eventCenter.off(EventName.LOGIN_SUCCESS, this.onLoginSuccess); // 清除监听
                this.setState({ dialogVisible: false })
            };

            render() {
                return (
                    <>
                        {super.render()}
                        <Dialog
                            title="您未登录"
                            content={(
                                <>
                                    <View>登录后可查看更多信息</View>
                                    <LoginButton type="primary" dispatch={this.context.dispatch}>去登录</LoginButton>
                                </>
                            )}
                            visible={this.state.dialogVisible}
                            footer={null}
                            closeIcon
                        ></Dialog>
                    </>
                )
            }
        }
    }
}


