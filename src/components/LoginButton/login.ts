import Taro from "@tarojs/taro";
import { StorageKey, EventName } from '@/constants'

export class Login {
    private tokenHub = new TokenHub();
    // 是否正在调接口刷新token
    private tokenRefreshing = false;

    static async login({ iv, encryptedData, code }: { iv: string; encryptedData: string; code: string }) {
        console.debug(iv, encryptedData, code)
        // const [err, data] = await login({
        //     code: code,
        //     iv: iv,
        //     encryptedData: encryptedData,
        // });
        // if (err) {
        //     Taro.showToast(err.message);
        //     throw err;
        // } else {
        //     await this.saveLoginData(data);
        //     Taro.eventCenter.trigger(EventName.LOGIN_SUCCESS); // 触发登录成功事件
        // }
    }

    // 保存用户信息
    async saveLoginData(loginData) {
        if (!loginData) {
            return;
        }
        const { phone, userId, tokenId } = loginData;
        await Taro.setStorage({
            key: StorageKey.USER_DATA,
            data: {
                phone,
                userId,
            },
        });
        await Taro.setStorage({
            key: StorageKey.ACCESS_TOKEN,
            data: tokenId,
        });
    }

    updateToken = (): Promise<void> => {
        return new Promise(async (resolve, reject) => {
            if (this.tokenRefreshing) {
                this.tokenHub.addSubscribers(resolve, reject);
                return;
            }
            this.tokenRefreshing = true;
            // const isSuccess = await this.reLogin();
            const isSuccess = true
            if (isSuccess) {
                resolve();
                this.tokenHub.notify();
            } else {
                // reject(new HttpError(HttpCode.REFRESH_TOKEN_ERROR, ErrorMessage[HttpCode.REFRESH_TOKEN_ERROR]));
                // this.tokenHub.rejectAll(
                //     new HttpError(HttpCode.REFRESH_TOKEN_ERROR, ErrorMessage[HttpCode.REFRESH_TOKEN_ERROR])
                // );
            }
            this.tokenRefreshing = false;
        });
    }
}

class TokenHub {
    subscribers: ((params?: any) => void)[][] = [];
    addSubscribers(resolve: (params?: any) => void, reject: (params?: any) => void) {
        this.subscribers.push([resolve, reject]);
    }
    notify() {
        this.subscribers.forEach(callbacks => {
            callbacks?.[0]?.();
        });
        this.subscribers = [];
    }
    rejectAll(params: any) {
        this.subscribers.forEach(callbacks => {
            callbacks?.[1]?.(params);
        });
        this.subscribers = [];
    }
}

