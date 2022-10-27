#從2368 port抓取網頁到docs目錄
wget --mirror --convert-links --page-requisites -nH --no-parent -P docs http://localhost:2368/

#移除包含奇怪字串的style.css和script.js檔案
find ./docs -type f -name 'style.css?*' -exec rm {} \;
find ./docs -type f -name 'script.js?*' -exec rm {} \;
find ./docs/assets/font -type f -name '*?*' -exec rm {} \;

	
#取代檔案內的奇怪字串
find ./docs -type f -name '*.html' -exec ./replace.pl {} \;

#複製assets到docs裡面
cp -Rf content/themes/attila-3.1.1/assets/* docs/assets/
