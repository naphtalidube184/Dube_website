window.fmt = (n,d) => isFinite(n) ? n.toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d}) : "–";
window.money = (n,d,suffix) => isFinite(n) ? (n<0?"−$":"$") + fmt(Math.abs(n),d) + (suffix||"") : "–";
