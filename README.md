# 描述

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/kenshin/simpread-obsidian?style=for-the-badge&sort=semver)](https://github.com/kenshin/simpread-obsidian/releases/latest)

https://user-images.githubusercontent.com/81074/135744012-ea403cb7-3145-401a-b9d5-ac588ff82975.mp4

安装此插件后，在简悦中加入稍后读 / 标注（包括：新增或更新）均可实时同步到 Obsidian 库相应的文件夹中。（每个稍后读（标注）对应一个 Markdown 文件）

# 意义

通常在 Web 标注的话，大多需要这样的操作步骤：标注后 → 复制 Markdown 到剪切板（或导出 `.md` ） → 粘贴到 Obsidian，相比此方案提供一种更符合直觉的自动化方案：

> 在 Web 标注，标注的 Markdown 自动出现在你的 Obsdian 库文件夹中。

# 优势

- 在 Web 标注 → 标注的 Markdown 自动出现在你的 Obsdian。（全自动化方案）
- 标注的页面也可以同步生成本地永久快照。
- 每条标注均可链接会本地永久快照的原文对应位置。
- 得益于简悦精准的阅读模式匹配功能以及 HTML → Markdown 方案，通过此方式生成的 Markdown 的精准度最高，甚至可以匹配数学公式（LaTeX）

# 受众

> 如果你是简悦 + Obsidian 的深度使用者，尤其是使用同步助手的用户，非常建议使用此方式，会节省你大量的时间。

如果只是轻量级使用简悦的话，我也是 Obsidian 的用户，而简悦与 Obsidian 都是基于 Local first 概念，因此有很多的联动性：

- [利用简悦插件 Live Editor 来助力你的双向链接笔记剪藏流程](https://zhuanlan.zhihu.com/p/412710060)
- [让简悦更好的为 Obsidian 服务](https://zhuanlan.zhihu.com/p/413068346)
- [使用简悦导出含有永久链接与双向链接的 Markdown 并自动保存在 Obsidian 库](https://zhuanlan.zhihu.com/p/388423452)
- [Obsidian 配合简悦实现方便的来源引用](https://zhuanlan.zhihu.com/p/345900114)

# 使用前提

> 此插件需要使用[简悦 · 同步助手](http://ksria.com/simpread/docs/#/Sync)，才可发挥最大的效果，如何配置同步助手 [请看这里](https://github.com/Kenshin/simpread/discussions/2754)。

# 简悦

> 简悦是一个集：阅读模式 + 剪藏（导出） + 稍后读/标注的**新型一站式知识管理工具**，详细 [请看这里](http://ksria.com/simpread/docs/#/)。

# 安装

> 选项 → 第三方插件 → 社区插件，搜索 `simpread` 即可。

![](https://z3.ax1x.com/2021/10/03/4qIqPK.png)

# 配置

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff89f5006-10ab-4589-a480-d1f00f829976%2FUntitled.png?table=block&id=a3c8a867-a238-44f0-be4f-1fc511493439&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=2000&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

> 以下是配置方面的说明

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd8e53b8e-492a-4f6d-9129-78c249679241%2FUntitled.png?table=block&id=f5db1c61-9c8c-4bad-80e9-165da416c8b7&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=2000&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

# 初始化

> 首次使用时，需要如下设置

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6a074ecf-94fb-4d13-ad29-ee0f7df63f2d%2FUntitled.png?table=block&id=f4d9cc19-0670-4f20-9bcd-0389b2063f23&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=2000&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

## 注意

- 当上述设置完毕后，点击 **Manual Sync**，即可生成稍后读对应的 Markdown 文件。
- 当手动设置完毕后，需要将 `0` 修改为你需要是数字，一般来说 `10 ~ 20` 即可。
- 如果你的稍后读少于 `100`，可直接使用 `0`。

# 标注结构说明

> 标注的结构化，包括：`Block` `Bullet` 与 `Custom`

> 当选择为 Block 时，标注以下图方式展示

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F600e04fc-be9e-43bf-b10f-b28b1713d022%2FUntitled.png?table=block&id=90cb95af-1da3-47c1-90fc-c06fefd3f6cd&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=1490&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

> 当选择为 Bullet 时，标注以下图方式展示

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3f6458e-a9ab-4e61-a57d-9e059c92e7a2%2FUntitled.png?table=block&id=de16fa43-4b3b-4669-8013-61ca5effcd6b&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=1260&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

*   前者可以展示更多的内容，除了标注外，还有：简悦的标签 / 备注 / 双向链接等。

*   后者仅能展示标注


> 什么时候使用 Block 与 Bullet

如果你只是逐条标注的话，请使用后者；否则做精细标注的话，使用前者。

> 全定制化方案：Custom

无论是 Block 还是 Bullet 都属于半定制化方案，如果你需要全定制化方案的话，请使用 Custom 方式。

# 定制化 Markdown

> 定制化的内容近似 [简悦的 Markdown 定制化模板](http://ksria.com/simpread/docs/#/定制化导出?id=markdown)，但在此基础上优化了很多内容，更易与用户使用和定制。

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2fc9a52f-b5bb-4df5-9287-8987f8ead207%2FUntitled.png?table=block&id=df87089f-8368-4f64-8062-ee197c3463a3&spaceId=1c2bf8f0-587a-4396-a275-db9788966466&width=2000&userId=4910589b-2ea6-4260-bc44-620d69141552&cache=v2)

## 标题

![](https://z3.ax1x.com/2021/10/02/4bF1Bt.png)

| 占位符        | 描述                                                         |
| ------------- | ------------------------------------------------------------ |
| {{id}}        | 当前稍后读 id（是一个自增长的序号，1, 2, 3...）              |
| {{timestamp}} | 当前稍后读建立时的时间戳 e.g. 20212809162353                 |
| {{title}}     | 当前稍后读的标题                                             |
| {{note}}      | 当前稍后读的备注，使用此占位符时可以当作导出到 Obsidian 库中的 `.md` 文件的 `shortname` |

## 标签

> 相比简悦扩展端 · [Markdown 定制化](http://ksria.com/simpread/docs/#/%E5%AE%9A%E5%88%B6%E5%8C%96%E5%AF%BC%E5%87%BA?id=markdown)，SimpRead Unread Sync Plugin 给出了更为详细的定制化方案。

![](https://z3.ax1x.com/2021/10/02/4bpfGd.png)

> 可以定制 Tag 的前 / 后的内容，如：`#tag1 #tag2` （默认值）

![](https://z3.ax1x.com/2021/10/02/4b9CZT.png)

> 如定制：`tags: [one,two,three]`

![](https://z3.ax1x.com/2021/10/02/4b91Fe.png)

![](https://z3.ax1x.com/2021/10/02/4b9MdO.png)

> 如定制：
>
> ```
> tags:
>   - one
>   - two
>   - three
> ```

![](https://z3.ax1x.com/2021/10/02/4b9BFg.png)

![](https://z3.ax1x.com/2021/10/02/4b96ln.png)

## 稍后读

![](https://z3.ax1x.com/2021/10/02/4bFMjA.png)

| 占位符                              | 描述                                                         | 效果                                                         |
| ----------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| {{url}}                             | 当前稍后读的 URL 地址                                        | -                                                            |
| {{timestamp}}                       | 当前稍后读建立时的时间戳 e.g. 20212809162353                 | -                                                            |
| {{title}}                           | 当前稍后读的标题                                             | -                                                            |
| {{desc}}                            | 当前稍后读的描述                                             | -                                                            |
| {{note}}                            | 当前稍后读的备注                                             | -                                                            |
| {{tags}}                            | 当前稍后的标签，可定制标签的前 / 后的内容，使其达到更多使用效果 e.g. #tag1 #tag2 以及支持 YAML 更多的标签方案 | ![](https://z3.ax1x.com/2021/10/02/4biH6s.png)               |
| {{refs}}                            | 当稍后读的外部引用                                           | [![4bic6A.md.png](https://z3.ax1x.com/2021/10/02/4bic6A.md.png)](https://imgtu.com/i/4bic6A) |
| {{int_uri}}                         | 当前稍后读本地缓存文件地址，此功能需要配置 [自动化方案](https://github.com/Kenshin/simpread/discussions/2146)，显示为 `[xxx](xxx)` 结构 | [![4bkfJS.md.png](https://z3.ax1x.com/2021/10/02/4bkfJS.md.png)](https://imgtu.com/i/4bkfJS) |
| {{int_url}}                         | 当前稍后读本地缓存文件地址，只显示 URL，方便定制化           | -                                                            |
| {{backlinks}}                       | 当前稍后读的反向链接，当你的稍后读存在反向链接后，会在 Obsidian 自动建立 `[[xxx]]` 的方式 | [![4biJSJ.md.png](https://z3.ax1x.com/2021/10/02/4biJSJ.md.png)](https://imgtu.com/i/4biJSJ) |
| {{create\|yyyy/dd/mm HH:MM:ss\|zh}} | 日期的定制化，相比 Markdown 定制化更灵活，细节请看下面的详细解释 | -                                                            |
| {{annotations}}                     | 标注占位符，如果不包含此占位符，标注将会出现在当前模板的最下方 | -                                                            |

## 标注

![](https://z3.ax1x.com/2021/10/02/4bFN9g.png)

| 占位符             | 描述                                               | 效果                                                         |
| ------------------ | -------------------------------------------------- | ------------------------------------------------------------ |
| {{an_html}}        | 标注的富文本结构                                   | -                                                            |
| {{an_html_online}} | 标注的富文本结构，但去掉了全部的换行符             | -                                                            |
| {{an_note}}        | 标注的备注                                         | -                                                            |
| {{an_tags}}        | 标注的标签，同样也可以定制化                       | -                                                            |
| {{an_refs}}   | 标注的引用                  | -                                                            |
| {{an_int_uri}}     | 标注的缓存（快照）位置，与 `{{int_uri}}` 方式一致  | [![4bCnpj.md.png](https://z3.ax1x.com/2021/10/02/4bCnpj.md.png)](https://imgtu.com/i/4bCnpj) |
| {{an_int_url}}     | 当前稍后读本地缓存文件地址，只显示 URL，方便定制化 | -                                                            |
| {{an_backlinks}}   | 标注的反向链接，与稍后读的反向链接逻辑保持一致     | -                                                            |
| {{> \|an_html}}                | 标注的包围结构，如果有换行时，每个换行前面都有一个前缀 e.g. `> |an_html` 会生成右侧效果 | ![](https://z3.ax1x.com/2021/10/02/4bA3Y8.png) |
| {{> \|an_note}} | 标注备注的包围结构，如果有换行时，每个换行前面都有一个前缀 e.g. `- |an_html` 会生成右侧效果 | ![](https://z3.ax1x.com/2021/10/02/4bAH6H.png) |
| {{an_create\|yyyy/dd/mm HH:MM:ss\|zh}} | 日期的定制化，相比 Markdown 定制化更灵活，细节请看下面的详细解释 | - |

## 日期格式化

> SimpRead 的日期格式化方案比 [Markdown 定制化](http://ksria.com/simpread/docs/#/%E5%AE%9A%E5%88%B6%E5%8C%96%E5%AF%BC%E5%87%BA?id=markdown) 更加的灵活方便，代码 [来自这里](https://github.com/felixge/node-dateformat)，但提供了一些其它额外的功能。

```
{{<id>|<format>|type}}
```

| 标识   | 描述                                                         |
| ------ | ------------------------------------------------------------ |
| id     | 包括：`create` `an_create` 前者用于标注；后者用于标注。（仅支持这两种方式，且值只能为其中之一） |
| format | 日期结构格式化定制，细节 [请看这里](https://github.com/felixge/node-dateformat#mask-options) |
| type   | 包括：                                                       |
|        | - `short` → 月份与星期的缩写， e.g. `"Sun", "Mon", "Tue", "Jan", "Feb", "Mar", "Apr", "May"` |
|        | - `long` → 月份与星期的全称，e.g. `"Sunday", "Monday", "Tuesday", "January", "February", "March", "April"` |
|        | - `zh` → 月份与星期的中文，e.g. `"星期日", "星期一", "星期二", "星期三","一月", "二月", "三月"` |

# 导出文件的排序

> 因为写入 Markdown 的时间无法按照稍后读的新旧顺序（为了性能考虑），如果有对稍后读顺序有要求的用户，可以这样做：`{{id}}-{{title}}`

![](https://z3.ax1x.com/2021/10/03/4q5H1g.png)

> 同时按照如下排序即可解决

![](https://z3.ax1x.com/2021/10/03/4q5Ons.png)

> 同时开启下面的选项（这样当你的稍后读标题更改后，可以实时更新），不开启此选项，当标题改变时无法更新。

![](https://z3.ax1x.com/2021/10/03/4q5xA0.png)

> 如果你不需要修改标题但仍需要优化 Markdown 的名字的话，可以使用 `{{id}}-{{note}}` 方案。

![](https://z3.ax1x.com/2021/10/03/4qI99U.png)

# 反馈渠道

> 请前往 [简悦官方唯一渠道](https://github.com/kenshin/simpread/issues)，讨论请前往 [官方唯一指定渠道](https://github.com/Kenshin/simpread/discussions/2889)。

# 注意

- 简悦稍后读 → Obsidian 属于单向更新。
- 在通过此插件生成的 Markdown 的任何改动都可能被覆盖，有此需求的用户可以将此 `.md` 转移到其它文件夹。
- 当删除操作时，仅能删除简悦稍后读，无法同步删除 Obsidian 对应的文件。