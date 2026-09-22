# Baby Floki CTO Website

A mobile-first meme-style static website for Baby Floki's community takeover.

## Files

- `index.html` — page structure/content
- `style.css` — orange/gold/black visual system
- `script.js` — links, copy-CA button, and live market data
- `assets/baby-floki-logo.jpg` — supplied Baby Floki logo

## Before going live

Open `script.js` and replace:

```js
telegram: "https://t.me/YOUR_TELEGRAM",
x: "https://x.com/YOUR_X_HANDLE"
```

with the project's real Telegram and X links.

The website uses the supplied contract:

`0xa872fc2cc4b2a973c1f94fb91ea6d99e7332e8c1`

and pair:

`0x9ded1e625212cce284e5c74215d2477b6efde462`

The market cards attempt to load live BSC pair data from DexScreener in the visitor's browser.

## GitHub

1. Create a new GitHub repository, e.g. `baby-floki-cto`.
2. Upload all files and the `assets` folder.
3. Make sure `index.html` is in the repository root.
4. Commit the changes.

## Render

Create a **Static Site** and connect the GitHub repository.

Build Command: leave blank.

Publish Directory:

```text
.
```

Deploy.

Every time you push a new commit to GitHub, Render can redeploy the site automatically.

## Important

The website is community/meme focused and does not promise returns. Verify contract, liquidity and trading details independently before publishing claims.
