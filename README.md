# Filename Paste Fullwidth

## English

When you paste text into a file name in Obsidian for desktop, this plugin replaces punctuation that Windows does not allow in file names with visually similar fullwidth characters.

| Pasted character | Inserted character |
| --- | --- |
| `:` | `：` |
| `*` | `＊` |
| `?` | `？` |
| `"` | `＂` |
| `<` | `＜` |
| `>` | `＞` |
| `\|` | `｜` |
| `/` | `／` |
| `\` | `＼` |

It works in the inline note title, pane title, and file list rename field. Selected text is replaced as with a normal paste. Line breaks in pasted text become spaces when conversion is needed. Letters, numbers, commas, existing fullwidth characters, and pastes into note bodies are left alone. Existing file names are not changed.

### Manual installation

1. Put the `filename-paste-fullwidth` folder in your vault's `.obsidian/plugins/` folder. Create `plugins` if it does not exist.
2. Make sure `main.js` and `manifest.json` are directly inside `.obsidian/plugins/filename-paste-fullwidth/`.
3. Restart Obsidian. In **Settings → Community plugins**, enable **Filename Paste Fullwidth**. If Restricted mode is on, turn it off first.
4. To try it, paste `Counterfactual Reasoning, Qualitative: Philosophical Aspects` into a note title and press Enter. The colon becomes `：`.

`main.js` is readable source code and does not need a build step.

## 中文

在 Obsidian 桌面版的文件名位置粘贴文字时，自动把 Windows 禁用的半角符号转成对应的全角符号。

| 半角 | 全角 |
| --- | --- |
| `:` | `：` |
| `*` | `＊` |
| `?` | `？` |
| `"` | `＂` |
| `<` | `＜` |
| `>` | `＞` |
| `\|` | `｜` |
| `/` | `／` |
| `\` | `＼` |

适用于笔记内嵌标题、窗格标题栏和文件列表的文件重命名。转换发生在粘贴位置，选中的文字会像平常粘贴一样被替换。需要转换的多行文字会合并成一行。字母、数字、逗号、已有全角字符和正文粘贴保持原样。

## 安装

1. 把解压出的整个 `filename-paste-fullwidth` 文件夹放入笔记库的 `.obsidian/plugins/`。如果该目录里还没有 `plugins` 子文件夹，先创建它。
2. 确认 `main.js` 和 `manifest.json` 都直接位于 `.obsidian/plugins/filename-paste-fullwidth/` 下。
3. 重启 Obsidian，在「设置 → 第三方插件（Community plugins）」启用 **Filename Paste Fullwidth**。如果受限模式开启，先关闭它以便启用。
4. 点击笔记标题，粘贴 `Counterfactual Reasoning, Qualitative: Philosophical Aspects`，然后按 Enter。标题中的冒号会转成 `：`。

`main.js` 是插件源码，可以直接阅读或修改，无需编译。
