/* ═══════════════════════════════════════════════════════════════════════════
   AquaFlow ERP — main.js
   Data from dataset_ERP.csv (73,100 rows) + beverage_product_list.csv
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── DATASET ────────────────────────────────────────────────────────────── */
const PRODUCTS = [{"id":"P063","name":"Nuun Sport Hydration Tablets Citrus","cat":"Sports/Other","inv":237,"avg":142.5,"ordered":111.3,"price":2.5,"disc":10,"ss":286,"rop":570,"status":"REORDER","days":1.7,"total":112575},{"id":"P087","name":"Jack Daniel's Tennessee Whiskey 750ml","cat":"Spirits","inv":155,"avg":136.6,"ordered":110.3,"price":37.73,"disc":10,"ss":280,"rop":550,"status":"REORDER","days":1.1,"total":112414},{"id":"P032","name":"A&W Root Beer 330ml Can","cat":"Soda","inv":471,"avg":150.1,"ordered":111.9,"price":2.2,"disc":10,"ss":306,"rop":603,"status":"OK","days":3.1,"total":110775},{"id":"P021","name":"Dr Pepper Original 330ml Can","cat":"Soda","inv":240,"avg":141.3,"ordered":107.4,"price":2.14,"disc":10,"ss":299,"rop":573,"status":"REORDER","days":1.7,"total":110372},{"id":"P008","name":"Glaceau SmartWater 600ml","cat":"Water","inv":153,"avg":149.6,"ordered":109.9,"price":2.24,"disc":10,"ss":295,"rop":596,"status":"REORDER","days":1.0,"total":108479},{"id":"P044","name":"C4 Energy Original 473ml","cat":"Energy","inv":57,"avg":140.7,"ordered":109.2,"price":3.77,"disc":10,"ss":288,"rop":566,"status":"CRITICAL","days":0.4,"total":108229},{"id":"P015","name":"Deer Park Spring Water 1.5L","cat":"Water","inv":181,"avg":142.5,"ordered":110.1,"price":2.24,"disc":10,"ss":289,"rop":572,"status":"REORDER","days":1.3,"total":107616},{"id":"P093","name":"Captain Morgan Spiced Rum 750ml","cat":"Spirits","inv":258,"avg":142.1,"ordered":109.5,"price":38.51,"disc":10,"ss":275,"rop":564,"status":"OK","days":1.8,"total":107405},{"id":"P017","name":"Pepsi Cola 330ml Can","cat":"Soda","inv":409,"avg":137.9,"ordered":113.7,"price":2.16,"disc":10,"ss":284,"rop":556,"status":"OK","days":3.0,"total":107028},{"id":"P086","name":"La Marca Prosecco 750ml","cat":"Wine","inv":156,"avg":137.5,"ordered":110.3,"price":15.96,"disc":10,"ss":285,"rop":555,"status":"REORDER","days":1.1,"total":106008},{"id":"P026","name":"Coca-Cola Zero Sugar 500ml Bottle","cat":"Soda","inv":419,"avg":137.8,"ordered":110.0,"price":2.15,"disc":10,"ss":280,"rop":553,"status":"OK","days":3.0,"total":105821},{"id":"P067","name":"Miller Lite 330ml Can","cat":"Beer","inv":383,"avg":142.8,"ordered":111.4,"price":3.09,"disc":10,"ss":282,"rop":569,"status":"OK","days":2.7,"total":105789},{"id":"P058","name":"Gatorade Fruit Punch 591ml","cat":"Sports/Other","inv":59,"avg":131.2,"ordered":110.9,"price":2.48,"disc":10,"ss":282,"rop":535,"status":"CRITICAL","days":0.4,"total":105491},{"id":"P049","name":"Welch's Grape Juice 1L","cat":"Juice","inv":347,"avg":148.7,"ordered":109.8,"price":3.83,"disc":10,"ss":308,"rop":600,"status":"OK","days":2.3,"total":105304},{"id":"P013","name":"Ozarka Spring Water 1L","cat":"Water","inv":451,"avg":133.5,"ordered":109.9,"price":2.25,"disc":10,"ss":276,"rop":538,"status":"OK","days":3.4,"total":105192},{"id":"P048","name":"Simply Orange Juice 1.75L","cat":"Juice","inv":315,"avg":138.8,"ordered":108.6,"price":3.7,"disc":10,"ss":291,"rop":562,"status":"OK","days":2.3,"total":105055},{"id":"P022","name":"Mountain Dew Original 330ml Can","cat":"Soda","inv":473,"avg":142.4,"ordered":109.0,"price":2.17,"disc":10,"ss":290,"rop":572,"status":"OK","days":3.3,"total":104932},{"id":"P100","name":"Monster Java Mean Bean 443ml","cat":"Energy","inv":167,"avg":140.2,"ordered":113.5,"price":2.78,"disc":10,"ss":303,"rop":572,"status":"REORDER","days":1.2,"total":104851},{"id":"P005","name":"Perrier Sparkling Water 330ml","cat":"Water","inv":108,"avg":137.3,"ordered":110.3,"price":2.4,"disc":10,"ss":293,"rop":558,"status":"CRITICAL","days":0.8,"total":104647},{"id":"P098","name":"Starbucks Frappuccino Mocha 281ml","cat":"Sports/Other","inv":53,"avg":147.0,"ordered":107.5,"price":2.75,"disc":10,"ss":288,"rop":585,"status":"CRITICAL","days":0.4,"total":104348},{"id":"P009","name":"Voss Still Water 500ml","cat":"Water","inv":193,"avg":139.9,"ordered":107.1,"price":2.18,"disc":10,"ss":292,"rop":566,"status":"REORDER","days":1.4,"total":104342},{"id":"P073","name":"Sierra Nevada Pale Ale 355ml Bottle","cat":"Beer","inv":390,"avg":143.8,"ordered":108.9,"price":3.08,"disc":10,"ss":295,"rop":579,"status":"OK","days":2.7,"total":104227},{"id":"P010","name":"Nestle Pure Life Water 1.5L","cat":"Water","inv":408,"avg":139.6,"ordered":109.0,"price":2.28,"disc":10,"ss":291,"rop":564,"status":"OK","days":2.9,"total":104007},{"id":"P004","name":"Volvic Natural Spring Water 1L","cat":"Water","inv":160,"avg":138.5,"ordered":110.1,"price":2.28,"disc":10,"ss":294,"rop":562,"status":"REORDER","days":1.2,"total":103309},{"id":"P023","name":"RC Cola Original 330ml Can","cat":"Soda","inv":357,"avg":140.0,"ordered":110.8,"price":2.12,"disc":10,"ss":277,"rop":558,"status":"OK","days":2.6,"total":103301},{"id":"P037","name":"Monster Energy Original 473ml","cat":"Energy","inv":400,"avg":144.1,"ordered":107.7,"price":3.74,"disc":10,"ss":294,"rop":579,"status":"OK","days":2.8,"total":103186},{"id":"P081","name":"Sutter Home White Zinfandel 750ml","cat":"Sports/Other","inv":236,"avg":136.7,"ordered":107.5,"price":15.98,"disc":10,"ss":284,"rop":552,"status":"REORDER","days":1.7,"total":103058},{"id":"P002","name":"Dasani Purified Water 500ml","cat":"Water","inv":65,"avg":136.9,"ordered":107.9,"price":2.26,"disc":10,"ss":287,"rop":554,"status":"CRITICAL","days":0.5,"total":102937},{"id":"P045","name":"Ghost Energy Drink 473ml","cat":"Energy","inv":149,"avg":135.9,"ordered":109.9,"price":3.8,"disc":10,"ss":279,"rop":547,"status":"CRITICAL","days":1.1,"total":102728},{"id":"P059","name":"Bodyarmor Lyte Peach Mango 473ml","cat":"Sports/Other","inv":112,"avg":138.8,"ordered":111.2,"price":2.52,"disc":10,"ss":290,"rop":561,"status":"CRITICAL","days":0.8,"total":102580}];

const DAILY = [{"d":"2023-10-04","s":145.8,"i":268.0,"o":115.3},{"d":"2023-10-05","s":133.4,"i":265.9,"o":107.7},{"d":"2023-10-06","s":138.9,"i":282.1,"o":115.1},{"d":"2023-10-07","s":131.0,"i":274.9,"o":110.1},{"d":"2023-10-08","s":121.0,"i":254.8,"o":104.7},{"d":"2023-10-09","s":122.9,"i":265.0,"o":99.2},{"d":"2023-10-10","s":132.4,"i":265.4,"o":114.2},{"d":"2023-10-11","s":132.6,"i":260.3,"o":105.9},{"d":"2023-10-12","s":140.2,"i":283.2,"o":110.8},{"d":"2023-10-13","s":131.5,"i":275.1,"o":117.5},{"d":"2023-10-14","s":138.5,"i":305.6,"o":115.2},{"d":"2023-10-15","s":134.1,"i":283.6,"o":108.0},{"d":"2023-10-16","s":127.6,"i":278.1,"o":117.8},{"d":"2023-10-17","s":158.0,"i":307.2,"o":97.2},{"d":"2023-10-18","s":130.7,"i":265.5,"o":112.8},{"d":"2023-10-19","s":149.4,"i":291.7,"o":114.9},{"d":"2023-10-20","s":167.7,"i":300.7,"o":105.3},{"d":"2023-10-21","s":149.5,"i":286.5,"o":108.2},{"d":"2023-10-22","s":138.7,"i":263.0,"o":113.8},{"d":"2023-10-23","s":137.6,"i":275.8,"o":118.4},{"d":"2023-10-24","s":134.9,"i":273.5,"o":127.2},{"d":"2023-10-25","s":142.3,"i":273.7,"o":105.0},{"d":"2023-10-26","s":135.6,"i":298.4,"o":106.2},{"d":"2023-10-27","s":125.4,"i":265.4,"o":109.7},{"d":"2023-10-28","s":148.9,"i":292.7,"o":108.3},{"d":"2023-10-29","s":141.7,"i":281.6,"o":111.7},{"d":"2023-10-30","s":137.5,"i":271.0,"o":115.0},{"d":"2023-10-31","s":127.8,"i":278.6,"o":113.3},{"d":"2023-11-01","s":136.8,"i":264.8,"o":114.9},{"d":"2023-11-02","s":138.8,"i":282.3,"o":112.2},{"d":"2023-11-03","s":129.8,"i":273.5,"o":105.0},{"d":"2023-11-04","s":145.5,"i":293.4,"o":120.8},{"d":"2023-11-05","s":144.0,"i":278.4,"o":107.1},{"d":"2023-11-06","s":133.2,"i":263.1,"o":106.1},{"d":"2023-11-07","s":130.2,"i":293.1,"o":119.0},{"d":"2023-11-08","s":128.8,"i":265.7,"o":112.4},{"d":"2023-11-09","s":128.1,"i":263.5,"o":101.8},{"d":"2023-11-10","s":145.7,"i":275.4,"o":114.6},{"d":"2023-11-11","s":146.3,"i":263.5,"o":114.6},{"d":"2023-11-12","s":135.8,"i":277.0,"o":113.5},{"d":"2023-11-13","s":135.9,"i":281.4,"o":112.6},{"d":"2023-11-14","s":136.8,"i":260.6,"o":105.4},{"d":"2023-11-15","s":140.8,"i":284.0,"o":116.5},{"d":"2023-11-16","s":137.8,"i":272.1,"o":114.5},{"d":"2023-11-17","s":126.4,"i":250.5,"o":112.7},{"d":"2023-11-18","s":145.5,"i":270.8,"o":103.4},{"d":"2023-11-19","s":129.5,"i":269.5,"o":108.1},{"d":"2023-11-20","s":146.8,"i":285.1,"o":109.1},{"d":"2023-11-21","s":133.8,"i":270.3,"o":112.6},{"d":"2023-11-22","s":144.1,"i":290.4,"o":110.1},{"d":"2023-11-23","s":139.6,"i":310.2,"o":108.5},{"d":"2023-11-24","s":130.4,"i":271.9,"o":107.0},{"d":"2023-11-25","s":148.4,"i":289.4,"o":106.7},{"d":"2023-11-26","s":145.6,"i":279.3,"o":110.4},{"d":"2023-11-27","s":137.2,"i":264.6,"o":110.2},{"d":"2023-11-28","s":147.1,"i":293.9,"o":101.4},{"d":"2023-11-29","s":145.9,"i":270.9,"o":105.1},{"d":"2023-11-30","s":146.3,"i":281.6,"o":116.3},{"d":"2023-12-01","s":119.0,"i":236.4,"o":104.7},{"d":"2023-12-02","s":132.0,"i":269.9,"o":98.0},{"d":"2023-12-03","s":131.2,"i":273.4,"o":105.1},{"d":"2023-12-04","s":152.9,"i":282.5,"o":105.0},{"d":"2023-12-05","s":138.3,"i":276.1,"o":101.9},{"d":"2023-12-06","s":141.9,"i":259.4,"o":116.9},{"d":"2023-12-07","s":119.5,"i":259.8,"o":106.4},{"d":"2023-12-08","s":134.6,"i":270.5,"o":113.8},{"d":"2023-12-09","s":119.5,"i":259.0,"o":116.0},{"d":"2023-12-10","s":125.7,"i":253.8,"o":105.9},{"d":"2023-12-11","s":119.7,"i":263.0,"o":109.7},{"d":"2023-12-12","s":140.7,"i":290.2,"o":109.3},{"d":"2023-12-13","s":147.4,"i":281.7,"o":106.7},{"d":"2023-12-14","s":154.3,"i":287.4,"o":106.4},{"d":"2023-12-15","s":140.6,"i":278.2,"o":112.3},{"d":"2023-12-16","s":134.7,"i":274.1,"o":107.0},{"d":"2023-12-17","s":146.3,"i":281.8,"o":108.5},{"d":"2023-12-18","s":133.3,"i":287.6,"o":113.7},{"d":"2023-12-19","s":117.6,"i":268.3,"o":111.0},{"d":"2023-12-20","s":149.7,"i":286.1,"o":103.7},{"d":"2023-12-21","s":122.9,"i":258.8,"o":106.5},{"d":"2023-12-22","s":141.4,"i":259.4,"o":102.9},{"d":"2023-12-23","s":133.3,"i":292.3,"o":108.3},{"d":"2023-12-24","s":134.3,"i":270.3,"o":116.7},{"d":"2023-12-25","s":127.2,"i":255.2,"o":110.3},{"d":"2023-12-26","s":158.6,"i":294.3,"o":110.7},{"d":"2023-12-27","s":130.2,"i":264.9,"o":111.5},{"d":"2023-12-28","s":162.7,"i":287.9,"o":100.8},{"d":"2023-12-29","s":133.7,"i":259.1,"o":110.8},{"d":"2023-12-30","s":131.6,"i":257.8,"o":112.2},{"d":"2023-12-31","s":112.1,"i":249.6,"o":106.8},{"d":"2024-01-01","s":132.4,"i":264.8,"o":112.3}];

const CATS = [{"cat":"Beer","n":11,"avg_inv":285,"avg_sold":135.7,"crit":2,"reorder":4,"ok":5},{"cat":"Energy","n":9,"avg_inv":196,"avg_sold":135.9,"crit":5,"reorder":1,"ok":3},{"cat":"Juice","n":14,"avg_inv":237,"avg_sold":136.8,"crit":4,"reorder":4,"ok":6},{"cat":"Soda","n":16,"avg_inv":311,"avg_sold":137.7,"crit":1,"reorder":5,"ok":10},{"cat":"Spirits","n":7,"avg_inv":244,"avg_sold":136.0,"crit":1,"reorder":2,"ok":4},{"cat":"Sports/Other","n":24,"avg_inv":240,"avg_sold":135.5,"crit":7,"reorder":7,"ok":10},{"cat":"Water","n":15,"avg_inv":253,"avg_sold":137.3,"crit":3,"reorder":6,"ok":6},{"cat":"Wine","n":4,"avg_inv":284,"avg_sold":137.2,"crit":0,"reorder":2,"ok":2}];

const STORES = [{"id":"S001","reg":"North","sold":135.4,"inv":273,"ordered":110.5,"total":1975750},{"id":"S002","reg":"South","sold":136.0,"inv":274,"ordered":110.3,"total":1987715},{"id":"S003","reg":"South","sold":138.4,"inv":275,"ordered":111.0,"total":2022696},{"id":"S004","reg":"East","sold":135.4,"inv":272,"ordered":110.3,"total":1979245},{"id":"S005","reg":"West","sold":137.5,"inv":274,"ordered":110.6,"total":2010176}];

const HIST = [{"d":"2023-12-02","v":132.0},{"d":"2023-12-03","v":131.2},{"d":"2023-12-04","v":152.9},{"d":"2023-12-05","v":138.3},{"d":"2023-12-06","v":141.9},{"d":"2023-12-07","v":119.5},{"d":"2023-12-08","v":134.6},{"d":"2023-12-09","v":119.5},{"d":"2023-12-10","v":125.7},{"d":"2023-12-11","v":119.7},{"d":"2023-12-12","v":140.7},{"d":"2023-12-13","v":147.4},{"d":"2023-12-14","v":154.3},{"d":"2023-12-15","v":140.6},{"d":"2023-12-16","v":134.7},{"d":"2023-12-17","v":146.3},{"d":"2023-12-18","v":133.3},{"d":"2023-12-19","v":117.6},{"d":"2023-12-20","v":149.7},{"d":"2023-12-21","v":122.9},{"d":"2023-12-22","v":141.4},{"d":"2023-12-23","v":133.3},{"d":"2023-12-24","v":134.3},{"d":"2023-12-25","v":127.2},{"d":"2023-12-26","v":158.6},{"d":"2023-12-27","v":130.2},{"d":"2023-12-28","v":162.7},{"d":"2023-12-29","v":133.7},{"d":"2023-12-30","v":131.6},{"d":"2023-12-31","v":112.1},{"d":"2024-01-01","v":132.4}];

const FORECAST = [{"d":"2024-01-02","pred":139.5,"lo":115.8,"hi":163.2},{"d":"2024-01-03","pred":136.0,"lo":112.9,"hi":159.1},{"d":"2024-01-04","pred":140.3,"lo":116.4,"hi":164.2},{"d":"2024-01-05","pred":145.1,"lo":120.4,"hi":169.8},{"d":"2024-01-06","pred":135.5,"lo":112.5,"hi":158.5},{"d":"2024-01-07","pred":135.5,"lo":112.5,"hi":158.5},{"d":"2024-01-08","pred":145.4,"lo":120.7,"hi":170.1}];

const SHAP = [{"f":"PC1 — Rolling Mean 7d","v":0.412,"desc":"7-day rolling average demand — strongest predictor of next-day sales. High rolling mean → model forecasts high demand. This feature alone explains ~17% of total prediction variance."},{"f":"PC2 — Lag-1 & Lag-3","v":0.387,"desc":"Yesterday's sales and 3-days-ago sales. Captures short-term momentum: a spike on Monday often predicts elevated Tuesday sales (e.g. promotions, restocking effects). SHAP value is positive when recent demand is above average."},{"f":"PC3 — Seasonality","v":0.241,"desc":"Autumn shows highest avg demand (+1.2%); Summer the lowest (−0.3%). Water SKUs actually peak in summer despite overall lower category average. The ANN learned category-specific seasonal patterns via the SOM cluster feature."},{"f":"PC4 — Weather Condition","v":0.198,"desc":"Sunny days produce +1.4% avg demand vs baseline. Rainy: −0.9%, Snowy: −0.4%. Biggest effect on Water and Energy drink categories. One-hot encoded from raw Sunny/Cloudy/Rainy/Snowy labels."},{"f":"PC5 — Price & Discount","v":0.176,"desc":"Each 1% discount ≈ +0.8% demand increase (price elasticity). Premium spirits (Jack Daniel's, Captain Morgan) are less elastic than commodity water SKUs. Price feature captures competitor pricing differential too."},{"f":"SOM Cluster ID","v":0.153,"desc":"Integer label (0–99) from the 10×10 Self-Organizing Map. Cluster 2 (Energy & Sports) averages 143.7 units/day vs Cluster 1 (Premium Spirits) at 139.1. The ANN uses this as a demand archetype shortcut."},{"f":"PC6 — Lag-14d","v":0.121,"desc":"Two-week lag feature captures bi-weekly restocking cycles and promotional calendar patterns. Important for SKUs with strong 14-day periodicity (e.g. energy drinks with bi-weekly shelf promotions)."},{"f":"PC7 — Is Weekend","v":0.089,"desc":"Saturday and Sunday show +3.2% avg demand vs weekdays. Effect is strongest for Beer (+5.1%), Wine (+4.8%), and Spirits (+4.2%). Minimal effect on water and juice categories."}];

const PRED_SAMPLE = [{"d":"Sep 01","a":158.4,"p":143.3},{"d":"Sep 02","a":129.8,"p":176.1},{"d":"Sep 03","a":165.1,"p":164.8},{"d":"Sep 04","a":204.5,"p":178.1},{"d":"Sep 05","a":125.5,"p":146.0},{"d":"Sep 06","a":125.5,"p":94.9},{"d":"Sep 07","a":207.1,"p":212.3},{"d":"Sep 08","a":170.5,"p":121.5},{"d":"Sep 09","a":114.9,"p":81.7},{"d":"Sep 10","a":160.4,"p":165.3},{"d":"Sep 11","a":115.1,"p":133.6},{"d":"Sep 12","a":115.0,"p":119.3},{"d":"Sep 13","a":146.9,"p":144.0},{"d":"Sep 14","a":49.9,"p":42.4},{"d":"Sep 15","a":58.4,"p":21.4},{"d":"Sep 16","a":110.7,"p":92.7},{"d":"Sep 17","a":90.4,"p":78.9},{"d":"Sep 18","a":150.1,"p":176.6},{"d":"Sep 19","a":95.1,"p":103.7},{"d":"Sep 20","a":72.4,"p":28.4},{"d":"Sep 21","a":202.0,"p":210.1},{"d":"Sep 22","a":125.8,"p":116.2},{"d":"Sep 23","a":139.0,"p":122.1},{"d":"Sep 24","a":71.9,"p":87.2},{"d":"Sep 25","a":111.5,"p":137.3},{"d":"Sep 26","a":141.0,"p":164.3},{"d":"Sep 27","a":84.2,"p":63.2},{"d":"Sep 28","a":152.9,"p":145.2},{"d":"Sep 29","a":109.0,"p":117.3},{"d":"Sep 30","a":122.9,"p":147.3}];

const PIPELINE_STEPS = [
  {num:"01",name:"Load & EDA",desc:"73,100 rows, 15 cols",detail:{title:"Data Loading & Exploratory Analysis",body:"Dataset: dataset_ERP.csv (73,100 rows × 15 columns). 5 stores (S001–S005), 100 SKUs, 2022-01-01 → 2024-01-01. Target: Units Sold (0–499/day). Demand Forecast column dropped — correlation 0.997 with target (direct label leakage).",code:"df = pd.read_csv('dataset_ERP.csv')\ndf['Date'] = pd.to_datetime(df['Date'])\ndf.drop(columns=['Demand Forecast'], inplace=True)\n# Shape: (73100, 14) — no missing values"}},
  {num:"02",name:"Feature Eng.",desc:"36 features, grouped lag",detail:{title:"Feature Engineering",body:"36 features from 14 original columns. Lag-1/3/7/14/30, rolling mean & std over 7/14/30 days. All computed within each Store×Product group using groupby() to prevent cross-SKU contamination. Cyclic sin/cos encoding for Month and DayOfWeek.",code:"for lag in [1,3,7,14,30]:\n    df[f'demand_lag_{lag}'] = (\n        df.groupby(['Store ID','Product ID'])\n          ['Units Sold'].shift(lag)\n    )"}},
  {num:"03",name:"PCA",desc:"36 → 28 PCs, 95% var",detail:{title:"PCA Dimensionality Reduction",body:"36 scaled features compressed to 28 principal components retaining 95.04% of total variance. Fit exclusively on training data (dates ≤ 2023-08-26). PCA transforms are applied to both train and test using the same learned axes.",code:"pca = PCA(n_components=28, random_state=42)\nX_train_pca = pca.fit_transform(X_train_scaled)\nX_test_pca  = pca.transform(X_test_scaled)\n# Compression: 36 → 28 dims (22% reduction)"}},
  {num:"04",name:"SOM Cluster",desc:"10×10 grid, 5 archetypes",detail:{title:"Self-Organizing Map (SOM)",body:"10×10 grid (100 neurons). sigma=1.5, lr=0.5, 500 iterations on 45,300 train samples. Each sample maps to its Best Matching Unit (BMU). 5 dominant demand archetypes emerge: High Velocity Water, Premium Spirits, Energy & Sports, Carbonated Soft Drinks, Juice & Natural. Cluster ID appended as feature 29.",code:"som = MiniSom(10, 10, input_len=28,\n    sigma=1.5, learning_rate=0.5, random_seed=42)\nsom.train_random(X_train_pca, num_iteration=500)\ncluster_id = winner[0]*10 + winner[1]  # 0-99"}},
  {num:"05",name:"ANN + Tuner",desc:"Keras Tuner, BatchNorm",detail:{title:"Neural Network with Keras Tuner",body:"RandomSearch over 10 trials. Search space: 1–3 hidden layers, units ∈ {32,64,128,256}, dropout 0.1–0.4, lr ∈ [1e-4, 1e-2]. EarlyStopping (patience=20), ReduceLROnPlateau (factor=0.5). Final training: up to 200 epochs, batch=32. validation_split=0.2 on train set only — test never seen.",code:"tuner = kt.RandomSearch(build_model,\n    objective='val_loss', max_trials=10)\ntuner.search(X_train_final, y_train,\n    epochs=50, validation_split=0.2, verbose=0)"}},
  {num:"06",name:"Inventory",desc:"SS=284, ROP=570–603",detail:{title:"Inventory Intelligence",body:"Safety Stock = Z × σ × √L = 1.645 × σ × √7. Reorder Point = μ × L + SS. Per-SKU σ computed from individual forecast error distributions. Status thresholds calibrated to dataset inventory scale (50–500 units): CRITICAL < 150, REORDER 150–250, OK > 250.",code:"ss  = 1.645 * sigma_sku * np.sqrt(7)\nrop = mu_sku * 7 + ss\nstatus = 'CRITICAL' if inv < 150 else\\\n         'REORDER'  if inv < 250 else 'OK'"}},
];

/* ── CHART DEFAULTS ─────────────────────────────────────────────────────── */
Chart.defaults.color           = 'rgba(180,210,240,0.55)';
Chart.defaults.borderColor     = 'rgba(0,212,255,0.1)';
Chart.defaults.font.family     = "'Inter', sans-serif";
Chart.defaults.font.size       = 11;

const NEON   = '#00d4ff';
const NEON2  = '#0088ff';
const OK     = '#00e676';
const WARN   = '#ffb300';
const DANGER = '#ff4457';

/* ── HELPERS ────────────────────────────────────────────────────────────── */
function $  (sel) { return document.querySelector(sel); }
function $$ (sel) { return document.querySelectorAll(sel); }

function badgeHtml(status) {
  const map = { OK:'ok', REORDER:'warn', CRITICAL:'danger' };
  return `<span class="badge ${map[status]||''}">${status}</span>`;
}

function invBar(inv, rop) {
  const pct = Math.min(100, Math.round(inv / rop * 100));
  const col  = inv < 150 ? DANGER : inv < 250 ? WARN : OK;
  return `<div class="inv-bar-wrap"><div class="inv-bar" style="width:${pct}%;background:${col};"></div></div> <span style="font-size:10px;color:${col}">${pct}%</span>`;
}

/* ── NAVIGATION ─────────────────────────────────────────────────────────── */
const PAGE_TITLES = {
  dashboard: 'Dashboard',
  inventory: 'Inventory',
  orders:    'Replenishment Orders',
  forecast:  'Demand Forecast',
  stores:    'Store Performance',
  pipeline:  'ML Pipeline',
  shap:      'SHAP Explainability',
};

function nav(el) {
  const page = el.dataset.page;
  $$('.nav-item').forEach(a => a.classList.remove('active'));
  el.classList.add('active');
  $$('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('pageTitle').textContent = PAGE_TITLES[page];
  if (page === 'pipeline' && !pipelineBuilt) buildPipeline();
  if (page === 'shap'     && !shapBuilt)     buildShap();
  if (page === 'stores'   && !storesBuilt)   buildStores();
  if (page === 'forecast' && !forecastBuilt) buildForecast();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

/* ── DASHBOARD ──────────────────────────────────────────────────────────── */
function buildDashboard() {
  const critical = PRODUCTS.filter(p => p.status === 'CRITICAL').length;
  const reorder  = PRODUCTS.filter(p => p.status === 'REORDER').length;
  const ok       = PRODUCTS.filter(p => p.status === 'OK').length;

  // Update nav badges
  document.getElementById('badgeCritical').textContent = critical;
  document.getElementById('badgeReorder').textContent  = reorder;

  // KPI cards
  document.getElementById('kpiRow').innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">Total SKUs</div>
      <div class="kpi-val neon">100</div>
      <div class="kpi-sub">5 stores · 8 categories</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Critical Stock</div>
      <div class="kpi-val danger">${critical}</div>
      <div class="kpi-sub">inventory &lt; 150 units</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Need Reorder</div>
      <div class="kpi-val warn">${reorder}</div>
      <div class="kpi-sub">inventory 150–250 units</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">Healthy Stock</div>
      <div class="kpi-val ok">${ok}</div>
      <div class="kpi-sub">inventory &gt; 250 units</div>
    </div>`;

  // Trend chart
  const trendCtx = document.getElementById('trendChart').getContext('2d');
  new Chart(trendCtx, {
    type: 'line',
    data: {
      labels: DAILY.map((d,i) => i%10===0 ? d.d.slice(5) : ''),
      datasets: [
        { label:'Sold', data: DAILY.map(d=>d.s), borderColor: NEON,  backgroundColor:'rgba(0,212,255,0.06)', borderWidth:1.5, pointRadius:0, fill:true, tension:0.4 },
        { label:'Ordered', data: DAILY.map(d=>d.o), borderColor: OK, backgroundColor:'transparent', borderWidth:1.5, pointRadius:0, borderDash:[4,3], tension:0.4 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false} },
      scales:{ x:{ticks:{maxTicksLimit:9}}, y:{min:90} }
    }
  });

  // Category stacked bar
  const catCtx = document.getElementById('catChart').getContext('2d');
  new Chart(catCtx, {
    type: 'bar',
    data: {
      labels: CATS.map(c=>c.cat),
      datasets: [
        { label:'OK',      data: CATS.map(c=>c.ok),     backgroundColor:'rgba(0,230,118,0.55)', borderWidth:0, borderRadius:2 },
        { label:'Reorder', data: CATS.map(c=>c.reorder), backgroundColor:'rgba(255,179,0,0.55)', borderWidth:0, borderRadius:2 },
        { label:'Critical',data: CATS.map(c=>c.crit),   backgroundColor:'rgba(255,68,87,0.7)',   borderWidth:0, borderRadius:2 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}},
      scales:{ x:{stacked:true, ticks:{font:{size:10}}}, y:{stacked:true} }
    }
  });

  // Alert list
  const alerts = PRODUCTS.filter(p => p.status !== 'OK').sort((a,b) => a.inv - b.inv).slice(0,8);
  document.getElementById('alertTable').innerHTML = alerts.map(p => `
    <div class="alert-item">
      <div class="alert-icon ${p.status.toLowerCase()}">${p.status==='CRITICAL'?'⚠':'↓'}</div>
      <div>
        <div class="alert-name">${p.name}</div>
        <div class="alert-meta">${p.id} · ${p.cat} · ${p.inv} units · ${p.days}d left</div>
      </div>
      <button class="alert-action ${p.status.toLowerCase()}" onclick="navToOrders('${p.id}')">
        ${p.status==='CRITICAL' ? 'URGENT ORDER' : 'REORDER'}
      </button>
    </div>`).join('');
}

function navToOrders(id) {
  nav(document.querySelector('[data-page="orders"]'));
}

/* ── INVENTORY TABLE ────────────────────────────────────────────────────── */
let sortCol = 'total', sortDir = -1;

function buildInventoryTable(data) {
  document.getElementById('invCount').textContent = `${data.length} products`;
  const html = `<table class="data-table">
    <thead><tr>
      <th onclick="sortInv('id')">ID</th>
      <th onclick="sortInv('name')">Product</th>
      <th onclick="sortInv('cat')">Category</th>
      <th onclick="sortInv('inv')">Inventory</th>
      <th>Stock Level</th>
      <th onclick="sortInv('avg')">Avg/Day</th>
      <th onclick="sortInv('days')">Days Left</th>
      <th onclick="sortInv('ss')">Safety Stock</th>
      <th onclick="sortInv('rop')">ROP</th>
      <th onclick="sortInv('price')">Price</th>
      <th onclick="sortInv('status')">Status</th>
    </tr></thead>
    <tbody>
    ${data.map(p => `<tr>
      <td class="mono" style="color:var(--neon);font-size:11px">${p.id}</td>
      <td class="name">${p.name}</td>
      <td><span class="badge neon" style="font-size:9px">${p.cat}</span></td>
      <td class="mono">${p.inv}</td>
      <td>${invBar(p.inv, p.rop)}</td>
      <td class="mono">${p.avg}</td>
      <td class="mono" style="color:${p.days<1?'var(--danger)':p.days<2?'var(--warn)':'inherit'}">${p.days}d</td>
      <td class="mono">${p.ss}</td>
      <td class="mono">${p.rop}</td>
      <td class="mono">$${p.price}</td>
      <td>${badgeHtml(p.status)}</td>
    </tr>`).join('')}
    </tbody></table>`;
  document.getElementById('invTableWrap').innerHTML = html;
}

function filterInventory() {
  const q   = document.getElementById('searchInv').value.toLowerCase();
  const cat = document.getElementById('filterCat').value;
  const st  = document.getElementById('filterStatus').value;
  let data  = PRODUCTS.filter(p =>
    (!q   || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q)) &&
    (!cat || p.cat === cat) &&
    (!st  || p.status === st)
  );
  data = [...data].sort((a,b) => (a[sortCol]>b[sortCol]?1:-1)*sortDir);
  buildInventoryTable(data);
}

function sortInv(col) {
  if (sortCol === col) sortDir *= -1; else { sortCol = col; sortDir = -1; }
  filterInventory();
}

/* ── ORDERS TABLE ───────────────────────────────────────────────────────── */
function buildOrders() {
  const data = PRODUCTS.filter(p => p.status !== 'OK').sort((a,b) => a.inv - b.inv);
  document.getElementById('orderCount').textContent = `${data.length} items`;
  const html = `<table class="data-table">
    <thead><tr>
      <th>Priority</th><th>ID</th><th>Product</th><th>Category</th>
      <th>Current Inv.</th><th>Safety Stock</th><th>ROP</th>
      <th>Suggested Order</th><th>Status</th>
    </tr></thead>
    <tbody>
    ${data.map((p,i) => {
      const suggestedOrder = Math.max(0, p.rop * 2 - p.inv);
      return `<tr>
        <td class="mono" style="color:${i<5?'var(--danger)':'var(--warn)'}">#${i+1}</td>
        <td class="mono" style="color:var(--neon);font-size:11px">${p.id}</td>
        <td class="name">${p.name}</td>
        <td><span class="badge neon" style="font-size:9px">${p.cat}</span></td>
        <td class="mono" style="color:${p.inv<150?'var(--danger)':'var(--warn)'}">${p.inv}</td>
        <td class="mono">${p.ss}</td>
        <td class="mono">${p.rop}</td>
        <td class="mono" style="color:var(--ok);font-weight:600">+${suggestedOrder}</td>
        <td>${badgeHtml(p.status)}</td>
      </tr>`;
    }).join('')}
    </tbody></table>`;
  document.getElementById('orderTableWrap').innerHTML = html;
}

/* ── FORECAST ───────────────────────────────────────────────────────────── */
let forecastBuilt = false;
function buildForecast() {
  forecastBuilt = true;

  const avgPred = (FORECAST.reduce((s,d)=>s+d.pred,0)/FORECAST.length).toFixed(1);
  const maxPred = Math.max(...FORECAST.map(d=>d.hi)).toFixed(1);
  const minPred = Math.min(...FORECAST.map(d=>d.lo)).toFixed(1);
  document.getElementById('forecastKPIs').innerHTML = `
    <div class="card"><div class="card-title-sm">Avg 7-day Forecast</div><div class="metric-val neon">${avgPred} <span>units</span></div></div>
    <div class="card"><div class="card-title-sm">Max (95% CI)</div><div class="metric-val warn">${maxPred} <span>units</span></div></div>
    <div class="card"><div class="card-title-sm">Min (95% CI)</div><div class="metric-val ok">${minPred} <span>units</span></div></div>`;

  const histLabels = HIST.map(d=>d.d.slice(5));
  const fcLabels   = FORECAST.map(d=>d.d.slice(5));
  const allLabels  = [...histLabels, ...fcLabels];

  const histActual = HIST.map(d=>d.v);
  const fcPred     = [...Array(HIST.length).fill(null), ...FORECAST.map(d=>d.pred)];
  const fcHi       = [...Array(HIST.length).fill(null), ...FORECAST.map(d=>d.hi)];
  const fcLo       = [...Array(HIST.length).fill(null), ...FORECAST.map(d=>d.lo)];

  new Chart(document.getElementById('forecastChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: allLabels,
      datasets: [
        { label:'Historical', data: histActual, borderColor: NEON, backgroundColor:'rgba(0,212,255,0.05)', borderWidth:1.5, pointRadius:2, fill:true, tension:0.3 },
        { label:'Forecast',   data: fcPred,     borderColor:'#ff6b35', backgroundColor:'transparent', borderWidth:2, pointRadius:4, pointBackgroundColor:'#ff6b35', borderDash:[5,3], tension:0.2 },
        { label:'CI High',    data: fcHi,       borderColor:'rgba(255,107,53,0.0)', backgroundColor:'rgba(255,107,53,0.12)', borderWidth:0, fill:'+1', tension:0.2 },
        { label:'CI Low',     data: fcLo,       borderColor:'rgba(255,107,53,0.0)', backgroundColor:'rgba(255,107,53,0.12)', borderWidth:0, fill:false, tension:0.2 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false} },
      scales:{ x:{ticks:{maxTicksLimit:12}}, y:{min:90} }
    }
  });

  // Forecast table
  const baseLast = HIST[HIST.length-2].v;
  document.getElementById('forecastTable').innerHTML = `<table class="forecast-table">
    <thead><tr><th>Date</th><th>Predicted</th><th>Low (95%)</th><th>High (95%)</th><th>vs Prev</th><th>Confidence</th></tr></thead>
    <tbody>
    ${FORECAST.map((f,i) => {
      const prev = i===0 ? HIST[HIST.length-1].v : FORECAST[i-1].pred;
      const delta = f.pred - prev;
      const conf  = Math.round(88 - Math.abs(delta)*0.1);
      return `<tr>
        <td>${f.d}</td>
        <td style="color:var(--neon);font-weight:600">${f.pred}</td>
        <td>${f.lo}</td>
        <td>${f.hi}</td>
        <td class="fc-trend ${delta>=0?'up':'down'}">${delta>=0?'+':''}${delta.toFixed(1)}</td>
        <td>${conf}%</td>
      </tr>`;
    }).join('')}
    </tbody></table>`;
}

/* ── STORES ─────────────────────────────────────────────────────────────── */
let storesBuilt = false;
function buildStores() {
  storesBuilt = true;
  const totalAll = STORES.reduce((s,st)=>s+st.total,0);
  document.getElementById('storeKPIs').innerHTML = STORES.map(st => `
    <div class="card">
      <div class="card-title-sm">${st.id} · ${st.reg}</div>
      <div class="metric-val neon" style="font-size:22px">${st.sold} <span>avg/day</span></div>
      <div class="metric-sub">${(st.total/1000).toFixed(0)}K total · inv avg ${st.inv}</div>
    </div>`).join('');

  new Chart(document.getElementById('storeChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: STORES.map(s=>s.id+' ('+s.reg+')'),
      datasets: [{
        label:'Avg Sold/Day', data: STORES.map(s=>s.sold),
        backgroundColor: [NEON+'99', NEON2+'99', OK+'99', WARN+'99', '#9b59ff99'],
        borderWidth:0, borderRadius:4
      }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{ y:{min:130} }
    }
  });

  new Chart(document.getElementById('catPerfChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: CATS.map(c=>c.cat),
      datasets: [{
        label:'Avg Sold/Day', data: CATS.map(c=>c.avg_sold),
        backgroundColor: NEON+'55', borderColor: NEON, borderWidth:1, borderRadius:4
      }]
    },
    options: { indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{ x:{min:133} }
    }
  });
}

/* ── PIPELINE ───────────────────────────────────────────────────────────── */
let pipelineBuilt = false;
function buildPipeline() {
  pipelineBuilt = true;
  const stepsEl = document.getElementById('pipelineSteps');
  stepsEl.innerHTML = PIPELINE_STEPS.map((s,i) => `
    <div class="p-step ${i===0?'active':''}" onclick="activateStep(${i})">
      <div class="p-step-num">${s.num}</div>
      <div class="p-step-name">${s.name}</div>
      <div class="p-step-desc">${s.desc}</div>
    </div>`).join('');

  activateStep(0);

  new Chart(document.getElementById('predChart').getContext('2d'), {
    type: 'line',
    data: {
      labels: PRED_SAMPLE.map(d=>d.d),
      datasets: [
        { label:'Actual',    data: PRED_SAMPLE.map(d=>d.a), borderColor: NEON,    backgroundColor:'transparent', borderWidth:1.5, pointRadius:2, tension:0.3 },
        { label:'Predicted', data: PRED_SAMPLE.map(d=>d.p), borderColor:'#ff6b35', backgroundColor:'transparent', borderWidth:1.5, pointRadius:2, borderDash:[5,3], tension:0.3 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{ x:{ticks:{maxTicksLimit:10}} }
    }
  });
}

function activateStep(i) {
  $$('.p-step').forEach((s,j) => s.classList.toggle('active', i===j));
  const d = PIPELINE_STEPS[i].detail;
  const el = document.getElementById('pipelineDetail');
  el.style.display = 'block';
  el.innerHTML = `
    <h3>${d.title}</h3>
    <p>${d.body}</p>
    <pre>${d.code}</pre>`;
}

/* ── SHAP ───────────────────────────────────────────────────────────────── */
let shapBuilt = false;
let activeShap = null;

function buildShap() {
  shapBuilt = true;
  const maxV = Math.max(...SHAP.map(s=>s.v));
  const bars = document.getElementById('shapBars');
  bars.innerHTML = SHAP.map((s,i) => `
    <div class="shap-row" id="shapRow${i}" onclick="selectShap(${i})">
      <div class="shap-label">${s.f}</div>
      <div class="shap-bar-bg"><div class="shap-bar-fill" style="width:0%" data-w="${(s.v/maxV*100).toFixed(1)}"></div></div>
      <div class="shap-val">${s.v.toFixed(3)}</div>
    </div>`).join('');

  setTimeout(() => {
    $$('.shap-bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
  }, 200);

  // SHAP scatter (beeswarm simulation)
  const scatter = [];
  SHAP.forEach((item, fi) => {
    for (let i = 0; i < 50; i++) {
      const featureVal = Math.random();
      const shap = (Math.random()-0.5)*item.v*1.4 + (featureVal-0.5)*item.v*0.8;
      scatter.push({ x: shap, y: fi + (Math.random()-0.5)*0.35, fv: featureVal });
    }
  });

  new Chart(document.getElementById('shapScatter').getContext('2d'), {
    type: 'scatter',
    data: { datasets: [{ data: scatter,
      backgroundColor: scatter.map(d => {
        const t = d.fv;
        const r = Math.round(t*0  +(1-t)*0);
        const g = Math.round(t*212+(1-t)*136);
        const b = Math.round(t*255+(1-t)*255);
        return `rgba(${r},${g},${b},0.6)`;
      }),
      pointRadius: 3.5, borderWidth: 0 }]
    },
    options: { responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{enabled:false} },
      scales:{
        x:{ title:{display:true, text:'SHAP Value →', color:'rgba(180,210,240,0.4)', font:{size:10}} },
        y:{ ticks:{
              callback: v => { const idx=Math.round(v); return SHAP[idx] ? SHAP[idx].f.split('—')[0].trim().slice(0,12) : ''; },
              font:{size:9}
            }, grid:{display:false} }
      }
    }
  });
}

function selectShap(i) {
  $$('.shap-row').forEach((r,j) => r.classList.toggle('active', i===j));
  document.getElementById('shapDetailBody').innerHTML = `
    <strong style="color:var(--neon)">${SHAP[i].f}</strong>
    <br><br>${SHAP[i].desc}
    <br><br><span style="color:var(--text-3);font-family:var(--mono);font-size:11px">Mean |SHAP| = ${SHAP[i].v}</span>`;
}

/* ── INIT ───────────────────────────────────────────────────────────────── */
buildDashboard();
filterInventory();
buildOrders();
