#!/bin/zsh
# 雙擊：整理相片 + 上載到 GitHub（網上版本約 1 分鐘後更新）
cd "$(dirname "$0")"
setopt nullglob
for f in photos/*.(heic|HEIC); do sips -s format jpeg "$f" --out "${f%.*}.jpg" >/dev/null && rm "$f" && echo "已轉換 $f → JPG"; done
for f in photos/*.(jpg|jpeg|JPG|JPEG|png|PNG); do
  w=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}'); h=$(sips -g pixelHeight "$f" | awk '/pixelHeight/{print $2}')
  if (( w > 1200 || h > 1200 )); then sips -Z 1200 "$f" >/dev/null && echo "已縮細 $f"; fi
done
git add -A
git commit -q -m "Update lucky draw $(date +%Y-%m-%d)" && echo "已記錄改動" || echo "（沒有新改動）"
git push -q && echo "\n✅ 已上載！約 1 分鐘後打開： https://y-dogic.github.io/jupiter-lucky-draw/"
echo ""; read -k1 "?按任意鍵關閉…"
