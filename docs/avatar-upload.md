# ★ VRCにアバターをアップロードする方法 ★

以下の手順でアバターを VRChat へアップロードしてください。

不明点などの質問やクレームは りっきー までご相談ください。いつでもサポートします！！

::: tip おすすめ
ツールのダウンロードや、アバターの導入作業はPCに負荷がかかるため、不要なアプリケーションは終了させておくことをおすすめします。
:::

## コミュニティの紹介

行き詰まったときは、周りのユーザーに相談するか、**「アバター改変なんもわからん集会」** のDiscordサーバーへ加入することをお勧めします。アバター導入や改変で躓いた点について、自由に質問が可能です。

* **[公式X (@wakaran_vrc)](https://x.com/wakaran_vrc)**
* **[Discordサーバーに参加する](https://t.co/tBeExLKot6)**



## ■ アバターの導入方法（Mac）
Macを使用されている方は、操作手順が異なります。以下のページを確認してください。

👉 **[アバターをアップロードする方法（Mac）](/avatar-upload-mac)**



## ■ アバターの導入方法（Windows）

### 0. 準備：PCの名前を確認する
Windows PCでユーザー名が日本語になっていると、エラーの原因になります。
1. **スタートメニュー > 設定 > ホーム** を開く。
2. **PC名が半角英数字** になっているか確認してください。

<br>

## 1. Unity をインストールする
VRChatが指定する公式バージョンのUnityを導入します。

::: info 公式情報
現在の指定バージョンは**Unity 2022.3.22f1** です。
[こちら](https://creators.vrchat.com/sdk/upgrade/current-unity-version/)から公式の最新情報が確認できます。
:::

<br>

1. [Unityダウンロードページ](https://unity.com/ja/releases/editor/whats-new/2022.3.22f1)から
Manual installs > Other installs の場所にある、

 **Unity 2022.3.22 (Download Assistant)** をダウンロードしてください。

<br>

2. ダウンロードした **Unity Download Assistant** を開いてください。

    画面に従い、規約に同意してください。
    
    Components の画面で以下の３つのみを選択し、Continue をクリックしてください。
    - **Unity 2022.3.22f1**
    - **Android Build Support**
    - **iOS Build Support**

    画面に従い、ダウンロード、インストールしてください。（結構時間がかかります。）

<br>

3. [Unity Hubのダウンロードページ](https://unity.com/ja/download) から、Unity Hubをダウンロードしてください。
    
    ダウンロードしたファイル  **UnityHubSetup.exe** を開き、Unity Hub をインストールしてください。
    
    Unity Hub を起動してください。 **アカウント設定** から、自身のアカウントを作成してください。

<br>

4. Unity Hub > インストール(Install) > リストに追加(Locate) に進み、先ほどダウンロードした Unity を選択してください。（すでにリストに追加されている場合は、飛ばして良い）

::: info 補足
`C:\Program Files\Unity 2022.3.22f1\Editor` の場所に Unity のアプリケーションがあるはずです。
:::

**これで、Unity Hub は用済みです。Unity Hub を閉じてください。**

これ以降は、Unity Hub を起動する必要はないです。


## 2. ALCOM をインストールする

ALCOMは、プロジェクトやプログラムを管理するための非常に便利なツールです。

1. [ALCOM公式サイト](https://vrc-get.anatawa12.com/ja/alcom/)からダウンロードしてインストールしてください。
2. 起動後、セットアップ手順に従ってください。
3. **「ALCOMと VCC: URLを紐付ける」** にチェックを入れるのがおすすめです。



## 3. ツールを ALCOM へ導入する

ALCOM を開いてください。まずは、色々なツールを導入します。

パッケージ&テンプレート > VPMリポジトリを追加 に進み、下の表からリンクをそれぞれコピペし、各ツールを ALCOM に追加してください。

| ツール名 | VPMリポジトリURL (クリックでコピー) |
| :--- | :--- |
| **lilToon** | <CopyUrl url="https://lilxyzw.github.io/vpm-repos/vpm.json" /> |
| **Modular Avatar** | <CopyUrl url="https://vpm.nadena.dev/vpm.json" /> |
| **AvatarMenuCreator** | <CopyUrl url="https://suzuryg.github.io/vpm-repos/vpm.json" /> |
| **FaceEmo** | <CopyUrl url="https://suzuryg.github.io/vpm-repos/vpm.json" /> |
| **VRCQuestTools** | <CopyUrl url="https://kurotu.github.io/vpm-repos/vpm.json" /> |
| **Avatar Optimizer** | <CopyUrl url="https://vpm.anatawa12.com/vpm.json" /> |

各ツールの詳細は、[こちら](/tool-details) を参照してください。



## 4. Projectを作成する

1. ALCOM右上の **[プロジェクトを作成]** をクリックしてください。
2. **種類:** アバター / **Unityバージョン:** 2022.3.22f1 を選択してください。
3. New Project の部分を、任意のものに設定して、[作成する] をクリックしてください。

::: warning ❗️注意❗️
予期せぬ不具合が生じることがあるため、 **Project名 は 英数字のみ** にしてください。
:::

4. 作成後、各ツール（Modular Avatar等）をプロジェクトに「追加」し、**[UNITYを開く]** をクリックします。



## 5. アバターをインポートする

1. 購入したアバターの `.unitypackage` をダブルクリックして **Import**。
2. `Project` フォルダ内の `prefab` ファイルを **Hierarchy** へドラッグ＆ドロップ。
3. **軽量化設定:** アバターのルートを選択し、Inspectorで `Add Component` から **AAO Trace and Optimize** を追加します。



## 6. VRChat にアップロードする

1. **VRChat SDK > Show Control Panel** からサインイン。
2. **Builder** タブで設定を行います。
    - **Name:** アバターの表示名（自由）
    - **Visibility:** ⚠️ 必ず **Private** を選択してください
3. **Review Any Alerts:** 赤い「！」マークが出た場合のみ **Auto Fix** をクリック。
4. **Build & Publish** をクリックして完了です！



## 7. Android (Quest) 対応させる

VRゴーグル単機でプレイする方は、以下の手順も行ってください。

1. **Tools > VRCQuestTools > Convert Avatar for Android** を選択。
2. 「Android用にアップロードできません」という警告が出る場合は、PhysBone等の設定を削減し **[適用]** をクリック。
3. **[非破壊的に変換する]** をクリック。
4. VRChat SDKの画面で **Platform: Android** を選択し、**Build & Publish for Android** をクリック！


