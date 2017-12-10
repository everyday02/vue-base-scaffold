### vue-base-scaffold
> 基础架子模版。 ---- 基于vue-cli  webpack模版抽离的简化版。


### 目录结构说明

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /app/          # 源码目录，编译时copy至dist目录
│ ├── /config/       # 路由，主题，store配置
│ ├── /libs/         # 插件库
│ ├── /static/       # 静态文件，最终被打包至/dist/static/。
│ ├── /theme/        # 全局样式
│ ├── index.jsx      # 入口jsx
│ └── index.html     # 入口html
├── package.json     # 项目包依赖和启动配置
├── config.js        # 开始，测试，生产环境配置
├── .eslintrc.js     # 编码规范约束规则定义
├── .babelrc         # es6支持配置
├── webpack.config.dev.js   # 开发环境打包配置
├── webpack.config.prod.js  # 生产环境打包配置
```
