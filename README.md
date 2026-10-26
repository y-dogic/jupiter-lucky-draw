# BNI Jupiter 幸運大抽獎

網上版本（任何電腦／手機都打得開）：**https://y-dogic.github.io/jupiter-lucky-draw/**

## 每週更新（3 步）

1. 打開 `data.js`，改：
   - `week`：今次例會日期（例如 `"2026-11-03"`）— 改咗先會載入新名單
   - `guests`：嘉賓，一行一位
   - `prizes`：獎品名稱、送出者、相片
2. 獎品相片放入 `photos/` 資料夾，再喺 `data.js` 填 `photo: "photos/檔名.jpg"`
   （iPhone 的 HEIC 相會自動轉成 JPG，檔名一樣，只係副檔名變 .jpg）
3. 雙擊 **`publish.command`** → 自動縮細相片並上載，約 1 分鐘後網頁更新

- 會員有變動：先更新 `Materials/BNI_Jupiter_Member_Record_LT16.xlsx`，再雙擊 **`sync_members.command`**
- 唔喺自己電腦？可以直接喺 github.com 開 `data.js` 按 ✏️ 修改，相片用 **Add file → Upload files** 上載到 `photos/`
- 例會當日臨時改動：喺「名單確認」畫面可以直接剔走缺席會員、加嘉賓、改獎品、📷 加相（只儲存喺嗰部電腦）

## 規則
- 會員 2 次機會，嘉賓 1 次（觀眾睇唔到）
- 「已中獎者不再參與」預設開啟
- 空白鍵 = 開始抽獎
