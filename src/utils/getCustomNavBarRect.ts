import Taro from "@tarojs/taro";
import type { IAppMenuProp } from '@/interface'

export function getCustomNavBarRect(): IAppMenuProp {
    const { statusBarHeight = 0, screenWidth, windowWidth, windowHeight } = Taro.getSystemInfoSync();
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();

    const navBarHeight = (menuButtonInfo.top - statusBarHeight) * 2 + menuButtonInfo.height + statusBarHeight; // 导航栏高度
    const menuBottom = menuButtonInfo.top - statusBarHeight; // 胶囊距底部间距（顶部间距也是这个）
    const menuHeight = menuButtonInfo.height; // 胶囊高度
    const menuRectWidth = screenWidth - menuButtonInfo.left; // 胶囊宽度（包括距离屏幕右侧的距离）
    const barRect = {
        navBarHeight,
        menuBottom,
        menuHeight,
        menuRectWidth,
        windowWidth,
        windowHeight,
    };

    if (Taro.getStorageSync('customNavBarRect')) return Taro.getStorageSync('customNavBarRect');

    Taro.setStorageSync('customNavBarRect', barRect);
    return barRect;
}