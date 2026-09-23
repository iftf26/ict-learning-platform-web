# ICT Learning Platform Web — 專案交接包

> **現況以 [`PROJECT_STATE.md`](PROJECT_STATE.md) 為準。** 架構、公開題庫數量和下一步都寫在那裡。題目格式見 [`STUDIO_TASKS.md`](STUDIO_TASKS.md)。這份是 2026-09-16 的交接紀錄，不再更新。


> 交接日期：2026-09-16  
> 專案：[`iftf26/ict-learning-platform-web`](https://github.com/iftf26/ict-learning-platform-web)  
> 已發佈網站：[iftf26.github.io/ict-learning-platform-web](https://iftf26.github.io/ict-learning-platform-web/)  
> 此文件的目的，是讓下一個 Codex project 可在不依賴本次對話紀錄的情況下，延續產品判斷、教材方向和技術脈絡。

## 1. 產品定位：不是「一堆連結」，而是一個 ICT 學習入口

這是一個面向香港 DSE ICT 學生的靜態學習網站。老師的核心想法不是只把電子筆記、Google Form、功課連結堆在同一頁，而是建立一個日後可承載它們的**學習入口**：學生在同一個清晰、有吸引力的環境中，理解概念、練習、看見結果、並交出可核對的學習證據。

網站目前刻意分成兩個同等重要的入口：

| 入口 | 角色 | 學生應在這裡得到甚麼 |
| --- | --- | --- |
| **Notes** | 理解與複習 | 課題地圖、概念解釋、關鍵字、常見誤解、引導式活動、checkpoint |
| **Studio** | 做題與驗證 | Coding、SQL、視覺追蹤、DSE 練習；輸入真正答案、執行、看測試、保存證據 |

這個分拆是重要的產品決定：**Studio 不是 Notes 頁面下的一個小工具。**學生可直接由首頁走進 Studio，不需要先翻筆記；同時，Notes 應保留為理解和概念整理的地方，不要再把 Code Studio / SQL Studio 放回 Activities 區。

理想的學習流程是：

```text
Notes 了解概念 / 釐清錯誤
             ↓
Studio 實際輸入、執行、看見結果
             ↓
公開測試與提示協助修正
             ↓
Evidence Card 截圖 → 交功課 / 與老師講解
```

不過這不是硬性流程。較有經驗的學生可以直接從 Studio 做題，再回 Notes 補概念；較需要信心的學生可先做 Notes 內的短活動。

---

## 2. 教學設計記憶與判斷

### 三類學生的視角

此前曾以三個學生角色檢視網站：預計 Level 2、Level 4，以及目標 Level 5+。以下結論仍然應主導後續設計。

| 學生 | 真正需要 | 網站應提供的做法 |
| --- | --- | --- |
| 預計 L2 | 不被術語、空白頁或「一錯就失敗」嚇退；知道第一步做甚麼 | 短小明確的任務、starter code、例子、分步檢查、立即可見的結果 |
| 預計 L4 | 能把已懂的概念搬到新情境，找出自己錯在規則還是步驟 | 有干擾項的 debug / matching / trace 任務、多個測試、錯誤提示、題型變化 |
| 目標 L5+ | 足夠量與深度，能處理 DSE 情境、邊界值和解釋取捨 | 多題同技能訓練、未見過的資料、edge cases、跨概念應用、DSE 題幹語境 |

### 不應靠「猜中答案」造成假象

老師非常準確地指出：一般點選題可以做 concept check，但學生很容易靠排除或猜測答對。後續活動的優先次序應是：

1. **真實輸入／真實操作**：例如輸入完整 formula、寫 Python、寫 SQL、trace 狀態；
2. **看見可驗證的輸出**：以多個 test cases 或資料庫結果判斷；
3. **任務變式與足夠數量**：不要只做一題就當掌握；
4. **概念提示放在錯誤之後**：讓學生修正，不只是展示正解；
5. **DSE 題型遷移**：讓同一能力落在情境題、資料題、程式題中。

### 關於「寫理由」和 AI 評分的界線

不要把學生的開放式理由交給現時網站的 AI 自動判對錯。原因不是學生不應思考，而是錯誤的自動判斷會製造誤導。較合適的設計是：

- 在完成某個操作後給予啟發問題；
- 提示學生「想好後向老師／同學解釋」；
- 老師可在課堂、Google Classroom 或口頭追問；
- 網頁自動評核只用於有客觀、可重複驗證的輸入和輸出。

這是後續新功能都應保留的教學原則。

### 網站的核心內容優先次序

最應投入深度和題量的三個主軸是：

1. **Spreadsheet（公式、資料處理、debug）**
2. **Programming（DSE Core D + Elective C 的程式思維、寫法與 tracing）**
3. **SQL（查詢、資料操作、輸出解讀、資料庫狀態）**

其餘內容仍可作為完整 ICT 課程的 Notes / lab 支援，但這三個應形成學生重複練習、累積能力的主幹。

---

## 3. 已實作的網站資訊架構

### 首頁與路由

首頁預設為一個「Notes / Studio」雙入口，而不是直接掉進長筆記。相關主要邏輯在 `platform-app.js`。

- `#view=notes`：Notes 入口。
- `#view=studio`：Studio 入口。
- `#view=studio&workspace=code`：直接進 Code Studio。
- `#view=studio&workspace=sql`：直接進 SQL Studio。
- `#view=studio&workspace=visual`：視覺 Trace / Demo 工作區。
- `#view=studio&workspace=practice`：DSE Drill / Practice 工作區。

可直接使用的網址：

- [Studio](https://iftf26.github.io/ict-learning-platform-web/#view=studio)
- [Code Studio](https://iftf26.github.io/ict-learning-platform-web/#view=studio&workspace=code)
- [SQL Studio](https://iftf26.github.io/ict-learning-platform-web/#view=studio&workspace=sql)

### Notes 的角色

Notes 保留原本較完整的 ICT 課題導覽與互動複習架構，包括：

- 課題／章節導航；
- 學習目標、keywords、常見錯誤與補充解釋；
- 各類短活動及 lab；
- chapter checkpoint 和練習入口；
- 既有 Core / Elective 內容。

原有資料覆蓋約 36 個 DSE ICT topic，橫跨 Core A–E，以及 Elective A / C。它適合作為概念總結和課堂複習基礎，但「有筆記」不等於「有足夠操練」；後續應以 Studio 題庫補上這個缺口。

### Studio 的角色

Studio 現時有 Code、SQL、Trace、DSE 四個工作區。Code / SQL 是真正獨立的舞台；Trace / DSE 現時會開啟現有的視覺 demo 或 Practice Hub，而非把學生帶回 Notes 的 Activities 列表。

Studio 的側欄會顯示目前題庫、題目數量、選題器和「Teacher task pack」預覽區。這個設計是為了把未來由老師發布的題目，放進同一個實作環境。

---

## 4. 已處理的互動教材與題型

### 既有互動教材方向

網站內已有／曾整合的互動學習元素包括試算表、資料庫、網頁設計、加密、程式與資料結構等範圍。例如：

- Formula Copy Rescue、試算表相關活動；
- Simple Database Builder、SQL Drill；
- Cipher / Encryption Lab；
- Mini HTML Live Lab；
- Python Trace & Repair；
- ERD / 正規化及資料庫概念活動；
- Core D 的程式 visual demos；
- Elective C 的 algorithm / data structure demos；
- checkpoint 與 DSE Practice Hub。

這些元素對「看見概念」很有價值。下一階段不是把它們全部改成遊戲，而是每個重要概念後都提供一段可反覆練習的、答案不可純靠猜的任務鏈。

### Core D / Elective C 的視覺程式教材

現有 demo 組別包含下列程式概念；這些可作為後續 Studio 題庫的 topic 標籤和先備概念：

**Core D**：sequence、selection、while validation、boolean selection、for accumulator、sum / average、linear search、max / min。

**Elective C**：subprograms、nested loops、2D arrays / counting、binary search、bubble pass、merge lists、stack、queue、linked list、text file。

下一步應把「觀看 demo」轉化成「做變式」：例如先 trace 一段 bug，再補一行程式、再自己寫完整任務，而非只讓學生按下一步。

### DSE 題型／結構的理解

本網站不應只分「章節」，也應在題庫資料中分清：

- syllabus strand / chapter；
- skills（如 condition、accumulator、aggregation、UPDATE、debug）；
- 題目形式（trace、debug、complete program、SQL query、data-manipulation、情境選擇）；
- 難度（Foundation / Developing / Challenge）；
- 所需輸入和可檢核輸出；
- 典型失誤（boundary、初始值、型別、AND/OR、grouping、row selection）。

現時的 Practice Hub 已有按 strand、chapter、type、difficulty 篩選的方向，並會使用 checkpoint 題庫。不過它**尚未等同完整、按 topic 整理的真實 DSE past-paper corpus**。使用者已表達想把「by topic past paper」放進學習入口；這應是日後大項目，但需要先整理題源、版權、metadata、答案／評分準則和引導方式。

> 版權提醒：不應未經授權，把完整公開試卷或大段受版權保護內容直接複製到網站。較穩妥的做法是連回官方來源、使用老師獲准使用的材料，或撰寫等技能的原創題，再清楚標記來源。

---

## 5. Code Studio：現況與題庫結構

### 使用體驗

Code Studio 讓學生選題後，在瀏覽器內輸入 Python、按 Run、查看 stdout 和每個 public test 的結果。它不要求學生在多選題中猜答案，而是要求完整程式行為正確。

Python 實行由 `python-runner-worker.mjs` 處理：以 Pyodide 在 Web Worker 中執行。它支援把題目的 `input` 陣列餵給 `input()`，並將輸出與預期答案比較。比較時會正規化尾端空白，因此避免單純結尾換行造成不必要失敗。

注意事項：

- Pyodide 從 CDN 載入，首次使用需要網絡；
- 父頁目前設有約 12 秒執行時間上限；
- 這是 client-side runner，適合練習，不應當作高風險正式測驗的安全沙盒；
- 請在 HTTP localhost 或 GitHub Pages 測試，不要只在 `file://` 直接打開 HTML 時判斷 runner 是否正常，因為 Worker / CORS 行為可能不同。

### 題庫資料模型

公開題庫在 `studio-task-bank.js`，全域 API 是 `StudioTaskBank`。Python task 格式如下：

```js
{
  id: "D4-PY-05",
  topic: "Core D · Accumulator",
  level: "Developing", // Foundation | Developing | Challenge
  title: "Two-mark total",
  brief: "…",
  starter: "…",
  tests: [
    { label: "Public test 1", input: ["12", "30"], output: "42" }
  ]
}
```

目前有 **9 條 Python 題**：

| ID | 題目 | 概念 |
| --- | --- | --- |
| D4-PY-01 | Pass counter | 計數器 |
| D4-PY-02 | Text-to-number total | input / 型別轉換 / 累加 |
| D4-PY-03 | Boundary result | 邊界條件 |
| D4-PY-04 | Highest mark | maximum |
| D4-PY-05 | Two-mark total | 兩個 input 累加；2 個 public tests |
| D4-PY-06 | Five-mark average | 多 input 平均；2 個 public tests |
| D4-PY-07 | Valid score gate | validation；2 個 public tests |
| EC1-PY-01 | Reusable pass counter | subprogram / function |
| EC6-PY-01 | First matching index | linear search |

### 目前 Python 測試證據

已實測：

- `D4-PY-05`：輸入 `12`、`30`，得到 `42`，public test 通過；
- `D4-PY-06`：輸入 `42, 50, 68, 39, 91`，得到 `58.0`；全 0 輸入得到 `0.0`；兩項皆通過；
- Studio 中 Code 題目不會再同時顯示在 Notes 的 Activities。

---

## 6. SQL Studio：現況與題庫結構

### 使用體驗

SQL Studio 使用瀏覽器記憶體中的 sql.js database。每次題目可由相同的 seed data 開始，學生輸入 SQL、按 Run，然後系統檢查 query result 或執行後的資料庫狀態。

這比單純叫學生在紙上寫 SQL 更能教到：選擇哪一列、是否修改了正確紀錄、aggregation 是否正確、欄名是否符合等具體後果。

### 預設資料與資料模型

`StudioTaskBank.seedSql` 建立一張 `Student` 表，含 5 名學生的示例資料。SQL 題目結構如下：

```js
{
  id: "EA1-SQL-04",
  topic: "Elective A · Aggregate",
  level: "Developing",
  title: "Class average",
  brief: "…",
  starter: "SELECT …",
  checker: {
    type: "result", // 或 "database"
    columns: ["Class", "AverageMark"],
    rows: [["5A", 62.75], ["5B", 75]]
  }
}
```

- `checker.type: "result"`：核對學生最後一個 result set。
- `checker.type: "database"`：學生可執行 `INSERT` / `UPDATE` / `DELETE`，系統再以指定 query 核對最終資料庫狀態。

目前有 **6 條 SQL 題**：

| ID | 題目 | 類型 |
| --- | --- | --- |
| EA1-SQL-01 | Filter passing students | SELECT / condition |
| EA1-SQL-02 | Update safely | UPDATE / database state |
| EA1-SQL-03 | Insert then check | INSERT / database state |
| EA1-SQL-04 | Class average | aggregation |
| EA1-SQL-05 | Count condition | COUNT / alias |
| EA1-SQL-06 | Delete only record | DELETE / database state |

### 目前 SQL 測試證據

已實測：

- `EA1-SQL-04` 得到 `5A = 62.75`、`5B = 75`，通過；
- `EA1-SQL-05` 得到 `PassCount = 4`，通過。

### 重要限制

所有 task 和 public tests 都在靜態 JavaScript 中。學生可閱讀 browser source，因此這不是「隱藏答案」機制。若要作正式評核或隱藏 tests，必須另建有登入、server-side execution / checking 和資料保護的 backend。現在最適合的定位是：有回饋的自主練習，而非可防作弊的考試系統。

---

## 7. Evidence Card 與功課交付流程

Code / SQL 的正確完成後，可產生 **Evidence Card PNG**。目前流程是：

1. 學生完成題目並通過 public tests；
2. Evidence Card 按鈕啟用；
3. 下載一張包含 task、結果和時間資訊的 PNG；
4. 點選 Google Classroom 連結；
5. 學生手動把 PNG 附加到正確的 Classroom 功課並繳交。

已測試 `D4-PY-05` 通過後，Evidence Card 可下載、Classroom 連結可開啟。

這是「交功課證據卡」，不是防偽證明：圖片可被修改、也未必能證明誰完成。若老師要更可靠的核實，建議加上以下其中一項：

- 要求學生附上 source code；
- 課堂抽問一兩句解釋；
- 設計短口頭 follow-up；
- 日後才考慮帳戶、提交紀錄和 server-side assessment。

目前不會自動把檔案交入特定 Google Classroom assignment，因為這需要 Google OAuth、coursework mapping、token 處理和學生私隱設計。不要把「按連結開 Classroom」誤解成已完成 Classroom API 整合。

---

## 8. Teacher task pack：現在可用的本機預覽

Studio 側欄有 **Teacher task pack (preview)**。老師可貼一個 JSON，臨時加入 Python / SQL 題目，立即在這個瀏覽器預覽題目和 runner 行為。

格式的頂層必須是：

```json
{
  "python": [],
  "sql": []
}
```

系統會做基本結構驗證，並把 preview pack 存到本機 browser `localStorage`（key：`ict-studio-local-task-pack-v1`）。載入後 Code / SQL selector 會重新整理並選取第一題自訂題；Clear 則只刪除該瀏覽器的 preview。

這個功能的定位是**編題與試行**，不是發布平台：

- 不會自動同步給學生；
- 不會寫回 GitHub；
- 不會在另一部電腦出現；
- 正式公開題仍要更新 `studio-task-bank.js` 並發佈。

詳細格式和編題指引在 [`STUDIO_TASKS.md`](STUDIO_TASKS.md)。

---

## 9. Formula Doctor、C1 / C2 等尚未完成的教學要求

以下是此前已清楚提出、但不可因為「方向正確」而誤報為已完成的需求：

### Formula Doctor

老師希望它改成：

- 預設約 **60–70 條** formula 題；
- 每次隨機抽題；
- 學生要輸入**完整 Excel / spreadsheet formula**，不是選擇題；
- 答案不是完全相同便視為錯誤（即暫不做語意等價判定）。

這與「避免猜答案」的方向非常一致。下一位 agent 開工前應先 audit 現有 Formula Doctor 實作，再把這個要求做成可維護的題庫資料，而不是把 70 條題硬寫進 UI。建議每題記錄：題幹、sample sheet context、正確 formula、skills、難度、common wrong answers / hint。

### C1 / C2 protocol 和其他 Core 概念

使用者特別希望 C2 protocol 也有更多不同類型活動，令學生能深入辨別「甚麼對、甚麼錯」，而不只是看一遍 notes。可用的活動組合包括：

- 封包／步驟排序；
- 配對（protocol ↔ purpose ↔ layer / scenario）；
- debug「哪個步驟不合理」；
- 變更條件後的結果預測；
- 短 trace；
- 完成後口頭 explain-to-teacher prompt。

同樣原則可套用到 spreadsheet、database 和 programming：活動種類要多，但每一個都必須有清楚的 learning target，而非只增加點擊效果。

---

## 10. 重要原始碼地圖

| 檔案 | 責任 | 修改時要留意 |
| --- | --- | --- |
| `index.html` | 頁面骨架、CSS / JS 載入順序、cache-busting query | 加新檔後要正確載入；更新 JS/CSS 時要改版本 query |
| `platform-app.js` | Notes / Studio landing、hash router、Studio tabs、Notes 活動過濾與保護 | 不可再讓 Code / SQL 掉回 Notes；保留舊連結 reroute |
| `activity-labs-code-studios.js` | Code / SQL standalone mount、runner UI、SQL UI、Evidence Card、teacher preview UI | `ActivityLabs.register` 為舊架構兼容用途；Code / SQL 應主要由 Studio mount |
| `python-runner-worker.mjs` | Web Worker 內 Pyodide 執行、input shim、輸出返回 | 留意 CDN 版本、timeout、無限 loop / 安全問題 |
| `studio-task-bank.js` | 公開 Python / SQL 題庫、seed SQL、Teacher preview API | 最適合擴題的主要檔案；維持資料 schema |
| `STUDIO_TASKS.md` | 編題 / preview 說明 | 題庫 schema 改動要同步更新 |
| `activity-labs-core-studios.js` | 其他 core interactive labs / visual study tools | 不要把 Studio 主題破壞成 Notes activity |
| `script.js` | 原本 Notes、活動、checkpoint / practice 的大量主邏輯 | 屬大型既有檔；作局部、仔細修改 |
| `styles.css` | 全站和 Studio 視覺樣式 | 需在 desktop / mobile 兩邊檢查 |
| `.nojekyll` | GitHub Pages 關閉 Jekyll 處理 | 必須保留 |

`index.html` 目前的載入次序特別重要：既有 chapter / study / checkpoint / activity scripts 先載入，然後 `studio-task-bank.js`、`activity-labs-code-studios.js`、`platform-app.js`，再是其他 study tool。若調換，可能造成 global API 未定義或舊 ActivityLabs 註冊失效。

### 目前 cache-busting

GitHub Pages 和學校網絡快取常令學生看到舊 JS。每次變更相關 static asset，請同時更新 `index.html` 中對應 query string。目前可見版本包括：

- `styles.css?v=20260916-5`
- `studio-task-bank.js?v=20260916-4`
- `activity-labs-code-studios.js?v=20260916-5`
- `platform-app.js?v=20260916-4`
- `script.js?v=20260916-2`

Worker 本身亦有版本 query。每次發布後請用 private/incognito window 重新開 Code Studio 和 SQL Studio，而不是只相信一個已開很久的 tab。

---

## 11. 發佈、GitHub 和目前版本狀態

### GitHub Pages

- Repo：[`https://github.com/iftf26/ict-learning-platform-web`](https://github.com/iftf26/ict-learning-platform-web)
- Branch：`main`
- Public site：[https://iftf26.github.io/ict-learning-platform-web/](https://iftf26.github.io/ict-learning-platform-web/)

在本次交接文件前，remote `main` 的內容版本是：

| Commit | 說明 |
| --- | --- |
| `0c11b5e` | Add Google Classroom handoff to evidence cards |
| `cac4837` | Add local teacher task-pack preview to Studio |
| `21b8d9a` | Add data-driven Python and SQL task bank |
| `8470767` | Make Studio a standalone task workspace |
| `0874db0` | Split learning hub into Notes and Studio entry points |
| `c361d7a` | Restore complete static site assets and bypass Jekyll |

GitHub Pages 在 `0c11b5e` 對應的 `Pages` workflow（run `35064024267`）曾成功完成。這份交接文件會另行 commit 到 `main`。

### 一次已處理過的「網站／頁面不見了」問題

曾出現 GitHub Pages 看似消失／內容不完整的情況。根因是靜態 assets 發佈不完整，而非網站本身不支援 Pages。處理方式是恢復完整 static site assets，並加入 `.nojekyll`。

日後發佈請遵守：

1. 不要只上傳一個 JS 檔而漏了相依 asset；
2. 確保 `index.html`、新 JS / CSS / worker、`.nojekyll` 都在 `main`；
3. 更新 cache-busting；
4. 等 GitHub Pages workflow 成功；
5. 在公開網址做完整 smoke test。

### 本機 Git 的特殊狀態

此工作階段使用 GitHub connector 的 Git Data API（建立 blob → tree → commit → update `main`）直接發佈。因而**本機 repo 的 `git log` 仍停在較舊 commit**，但工作目錄裡的改動實際上已對應 remote `main` 的現代版本。

下一個 project 最穩妥的開始方式是重新 clone remote repo，或把本目錄當作工作檔但先非常小心核對 remote。不要為了令本機 log 看起來同步而隨意做 `git reset --hard`、checkout 覆蓋或丟掉 working tree，否則可能抹掉尚未對齊的本地內容。

本機本次交接前可見的未提交檔案是以下工作成果的鏡像，而非未知垃圾檔：

```text
M  index.html
M  platform-app.js
M  script.js
M  styles.css
?? .nojekyll
?? STUDIO_TASKS.md
?? activity-labs-code-studios.js
?? activity-labs-core-studios.js
?? python-runner-worker.mjs
?? studio-task-bank.js
```

若下一位 agent 繼續使用同一資料夾，應首先把 remote `main` 和本機檔案做 read-only diff；若重新 clone，則以 remote `main` 作唯一來源。

---

## 12. 已完成的驗證

已做過的比例適中的驗證包括：

- `studio-task-bank.js`、`activity-labs-code-studios.js`、`platform-app.js` 等新增 JavaScript 的 syntax check；
- 真正開啟 Studio、執行 Python 和 SQL 題；
- Python 多組 `input()` test；
- SQL result checker 和 database-state checker；
- Teacher task pack：由 9 題變 10 題，並以輸入 `8`、`9` 得 `17` 的 sample task 通過；
- Evidence Card 在 Code 正確時啟用並成功下載；
- Google Classroom handoff link；
- 公開 Pages 的 Studio：Pyodide ready、Studio topics 沒有再顯示於 Notes、瀏覽器沒有 console warning / error；
- GitHub Pages workflow 成功。

本機用來做 smoke test 的 HTTP server 已停止，沒有長駐開發程序需要接手。

---

## 13. 已知限制與不應誤解的功能

1. **這是純靜態 GitHub Pages 網站。**沒有帳戶、伺服器資料庫、老師 dashboard 或真正 server-side grading。
2. **所有 public tests 都可被看見。**這是刻意的練習回饋，不是 secure assessment。
3. **Evidence Card 不是防偽。**它是方便學生交功課的卡片，不是可信身份／原創性證明。
4. **Google Classroom 是 handoff，不是 API 交件。**現時不會自動選定功課、上傳或標記已交。
5. **Teacher task pack 是本機 preview。**不會自動發佈給學生。
6. **Pyodide / sql.js 依賴 CDN。**學生首次使用、校園網絡策略或 browser extension 都可能影響載入；要保留清楚 loading / retry 訊息。
7. **不要只靠 `file://` 測試。**Worker、module 和 CDN 在這種模式有不同限制。
8. **不要引入 AI 來粗略判開放式理由。**目前教學決定是把此類反思交給真人對話。

如日後真的要做「正式提交與評核」，建議先寫一份私隱與技術方案：登入方式、學生個人資料、教師權限、code execution isolation、保留期限、老師如何刪除資料、以及 Google Classroom OAuth scope。這已超出目前靜態網站的安全範圍。

---

## 14. 建議後續 roadmap（按價值排序）

### 第一階段：把練習做厚，不急於加更多大功能

1. **擴充資料驅動題庫**：優先 Spreadsheet、Programming、SQL；每個重點 skill 至少有 guided → standard → transfer 變式，而不是只多一題。
2. **完成 Formula Doctor**：60–70 條、random、完整 formula typing、精確比對；保留清楚 hint 和錯誤分類。
3. **擴充 C1 / C2 protocol activities**：排序、matching、debug、scenario prediction、口頭解釋提示。
4. **為每道 coding / SQL 題補充 metadata**：topic、skill、difficulty、estimated time、common mistake、prerequisite。

### 第二階段：DSE 導向的練習編排

5. 建立「by topic DSE Practice」規格：題源、年份／來源、topic mapping、題型、難度、老師講解點、答案／marking note、官方連結。
6. 可先用原創 DSE-style 題目補齊 skill gap，再逐步加入獲准使用或連到官方的 past-paper material。
7. 將 visual Trace / DSE Drill 真正內嵌進 Studio stage，而不是日後只開另一個 panel；前提是不要破壞現有可用的 standalone mode。

### 第三階段：教學管理（只在需求明確後）

8. 設計「老師任務包」正式發布流程：可考慮 JSON manifest、schema validation、版本號、預覽、發佈到 `main` 的清楚步驟。現時 local preview 已可作原型。
9. 若必要才整合 Google Classroom API；先從「每個 Studio task 顯示 assignment instructions / code」開始，不要直接索取過大 OAuth 權限。
10. 若要求有學生進度／防作弊／隱藏 test，必須另起 backend + security / privacy design，而非在這個 client-side repo 疊小修補。

---

## 15. 給下一個 Codex project 的工作提示

可把以下內容原封不動貼給下一位 agent：

```text
請先閱讀 PROJECT_HANDOFF.md，然後閱讀 index.html、platform-app.js、studio-task-bank.js、activity-labs-code-studios.js 及 STUDIO_TASKS.md。

這是香港 DSE ICT 靜態 GitHub Pages 學習網站。必須保留 Notes / Studio 的雙入口：Notes 做概念總結與引導，Studio 做真正的 Code / SQL / Trace / DSE 練習。不要把 Code Studio 或 SQL Studio 放回 Notes Activities。

核心教學方向是把 Spreadsheet、Programming、SQL 做成大量、可驗證、不同難度的自主練習；避免只靠多選或猜答案。開放式理由不要用 AI 自動判分，應用啟發提示讓學生向老師／同學口頭解釋。

現有 Code / SQL 是 browser-only runners；public tests 可見，Evidence Card 只是作業提交輔助，不是防作弊。Teacher task pack 只存 localStorage 作預覽，並未公開發布。

先以 remote main 為真相核對版本；過去曾經由 GitHub Git Data API 直接發佈，因此本機 git log 可能落後。不要做 git reset --hard。修改後做 syntax + browser smoke tests，更新 index.html 的 cache-busting query，完整發佈所有新增 static assets 到 main，等 GitHub Pages 成功。
```

---

## 16. 最有用的連結

- [公開網站首頁](https://iftf26.github.io/ict-learning-platform-web/)
- [Studio 入口](https://iftf26.github.io/ict-learning-platform-web/#view=studio)
- [直接開 Code Studio](https://iftf26.github.io/ict-learning-platform-web/#view=studio&workspace=code)
- [直接開 SQL Studio](https://iftf26.github.io/ict-learning-platform-web/#view=studio&workspace=sql)
- [GitHub repository](https://github.com/iftf26/ict-learning-platform-web)
- [`STUDIO_TASKS.md`](STUDIO_TASKS.md)

這份文件記錄的是交接當刻的設計判斷。下一步若老師改變了對「正式評核」、「Google Classroom 自動化」或「DSE past-paper 版權處理」的取向，應先更新本文件中的原則，再改程式，避免網站功能和教學目的再次分離。
