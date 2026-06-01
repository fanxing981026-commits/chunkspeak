# ChunkSpeak 上线与盈利操作说明

## 1. 商业闭环

推荐先用最简单的闭环：

1. GitHub 保存网站代码。
2. Vercel 连接 GitHub 自动部署网站。
3. Creem 创建一个一次性付费产品。
4. 把 Creem payment link 填到 `app.js` 的 `CREEM_PAYMENT_LINK`。
5. 用户点击网站里的“用 Creem 购买”完成付款。
6. 付款成功后跳转到 `/success`。
7. 你按订单号交付 PDF / Notion / 资料包。

这个版本不做账号系统，也不做真正会员权限，适合先验证是否有人愿意付费。

## 2. Vercel 是什么

Vercel 是网站托管和自动部署平台。你把代码放到 GitHub，Vercel 连接仓库后，每次你更新代码并推送到 GitHub，它会自动重新部署网站，并给你一个可公开访问的网址。

你的 ChunkSpeak 目前是静态网站，所以很适合用 Vercel。

## 3. GitHub 要做什么

GitHub 用来保存代码版本，等于网站的“仓库”。推荐仓库名：

`chunkspeak`

上传内容就是 `chunk-speak` 文件夹里的文件：

- `index.html`
- `styles.css`
- `app.js`
- `assets/`
- `success.html`
- `vercel.json`

## 4. Vercel 部署设置

在 Vercel 新建项目时：

- Framework Preset：Other
- Root Directory：如果仓库只放 ChunkSpeak 文件，保持默认；如果仓库里还有其他项目，选 `chunk-speak`
- Build Command：留空
- Output Directory：留空

部署成功后，Vercel 会给你一个网址，例如：

`https://chunkspeak.vercel.app`

## 5. Creem 收款设置

先用 no-code payment link，不要一开始就接 API。

在 Creem 后台创建产品：

- Product name：`ChunkSpeak 完整语块库 Founding Pass`
- Type：One-time payment
- Price：建议先测试 `¥39 等值` 或 `USD $5.49`
- Success URL：`https://你的域名/success`

复制 Creem 生成的 payment link，然后打开 `app.js`，把：

```js
const CREEM_PAYMENT_LINK = "PASTE_CREEM_PAYMENT_LINK_HERE";
```

替换为：

```js
const CREEM_PAYMENT_LINK = "https://你的-creem-payment-link";
```

## 6. 支付宝相关

Creem 文档里目前要分清楚：

- 买家结账页使用支付宝支付：官方文档显示 Alipay / WeChat Pay 仍是 coming soon。
- 你作为中国商家提现到支付宝：Creem 支持 China-based merchant 使用 Alipay payout，但有额度限制。

所以当前最稳路径是：买家用 Creem 支持的付款方式付款，你通过 Creem 后台把余额提现到支付宝。

## 7. 现在网站里已经加好的东西

- 首页付费区：`#pricing`
- 购买按钮：`#buy-premium`
- Creem 配置位：`CREEM_PAYMENT_LINK`
- 支付成功页：`success.html`
- Vercel 静态配置：`vercel.json`

## 8. 后续升级

验证有人付费后，再升级：

- 账号登录
- 支付成功自动发资料
- 会员语块库
- 真实 AI 造句
- 真人或 AI 音频
- 后台内容管理
