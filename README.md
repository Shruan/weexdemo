# Weex Demo App

使用 Weex Create 创建，并修改webpack配置，新建入口文件并引入weex-ui的 Weex 原生应用。


## 编译项目文件

安装依赖：

```
npm install
```

### 启动 Web 服务

```
npm run serve
```

编译代码：

```bash
# 生成 Web 平台和 native 平台可用的 index.js 文件
# 位置：
# dist/index.js
# dist/index.web.js
npm run build
```

拷贝 index.js 文件：

```bash
# 启动 Anodroid项目后手动将index.js文件拷贝至Android项目中
# 起始位置：
# dist/index.js
# 目标位置：
# platform/android/app/src/main/assets/index.js
```

### 启动 Android 项目

首先应该安装 [Android Studio](https://developer.android.com/studio/index.html) 和必要的 Android SDK，配置好基本的开发环境。

使用 Android Studio 打开 `android` 目录中的项目，等待自动安装完依赖以后，即可启动模拟器或者真机预览页面。

### 启动 iOS 项目

首先应该配置好 [iOS 开发环境](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html) 并且安装 [CocoaPods](https://guides.cocoapods.org/using/getting-started.html) 工具。

进入 `ios` 目录，使用 CocoaPods 安装依赖：

```
pod install
```

使用 Xcode 打开 `ios` 目录中的项目（`HackerNews.xcworkspace`），然后即可启动模拟器预览页面。

> 注：如果想要在真机上查看效果，还需要配置开发者签名等信息。
