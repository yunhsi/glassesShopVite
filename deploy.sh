#!/usr/bin/env sh

# 遇到錯誤時終止腳本
set -e

echo "🚀 開始執行測試..."

# 執行 Vitest 單元測試
npm run test

echo "✅ 測試通過，開始部署..."

# 編譯專案
npm run build

# 進入輸出目錄
cd dist

# 添加 .nojekyll 以繞過 Jekyll
echo > .nojekyll

# 如果需要自訂網域
# echo 'www.example.com' > CNAME

# 初始化 Git 並提交部署內容
git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 推送到 GitHub Pages
git push -f https://github.com/yunhsi/glassesShopVite.git main:gh-pages

cd -

echo "🎉 部署完成！"

# sh deploy.sh