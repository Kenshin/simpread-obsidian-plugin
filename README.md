# 描述

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/kenshin/simpread-obsidian-plugin?style=for-the-badge)](https://github.com/kenshin/simpread-obsidian-plugin/releases/latest)

https://user-images.githubusercontent.com/81074/135744012-ea403cb7-3145-401a-b9d5-ac588ff82975.mp4

安装此插件后，在简悦中加入稍后读 / 标注（包括：新增或更新）均可实时同步到 Obsidian 库相应的文件夹中。（每个稍后读（标注）对应一个 Markdown 文件）

# 意义

通常在 Web 标注的话，大多需要这样的操作步骤：标注后 → 复制 Markdown 到剪切板（或导出 `.md` ） → 粘贴到 Obsidian，相比此方案提供一种更符合直觉的自动化方案：

在 Web 标注，标注的 Markdown 自动出现在你的 Obsdian 库文件夹中。

# 优势

- 内置与 [Markdown 模板辅助增强](https://github.com/Kenshin/simpread/discussions/3725) 具有一样的模板解析引擎。

- 在 Web 标注 → 标注的 Markdown 自动出现在你的 Obsdian。（全自动化方案）

- 标注的页面也可以同步生成本地永久快照。

- 每条标注均可链接会本地永久快照的原文对应位置。

- 得益于简悦精准的阅读模式匹配功能以及 HTML → Markdown 方案，通过此方式生成的 Markdown 的精准度最高，甚至可以匹配数学公式（LaTeX）

# 受众

如果你是简悦 + Obsidian 的深度使用者，尤其是使用同步助手的用户，非常建议使用此方式，会节省你大量的时间。

如果只是轻量级使用简悦的话，我也是 Obsidian 的用户，而简悦与 Obsidian 都是基于 Local first 概念，因此有很多的联动性：

- [利用简悦插件 Live Editor 来助力你的双向链接笔记剪藏流程](https://zhuanlan.zhihu.com/p/412710060)

- [自动导入标注到 Obsidian（不使用同步助手方案）](https://github.com/Kenshin/simpread/discussions/3932)

- [利用 Dataview + Blue Topaz + Markdown 辅助增强 + 导入到 Obsidian 插件，实现对标注的汇总与回顾](https://github.com/Kenshin/simpread/discussions/3807)

关于简悦与 Obsidian 的更多联动 [请看这里](https://github.com/Kenshin/simpread/discussions?discussions_q=label%3Aobsidian)。

# 使用前提

此插件需要使用 [简悦 · 同步助手](http://ksria.com/simpread/docs/#/Sync)，才可发挥最大的效果，如何配置同步助手 [请看这里](https://kb.simpread.pro/#/page/配置同步助手)。

# 安装与升级

此插件没有上架到 Obsdian 第三方社区，但仍可以通过 [此方式](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831907) 自动安装。

# 配置

- [Server Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1388527)

- [Config Setting](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1389535)

- [Sync Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1393730)

- [Markdown Template Settings](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1420516)

- [Commands Support](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-1420517)

# 更新日志

https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831918

# 注意

- [如何为导出文件排序](https://github.com/Kenshin/simpread/discussions/2889#discussioncomment-2831914)

- 简悦稍后读 → Obsidian 属于单向更新。

- 在通过此插件生成的 Markdown 的任何改动都可能被覆盖。

- 当删除操作时，仅能删除简悦稍后读，无法同步删除 Obsidian 对应的文件。