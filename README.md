使用 Vue.js 開發高效能響應式電商網站，支援 Dark／Light Mode 主題切換以優化使用者體驗，並導入 Vitest 與 Cypress 強化測試機制，提升穩定性與防止回歸錯誤。

## 🚀 效能優化

### 🔄 狀態管理最佳化

- **使用 Pinia** 管理 API 請求與資料，確保組件間數據一致性並避免不必要的重複請求。

### ⚡ 預加載與資源優化

- **Prefetch 預載入** 下一頁資源，提高頁面切換流暢度。
- **Route-Based Code Splitting**：透過 Vue Router 進行路由拆分，減少初次載入時間。
- **Lazy Loading**：延遲載入圖片與靜態資源，提升 Largest Contentful Paint（LCP） 表現。
- **Module Splitting**：手動拆分大型模組至獨立 chunk，降低初始加載負擔。

### 📉 資源最小化與壓縮

- **JS / CSS / HTML 最小化**：使用 esbuild（JS）、csso（CSS）、vite-plugin-html（HTML）進行壓縮。
- **圖片壓縮**：透過 vite-plugin-imagemin 進行最佳化，減少傳輸體積。

**🔍 結果**：效能分數由 **35 分** 提升至 **85 分**（Google Lighthouse 測試）。

## 🎯 使用者體驗優化

### 🎨 UI / UX 增強

- **Dark Mode / Light Mode**：透過 **Root Selector** 切換模式，並使用 **Pinia persist** 將狀態儲存至 `localStorage`，確保用戶設定持久保存。

### 🛍 購物流程數據一致性

- 結帳前自動重新獲取最新的購物車數據，確保訂單資訊正確。

## 🧪 測試

### 🧩 單元測試（Unit Test）

- 使用 **Vitest** 測試商品篩選邏輯，確保篩選結果準確。

### 🔗 端對端測試（E2E Test）

- 使用 **Cypress** 模擬完整購物流程，測試 **「加入購物車」➡「結帳付款」** 的完整用戶體驗。

### 🤖 測試自動化

- 在每次部署前，自動執行 **Vitest 測試**，確保系統穩定性。

