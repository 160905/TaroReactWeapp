export default defineAppConfig({
  pages: [
    'pages/home/index',
    "pages/goods/index",
    "pages/message/index",
    "pages/mine/index",
  ],
  subpackages: [
    {
      name: "Activity",
      "root": "packages/activity",
      "pages": [
        "pages/index/index",
      ],
      /** 分包是否是独立分包 */
      independent: true
    },
    {
      name: "Order",
      "root": "packages/order",
      "pages": [
        "pages/pay/index",
      ],
      /** 分包是否是独立分包 */
      independent: true
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        iconPath: "./localAssets/tab-home.png",
        selectedIconPath: "./localAssets/tab-home-select.png",
      },
      {
        pagePath: "pages/goods/index",
        text: "商品",
        iconPath: "./localAssets/tab-home.png",
        selectedIconPath: "./localAssets/tab-home-select.png",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
        iconPath: "./localAssets/tab-home.png",
        selectedIconPath: "./localAssets/tab-home-select.png",
      },
      {
        pagePath: "pages/mine/index",
        text: "我的",
        iconPath: "./localAssets/tab-mine.png",
        selectedIconPath: "./localAssets/tab-mine-select.png",
      },
    ],
    color: "#333",
    selectedColor: "#333",
    backgroundColor: "#fff",
    borderStyle: "black",
  },
  networkTimeout: {
    request: 6000,
    connectSocket: 5000,
    uploadFile: 10000,
    downloadFile: 10000,
  },
  // preloadRule: {
  //   "pages/home/index": {
  //     network: "wifi",
  //     packages: ["Activity", "Order"]
  //   }
  // }
})
