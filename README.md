# JJUG CCC 2022 Fall スライド

## WSL 環境セットアップ

日本語フォントのインストール

```bash
sudo apt install fonts-vlgothic
```

## ビルド・エクスポート

モジュールインストール

```bash
npm install
```

ビルド

```bash
npx slidev build
```

PDF エクスポート

```bash
npx slidev export --with-clicks
```
