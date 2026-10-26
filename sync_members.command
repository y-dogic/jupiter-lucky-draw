#!/bin/zsh
# 雙擊：由 Materials/BNI_Jupiter_Member_Record_LT16.xlsx 更新 data.js 會員名單
cd "$(dirname "$0")"
python3 sync_members.py
echo ""; read -k1 "?完成，按任意鍵關閉…"
