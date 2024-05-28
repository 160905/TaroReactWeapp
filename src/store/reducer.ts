export const appReducer = (state, action) => {
    switch (action.type) {
        case 'saveUserInfo':
            return { ...state, userInfo: action.payload };
        case 'saveNoticeBar':
            return { ...state, noticeBarText: action.payload };
        case 'saveToken':
            return { ...state, token: action.payload };
    }
    return state;
};