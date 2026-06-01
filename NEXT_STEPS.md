# ChunkSpeak 下一步操作

## 当前状态

本地 Git 仓库已经创建，当前分支是 `main`，首个提交已经完成。

## 你需要先做的一步

在 GitHub 创建一个空仓库，推荐名字：

`chunkspeak`

不要勾选初始化 README、`.gitignore` 或 license，因为本地项目已经有这些文件。

## 创建仓库后

把仓库地址发回来，例如：

`https://github.com/your-name/chunkspeak.git`

我会继续执行：

```bash
git remote add origin https://github.com/your-name/chunkspeak.git
git push -u origin main
```

## Vercel

推送到 GitHub 后，在 Vercel 里：

1. New Project
2. Import Git Repository
3. 选择 `chunkspeak`
4. Framework Preset 选 `Other`
5. Deploy

## Creem

Creem 创建产品后，把 payment link 发回来。我会替换 `app.js` 里的：

```js
const CREEM_PAYMENT_LINK = "PASTE_CREEM_PAYMENT_LINK_HERE";
```
