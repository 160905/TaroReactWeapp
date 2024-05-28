import { useState, memo, useEffect } from "react";
import Taro from "@tarojs/taro";
import { EventName } from '@/constants'
import { Login } from './login'

export const LoginButton = memo(({ children, dispatch, onSuccess, onClick, ...other }: any) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        if (!code) {
            // 实际上是调用了wx.Login()
            // Login.getWxCode().then(wxCode => {
            //     setCode(wxCode);
            // });
            setCode('asd');
        }
    }, [code]);

    // const handleGetPhoneNumber = async (e: BaseEventOrig<ButtonProps.onGetPhoneNumberEventDetail>) => {
    const handleGetPhoneNumber = async (e: any) => {
        const { iv, encryptedData, errMsg } = e.detail;
        try {
            if (!code) {
                Taro.showToast({ title: 'code为空' });
                return;
            }
            if (errMsg.includes('ok')) {
                Taro.showLoading({ title: '正在登录' });
                await Login.login({ iv, encryptedData, code: code });
                Taro.hideLoading();
                onSuccess?.();
                Taro.showToast({ title: '登录成功' });
            }
        } catch (error) {
            // 解密失败重新login
            // Login.getWxCode().then(wxCode => {
            //     setCode(wxCode);
            // });
            setCode('qwqw')
            Taro.hideLoading();
            Taro.showToast(error.message || error.errMsg);
        }
    };
    const handleBtnClick = async event => {
        onClick?.(event);
        // dispatch({ type: 'saveToken', payload: 'zhagnsanzhagnsanzhagnsan' })
        Taro.eventCenter.trigger(EventName.LOGIN_SUCCESS); // 触发登录成功事件
    };

    return (
        <button openType="getPhoneNumber" onClick={handleBtnClick} onGetPhoneNumber={handleGetPhoneNumber} {...other}>
            {children}
        </button>
    );
});
