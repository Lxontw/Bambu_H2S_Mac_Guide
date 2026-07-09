const fs = require('fs');
const path = require('path');

const guideDir = __dirname;
const files = {
  "01_SPEC": "01_SPEC.md",
  "02_Mac_Software_Guide": "02_Mac_Software_Guide.md",
  "03_File_Formats_Guide": "03_File_Formats_Guide.md",
  "04_H2S_Material_Parameters": "04_H2S_Material_Parameters.md",
  "05_Bambu_Studio_Workflow": "05_Bambu_Studio_Workflow.md",
  "06_AI_3D_Reconstruction_Guide": "06_AI_3D_Reconstruction_Guide.md",
  "07_Agent_MCP_Automation": "07_Agent_MCP_Automation.md",
  "plan": "2026-07-09-implementation-plan.md"
};

// 讀取 home 內容
const homeMarkdown = `# 🦾 Bambu Lab H2S 3D 列印 Mac 專屬指南入口

歡迎來到 **Bambu Lab H2S 工業級 3D 印表機的 Mac 本地技術知識庫**。

本站點旨在為 Mac 使用者提供一整套從零開始的 3D 設計、格式轉換、工程耗材參數優化、AI 影像重構至 Agent 自動化控制的完整工作流指南。所有文件與實踐皆針對 M 系列晶片的 macOS 環境進行了深度最佳化。

---

## 🧭 指南快速導覽 MOC

### 📂 1. 設計與檔案準備
*   [02_Mac_Software_Guide](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/02_Mac_Software_Guide.md) : **Mac 免費 3D 軟體推薦** — Tinkercad、Autodesk Fusion、FreeCAD、Blender 下載與 Apple Silicon M系列晶片相容性。
*   [03_File_Formats_Guide](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/03_File_Formats_Guide.md) : **3D 格式轉換說明** — 深入剖析為何在 Bambu Studio 中優先使用 \`.STEP\` 格式，以及各大軟體的高精度匯出指南。

### 📂 2. 印務實作與參數優化
*   [04_H2S_Material_Parameters](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/04_H2S_Material_Parameters.md) : **H2S 材料參數與防翹曲指南** — 針對 H2S 獨特的 65°C 主動腔體加溫與 350°C 噴頭，整理 PLA, PETG, ABS, PC, PA 的溫度參數與 Brim/預熱防翹曲技巧。
*   [05_Bambu_Studio_Workflow](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/05_Bambu_Studio_Workflow.md) : **Bambu Studio 基礎操作** — 開箱必拆安全檢查、自動共振校準，以及切片、Gyroid 填充與 Wi-Fi/區域網傳輸工作流。

### 📂 3. AI 重構與自動化
*   [06_AI_3D_Reconstruction_Guide](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/06_AI_3D_Reconstruction_Guide.md) : **AI 照片轉 3D 與 Mac 修模列印** — 介紹 Polycam (Object Mode) 拍照掃描重建，Blender 減面 (Decimate)、底面切平 (Bisect)，以及精細公仔列印的無痕支撐與冷卻參數。
*   [07_Agent_MCP_Automation](file:///Users/imacpro3/Documents/Obsidian/Lxon_Obsidian/Projects/Bambu_H2S_Mac_Guide/07_Agent_MCP_Automation.md) : **AI Agent 與 MCP 自動化控制** — 展示 AI 助理如何通過 \`blender-mcp\` 與 \`tmux-bridge-mcp\` 自動編寫 Python 程式碼建模，利用 \`Headroom\` 進行 3D Context 壓縮，並控制印表機列印。

---

## 🖨️ Bambu Lab H2S 工業級列印運作模擬 (純 HTML/CSS 動畫)`;

const documentsBase64 = {};
documentsBase64["home"] = Buffer.from(homeMarkdown).toString('base64');

for (const [key, filename] of Object.entries(files)) {
  const filePath = path.join(guideDir, filename);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    documentsBase64[key] = Buffer.from(content).toString('base64');
  } else {
    console.warn(`File not found: ${filePath}`);
  }
}

// 讀取本地範本
const templatePath = path.join(guideDir, 'template.html');
if (!fs.existsSync(templatePath)) {
  console.error(`Template not found at ${templatePath}`);
  process.exit(1);
}
let htmlContent = fs.readFileSync(templatePath, 'utf8');

// 替換佔位符
htmlContent = htmlContent.replace('__REPLACE_DOCUMENTS_BASE64__', JSON.stringify(documentsBase64, null, 2));

const destPath = path.join(guideDir, 'index.html');
fs.writeFileSync(destPath, htmlContent);

console.log(`index.html successfully compiled and written to ${destPath}`);
