# Task 1: 增改 02_Mac_Software_Guide.md 軟體指南 Brief

**Goal:** 編輯 [02_Mac_Software_Guide.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/02_Mac_Software_Guide.md)，將以下四個實用技術段落補充至該指南對應位置。

---

## 📋 追加內容詳解：

### 1. 在 Autodesk Fusion (個人非商用版) 章節追加「每年免費續約與解鎖指引」
在 `## 🖥️ 2. 各軟體深度解析與安裝引導` 的 `### 🍊 Autodesk Fusion` 部分追加：
```markdown
*   **🔄 個人免費版每年過期「續約」解鎖指引（避坑必看）**：
    Autodesk Fusion 個人免費版的使用期限為 **1 年**。過期後，軟體標題列會顯示「已過期 / 唯讀 (Expired - Read Only)」，且無法建立新設計或存檔。**請勿點擊付費訂閱**，您可以按照以下步驟無限期每年免費續約：
    1. 關閉 Mac 上的 Fusion 軟體。
    2. 使用瀏覽器登入 [Fusion 個人免費版續約官網](https://www.autodesk.com/products/fusion-360/personal)。
    3. 點擊「立即開始 (Get Started)」，登入您原先的 Autodesk 帳號。
    4. 系統會偵測到您已有帳號，請再次填寫非商用表單（選擇個人用途、同意非商用條款），並提交。
    5. 提交完成後，重新打開 Mac 上的 Fusion 軟體，系統會自動重新加載授權，標題列會變回「個人非商用授權 (Personal Use)」，所有檔案自動解鎖，即可繼續免費使用 1 年。
```

### 2. 在 FreeCAD 章節追加「Mac 繁中輸入法卡死與快捷鍵衝突優化」
在 `### 🔵 FreeCAD` 部分追加：
```markdown
*   **⌨️ Mac 繁中輸入法卡死與快捷鍵衝突修復**：
    FreeCAD 在 macOS 下若使用系統預設輸入法，切換至中文時容易導致快捷鍵失效或視窗完全卡死。請進行以下設定優化：
    1.  **停用中文輸入法對應快捷鍵**：在 FreeCAD 內點選頂部選單 **FreeCAD** ➜ **Preferences** ➜ **General** ➜ 確保在編輯模式下預設使用英數字元。
    2.  **建模時鎖定英文輸入**：強烈建議在開啟 FreeCAD 進行建模時，按下 Mac 鍵盤的 `Caps Lock` 切換至「英文 (ABC)」輸入狀態，這能 100% 避免因中文字元輸入導致軟體對快捷鍵攔截而當機。
    3.  **修復快捷鍵衝突**：Mac 系統的 `Command + Space`（切換輸入法或 Spotlight）常與 FreeCAD 的空間定位快捷鍵衝突，建議在 macOS 的「系統設定 ➜ 鍵盤 ➜ 鍵盤快捷鍵」中，將輸入法切換暫時改為其他組合，或在 FreeCAD 內自訂快速鍵。
```

### 3. 在 Blender 章節追加「3D-Print Toolbox 內建插件啟用與流形網格一鍵檢查」
在 `### 🎨 Blender` 部分追加：
```markdown
*   **📐 啟用內建 3D-Print Toolbox 插件進行「破洞與非流形網格」一鍵檢查**：
    AI 影像重構出的模型經常會有肉眼難見的「破面」、「重疊面」或「零厚度面（非流形網格 Non-Manifold）」，這會導致切片軟體報錯。Blender 內建了強大的檢查工具：
    1.  開啟 Blender，點選 **Edit** ➜ **Preferences** ➜ **Add-ons (插件)**。
    2.  在右上角搜尋框輸入 `3D`，找到 **「Mesh: 3D-Print Toolbox」** 並勾選啟用。
    3.  回到 3D 視區，按下鍵盤的 `N` 鍵展開右側面板，您會看到多出一個 **「3D-Print」** 標籤。
    4.  選擇您的 AI 重建模型，點擊面板上的 **「Check All (全部檢查)」**。
    5.  工具會即時列出 `Non Manifold Edge` (非流形邊，破洞處) 的數量。點擊該數值，Blender 會自動在編輯模式下選取所有破洞邊。
    6.  按下鍵盤 `F` 鍵即可自動補洞，或在面模式下點選 **「Make Manifold (自動修復為流形體)」** 進行一鍵修復，修復後再匯出為 STL 列印。
```

### 4. 在指南結尾新增「💡 M 系列 MacBook 觸控板 (Trackpad) 無滑鼠建模最佳設定」
在指南的第 3 節之後，新增第 4 節：
```markdown
---

## 🖐️ 4. M 系列 MacBook 觸控板 (Trackpad) 無滑鼠建模最佳設定

如果您使用的是 MacBook 且手邊沒有滑鼠，直接使用觸控板（Trackpad）進行 3D 建模會非常痛苦。透過以下設定，您可以實現極為流暢的「純手勢建模」：

### 4.1 Blender 觸控板最佳配置
1.  開啟 Blender ➜ **Edit** ➜ **Preferences** ➜ **Input (輸入)**。
2.  在「滑鼠 (Mouse)」設定下，勾選 **「模擬三鍵滑鼠 (Emulate 3 Button Mouse)」**。
3.  **手勢操作說明**：
    *   **旋轉視角 (Rotate)**：按住 Mac 鍵盤的 **`Option` 鍵** + **單指在觸控板滑動**。
    *   **平移視角 (Pan)**：按住 Mac 鍵盤的 **`Shift` + `Option` 鍵** + **單指在觸控板滑動**。
    *   **縮放視角 (Zoom)**：在觸控板上使用 **雙指張開/捏合 (Pinch)**，或按住 **`Control` + `Option`** + **單指上下滑動**。
4.  在 **Navigation (導航)** 標籤下，勾選 **「圍繞選擇物旋轉 (Orbit Around Selection)」**，這樣視角會永遠以您選取的模型為中心旋轉，防範畫面飛走。

### 4.2 Autodesk Fusion 觸控板最佳配置
1.  開啟 Fusion ➜ 點選右上角您的個人頭像 ➜ **Preferences (偏好設定)**。
2.  在「一般 (General)」面板中，找到 **「平移、縮放、旋轉捷徑 (Pan, Zoom, Orbit shortcuts)」**。
3.  將下拉選單改為 **「Mac trackpad (Mac 觸控板)」** 或 **「Gesture (手勢)」** 並儲存。
4.  **手勢操作說明**：
    *   **平移 (Pan)**：**雙指在觸控板上滑動**。
    *   **縮放 (Zoom)**：在觸控板上使用 **雙指捏合/張開**。
    *   **自由旋轉 (Orbit)**：按住 Mac 鍵盤的 **`Shift` 鍵** + **雙指滑動**。
```

---

## 📝 執行合約：
1. 編輯修改 `/Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/02_Mac_Software_Guide.md`。
2. 修改完成後，請將詳細的執行報告寫入 `task-1-report.md`。
3. 回報您的進度。
