const CONFIG = {
  contract: "0xa872fc2cc4b2a973c1f94fb91ea6d99e7332e8c1",
  pair: "0x9ded1e625212cce284e5c74215d2477b6efde462",
  // Replace these two placeholders with the project's real links.
  telegram: "https://t.me/babyflokicto",
  x: "https://x.com/BABYFLOKICTO"
};

const buyUrl = `https://pancakeswap.finance/swap?outputCurrency=${CONFIG.contract}`;
const chartUrl = `https://dexscreener.com/bsc/${CONFIG.pair}`;
const bscscanUrl = `https://bscscan.com/token/${CONFIG.contract}`;

document.querySelectorAll("[data-buy]").forEach(a => a.href = buyUrl);
document.querySelectorAll("[data-chart]").forEach(a => a.href = chartUrl);
document.querySelectorAll("[data-bscscan]").forEach(a => a.href = bscscanUrl);
document.querySelectorAll("[data-telegram]").forEach(a => a.href = CONFIG.telegram);
document.querySelectorAll("[data-x]").forEach(a => a.href = CONFIG.x);

const ca = document.getElementById("contract");
document.getElementById("copyCa").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.contract);
    document.getElementById("copyStatus").textContent = "Copied!";
    setTimeout(() => document.getElementById("copyStatus").textContent = "", 1600);
  } catch {
    document.getElementById("copyStatus").textContent = "Copy failed";
  }
});

const money = n => {
  if (n === undefined || n === null || isNaN(n)) return "—";
  if (n >= 1e9) return "$" + (n/1e9).toFixed(2) + "B";
  if (n >= 1e6) return "$" + (n/1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + (n/1e3).toFixed(2) + "K";
  if (n >= 1) return "$" + n.toFixed(2);
  return "$" + n.toPrecision(3);
};

async function loadStats() {
  try {
    const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONFIG.contract}`);
    const data = await res.json();
    const pairs = (data.pairs || []).filter(p => p.chainId === "bsc");
    const pair = pairs.sort((a,b) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0))[0];
    if (!pair) throw new Error("No BSC pair found");

    document.getElementById("marketCap").textContent = money(pair.marketCap ?? pair.fdv);
    document.getElementById("liquidity").textContent = money(pair.liquidity?.usd);
    document.getElementById("price").textContent = money(Number(pair.priceUsd));

  } catch (e) {
    document.getElementById("marketCap").textContent = "—";
    document.getElementById("liquidity").textContent = "—";
    document.getElementById("price").textContent = "—";
  }
}
loadStats();
setInterval(loadStats, 60000);

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.remove("open");
}));
