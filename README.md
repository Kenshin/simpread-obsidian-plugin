<p align="center"><img src="https://res.cloudinary.com/simpread/image/upload/v1785387651/config/7f2b5be5e787a476a43eb3446768ffb3.png" /></p>

# 描述

全新 4.0 版，大幅优化了配置相关的内容，目前分为两种使用方案：

1️⃣ 轻量级使用，**安装此插件后无须任何设置**，配合 [导入到 Obsidian](https://github.com/Kenshin/simpread/discussions/2902) 就能将实现剪藏功能（包括图片本地化）

2️⃣ 重度级使用，当设置了 `simpread_config.json` 就能实现：**集文章标注实时同步到 Obsidain、本地快照实时保存到本地、管理你全部的稍后读于一身的 Obsidian + 简悦全流程化一站式解决方案**。

不仅如此：还支持标 Command Support 等众多 Obsidian 功能。

# 视频

https://user-images.githubusercontent.com/81074/135744012-ea403cb7-3145-401a-b9d5-ac588ff82975.mp4

# 官网

https://github.com/Kenshin/simpread-obsidian-plugin

# 版本

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/kenshin/simpread-obsidian-plugin?style=for-the-badge)](https://github.com/kenshin/simpread-obsidian-plugin/releases/latest)

# 优势

- 内置与 [Markdown 模板辅助增强](https://github.com/Kenshin/simpread/discussions/3725) 具有一样的模板解析引擎。

- 在 Web 标注 → 标注的 Markdown 自动出现在你的 Obsdian。（全自动化方案）

- 标注的页面也可以同步生成本地永久快照。

- 每条标注均可链接到本地永久快照的原文对应位置。

- 得益于简悦精准的阅读模式匹配功能以及 HTML → Markdown 方案，通过此方式生成的 Markdown 的精准度最高，甚至可以匹配数学公式（LaTeX）

- 使用 Command Support 可以将任意稍后读转换为 Markdown，可以弥补  [Markdown 模板辅助增强](https://github.com/Kenshin/simpread/discussions/3725) 仅能用于阅读模式的缺陷。

# 内置 Markdown 模板解析方案

因 Chrome Manifest V3 版无法使用高级定制方案，所以将这部分功能转移到此插件中。

如果你在使用的简悦版本为 2.3.0+ 的话，同时使用高级模板方案的话，请务必 **SimpRead Obsidian Plugin 为 4.0**。

# 集成标注功能

得益于 [同步助手 1.1.0](https://github.com/Kenshin/simpread/discussions/4049#discussioncomment-2982511) 的 [标注嵌入模式](https://github.com/Kenshin/simpread/discussions/4070)，终于打通了 Obsidian 标注的最后一道门槛：**在 Obsidian 中标注本地快照并实时同步到你的 Obsidian，不仅如此还可以管理你的稍后读**，详细说明 [请看这里](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2983691)。

https://user-images.githubusercontent.com/81074/174549318-892ed045-49f2-4c3f-9674-92c735c6674a.mp4

# 受众

如果你只希望实现 Obsidian 剪藏功能、无须配置的轻量级使用者 [详细说明](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-14330230)

如果你是简悦 + Obsidian 的深度使用者，尤其是使用同步助手的用户，非常建议使用此方式，会节省你大量的时间，可使用下面的 [**配置库方案**](https://github.com/Kenshin/simpread/discussions/4531#discussioncomment-3844881) 或 [**一站式教程**](https://www.yuque.com/kenshin/simpread/fr8zo5)

# 配置库

[简悦 · 配置库](https://github.com/Kenshin/simpread/discussions/4531) 是简悦官方推出的一套针对新用户的极简配置方案，方便新用户用最快的方式使用简悦的各种高级服务，配置库内置了常用的双链笔记用法，如：Notion、Obsidian、Logseq、Roam Research，同时包含了简悦在阅读模式上的一些常规插件：Live Editor、题图、Safari 阅读模式等。

目前配置库包含了 Obsidian 的一站式配置方案，细节 [请看这里](https://github.com/Kenshin/simpread/discussions/4531#discussioncomment-3844881)。

# 一站式教程

https://www.yuque.com/kenshin/simpread/fr8zo5

# 安装与升级

此插件没有上架到 Obsdian 第三方社区，可通过 [此方式](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831907) 自动安装。

# 功能

- [Server Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1388527)

- [Saved Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1389535)

- [Image Hosting](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-10446316)

- [Sync Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1393730)

- [Markdown Template Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1420516)

- [Commands Support](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1420517)

# 工作流

这是来自 [简悦社区](https://t.me/simpread) 用户 [1wingedangel](https://github.com/1wingedangel) 的基于 Obsidan + SimpRead Unreader Sync 的 [工作流分享](https://github.com/Kenshin/simpread/discussions/3999)。

# 更新日志

https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831918

# 注意

- [如何为导出文件排序](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831914)

- 简悦稍后读 → Obsidian 属于单向更新。

- 通过此插件生成的 Markdown 的任何改动都可能被覆盖。

- 在简悦删除稍后读仅能删除扩展端的稍后读，无法同步删除 Obsidian 对应的文件。

# 关联

简悦与 Obsidian 都是基于 Local first 概念，即使只是轻量级使用简悦，也可以实现很多联动：

- [利用简悦插件 Live Editor 来助力你的双向链接笔记剪藏流程](https://zhuanlan.zhihu.com/p/412710060)

- [自动导入标注到 Obsidian（不使用同步助手方案）](https://github.com/Kenshin/simpread/discussions/3932)

- [利用 Dataview + Blue Topaz + Markdown 辅助增强 + 导入到 Obsidian 插件，实现对标注的汇总与回顾](https://github.com/Kenshin/simpread/discussions/3807)

关于简悦与 Obsidian 的更多联动 [请看这里](https://github.com/Kenshin/simpread/discussions?discussions_q=label%3Aobsidian)。
