/* =========================================================
   BNI Jupiter 幸運大抽獎 — 每週只需修改呢個檔案
   1. week    ：改做今次例會日期（改咗就會自動載入新名單）
   2. members ：會員名單，一行一位「座位編號 姓名」
                （可以雙擊 sync_members.command 由會員紀錄 Excel 自動更新）
   3. guests  ：嘉賓名單，一行一位
   4. prizes  ：獎品；note 係補充（可留空），photo 填相片路徑（相片放入 photos 資料夾），無相就留空 ""
   改完：雙擊 publish.command，約 1 分鐘後網上版本更新
   ========================================================= */
window.LUCKY_DATA = {

  week: "2026-10-27",

  // ---- MEMBERS-START (sync_members.command 會自動改寫呢段) ----
  members: `
A1 Eric Tang
A2 Jacky Tang
A3 Kenwin Chan
A4 Nick Yau
A5 Peggy Leung
A6 Steven Ho
A7 Terry Siu
A8 Ruby Law
A9 Biu Law 標哥
A10 Jacky Liu
B1 Angie Cheung
B2 Dr. Brandon Chow
B3 Jeff Tang
B4 Terry Leung
B5 Tiger Wong
B6 Wing Chu
B7 Carol Ng
C1 Annie Yuen
C2 Anthony Chan
C4 Oscar Chung
D1 Fei Kwok
D2 Yellow Wong
D3 Samson Luk
E1 Charmaigne Wong
E2 Sharon Ng
E3 Mandy Man
F1 Chloe Tang
F2 Andrew Lau
G1 Ivan Yam
G2 Kiana Ho
G3 Sean Yeung
G4 Terry So
G5 Kinson Ng
G6 Evan Chan
H1 Oscar Wong
H2 Roy Lam
`,
  // ---- MEMBERS-END ----

  guests: `
Apple Chan
`,

  prizes: [
    // name：獎品名稱（短啲）　note：補充（可留空）　giver：送出者　photo：相片路徑
    { name: "訂造恤衫", note: "第 1 份（共 2 份）",             giver: "Anthony Chan", photo: "" },
    { name: "訂造恤衫", note: "第 2 份（共 2 份）",             giver: "Anthony Chan", photo: "" },
    { name: "越式頭療", note: "價值 $488 · 第 1 份（共 2 份）", giver: "Annie Yuen",   photo: "" },
    { name: "越式頭療", note: "價值 $488 · 第 2 份（共 2 份）", giver: "Annie Yuen",   photo: "" },
  ],

};
