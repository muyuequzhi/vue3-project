# 启动

> 1. 解压node_modules.zip文件
> 2. 运行 `npm run dev`

# 注意事项

> 1. 如果需要新增依赖包，请在外网环境根据package.json下载完，然后压缩成node_modules.zip放入虚拟机
> 2. 本项目node默认稳定运行版为18.12.1，因虚拟机为win7环境（win7默认不支持13及以后的高版本node），请命令行运行`setx -m NODE_SKIP_PLATFORM_CHECK 1`一下
> 3. 若其他项目需要其他版本的node，请用nvm管理node版本

# Vue 3 + TypeScript + Vite

这个模板将帮助您开始在 Vite 中使用 Vue 3和 TypeScript 进行开发。模板使用 Vue 3 < script setup > SFCs，查看[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup)去了解更多.

## 前端框架

Vite + Vue3 + TypeScript + Pinia + Vue Router + Axios + Element Plus

## 代码规范

ESLint + Prettier

## git提交代码校验

lint-staged + husky

## IDE设置建议

- VS Code + Volar (禁用Vtur) + TypeScript Vue Plugin(Volar)。

## 兼容性

谷歌86.0.4214.3及以上；不支持IE；
