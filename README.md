# Blog

## Environment
- Node.js: v16.13.0
- Ghost-CLI version: 1.23.1
- Ghost version: 5.21.0

## 啟動流程

### 切換Node.js版本
確認node版本
```
node --version
```
若版本不相同，使用nvm切換版本
```
nvm use 16.13.0
```
### 初始化設定
設定ghost檔案內容路徑及下載Ghost相關dependency
```
make init
```

## 錯誤修復

### 指定Node.js版本
透過nvm指定Node.js版本為指定版本

### config.development.json
將database-> connection-> filename修正為正確路徑
將paths-> contentPath修正為正確路徑

### current
將current指向version中目前使用的版本
