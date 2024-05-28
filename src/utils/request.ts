import Taro from "@tarojs/taro";

export const request = async (
    url: string,
    data: string | { [key: string]: any } = {},
    method: keyof Taro.request.Method = "GET"
): Promise<any> => {
    return new Promise((resolve, reject) => {
        const params: Taro.request.Option = {
            url,
            method,
            data,
        }
        Taro.request(params).then(res => {
            if (res.data.code && res.data.code === 200) {
                console.debug("%cResponse Data", 'background: #222; color: #bada55', res.data.data)
                resolve(res.data.data)
            }
            console.debug("%cResponse Data", 'background: #222; color: #bada55', res.data)
            resolve(res.data)
        }).catch(reject)
    })

}

request.post = (url: string, data = {}) => request(url, data, "POST")