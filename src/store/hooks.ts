import { useContext } from "react"
import { AppContext } from "./context"

export const useDispatch = () => {
    const { dispatch } = useContext(AppContext)
    return dispatch
}
export const useUserInfo = () => {
    const { state } = useContext(AppContext)
    return state.userInfo
}

export const useNoticeBar = (): string | null => {
    const { state } = useContext(AppContext)
    return state.noticeBarText
}
export const useToken = (): string | null => {
    const { state } = useContext(AppContext)
    return state.token
}