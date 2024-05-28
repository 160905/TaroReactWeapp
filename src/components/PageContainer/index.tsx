import { ConfigProvider, Loading, Overlay, NoticeBar } from '@nutui/nutui-react-taro'
import { defaultTheme } from '@/theme'
import { useUserInfo, useNoticeBar } from '@/store'
import { getCustomNavBarRect } from '@/utils'
import { useEffect, useState } from 'react'

export function PageContainer({ children, loading = false, navCustom = false, ...props }) {
    const userInfo = useUserInfo()
    const noticeBarText = useNoticeBar()
    const [navBarHeight, setNavBarHeight] = useState<number>()

    useEffect(() => {
        if (navCustom) {
            const rect = getCustomNavBarRect()
            if (rect) {
                setNavBarHeight(rect.navBarHeight)
            }
        }
    }, [navCustom])

    const containerStyle = navCustom ? { paddingTop: `${navBarHeight}px` } : {}

    return (
        <ConfigProvider theme={defaultTheme} {...props} style={containerStyle}>
            {noticeBarText && <NoticeBar content={noticeBarText} />}

            {/* {userInfo && <View>{userInfo.name}</View>} */}
            {children}

            <PageLoading visible={loading} />

        </ConfigProvider>
    )
}

const PageLoading = ({ visible = false }) => {
    const wrapperStyle = {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <ConfigProvider theme={{
            nutuiOverlayBgColor: "transparent"
        }}>
            <Overlay visible={visible} closeOnOverlayClick={false}>
                <div style={wrapperStyle}>
                    <Loading type="circular" />
                </div>
            </Overlay>
        </ConfigProvider>
    )
}
