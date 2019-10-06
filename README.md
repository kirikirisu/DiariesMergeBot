## 概要
スマートフォンアプリプロジェクトでは毎週Diariesを提出しているが、毎週金曜日に複数のプルリクをマージするのを忘れてしまう。そこで自動でマージするBOTを作成する。
## 仕様
Node.jsでレポジトリにあるプルリクを全てマージするプログラムがこれ。
これをIFFTと連携させれば毎週金曜日に自動マージでき、マージの手間を省くことができる。Slackと連携させればコマンド一つでマージでき、マージの手間を減らすことができる。
## nodeで実行

```
git clone https://github.com/kirikirisu/DiariesMergeBot.git
cd DiariesMergeBot
npm i
```

.envファイルを作成する

```javascript:.env
GITHUB_TOKEN = "hoge"  // gitHubのPersonal access tokens
OWNER = "hoge"       // マージしたいプルリクが上がっているレポジトリの管理者の名前
REPO = "hoge"        // レポジトリの名前
```

トークンの入手
github => settings => Developer settings => Personal access tokensでGenerate new tokenボタンを押す。

```
node index.js
```

## 問題点
自動マージにした場合、破損ファイルなども一緒にマージしてしまう可能性がある。
