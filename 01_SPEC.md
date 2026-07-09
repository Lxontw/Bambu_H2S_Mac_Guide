# 需求規格書：Bambu Lab H2S Mac 軟體指南與 H2S 參數知識庫 (Bambu_H2S_Mac_Guide)

本專案旨在為已購買的 **Bambu Lab H2S** 3D 印表機，在 macOS 環境下建立一個完整的免費設計軟體指引、格式轉換流程、常用材料參數與 AI 影像轉 3D 建模的工作流本地知識庫。

---

## 🎯 專案目標 (Project Goals)
1. **Mac 軟體資源整理**：為 Mac 使用者提供合適的免費 3D 設計、切片與修模工具引導。
2. **H2S 材料參數庫**：針對 H2S 特有的主動加溫腔體 (65°C) 與高溫噴頭 (350°C)，整理工程材料 (ABS, PC, PA 等) 的防翹曲與切片參數。
3. **格式轉換最佳實踐**：規範從 CAD (STEP) 到網格格式 (STL, 3MF) 的高精度導出路徑。
4. **AI 影像轉 3D 列印**：記錄如何將照片/影片透過 AI 轉為 3D 模型，並在 Mac 上修復後列印的工作流。

---

## 📂 預期目錄結構 (Directory Structure)
所有專案文件皆位於 `Projects/Bambu_H2S_Mac_Guide/` 目錄中：

```text
Projects/Bambu_H2S_Mac_Guide/
├── 01_SPEC.md                      # 本需求規格與設計文書
├── 02_Mac_Software_Guide.md        # Mac 免費 3D 設計軟體推薦與安裝設定
├── 03_File_Formats_Guide.md        # 3D 格式轉換說明 (STEP, STL, 3MF 應用與轉換)
├── 04_H2S_Material_Parameters.md   # H2S 常用材料切片參數與防翹曲指南
├── 05_Bambu_Studio_Workflow.md     # 機器開箱、首次校準與切片軟體基礎工作流
├── 06_AI_3D_Reconstruction_Guide.md # AI 照片/影片轉 3D 與 Mac 修模列印指南
└── 07_Agent_MCP_Automation.md      # AI Agent 與 MCP 3D 設計與列印自動化指南
```

---

## 📝 各章節設計規格 (Design Details)

### 1. [01_SPEC.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/01_SPEC.md) (本檔案)
*   記錄本專案的目標、結構設計、實施流程里程碑以及後續更新規則。

### 2. [02_Mac_Software_Guide.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/02_Mac_Software_Guide.md)
*   **收錄軟體**：
    *   **Tinkercad**：網頁版，適合初學者與簡單形狀。
    *   **Autodesk Fusion (個人版)**：參數化 CAD，適合高精度機械零件。
    *   **FreeCAD**：完全開源的參數化 CAD，支援離線。
    *   **Blender**：有機雕刻，原生支援 Mac Metal GPU 硬體加速，適合公仔與藝術建模。
*   **說明重點**：下載連結、M系列晶片相容性、免費版申請與使用限制，以及 **Blender Metal GPU 硬體加速啟動步驟**。

### 3. [03_File_Formats_Guide.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/03_File_Formats_Guide.md)
*   **檔案格式比較**：
    *   **`.STEP` / `.STP`**：工業標準，推薦直接匯入 Bambu Studio 以保留高精度曲線。
    *   **`.3MF`**：推薦的切片專案格式，包含色彩與列印設定。
    *   **`.STL` / `.OBJ`**：通用網格格式。
*   **操作步驟**：如何在 CAD 軟體中精準匯出上述格式，避免面數過低產生鋸齒。

### 4. [04_H2S_Material_Parameters.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/04_H2S_Material_Parameters.md)
*   **H2S 硬體優勢應用**：利用 65°C 主動加熱腔體與 350°C 噴頭。
*   **材料參數對照表**：
    *   **PLA / PETG**：基礎材料，低腔體溫度。
    *   **ABS / ASA**：高收縮率材料，需開啟 60-65°C 腔體加溫防翹曲，以及**腔體熱平衡預熱 (Soak Time) 標準**。
    *   **PC / PA (尼龍)**：高溫材料，需適當烘乾耗材，並使用高噴頭溫度。
*   **防翹曲實務**：熱床黏著劑選擇（固體膠、Bambu 專用液體膠）、大物件防邊角翹曲設計（Brim 設定），以及**常用工程耗材烘乾標準對照表**與**熱床烘乾 (Bed Drying Hack)**。
*   **風扇冷卻優化**：65°C 主動腔溫下的輔助風扇與料件風扇參數調校。

### 5. [05_Bambu_Studio_Workflow.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/05_Bambu_Studio_Workflow.md)
*   **新機上線指南**：
    *   開箱必拆：運送用固定螺絲解除。
    *   首次校準：自動調平、振動補償校準。
*   **軟體操作**：在 Mac 上安裝 Bambu Studio，新增 H2S 印表機，進行基本切片、填充率 (Infill) 與支撐 (Supports) 設定。
*   **隱私與局域網傳輸**：**強制啟用「僅限局域網模式 (LAN Only Mode)」**之本地 FTPS 傳輸與綁定流程。
*   **M 系列 Mac 切片性能優化**：啟用多核心切片執行緒與 GPU 渲染，以及**高面數模型弧線擬合 (Arc Fitting) 與網格簡化**防卡死設定。

### 6. [06_AI_3D_Reconstruction_Guide.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/06_AI_3D_Reconstruction_Guide.md)
*   **AI 影像轉 3D 工具**：介紹 Tripo3D, Polycam 等影像建模工具的使用流程。
*   **Mac 修模與準備工作流**：
    *   在 Blender 中進行「減面（Decimate）」以優化檔案大小。
    *   使用網格修復工具（例如 3D-Print Toolbox 插件）補洞。
    *   使用「Bisect（切斷）」將底部切平，使其能夠穩固站立於熱床上。
    *   匯入 Bambu Studio 進行列印。

### 7. [07_Agent_MCP_Automation.md](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/07_Agent_MCP_Automation.md)
*   介紹 AI Agent 如何搭配 MCP (Model Context Protocol) 自動化操作 Blender (Python API) 進行 3D 設計與修模，以及連結 3D 印表機 API / MQTT 進行自動化控制。
*   **本地遙測與安全防護**：MQTT 區網安全訂閱設定，以及 **AI 自動化指令安全過濾閥 (Safety Guard)**（防撞機、防超溫硬體極限過濾）。

---

## 📅 導入與實施里程碑 (Milestones)

```mermaid
gantt
    title Bambu Lab H2S 導入與知識庫建置時程
    dateFormat  YYYY-MM-DD
    section 階段一：收貨準備
    環境規劃與隨身碟格式化       :active, 2026-07-09, 1d
    section 階段二：開箱校準
    機器拆箱/解鎖/首次自動校準   :after 階段一, 2d
    section 階段三：軟體與首印
    Bambu Studio 設定與 PLA 首印 :after 階段二, 2d
    section 階段四：進階與 AI
    高溫材料防翹曲與 AI 3D 測試   :after 階段三, 3d
```

---

## 📌 備註與協作規範 (Notes & Norms)
*   本專案所有文件的 Obsidian 本地連結格式，皆須遵循 Markdown 標準語法： `[連結名稱](file:///路徑)`，避免使用雙括號外包 link，且前後保留半形空格，不可與中文標點緊鄰。
*   此知識庫將做為後續列印實務的依據，未來若有新參數或新軟體推薦，將持續更新對應的 Markdown 文件。
