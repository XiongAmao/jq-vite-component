# 说明

- vite提供了页面热加载，方便你开发时查看页面实际效果，仅在开发时使用，开发页面入口为index.html -> main.ts
- 插件的实际源码在src/plugins，通过 typescript 自带的tsc 直接打包到dist目录
- 构建的具体细节通过 tsconfig.json配置

https://cn.vitejs.dev/
https://www.typescriptlang.org/tsconfig#outDir