## 概要
スマートフォンアプリプロジェクトでは毎週Diariesを提出しているが、毎週金曜日に複数のプルリクをマージするのを忘れてしまう。そこで自動でマージするBOTを作成する。
## 仕様
Node.jsでレポジトリにあるプルリクを全てマージするプログラムを書いた。
これをIFFTと連携させれば毎週金曜日に自動マージでき、マージの手間を省くことができる。Slackと連携させればコマンド一つでマージでき、マージの手間を減らすことができる。
## 問題点
自動マージにした場合、破損ファイルなども一緒にマージしてしまう可能性がある。