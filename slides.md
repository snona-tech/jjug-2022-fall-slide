---
theme: seriph
background: images/top.png
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
colorSchema: 'light'
exportFilename: 'jjug_2022_fall_snonaka'
title: Dagger
titleTemplate: '%s - JJUG 2022 Fall'
layout: cover
---

# 未来を見据えた CI/CD

<p class="text-xl text-slate-400">～ 10年後も使える ビルド・テスト パイプライン ～</p>

_Shota Nonaka_<br>_CASAREAL,inc._<br>_Nov. 27, 2022_

<style>
h1 {
  -webkit-text-fill-color: unset;
}
h1 + p + p {
  margin-top: 2rem;
  line-height: 1.8em;
}
</style>

---
layout: center
---

# 自分について

<div class="bg-[#F7F7EE] shadow-2xl m-5 p-10">
  <div class="flex items-center h-6">
    <img src="/images/casareal.png" class="h-6 mr-2"/>
    <p class="text-sm">株式会社カサレアル</p>
  </div>
  <p class="text-xs" style="margin-top: 0;">プロフェッショナルソリューション技術部&emsp;Cloud Native Chief Architect</p>
  <p class="text-center text-3xl" style="margin-bottom: 0;">野中 翔太</p>
  <p class="text-center text-xs" style="margin-top: 0;"><i>Nonaka Shota</i></p>
  <logos-aws class="text-3xl"/>
  <logos-terraform-icon class="text-3xl ml-5"/>
  <logos-ansible class="text-3xl ml-5"/>
  <logos-nginx class="text-3xl ml-5"/>
  <logos-docker-icon class="text-3xl ml-5"/>
  <logos-kubernetes class="text-3xl ml-5"/>
  <logos-argo-icon class="text-3xl ml-5"/>
  <logos-airflow-icon class="text-3xl ml-5"/>
  <logos-jfrog class="text-3xl ml-5"/>
</div>

---
layout: default
title: 会社概要
---

<h1 class="flex items-center">
  <img src="/images/casareal.png" class="h-12 mr-2"/>
  <p>株式会社カサレアル</p>
</h1>

|          |                                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| 設立     | 1999年7月2日                                                                                                 |
| 資本金   | 5,000万円                                                                                                    |
| 従業員数 | 75名（2022年4月現在）                                                                                        |
| 代表者   | 代表取締役社長　窪 伸一郎                                                                                    |
| 株主構成 | テクマトリックス株式会社（東京証券取引所市場第一部：3762）                                                   |
| 所在地   | 東京都港区三田3-11-24 国際興業三⽥第2ビル<br>※ 2022年12月に移転予定： 東京都港区港南1-2-70 品川シーズンテラス |

---
layout: center
class: text-center text-2xl
---

# 社名の由来

<img src="/images/casareal.png" class="h-8 mx-auto">

スペイン語で「**真の家**」という意味を持ちます

**ここに多くの人々が集まり**<br>
**世の中に貢献できる多くの技術者と事業者を育て**<br>
**世の中を支えるシステムを構築していく**

という意味が込められています

これはカサレアルの目標でもあります

<style>
  p {
    line-height: 2;
  }
</style>

---
layout: center
class: text-center
title: 会社紹介
---

<h1 class="flex items-center">
  <img src="/images/casareal.png" class="h-12 mr-2"/>
  <p>株式会社カサレアル</p>
</h1>

<h3 class="my-3">- SERVICE -</h3>

<v-click>

**３つの事業をワンストップで提供**

<img src="/images/casareal_service.drawio.svg" class="mx-auto"/>
</v-click>

---
layout: image-right
image: images/ls_service_bg.jpg
class: text-2xl
---

# ラーニングサービス

**研修事業**

* オープン研修
* カスタムメイド研修
* 新入社員研修
* 技術支援/内製化支援

<!--
研修事業として、Javaなどの開発言語を中心に1社向け、<br>
あるいはオープンで様々なコースを展開しており、<br>
ほぼ毎日研修コースを開催しています。
-->

---
layout: image-right
image: images/ps_service_bg.jpg
class: text-2xl
---

# クラウドネイティブ推進支援サービス

**プロフェッショナルサービス**

* クラウドネイティブ推進支援
* DevOps 環境構築支援
* 開発プロセスやテストの自動化支援
* クラウドネイティブ道場

<!--
もともとはツールを活かした開発プロセスやテストの自動化支援、<br>
関連ツールのトレーニングを中心にサービスを展開してたのですが、

最近は、お客様もオンプレからクラウドにシフトされるケースが増えてきたので、<br>
5年ほど前より軸足をクラウドに置いて、<br>
クラウドネイティブ推進支援サービスとして提供を開始しました。
-->

---
layout: image-right
image: images/bs_service_bg.jpg
class: text-2xl
---

# ビジネスソリューション

**受託開発・SES**

* システム構築サービス
* 開発支援サービス
* パッケージサービス

<!--
受託開発やSESといったいわゆる開発支援サービスになります
-->

---
layout: default
---

# CI/CD って？

ソフトウェア開発におけるビルド・テストやデプロイを自動化し、これらを継続的に行う仕組み。

<div class="mb-2 mx-auto">

| 用語  | 意味                     | 主なタスク例                                                     |
| :---: | ------------------------ | ---------------------------------------------------------------- |
|  CI   | 継続的インテグレーション | JUnit テスト<br>Gradle ビルド<br>Docker イメージビルド＆プッシュ |
|  CD   | 継続的デリバリー         | デプロイ etc...                                                  |

</div>

<v-click>
  <img src="/images/cicd_image.drawio.svg" class="mx-auto w-125"/>
</v-click>

---
layout: default
class: text-2xl
---

# CI/CD は必要？

**ビジネスの価値をより確実かつ迅速にエンドユーザーに届けるため**に必要です。

## CI/CD の役割

<v-click>

* ビルド・テスト・デプロイの高速化（自動化）
* 自動化に伴う人的エラーの防止

</v-click>

<p v-click="2">
リリースサイクルを高速化することで、ビジネスの価値をより確実かつ迅速にエンドユーザーに届けることができます。
</p>

---
layout: default
---

# CI/CD を実現するツール

* CNCF Cloud Native Interactive Landscape (https://landscape.cncf.io/)

<v-click>
  <img src="/images/cncf_landscape_cicd.png" class="mt-3 mx-auto w-100">
</v-click>

---
layout: default
class: text-xl
---

# 何を選ぶのがベスト？

もちろん、ご自身のプロダクトに合ったツールを選択するのは前提ですが、<br>
そもそも...

<v-clicks>

* ベストの順位は時間経過（ユーザのニーズやビジネスモデルの変化）によって変動しませんか？
* 何を選択したとしても、ツールに依存しないようにパイプラインを作成しておくことが重要ではないでしょうか？
* 何を選択したとしても、我々は**プロダクトの成長を止めないことに全力を尽くすべき**ではないでしょうか？

</v-clicks>

---
layout: default
class: text-2xl
---

# 今、求められていることは？

様々なツールの選択肢でありふれている今の時代、<br>
10年後も廃れないプロダクトであり続けるためには、

<v-clicks>

* 数多くの選択肢に惑わされないこと
* **ビルド・テスト・デプロイといった普遍的なフローを再利用可能な資産にしておくこと**

</v-clicks>

が重要ではないでしょうか。

<div v-click class="mt-20 text-3xl text-center">

**Dagger** はその手助けをしてくれます。

</div>

---
layout: default
---

# Dagger とは

<v-clicks>

* **ポータブルな CI/CD 開発キット**というコンセプトの OSS(Apache License 2.0)
* Docker の生みの親（`Solomon Hykes`）がプロジェクトを推進している
* 一度パイプラインを作成すれば、どこでも（ローカルでも）実行できる
* パイプラインは CUE 言語で記述する

</v-clicks>

<img src="/images/dagger.webp" class="w-140 mt-5 mx-auto">

---
layout: default
class: text-xl
---

# Dagger は何を解決するか

<v-clicks>

* 様々な CI/CD ツールにロックインしない
  * ツールを Dagger 置き換えるのではなく、普遍的なフローを再利用可能にする
* ローカルで CI/CD を実行できる
  * 記述したパイプラインの動作確認が容易
* 既存の Dockerfile の記述をそのまま利用することもできる（互換性）
  * 今ある資産も無駄にならない

</v-clicks>

<img src="/images/cicd_with_dagger.drawio.svg" class="w-80 mx-auto">

---
layout: default
class: text-2xl
---

# Dagger を使ってみる

いくつかデモンストレーションを実施します。

1. Dagger で Gradle ビルドしてみる
2. Dagger で Docker ビルドしてみる
3. Dagger で Docker イメージをロードしてみる
4. Dagger で Docker プッシュしてみる
5. GitHub Actions で Dagger を実行してみる

---
layout: default
---

# デモンストレーションの実施環境

|                                                | バージョン | 補足                                                        |
| ---------------------------------------------- | :--------: | ----------------------------------------------------------- |
| Ubuntu（ホスト OS）                            |   22.04    | WSL 上の Docker コンテナ                                    |
| Dagger                                         |  v0.2.36   |                                                             |
| Gradle                                         |   7.5.1    | ビルド環境として DockerHub の `gradle:7.5.1-jdk17` を使用   |
| Corretto<br>(OpenJDK のディストリビューション) |     17     | Java 実行環境として DockerHub の `amazoncorretto:17` を使用 |
| ECR                                            |     -      | AWS のマネージドなコンテナレジストリサービス                |
| AWS App Runner                                 |     -      | AWS のフルマネージドなコンテナデプロイサービス              |

---
layout: default
---

# デモンストレーションのディレクトリ構成

主に、`dagger.cue`を編集する。

```plaintext {all|2}
├── build.gradle
├── dagger.cue  // パイプラインを記述するファイル
├── pom.xml
├── settings.gradle
└── src
    ├── main
    │   └── java
    │       └── com
    │           └── example
    │               └── springboot
    │                   ├── Application.java
    │                   └── HelloController.java
    └── test
        └── java
            └── com
                └── example
                    └── springboot
                        └── HelloControllerTest.java
```

---
layout: default
---

# デモンストレーションのアプリ

`/`に HTTP リクエストを送信すると、`Hello Dagger!`という文字列を返す簡単な Web アプリケーション。

```java {9,11}
package com.example.springboot;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  @GetMapping("/")
  public String index() {
    return "Hello Dagger!";
  }
}
```

---
layout: default
---

# デモンストレーションのイメージ（ローカル）

<img src="/images/demo_architecture_local.drawio.svg" class="mt-15 mx-auto">

---
layout: default
class: text-2xl
---

# Dagger パイプラインの基本構成

大まかに以下の４つの項目から構成されます。

* パッケージ
* インポート
* クライアント
* アクション

---
layout: default
---

# Dagger パイプラインの基本構成

* パッケージ

任意のパッケージ名を指定します。（未指定だと Dagger 実行時にエラーになります）<br>

```cue
package sample
```

* インポート

使用するパッケージを記載します。（未使用のパッケージがあると Dagger 実行時にエラーになります）

```cue
import (
  "dagger.io/dagger"
  ・・・
)
```

---
layout: default
---

# Dagger パイプラインの基本構成

* クライアント

ホストのファイルシステムに関する設定等を記載します。<br>
下記の例では、カレントディレクトリの読み込みと、アクションの gradle_build の出力を`build`ディレクトリへ書き込む設定をしています。

```cue
client: {
	filesystem: {
		"./": read: contents:       dagger.#FS
		"./build": write: contents: actions.gradle_build.contents.output
	}
}
```

---
layout: default
---

# Dagger パイプラインの基本構成

* アクション

`dagger do アクション`で実行するアクションの定義を記載します。<br>
下記の例では、gradle_build というアクションを定義しています。

```cue
dagger.#Plan & {
	actions: {
		gradle_build: #GradleBuild & {
      ・・・
		}
	}
}
```

---
layout: center
---

# Dagger で Gradle ビルドしてみる

Dagger で Gradle ビルドを実行し、jar が作成されることを確認します。

---
layout: center
---

# Dagger で Docker ビルドしてみる

Dagger で Docker ビルドを実行し、パイプラインが正常に終了することを確認します。<br>
また、ローカルに Docker イメージが作成**されていない**ことも確認します。

---
layout: center
---

# Dagger で Docker イメージをロードしてみる

Dagger で Docker ビルドを行うと、BuildKit 上でイメージが作成され、ローカルには作成されません。<br>
しかし、開発中に正しくイメージが作成されていることを確認したい場合もあります。<br>
その際は、ビルドしたイメージをローカルにロードすることができます。

---
layout: center
---

# Dagger で Docker プッシュしてみる

---
layout: default
---

# デモンストレーションのイメージ（GitHub 連携）

ローカルとの違いは Dagger の呼び出し元の GitHub Actions のみ。<br>
**パイプラインを再利用**。

<img src="/images/demo_architecture.drawio.svg" class="mx-auto">

---
layout: two-cols
class: px-2
---

::default::

# ローカル

```bash
dagger project init
dagger project update
dagger do image_push
```

::right::

# GitHub Actions

```yaml {maxHeight: '10'}
jobs:
　・・・
  dagger:
    - name: Image Push
      uses: dagger/dagger-for-github@v3
      with:
        version: 0.2
        cmds: |
          project init
          project update
          do image_push
```

<div v-click="1" class="absolute bottom-97 left-16 border-2 border-red-400 py-7 px-21"></div>
<div v-click="1" class="absolute bottom-61 left-143 border-2 border-red-400 py-7 px-14"></div>

---
layout: center
---

# GitHub Actions で Dagger を実行してみる

---
layout: center
class: text-2xl
---

# コードの詳細について

| <carbon-logo-github/>GitHub |                                                                     |
| --------------------------- | ------------------------------------------------------------------- |
| Repository                  | [casa-snona/dagger-demo](https://github.com/casa-snona/dagger-demo) |

<style>
table {
  border-collapse: unset;
}
</style>

---
layout: default
---

# Dagger の導入事例

<div class="flex items-center">
  <img src="/images/neo_logo.png" class="h-8 mr-2"/>
  <p class="text-2xl">テクマトリックス NEO</p>
</div>

`テクマトリックス NEO` の開発で Dagger を利用しています。

NEOは、日本にクラウドネイティブのテクノロジーをより早くより多く広めていくためのサービスです。<br>
クラウドネイティブ導入の伴走者として、初期教育から導入、運用まで幅広く支援をします。

<img src="/images/about_neo.jpg" class="h-53 mx-auto">

---
layout: default
---

# NEO のアーキテクチャと Dagger の役割

NEO は、簡単なブラウザ操作でネットワークや各種 OSS をインストールした VM の構築など、<br>
開発環境に必要なクラウドインフラを即座に提供します。

クラウドインフラを構築するための IaC を実行するコンテナイメージを Dagger で作成しています。

<img src="/images/neo_dagger_usecase.drawio.svg" class="h-77 mx-auto">

---
layout: image-right
image: images/top.png
class: bg-[#131226] text-center text-[#fffef6]
---

# 最後に...

様々なツールの選択肢でありふれている今の時代、<br>
10年後も廃れないプロダクトであり続けるためには、数多くの選択肢に惑わされず、

<div class="text-[#40b9bc]">

**ビルド・テスト・デプロイといった<br>普遍的なフローを再利用可能な資産にしておくこと**

</div>

が重要だと思います。

その手助けをしてくれる Dagger をぜひお勧めします。

<img class="in_the_space w-70 mx-auto" src="/images/with_dagger.png">

<style>
h1 + p {
  color: #fffef6 !important;
}

@keyframes inTheSpace {
0%, 100% {
  transform: translateY(0);
}
50% {
  transform: translateY(-20px);
  }
}

.in_the_space {
  animation: 3s inTheSpace infinite;
}
</style>