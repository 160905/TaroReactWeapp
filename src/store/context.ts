import { createContext } from 'react'
import type { IAppContextType } from '@/interface'

export const AppContext = createContext<IAppContextType>({
    state: {
        loading: false,
        userInfo: null,
        noticeBarText: null,
        token: null
    },
    dispatch: () => { }
})

