# 练习本地用vite打包vue组件

下载项目后先安装依赖，安装好后打开`my-com`目录，继续安装依赖，目标组件是`my-com`这个目录。

都安装好后，需要一步关键步骤，命令行项目根目录下执行
```shell
npm link my-com
```
如果不执行这一步，将会报这个错误：

![报错截图](./WX20221017-174815.png)

最后不出意外的话，运行`npm run dev`将会出现下面的界面，就说明成功了！

![成功界面](./localhost_5173_.png)