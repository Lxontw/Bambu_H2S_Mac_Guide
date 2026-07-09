# Bambu Lab H2S Mac 指南專案實作計畫 (Bambu_H2S_Mac_Guide)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完整建立與產出適合 Mac 用戶搭配 Bambu Lab H2S 的免費 3D 設計軟體、格式轉換、材料參數設定與 AI 3D 重建的 6 份 Markdown 本地知識庫指南。

**Architecture:** 依序手動/腳本撰寫並格式化各指南檔案，遵循 Obsidian 本地連結與排版規範，並透過 Markdown 結構及連結有效性進行人工與工具檢查。

**Tech Stack:** Markdown (Obsidian)

## Global Constraints
- **語言限制**：所有內容必須使用 **繁體中文 (台灣)**。
- **連結規範**：Obsidian 本地連結必須使用標準 Markdown 語法（例如 `[名稱](file:///路徑)`），嚴禁使用 wiki 雙括號。連結前後必須保留半形空格，不可與中文標點緊貼。
- **路徑規範**：所有產出檔案必須置於 `Projects/Bambu_H2S_Mac_Guide/` 中。

---

### Task 1: 產出 02_Mac_Software_Guide.md (Mac 免費 3D 設計軟體指引)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/02_Mac_Software_Guide.md`

**Interfaces:**
- Produces: 介紹 Mac 適用的 Tinkercad、Fusion 360、FreeCAD 與 Blender 下載、特色與相容性指南。

- [ ] **Step 1: 寫入 02_Mac_Software_Guide.md 檔案內容**
  寫入包含 Fusion 360 個人免費版、FreeCAD、Blender 與 Tinkercad 的優缺點、安裝指南與 Mac M 晶片 Metal 加速支援之完整內容。
- [ ] **Step 2: 驗證 Markdown 連結語法與語言**
  檢查檔案中的連結是否符合前後半形空格、無 WikiLink 且使用 `file:///` 標準協定，並確認全部使用繁體中文。
- [ ] **Step 3: 提交至 Git**

---

### Task 2: 產出 03_File_Formats_Guide.md (3D 格式與轉換最佳實踐)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/03_File_Formats_Guide.md`

**Interfaces:**
- Consumes: 與 `02_Mac_Software_Guide.md` 中提及的軟體匯出流程相關。
- Produces: 提供 STEP, STL, OBJ, 3MF 格式的匯出與應用說明。

- [ ] **Step 1: 寫入 03_File_Formats_Guide.md 檔案內容**
  撰寫如何從參數化 CAD 匯出 STEP 檔以獲得最高曲線圓滑度，以及 3MF 專案檔在 Bambu Studio 中的優勢說明。
- [ ] **Step 2: 驗證格式與連結**
  檢查語法與連結。
- [ ] **Step 3: 提交至 Git**

---

### Task 3: 產出 04_H2S_Material_Parameters.md (H2S 常用材料切片參數與防翹曲指南)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/04_H2S_Material_Parameters.md`

**Interfaces:**
- Produces: 常用工程耗材在 H2S 上的溫度設定與防翹曲指南。

- [ ] **Step 1: 寫入 04_H2S_Material_Parameters.md 檔案內容**
  整理 PLA, PETG, ABS, PC, PA 在 H2S 上的熱床溫度、噴頭溫度與 65°C 主動加熱腔體溫度設定對照表，以及 Brim 與黏著劑的實務防翹曲教學。
- [ ] **Step 2: 驗證 Markdown 表格語法與連結**
  檢查表格在 Obsidian 中是否能正常渲染，並驗證連結語法。
- [ ] **Step 3: 提交至 Git**

---

### Task 4: 產出 05_Bambu_Studio_Workflow.md (Bambu Studio 基礎工作流)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/05_Bambu_Studio_Workflow.md`

**Interfaces:**
- Consumes: 連接 `04_H2S_Material_Parameters.md` 的材料設定與切片。
- Produces: 提供新機開箱安全檢查、自動校準步驟與切片傳輸指引。

- [ ] **Step 1: 寫入 05_Bambu_Studio_Workflow.md 檔案內容**
  寫入拆除固定螺絲說明、機器校準流程，以及在 Mac 端使用 Bambu Studio 切片並利用區域網/隨身碟傳輸的步驟。
- [ ] **Step 2: 驗證文件格式**
  檢查連結與文字描述是否清晰。
- [ ] **Step 3: 提交至 Git**

---

### Task 5: 產出 06_AI_3D_Reconstruction_Guide.md (AI 影像轉 3D 與 Mac 修模列印指南)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/06_AI_3D_Reconstruction_Guide.md`

**Interfaces:**
- Consumes: 與 `02_Mac_Software_Guide.md` 的 Blender 設定及 `03_File_Formats_Guide.md` 的網格處理相關。
- Produces: 介紹 AI 影像重建軟體與如何在 Mac 進行網格修復、減面與底面切平以供列印的完整工作流。

- [ ] **Step 1: 寫入 06_AI_3D_Reconstruction_Guide.md 檔案內容**
  詳細說明 Tripo3D、Polycam 的使用，以及在 Blender 中利用 Decimate 修改器減面、利用 Bisect 工具切平底部的圖文/文字教學。
- [ ] **Step 2: 驗證 Markdown 連結與格式**
  確認所有 Obsidian 連結均合法且前後有空格。
- [ ] **Step 3: 提交至 Git**

---

### Task 6: 產出 07_Agent_MCP_Automation.md (AI Agent 與 MCP 自動化指南)

**Files:**
- Create: `Projects/Bambu_H2S_Mac_Guide/07_Agent_MCP_Automation.md`

**Interfaces:**
- Consumes: 與 `02_Mac_Software_Guide.md` (Blender) 及 `05_Bambu_Studio_Workflow.md` (3D 印表機控制) 相關。
- Produces: 介紹 AI Agent 如何透過 MCP 伺服器對接 Blender 的 Python API，以及透過 MQTT 對接 Bambu Lab 進行自動化設計與列印控制。

- [ ] **Step 1: 寫入 07_Agent_MCP_Automation.md 檔案內容**
  寫入包含 MCP 核心架構、Blender MCP Server 部署與 Python 參數化設計腳本自動化，以及 MQTT 對接 3D 印表機狀態監控與安全性規範之完整內容。
- [ ] **Step 2: 驗證格式與連結**
  檢查連結語法與繁體中文用語。
- [ ] **Step 3: 提交至 Git**
