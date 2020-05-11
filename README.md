# create-react-app 代码分析

## 使用到的第三方插件

1. browserslist
2. chalk
3. inquirer
4. pkg-up
5. filesize







    "browsersHelper.js",
    "chalk.js",
    "checkRequiredFiles.js",
    "clearConsole.js",
    "crossSpawn.js",
    "errorOverlayMiddleware.js",
    "eslintFormatter.js",
    "evalSourceMapMiddleware.js",
    "FileSizeReporter.js",
    "ForkTsCheckerWebpackPlugin.js",
    "formatWebpackMessages.js",
    "getCacheIdentifier.js",
    "getCSSModuleLocalIdent.js",
    "getProcessForPort.js",
    "getPublicUrlOrPath.js",
    "globby.js",
    "ignoredFiles.js",
    "immer.js",
    "InlineChunkHtmlPlugin.js",
    "inquirer.js",
    "InterpolateHtmlPlugin.js",
    "launchEditor.js",
    "launchEditorEndpoint.js",
    "ModuleNotFoundPlugin.js",
    "ModuleScopePlugin.js",
    "noopServiceWorkerMiddleware.js",
    "openBrowser.js",
    "openChrome.applescript",
    "printBuildError.js",
    "printHostingInstructions.js",
    "redirectServedPathMiddleware.js",
    "typescriptFormatter.js",
    "WatchMissingNodeModulesPlugin.js",
    "WebpackDevServerUtils.js",
    "webpackHotDevClient.js"

## start流程

1. 调用checkRequiredFiles.js检查文件是否存在（传[paths.appHtml, paths.appIndexJs]）
2. 检查端口号和host并给默认值
3. 调用checkBrowsers.js  checkBrowsers 获取browserslist里面的浏览器配置　异步加载
4. 调用WebpackDevServerUtils中的choosePort方法（传入host port）进行判断接口是否占用