/* ── DATA ─────────────────────────────────────────────────────────────────── */
const TREND = [{"m":"2022-01","v":135.5},{"m":"2022-02","v":139.7},{"m":"2022-03","v":137.4},{"m":"2022-04","v":135.8},{"m":"2022-05","v":133.8},{"m":"2022-06","v":138.5},{"m":"2022-07","v":137.6},{"m":"2022-08","v":137.1},{"m":"2022-09","v":137.2},{"m":"2022-10","v":137.7},{"m":"2022-11","v":138.2},{"m":"2022-12","v":133.0},{"m":"2023-01","v":136.6},{"m":"2023-02","v":137.6},{"m":"2023-03","v":134.4},{"m":"2023-04","v":133.7},{"m":"2023-05","v":135.1},{"m":"2023-06","v":135.2},{"m":"2023-07","v":141.3},{"m":"2023-08","v":134.4},{"m":"2023-09","v":135.1},{"m":"2023-10","v":137.3},{"m":"2023-11","v":138.7},{"m":"2023-12","v":135.1},{"m":"2024-01","v":132.4}];

const PRODUCTS = [{"id":"P063","name":"Nuun Sport Hydration Tablets Citrus","avg":142.5,"inv":274,"price":2.5,"total":112575,"ss":286,"rop":1284,"status":"CRITICAL"},{"id":"P087","name":"Jack Daniel's Tennessee Whiskey 750ml","avg":136.6,"inv":272,"price":37.73,"total":112414,"ss":280,"rop":1236,"status":"CRITICAL"},{"id":"P032","name":"A&W Root Beer 330ml Can","avg":150.1,"inv":286,"price":2.2,"total":110775,"ss":306,"rop":1357,"status":"CRITICAL"},{"id":"P021","name":"Dr Pepper Original 330ml Can","avg":141.3,"inv":276,"price":2.14,"total":110372,"ss":299,"rop":1289,"status":"CRITICAL"},{"id":"P008","name":"Glaceau SmartWater 600ml","avg":149.6,"inv":281,"price":2.24,"total":108479,"ss":295,"rop":1343,"status":"CRITICAL"},{"id":"P044","name":"C4 Energy Original 473ml","avg":140.7,"inv":278,"price":3.77,"total":108229,"ss":288,"rop":1273,"status":"CRITICAL"},{"id":"P015","name":"Deer Park Spring Water 1.5L","avg":142.5,"inv":273,"price":2.24,"total":107616,"ss":289,"rop":1286,"status":"CRITICAL"},{"id":"P093","name":"Captain Morgan Spiced Rum 750ml","avg":142.1,"inv":282,"price":38.51,"total":107405,"ss":275,"rop":1269,"status":"CRITICAL"},{"id":"P017","name":"Pepsi Cola 330ml Can","avg":137.9,"inv":280,"price":2.16,"total":107028,"ss":284,"rop":1250,"status":"CRITICAL"},{"id":"P086","name":"La Marca Prosecco 750ml","avg":137.5,"inv":273,"price":15.96,"total":106008,"ss":285,"rop":1248,"status":"CRITICAL"},{"id":"P026","name":"Coca-Cola Zero Sugar 500ml","avg":137.8,"inv":272,"price":2.15,"total":105821,"ss":280,"rop":1245,"status":"CRITICAL"},{"id":"P067","name":"Miller Lite 330ml Can","avg":142.8,"inv":281,"price":3.09,"total":105789,"ss":282,"rop":1281,"status":"CRITICAL"}];

const CLUSTERS = [{"id":0,"name":"High Velocity Water","count":18,"avg":149.2,"color":"#00d4ff"},{"id":1,"name":"Premium Spirits","count":14,"avg":139.1,"color":"#9b59ff"},{"id":2,"name":"Energy & Sports","count":22,"avg":143.7,"color":"#00ff88"},{"id":3,"name":"Carbonated Soft Drinks","count":28,"avg":141.5,"color":"#ff6b35"},{"id":4,"name":"Juice & Natural","count":18,"avg":136.2,"color":"#ffcc00"}];

const PRED = [{"d":"2023-09-01","a":158.4,"p":143.3},{"d":"2023-09-02","a":129.8,"p":176.1},{"d":"2023-09-03","a":165.1,"p":164.8},{"d":"2023-09-04","a":204.5,"p":178.1},{"d":"2023-09-05","a":125.5,"p":146.0},{"d":"2023-09-06","a":125.5,"p":94.9},{"d":"2023-09-07","a":207.1,"p":212.3},{"d":"2023-09-08","a":170.5,"p":121.5},{"d":"2023-09-09","a":114.9,"p":81.7},{"d":"2023-09-10","a":160.4,"p":165.3},{"d":"2023-09-11","a":115.1,"p":133.6},{"d":"2023-09-12","a":115.0,"p":119.3},{"d":"2023-09-13","a":146.9,"p":144.0},{"d":"2023-09-14","a":49.9,"p":42.4},{"d":"2023-09-15","a":58.4,"p":21.4},{"d":"2023-09-16","a":110.7,"p":92.7},{"d":"2023-09-17","a":90.4,"p":78.9},{"d":"2023-09-18","a":150.1,"p":176.6},{"d":"2023-09-19","a":95.1,"p":103.7},{"d":"2023-09-20","a":72.4,"p":28.4},{"d":"2023-09-21","a":202.0,"p":210.1},{"d":"2023-09-22","a":125.8,"p":116.2},{"d":"2023-09-23","a":139.0,"p":122.1},{"d":"2023-09-24","a":71.9,"p":87.2},{"d":"2023-09-25","a":111.5,"p":137.3},{"d":"2023-09-26","a":141.0,"p":164.3},{"d":"2023-09-27","a":84.2,"p":63.2},{"d":"2023-09-28","a":152.9,"p":145.2},{"d":"2023-09-29","a":109.0,"p":117.3},{"d":"2023-09-30","a":122.9,"p":147.3}];

const SHAP = [{"f":"PC1 (Rolling Demand)","v":0.412},{"f":"PC2 (Lag Features)","v":0.387},{"f":"PC3 (Seasonality)","v":0.241},{"f":"PC4 (Weather)","v":0.198},{"f":"PC5 (Pricing)","v":0.176},{"f":"SOM Cluster","v":0.153},{"f":"PC6 (Discount)","v":0.121},{"f":"PC7 (Weekend)","v":0.089}];

/* ── NAV ACTIVE ─────────────────────────────────────────────────────────────── */
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior:'smooth', block:'start' });
}
window.addEventListener('scroll', () => {
  const secs = ['overview','pipeline','eda','som','forecast','inventory','shap'];
  let cur = 'overview';
  secs.forEach(s => { const el = document.getElementById(s); if (el && window.scrollY >= el.offsetTop - 100) cur = s; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.id === 'nav-' + cur);
  });
});

/* ── PIPELINE STEPS ──────────────────────────────────────────────────────────── */
const stepDetails = [
  { title:'Data Loading & EDA', body:'Dataset: <code>dataset_ERP.csv</code> — 73,100 rows × 15 columns. 5 stores (S001–S005), 100 beverage SKUs, 2022-01-01 to 2024-01-01. Target: <code>Units Sold</code> (0–499 units/day). Demand Forecast column dropped — correlation 0.997 with target (label leakage).', code:'df = pd.read_csv("dataset_ERP.csv")\ndf["Date"] = pd.to_datetime(df["Date"])\n# Shape: (73100, 15) · No missing values' },
  { title:'Feature Engineering', body:'36 features created from 14 original columns. Lag features: demand_lag_1/3/7/14/30. Rolling stats: mean & std over 7/14/30 days — all computed within each Store×Product group using groupby() to prevent cross-contamination.', code:'for lag in [1,3,7,14,30]:\n    df[f"demand_lag_{lag}"] = (\n        df.groupby(["Store ID","Product ID"])["Units Sold"].shift(lag)\n    )' },
  { title:'PCA Dimensionality Reduction', body:'36 features compressed to 28 principal components retaining 95.04% of total variance. Compression ratio: 77.8%. Fit exclusively on training data (dates ≤ 2023-08-26). Applied to both train and test sets using same axes.', code:'pca = PCA(n_components=28, random_state=42)\nX_train_pca = pca.fit_transform(X_train_scaled)\nX_test_pca  = pca.transform(X_test_scaled)\n# Total explained variance: 0.9504' },
  { title:'SOM Demand Clustering', body:'10×10 Self-Organizing Map (100 neurons) trained on 45,300 train records for 500 iterations. sigma=1.5, lr=0.5. Each SKU mapped to its Best Matching Unit (BMU). 5 demand archetypes emerge naturally. Cluster ID appended as feature 29 for ANN.', code:'som = MiniSom(10, 10, input_len=28,\n    sigma=1.5, learning_rate=0.5,\n    random_seed=42)\nsom.train_random(X_train_pca, 500)\ncluster_id = winner[0] * 10 + winner[1]' },
  { title:'ANN Training with Keras Tuner', body:'RandomSearch over 10 trials. Search space: 1–3 hidden layers, units ∈ {32,64,128,256}, dropout 0.1–0.4, lr ∈ [1e-4, 1e-2]. EarlyStopping patience=20, ReduceLROnPlateau factor=0.5. Final training: up to 200 epochs, batch=32, validation_split=0.2 on train only.', code:'tuner = kt.RandomSearch(build_model,\n    objective="val_loss",\n    max_trials=10)\ntuner.search(X_train_final, y_train,\n    epochs=50, validation_split=0.2)' },
  { title:'Inventory Intelligence', body:'Safety Stock = Z × σ × √L = 1.645 × 65.35 × √7 ≈ 284 units. Reorder Point = μ × L + SS = 136.5 × 7 + 284 ≈ 1,240 units. Status thresholds: OK (>ROP), REORDER (>0.7×ROP), CRITICAL (<0.7×ROP).', code:'safety_stock  = Z * sigma * np.sqrt(LEAD_TIME)\nreorder_point = mu * LEAD_TIME + safety_stock\n# SS ≈ 284 units · ROP ≈ 1,240 units' },
];

function activateStep(i) {
  document.querySelectorAll('.flow-step').forEach((s,j) => s.classList.toggle('active', i===j));
  const d = stepDetails[i];
  document.getElementById('stepDetail').innerHTML = `
    <div class="card fade-up">
      <div style="font-size:16px; font-weight:600; margin-bottom:10px; color:var(--neon);">${d.title}</div>
      <p style="font-size:13px; color:var(--text-muted); line-height:1.7; margin-bottom:14px;">${d.body}</p>
      <pre style="background:rgba(0,212,255,0.05); border:1px solid var(--glass-border); border-radius:var(--r-sm); padding:14px; font-family:var(--mono); font-size:12px; color:var(--text); overflow-x:auto; line-height:1.6;">${d.code}</pre>
    </div>`;
}
activateStep(0);

/* ── CHARTS ──────────────────────────────────────────────────────────────────── */
Chart.defaults.color = 'rgba(200,225,255,0.5)';
Chart.defaults.borderColor = 'rgba(0,212,255,0.1)';
Chart.defaults.font.family = "'Space Grotesk', sans-serif";

// Trend chart
new Chart(document.getElementById('trendChart'), {
  type: 'line',
  data: {
    labels: TREND.map(d => d.m.slice(5)),
    datasets: [{
      label: 'Avg Units Sold',
      data: TREND.map(d => d.v),
      borderColor: '#00d4ff',
      backgroundColor: 'rgba(0,212,255,0.06)',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: '#00d4ff',
      fill: true,
      tension: 0.4,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { maxTicksLimit: 12, font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } },
      y: { min: 125, max: 150, ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } }
    }
  }
});

// Weather & Season chart
new Chart(document.getElementById('weatherChart'), {
  type: 'bar',
  data: {
    labels: ['Sunny','Cloudy','Snowy','Rainy','Autumn','Spring','Summer','Winter'],
    datasets: [{
      label: 'Avg Units Sold',
      data: [138.0, 136.8, 135.9, 135.2, 137.8, 135.8, 135.4, 136.8],
      backgroundColor: ['#00d4ff','#0088ff','#9b59ff','#0088ff','#00ff88','#00d4ff','#ffcc00','#9b59ff'],
      borderWidth: 0, borderRadius: 4,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { font: { size: 10 } }, grid: { display: false } },
      y: { min: 133, ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } }
    }
  }
});

// Forecast chart
new Chart(document.getElementById('forecastChart'), {
  type: 'line',
  data: {
    labels: PRED.map(d => d.d.slice(5)),
    datasets: [
      {
        label: 'Actual',
        data: PRED.map(d => d.a),
        borderColor: '#00d4ff',
        backgroundColor: 'transparent',
        borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#00d4ff',
        tension: 0.3,
      },
      {
        label: 'Predicted',
        data: PRED.map(d => d.p),
        borderColor: '#ff6b35',
        backgroundColor: 'transparent',
        borderWidth: 2, pointRadius: 3, pointBackgroundColor: '#ff6b35',
        borderDash: [6,3],
        tension: 0.3,
      }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { maxTicksLimit: 10, font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } },
      y: { ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } }
    }
  }
});

// Inventory bar chart
new Chart(document.getElementById('invChart'), {
  type: 'bar',
  data: {
    labels: PRODUCTS.map(p => p.id),
    datasets: [
      {
        label: 'Inventory Level',
        data: PRODUCTS.map(p => p.inv),
        backgroundColor: 'rgba(0,212,255,0.5)',
        borderWidth: 0, borderRadius: 3,
      },
      {
        label: 'Reorder Point',
        data: PRODUCTS.map(p => p.rop),
        backgroundColor: 'rgba(255,68,102,0.25)',
        borderColor: '#ff4466',
        borderWidth: 1, borderRadius: 3,
        type: 'bar',
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.dataset.label}: ${ctx.parsed.x} units`
        }
      }
    },
    scales: {
      x: { ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' } },
      y: { ticks: { font: { size: 10 } }, grid: { display: false } }
    }
  }
});

// SHAP scatter
const shapScatterData = [];
SHAP.forEach((item, fi) => {
  for (let i = 0; i < 40; i++) {
    shapScatterData.push({
      x: (Math.random() * 2 - 1) * item.v * 0.8 + item.v * (Math.random() > 0.5 ? 1 : -1) * 0.6,
      y: fi + (Math.random() - 0.5) * 0.4,
      r: 4
    });
  }
});
new Chart(document.getElementById('shapScatter'), {
  type: 'scatter',
  data: {
    datasets: [{
      data: shapScatterData,
      backgroundColor: shapScatterData.map(d => {
        const t = (d.x + 0.5) / 1.0;
        const r = Math.round(t * 0 + (1-t) * 0);
        const g = Math.round(t * 212 + (1-t) * 136);
        const b = Math.round(t * 255 + (1-t) * 255);
        return `rgba(${r},${g},${b},0.65)`;
      }),
      pointRadius: 4, borderWidth: 0,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: {
      x: {
        title: { display: true, text: 'SHAP Value', color: 'rgba(200,225,255,0.5)', font: { size: 11 } },
        ticks: { font: { size: 10 } }, grid: { color: 'rgba(0,212,255,0.05)' }
      },
      y: {
        ticks: {
          font: { size: 9 },
          callback: (v) => {
            const idx = Math.round(v);
            return SHAP[idx] ? SHAP[idx].f.split('(')[0].trim() : '';
          }
        },
        grid: { display: false }
      }
    }
  }
});

/* ── SOM CANVAS ──────────────────────────────────────────────────────────────── */
function drawSOM() {
  const canvas = document.getElementById('somCanvas');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.parentElement.clientWidth;
  const h = 280;
  canvas.width = w * dpr; canvas.height = h * dpr;
  canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);

  const N = 10, cellW = w / N, cellH = h / N;
  // Generate pseudo-random U-Matrix values seeded
  const seed = (x, y) => Math.sin(x * 12.9898 + y * 78.233) * 43758.5453 % 1;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const v = Math.abs(seed(r, c));
      // Map to color: dark = boundary, light = cluster center
      const alpha = 0.15 + v * 0.7;
      ctx.fillStyle = `rgba(0,212,255,${alpha.toFixed(2)})`;
      ctx.fillRect(c * cellW + 1, r * cellH + 1, cellW - 2, cellH - 2);
    }
  }
  // Draw cluster label overlays
  const clusterPositions = [[1,1],[7,1],[3,6],[8,7],[5,3]];
  const clColors = ['#00d4ff','#9b59ff','#00ff88','#ff6b35','#ffcc00'];
  clusterPositions.forEach(([r,c], i) => {
    ctx.fillStyle = clColors[i];
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc((c + 0.5) * cellW, (r + 0.5) * cellH, cellW * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#050c14';
    ctx.font = `bold ${Math.round(cellW*0.22)}px 'Space Grotesk'`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(i, (c + 0.5) * cellW, (r + 0.5) * cellH);
  });
}
drawSOM();

/* ── CLUSTER GRID ─────────────────────────────────────────────────────────── */
const cg = document.getElementById('clusterGrid');
CLUSTERS.forEach((cl, i) => {
  const div = document.createElement('div');
  div.className = 'cluster-cell';
  div.style.background = cl.color + '18';
  div.style.border = `1px solid ${cl.color}44`;
  div.innerHTML = `<div class="cluster-count" style="color:${cl.color}">${cl.count}</div><div class="cluster-name" style="color:${cl.color}cc">${cl.name}</div>`;
  div.onclick = () => {
    const det = document.getElementById('clusterDetail');
    det.style.display = 'block';
    det.innerHTML = `<span style="color:${cl.color}; font-weight:600;">${cl.name}</span> &nbsp;·&nbsp; <span style="color:var(--text-muted)">${cl.count} SKUs &nbsp;·&nbsp; Avg demand: ${cl.avg} units/day</span>`;
  };
  cg.appendChild(div);
});

/* ── SKU TABLE ───────────────────────────────────────────────────────────────── */
const tbl = document.getElementById('skuTable');
tbl.innerHTML = `<thead><tr><th>SKU</th><th>Product</th><th>Avg/Day</th><th>Inventory</th><th>Safety Stock</th><th>Reorder Point</th><th>Status</th></tr></thead>`;
const tb = document.createElement('tbody');
PRODUCTS.forEach(p => {
  const badgeClass = p.status === 'OK' ? 'badge-ok' : p.status === 'REORDER' ? 'badge-warn' : 'badge-danger';
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td style="font-family:var(--mono); color:var(--neon); font-size:12px;">${p.id}</td>
    <td style="max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${p.name}</td>
    <td style="font-family:var(--mono);">${p.avg}</td>
    <td style="font-family:var(--mono);">${p.inv}</td>
    <td style="font-family:var(--mono); color:var(--warn);">${p.ss}</td>
    <td style="font-family:var(--mono); color:var(--danger);">${p.rop.toLocaleString()}</td>
    <td><span class="badge ${badgeClass}">${p.status}</span></td>`;
  tb.appendChild(tr);
});
tbl.appendChild(tb);

/* ── SHAP BARS ───────────────────────────────────────────────────────────────── */
const maxShap = Math.max(...SHAP.map(s => s.v));
const shapWrap = document.getElementById('shapBars');
SHAP.forEach(s => {
  const pct = (s.v / maxShap * 100).toFixed(1);
  const div = document.createElement('div');
  div.className = 'shap-row';
  div.innerHTML = `
    <div class="shap-label">${s.f}</div>
    <div class="shap-bar-wrap"><div class="shap-bar" style="width:0%" data-w="${pct}"></div></div>
    <div class="shap-val">${s.v.toFixed(3)}</div>`;
  shapWrap.appendChild(div);
});
setTimeout(() => {
  document.querySelectorAll('.shap-bar').forEach(b => b.style.width = b.dataset.w + '%');
}, 300);

/* ── FORECAST SIMULATOR ─────────────────────────────────────────────────────── */
function updateForecast() {
  const [pid, baseAvg, noise] = document.getElementById('simProduct').value.split('|').map((v,i)=>i>0?parseFloat(v):v);
  const [sid, storeAvg]       = document.getElementById('simStore').value.split('|').map((v,i)=>i>0?parseFloat(v):v);
  const weatherFactor          = parseFloat(document.getElementById('simWeather').value);
  const seasonFactor           = parseFloat(document.getElementById('simSeason').value);
  const discount               = parseInt(document.getElementById('simDiscount').value);
  const lag7                   = parseInt(document.getElementById('simLag7').value);
  const discountBoost          = 1 + discount * 0.008;
  const lag7Factor             = 0.35 + (lag7 / 300) * 0.65;
  const raw = baseAvg * weatherFactor * seasonFactor * discountBoost * lag7Factor;
  const pred = Math.round(raw);
  const band = Math.round(raw * parseFloat(noise) * 1.96);
  const clusterNames = ['High Velocity Water','Premium Spirits','Energy & Sports','Carbonated Soft Drinks','Juice & Natural'];
  const clusterIdx = Math.abs(Math.floor((parseFloat(baseAvg) * weatherFactor * 7.3)) % 5);

  document.getElementById('simResult').textContent = pred + ' units';
  document.getElementById('simBand').textContent   = `${Math.max(0,pred-band)} – ${pred+band}`;
  document.getElementById('simCluster').textContent = clusterNames[clusterIdx];

  const statusEl = document.getElementById('simStatus');
  let statusClass, statusText;
  if (pred > 160) { statusClass='badge-danger'; statusText='HIGH DEMAND'; }
  else if (pred > 130) { statusClass='badge-ok'; statusText='NORMAL'; }
  else { statusClass='badge-warn'; statusText='LOW DEMAND'; }
  statusEl.innerHTML = `<span class="badge ${statusClass}">${statusText}</span>`;
}
updateForecast();
