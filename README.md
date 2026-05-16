# AquaFlow AI — Predictive Replenishment & Inventory Intelligence System

## 📌 Giới thiệu dự án (Project Overview)
**AquaFlow AI** là hệ thống quản trị kho thông minh và tự động hóa chuỗi cung ứng (ERP), được thiết kế tối ưu riêng cho ngành hàng nước giải khát. Hệ thống ứng dụng mô hình kết hợp (Hybrid Machine Learning) nâng cao bao gồm **SOM (Self-Organizing Maps)** để phân cụm hành vi sản phẩm, kết hợp cùng mạng **ANN (Artificial Neural Networks)** để dự báo chính xác nhu cầu (Demand Forecasting). Đồng thời tích hợp công nghệ **XAI (Explainable AI - SHAP)** giúp giải thích minh bạch các quyết định của mô hình, hỗ trợ nhà quản lý đưa ra phương án tái cung ứng tối ưu (Safety Stock & Reorder Point).

* **Mã môn học (Course Code):** STAT3013 — Phân tích dữ liệu nâng cao
* **Nhóm thực hiện (Group):** GroupUseYourMind

---

## 🛠️ Yêu cầu hệ thống (Env Requirements)
Hệ thống được phát triển và chạy ổn định trên cấu hình môi trường sau:

* **Môi trường Backend & Nghiên cứu dữ liệu:**
    * Python 3.9+ hoặc R (tùy thuộc vào techstack thực tế của nhóm)
    * Các thư viện xử lý dữ liệu: `pandas`, `numpy`, `scikit-learn`, `statsmodels`
    * Lõi mô hình học máy: `MiniSom` (hoặc `Keras/TensorFlow`), `xgboost`
    * Giải thích mô hình & Trực quan hóa: `shap`, `matplotlib`, `seaborn`
* **Môi trường Frontend Dashboard:**
    * Trình duyệt web hiện đại (Chrome, Edge, Safari, Firefox) hỗ trợ ES6+
    * Thư viện biểu đồ: `Chart.js v4.4.1` (được nhúng trực tiếp qua CDN)
    * Font chữ: `Space Grotesk` & `JetBrains Mono` (Google Fonts)

> **Note:** Bạn có thể cài đặt nhanh toàn bộ thư viện Python cần thiết thông qua file `requirements.txt` bằng lệnh:
> ```bash
> pip install -r requirements.txt
> ```

---

## 🚀 Hướng dẫn khởi chạy (Run Instructions)

### 1. Triển khai mô hình Backend (Python / R)
Để thiết lập và huấn luyện lại mô hình phân cụm SOM kết hợp dự báo ANN:
```bash
# Khởi tạo môi trường ảo (Khuyến khích)
python -m venv venv
source venv/bin/activate  # Trên macOS/Linux hoặc .\venv\Scripts\activate trên Windows

# Cài đặt các thư viện phụ thuộc
pip install -r requirements.txt

# Chạy Notebook phân tích pipeline dữ liệu (PCA -> SOM -> ANN -> SHAP)
jupyter notebook core_pipeline.ipynb
