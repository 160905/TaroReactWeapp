export type IUserInfo = {
    name: string
    time: number
}

export type IAppContextType = {
    state: {
        loading: boolean
        userInfo: IUserInfo | null
        noticeBarText: string | null
        token: string | null
    }
    dispatch: (para: { type: string, payload: any }) => any
}

export type IAppMenuProp = {
    navBarHeight: number
    menuBottom: number
    menuHeight: number
    menuRectWidth: number
    windowWidth: number
    windowHeight: number
}