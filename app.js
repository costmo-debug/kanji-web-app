const kanjiData = [
  { k: "引", on: "イン", kun: "ひく", yomi: ["いん", "ひく"], words: ["引く", "引力"], meaning: "ひっぱる。しりぞく。線をかく。数をへらす。", meanings: ["手前に近づける。ひっぱる。", "後ろへ下がる。しりぞく。", "線や印をかく。", "数や量をへらす。"], example: "ドアを引く。" },
  { k: "羽", on: "ウ", kun: "はね", yomi: ["う", "はね"], words: ["羽", "羽毛"], meaning: "鳥などのはね", example: "鳥の羽を見る。" },
  { k: "雲", on: "ウン", kun: "くも", yomi: ["うん", "くも"], words: ["雲", "雨雲"], meaning: "空にうかぶ白や黒いもの", example: "白い雲が出ている。" },
  { k: "園", on: "エン", kun: "その", yomi: ["えん", "その"], words: ["公園", "学園"], meaning: "人が集まる場所や庭", example: "公園で遊ぶ。" },
  { k: "遠", on: "エン", kun: "とおい", yomi: ["えん", "とおい"], words: ["遠足", "遠い"], meaning: "はなれている", example: "学校まで遠い。" },
  { k: "黄", on: "オウ", kun: "き", yomi: ["おう", "き"], words: ["黄色", "黄葉"], meaning: "きいろ", example: "黄色い花がさく。" },
  { k: "何", on: "カ", kun: "なに", yomi: ["か", "なに", "なん"], words: ["何人", "何か"], meaning: "わからないものをたずねる字", example: "何を読むの。" },
  { k: "科", on: "カ", kun: "", yomi: ["か"], words: ["理科", "教科"], meaning: "学びの分け方", example: "理科の時間です。" },
  { k: "夏", on: "カ", kun: "なつ", yomi: ["か", "なつ"], words: ["夏休み", "夏"], meaning: "春の次のあつい季節", example: "夏休みに泳ぐ。" },
  { k: "家", on: "カ・ケ", kun: "いえ・や", yomi: ["か", "け", "いえ", "や"], words: ["家", "家族"], meaning: "人がすむところ", example: "家に帰る。" },
  { k: "歌", on: "カ", kun: "うた・うたう", yomi: ["か", "うた", "うたう"], words: ["歌", "歌手"], meaning: "声にふしをつけること", example: "みんなで歌を歌う。" },
  { k: "画", on: "ガ・カク", kun: "", yomi: ["が", "かく"], words: ["図画", "画家"], meaning: "えや線で表したもの", example: "画用紙に絵をかく。" },
  { k: "回", on: "カイ", kun: "まわる・まわす", yomi: ["かい", "まわる", "まわす"], words: ["今回", "回る"], meaning: "ぐるりと動く", example: "こまが回る。" },
  { k: "会", on: "カイ・エ", kun: "あう", yomi: ["かい", "え", "あう"], words: ["会う", "大会"], meaning: "人と人があう", example: "友だちに会う。" },
  { k: "海", on: "カイ", kun: "うみ", yomi: ["かい", "うみ"], words: ["海", "海外"], meaning: "広くてしおからい水の場所", example: "海で泳ぐ。" },
  { k: "絵", on: "カイ・エ", kun: "", yomi: ["かい", "え"], words: ["絵", "絵本"], meaning: "かいたもの", example: "絵本を読む。" },
  { k: "外", on: "ガイ・ゲ", kun: "そと・ほか・はずす", yomi: ["がい", "げ", "そと", "ほか", "はずす"], words: ["外", "外国"], meaning: "内ではないところ", example: "外で遊ぶ。" },
  { k: "角", on: "カク", kun: "かど・つの", yomi: ["かく", "かど", "つの"], words: ["角", "三角"], meaning: "とがったところ", example: "三角形をかく。" },
  { k: "楽", on: "ガク・ラク", kun: "たのしい", yomi: ["がく", "らく", "たのしい"], words: ["音楽", "楽しい"], meaning: "うれしい、または音を楽しむ", example: "音楽を聞く。" },
  { k: "活", on: "カツ", kun: "", yomi: ["かつ"], words: ["生活", "活動"], meaning: "元気に動く", example: "生活リズムを整える。" },
  { k: "間", on: "カン・ケン", kun: "あいだ・ま", yomi: ["かん", "けん", "あいだ", "ま"], words: ["時間", "間"], meaning: "ものともののあいだ", example: "時間を守る。" },
  { k: "丸", on: "ガン", kun: "まる・まるい", yomi: ["がん", "まる", "まるい"], words: ["丸", "丸い"], meaning: "円のような形", example: "丸い石を拾う。" },
  { k: "岩", on: "ガン", kun: "いわ", yomi: ["がん", "いわ"], words: ["岩", "岩石"], meaning: "大きな石", example: "大きな岩がある。" },
  { k: "顔", on: "ガン", kun: "かお", yomi: ["がん", "かお"], words: ["顔", "笑顔"], meaning: "目や口がある頭の前", example: "笑顔であいさつする。" },
  { k: "汽", on: "キ", kun: "", yomi: ["き"], words: ["汽車", "汽船"], meaning: "水じょう気", example: "汽車が走る。" },
  { k: "記", on: "キ", kun: "しるす", yomi: ["き", "しるす"], words: ["日記", "記号"], meaning: "書いてのこす", example: "日記を書く。" },
  { k: "帰", on: "キ", kun: "かえる", yomi: ["き", "かえる"], words: ["帰る", "帰宅"], meaning: "もとの場所にもどる", example: "家に帰る。" },
  { k: "弓", on: "キュウ", kun: "ゆみ", yomi: ["きゅう", "ゆみ"], words: ["弓", "弓矢"], meaning: "矢をとばす道具", example: "弓を引く。" },
  { k: "牛", on: "ギュウ", kun: "うし", yomi: ["ぎゅう", "うし"], words: ["牛", "牛乳"], meaning: "大きな家ちく", example: "牛乳を飲む。" },
  { k: "魚", on: "ギョ", kun: "さかな・うお", yomi: ["ぎょ", "さかな", "うお"], words: ["魚", "金魚"], meaning: "水の中でくらす生き物", example: "魚を見つける。" },
  { k: "京", on: "キョウ・ケイ", kun: "", yomi: ["きょう", "けい"], words: ["東京", "京都"], meaning: "みやこ、大きなまち", example: "東京へ行く。" },
  { k: "強", on: "キョウ・ゴウ", kun: "つよい", yomi: ["きょう", "ごう", "つよい"], words: ["勉強", "強い"], meaning: "力がある", example: "強い風がふく。" },
  { k: "教", on: "キョウ", kun: "おしえる", yomi: ["きょう", "おしえる"], words: ["教室", "教える"], meaning: "わかるように伝える", example: "先生が教える。" },
  { k: "近", on: "キン", kun: "ちかい", yomi: ["きん", "ちかい"], words: ["近く", "近所"], meaning: "はなれていない", example: "学校が近い。" },
  { k: "兄", on: "ケイ・キョウ", kun: "あに", yomi: ["けい", "きょう", "あに"], words: ["兄", "兄弟"], meaning: "年上の男のきょうだい", example: "兄と遊ぶ。" },
  { k: "形", on: "ケイ・ギョウ", kun: "かたち", yomi: ["けい", "ぎょう", "かたち"], words: ["形", "図形"], meaning: "もののすがた", example: "形をよく見る。" },
  { k: "計", on: "ケイ", kun: "はかる", yomi: ["けい", "はかる"], words: ["時計", "計算"], meaning: "数や時間をはかる", example: "時計を見る。" },
  { k: "元", on: "ゲン・ガン", kun: "もと", yomi: ["げん", "がん", "もと"], words: ["元気", "元日"], meaning: "はじめ、もと", example: "元気に走る。" },
  { k: "言", on: "ゲン・ゴン", kun: "いう・こと", yomi: ["げん", "ごん", "いう", "こと"], words: ["言う", "言葉"], meaning: "ことばで表す", example: "ありがとうと言う。" },
  { k: "原", on: "ゲン", kun: "はら", yomi: ["げん", "はら"], words: ["原っぱ", "原稿"], meaning: "広い平らな土地", example: "原っぱで遊ぶ。" },
  { k: "戸", on: "コ", kun: "と", yomi: ["こ", "と"], words: ["戸", "戸口"], meaning: "出入り口のとびら", example: "戸を開ける。" },
  { k: "古", on: "コ", kun: "ふるい", yomi: ["こ", "ふるい"], words: ["古い", "中古"], meaning: "昔からある", example: "古い本を読む。" },
  { k: "午", on: "ゴ", kun: "", yomi: ["ご"], words: ["午前", "午後"], meaning: "昼のころ", example: "午後に出かける。" },
  { k: "後", on: "ゴ・コウ", kun: "あと・うしろ", yomi: ["ご", "こう", "あと", "うしろ"], words: ["後ろ", "午後"], meaning: "うしろ、あと", example: "後ろを見る。" },
  { k: "語", on: "ゴ", kun: "かたる", yomi: ["ご", "かたる"], words: ["国語", "物語"], meaning: "ことば", example: "国語を勉強する。" },
  { k: "工", on: "コウ・ク", kun: "", yomi: ["こう", "く"], words: ["工作", "工場"], meaning: "ものを作ること", example: "工作をする。" },
  { k: "公", on: "コウ", kun: "おおやけ", yomi: ["こう", "おおやけ"], words: ["公園", "公共"], meaning: "みんなに関係すること。おおやけ。", meanings: ["みんなに関係すること。", "自分だけのものではなく、おおやけのもの。"], example: "公の場で話す。", kunExample: "公の場で話す。", onExample: "公園で遊ぶ。" },
  { k: "広", on: "コウ", kun: "ひろい", yomi: ["こう", "ひろい"], words: ["広い", "広告"], meaning: "ひろがっている", example: "広い部屋です。" },
  { k: "交", on: "コウ", kun: "まじる・かわす", yomi: ["こう", "まじる", "かわす"], words: ["交通", "交番"], meaning: "行き来する", example: "交通ルールを守る。" },
  { k: "光", on: "コウ", kun: "ひかる・ひかり", yomi: ["こう", "ひかる", "ひかり"], words: ["光", "日光"], meaning: "明るく見えるもの", example: "光がさす。" },
  { k: "考", on: "コウ", kun: "かんがえる", yomi: ["こう", "かんがえる"], words: ["考える", "考え"], meaning: "頭で思う", example: "答えを考える。" },
  { k: "行", on: "コウ・ギョウ", kun: "いく・おこなう", yomi: ["こう", "ぎょう", "いく", "おこなう"], words: ["行く", "行事"], meaning: "進む、する", example: "学校へ行く。" },
  { k: "高", on: "コウ", kun: "たかい", yomi: ["こう", "たかい"], words: ["高い", "高校"], meaning: "上までのびている", example: "高い山を見る。" },
  { k: "合", on: "ゴウ・ガッ・カッ", kun: "あう・あわせる", yomi: ["ごう", "がっ", "かっ", "あう", "あわせる"], words: ["合う", "合計"], meaning: "一つになる、ぴったりする", example: "答えが合う。" },
  { k: "国", on: "コク", kun: "くに", yomi: ["こく", "くに"], words: ["国", "国語"], meaning: "人々がくらす大きなまとまり", example: "日本は島国です。" },
  { k: "黒", on: "コク", kun: "くろ・くろい", yomi: ["こく", "くろ", "くろい"], words: ["黒", "黒板"], meaning: "くろい色", example: "黒板に書く。" },
  { k: "今", on: "コン・キン", kun: "いま", yomi: ["こん", "きん", "いま"], words: ["今", "今日"], meaning: "この時", example: "今から始める。" },
  { k: "才", on: "サイ", kun: "", yomi: ["さい"], words: ["天才", "何才"], meaning: "力や年を表す字", example: "八才です。" },
  { k: "細", on: "サイ", kun: "ほそい", yomi: ["さい", "ほそい"], words: ["細い", "細かい"], meaning: "ほそい、小さい", example: "細い線を引く。" },
  { k: "作", on: "サク・サ", kun: "つくる", yomi: ["さく", "さ", "つくる"], words: ["作る", "作文"], meaning: "ものをつくる", example: "工作を作る。" },
  { k: "算", on: "サン", kun: "", yomi: ["さん"], words: ["算数", "計算"], meaning: "数を数えること", example: "算数を学ぶ。" },
  { k: "止", on: "シ", kun: "とまる・とめる", yomi: ["し", "とまる", "とめる"], words: ["止まる", "中止"], meaning: "動かなくなる", example: "車が止まる。" },
  { k: "市", on: "シ", kun: "いち", yomi: ["し", "いち"], words: ["市", "市場"], meaning: "人が多く住むまち", example: "市の図書館へ行く。" },
  { k: "矢", on: "シ", kun: "や", yomi: ["し", "や"], words: ["矢", "弓矢"], meaning: "弓でとばすもの", example: "矢が的に当たる。" },
  { k: "姉", on: "シ", kun: "あね", yomi: ["し", "あね"], words: ["姉", "姉妹"], meaning: "年上の女のきょうだい", example: "姉と話す。" },
  { k: "思", on: "シ", kun: "おもう", yomi: ["し", "おもう"], words: ["思う", "思い出"], meaning: "心で考える", example: "友だちを思う。" },
  { k: "紙", on: "シ", kun: "かみ", yomi: ["し", "かみ"], words: ["紙", "手紙"], meaning: "書いたり包んだりするうすいもの", example: "紙に名前を書く。" },
  { k: "寺", on: "ジ", kun: "てら", yomi: ["じ", "てら"], words: ["寺", "寺院"], meaning: "仏さまをまつる場所", example: "古い寺を見る。" },
  { k: "自", on: "ジ・シ", kun: "みずから", yomi: ["じ", "し", "みずから"], words: ["自分", "自然"], meaning: "自分で、ひとりで", example: "自分で考える。" },
  { k: "時", on: "ジ", kun: "とき", yomi: ["じ", "とき"], words: ["時間", "時"], meaning: "とき", example: "時を知らせる。" },
  { k: "室", on: "シツ", kun: "むろ", yomi: ["しつ", "むろ"], words: ["教室", "室内"], meaning: "へや", example: "教室に入る。" },
  { k: "社", on: "シャ", kun: "やしろ", yomi: ["しゃ", "やしろ"], words: ["会社", "神社"], meaning: "人の集まりや神社", example: "神社に行く。" },
  { k: "弱", on: "ジャク", kun: "よわい", yomi: ["じゃく", "よわい"], words: ["弱い", "弱点"], meaning: "力が少ない", example: "弱い雨がふる。" },
  { k: "首", on: "シュ", kun: "くび", yomi: ["しゅ", "くび"], words: ["首", "首都"], meaning: "頭と体をつなぐところ", example: "首を回す。" },
  { k: "秋", on: "シュウ", kun: "あき", yomi: ["しゅう", "あき"], words: ["秋", "秋分"], meaning: "夏の次の季節", example: "秋に虫が鳴く。" },
  { k: "週", on: "シュウ", kun: "", yomi: ["しゅう"], words: ["一週", "今週"], meaning: "七日間", example: "今週は雨が多い。" },
  { k: "春", on: "シュン", kun: "はる", yomi: ["しゅん", "はる"], words: ["春", "春分"], meaning: "冬の次の季節", example: "春に花がさく。" },
  { k: "書", on: "ショ", kun: "かく", yomi: ["しょ", "かく"], words: ["書く", "読書"], meaning: "文字をかく", example: "漢字を書く。" },
  { k: "少", on: "ショウ", kun: "すくない・すこし", yomi: ["しょう", "すくない", "すこし"], words: ["少し", "少年"], meaning: "多くない", example: "水が少ない。" },
  { k: "場", on: "ジョウ", kun: "ば", yomi: ["じょう", "ば"], words: ["場所", "広場"], meaning: "ところ", example: "広場で遊ぶ。" },
  { k: "色", on: "ショク・シキ", kun: "いろ", yomi: ["しょく", "しき", "いろ"], words: ["色", "黄色"], meaning: "あか、あおなどの見え方", example: "好きな色をえらぶ。" },
  { k: "食", on: "ショク・ジキ", kun: "たべる", yomi: ["しょく", "じき", "たべる"], words: ["食べる", "給食"], meaning: "ものを食べる", example: "給食を食べる。" },
  { k: "心", on: "シン", kun: "こころ", yomi: ["しん", "こころ"], words: ["心", "安心"], meaning: "気持ちや考え", example: "心をこめる。" },
  { k: "新", on: "シン", kun: "あたらしい", yomi: ["しん", "あたらしい"], words: ["新しい", "新聞"], meaning: "できたばかり", example: "新しい本を読む。" },
  { k: "親", on: "シン", kun: "おや・したしい", yomi: ["しん", "おや", "したしい"], words: ["親", "親切"], meaning: "父や母、したしいこと", example: "親に話す。" },
  { k: "図", on: "ズ・ト", kun: "はかる", yomi: ["ず", "と", "はかる"], words: ["図", "地図"], meaning: "形や場所を表したもの", example: "地図を見る。" },
  { k: "数", on: "スウ", kun: "かず・かぞえる", yomi: ["すう", "かず", "かぞえる"], words: ["数", "算数"], meaning: "ものの多さ", example: "数を数える。" },
  { k: "西", on: "セイ・サイ", kun: "にし", yomi: ["せい", "さい", "にし"], words: ["西", "西日"], meaning: "太陽がしずむ方角", example: "西の空を見る。" },
  { k: "声", on: "セイ・ショウ", kun: "こえ", yomi: ["せい", "しょう", "こえ"], words: ["声", "大声"], meaning: "口から出る音", example: "大きな声で読む。" },
  { k: "星", on: "セイ・ショウ", kun: "ほし", yomi: ["せい", "しょう", "ほし"], words: ["星", "星空"], meaning: "夜空に光るもの", example: "星を見る。" },
  { k: "晴", on: "セイ", kun: "はれる", yomi: ["せい", "はれる"], words: ["晴れ", "快晴"], meaning: "空が明るい天気", example: "今日は晴れです。" },
  { k: "切", on: "セツ・サイ", kun: "きる", yomi: ["せつ", "さい", "きる"], words: ["切る", "大切"], meaning: "わける、たいせつ", example: "紙を切る。" },
  { k: "雪", on: "セツ", kun: "ゆき", yomi: ["せつ", "ゆき"], words: ["雪", "大雪"], meaning: "空からふる白いこおり", example: "雪がふる。" },
  { k: "船", on: "セン", kun: "ふね", yomi: ["せん", "ふね"], words: ["船", "汽船"], meaning: "水の上を進む乗り物", example: "船に乗る。" },
  { k: "線", on: "セン", kun: "", yomi: ["せん"], words: ["線", "直線"], meaning: "ほそく長く続くもの", example: "線を引く。" },
  { k: "前", on: "ゼン", kun: "まえ", yomi: ["ぜん", "まえ"], words: ["前", "午前"], meaning: "まえ、さき", example: "前を見る。" },
  { k: "組", on: "ソ", kun: "くむ・くみ", yomi: ["そ", "くむ", "くみ"], words: ["組", "組み立て"], meaning: "合わせる、まとまり", example: "二年一組です。" },
  { k: "走", on: "ソウ", kun: "はしる", yomi: ["そう", "はしる"], words: ["走る", "完走"], meaning: "足を速く動かして進む", example: "校庭を走る。" },
  { k: "多", on: "タ", kun: "おおい", yomi: ["た", "おおい"], words: ["多い", "多少"], meaning: "数や量がたくさんある", example: "人が多い。" },
  { k: "太", on: "タイ・タ", kun: "ふとい", yomi: ["たい", "た", "ふとい"], words: ["太い", "太陽"], meaning: "大きくてふとい", example: "太い木がある。" },
  { k: "体", on: "タイ・テイ", kun: "からだ", yomi: ["たい", "てい", "からだ"], words: ["体", "体育"], meaning: "からだ", example: "体を動かす。" },
  { k: "台", on: "ダイ・タイ", kun: "", yomi: ["だい", "たい"], words: ["台", "台風"], meaning: "ものをのせるもの", example: "台の上に置く。" },
  { k: "谷", on: "コク", kun: "たに", yomi: ["こく", "たに"], words: ["谷", "谷川"], meaning: "山と山のあいだの低い所", example: "谷に川が流れる。" },
  { k: "知", on: "チ", kun: "しる", yomi: ["ち", "しる"], words: ["知る", "知人"], meaning: "わかる", example: "答えを知る。" },
  { k: "地", on: "チ・ジ", kun: "", yomi: ["ち", "じ"], words: ["地図", "土地"], meaning: "土地、場所", example: "地図を見る。" },
  { k: "池", on: "チ", kun: "いけ", yomi: ["ち", "いけ"], words: ["池", "電池"], meaning: "水がたまった所", example: "池に魚がいる。" },
  { k: "茶", on: "チャ・サ", kun: "", yomi: ["ちゃ", "さ"], words: ["お茶", "茶色"], meaning: "飲み物や色", example: "お茶を飲む。" },
  { k: "昼", on: "チュウ", kun: "ひる", yomi: ["ちゅう", "ひる"], words: ["昼", "昼休み"], meaning: "朝と夜のあいだ", example: "昼ごはんを食べる。" },
  { k: "長", on: "チョウ", kun: "ながい", yomi: ["ちょう", "ながい"], words: ["長い", "校長"], meaning: "ながい、かしら", example: "長い道を歩く。" },
  { k: "鳥", on: "チョウ", kun: "とり", yomi: ["ちょう", "とり"], words: ["鳥", "小鳥"], meaning: "はねで空をとぶ生き物", example: "鳥が鳴く。" },
  { k: "朝", on: "チョウ", kun: "あさ", yomi: ["ちょう", "あさ"], words: ["朝", "朝食"], meaning: "一日のはじめ", example: "朝早く起きる。" },
  { k: "直", on: "チョク・ジキ", kun: "なおす・ただちに", yomi: ["ちょく", "じき", "なおす", "ただちに"], words: ["直す", "直線"], meaning: "まっすぐ、なおす", example: "字を直す。" },
  { k: "通", on: "ツウ・ツ", kun: "とおる・かよう", yomi: ["つう", "つ", "とおる", "かよう"], words: ["通る", "交通"], meaning: "行き来する", example: "道を通る。" },
  { k: "弟", on: "テイ・ダイ", kun: "おとうと", yomi: ["てい", "だい", "おとうと"], words: ["弟", "兄弟"], meaning: "年下の男のきょうだい", example: "弟と遊ぶ。" },
  { k: "店", on: "テン", kun: "みせ", yomi: ["てん", "みせ"], words: ["店", "店員"], meaning: "ものを売る場所", example: "店で買う。" },
  { k: "点", on: "テン", kun: "", yomi: ["てん"], words: ["点", "点数"], meaning: "小さなしるし", example: "点を打つ。" },
  { k: "電", on: "デン", kun: "", yomi: ["でん"], words: ["電気", "電話"], meaning: "電気に関係する字", example: "電車に乗る。" },
  { k: "刀", on: "トウ", kun: "かたな", yomi: ["とう", "かたな"], words: ["刀", "竹刀"], meaning: "ものを切る道具", example: "刀の絵を見る。" },
  { k: "冬", on: "トウ", kun: "ふゆ", yomi: ["とう", "ふゆ"], words: ["冬", "冬休み"], meaning: "秋の次の寒い季節", example: "冬に雪がふる。" },
  { k: "当", on: "トウ", kun: "あたる", yomi: ["とう", "あたる"], words: ["当たる", "本当"], meaning: "ぴったり合う", example: "答えが当たる。" },
  { k: "東", on: "トウ", kun: "ひがし", yomi: ["とう", "ひがし"], words: ["東", "東京"], meaning: "太陽が出る方角", example: "東の空が明るい。" },
  { k: "答", on: "トウ", kun: "こたえる・こたえ", yomi: ["とう", "こたえる", "こたえ"], words: ["答え", "回答"], meaning: "問いにこたえること", example: "答えを書く。" },
  { k: "頭", on: "トウ・ズ", kun: "あたま", yomi: ["とう", "ず", "あたま"], words: ["頭", "先頭"], meaning: "からだの上の部分", example: "頭を使って考える。" },
  { k: "同", on: "ドウ", kun: "おなじ", yomi: ["どう", "おなじ"], words: ["同じ", "合同"], meaning: "かわらない", example: "同じ色を選ぶ。" },
  { k: "道", on: "ドウ・トウ", kun: "みち", yomi: ["どう", "とう", "みち"], words: ["道", "道路"], meaning: "人や車が通るところ", example: "道を歩く。" },
  { k: "読", on: "ドク・トク", kun: "よむ", yomi: ["どく", "とく", "よむ"], words: ["読む", "読書"], meaning: "文字を見る", example: "本を読む。" },
  { k: "内", on: "ナイ・ダイ", kun: "うち", yomi: ["ない", "だい", "うち"], words: ["内", "室内"], meaning: "中のほう", example: "家の内に入る。" },
  { k: "南", on: "ナン・ナ", kun: "みなみ", yomi: ["なん", "な", "みなみ"], words: ["南", "南国"], meaning: "方角の一つ", example: "南の島へ行く。" },
  { k: "肉", on: "ニク", kun: "", yomi: ["にく"], words: ["肉", "牛肉"], meaning: "食べ物のにく", example: "肉を食べる。" },
  { k: "馬", on: "バ", kun: "うま", yomi: ["ば", "うま"], words: ["馬", "馬車"], meaning: "足の速い動物", example: "馬が走る。" },
  { k: "売", on: "バイ", kun: "うる", yomi: ["ばい", "うる"], words: ["売る", "売店"], meaning: "お金と引きかえにわたす", example: "店で本を売る。" },
  { k: "買", on: "バイ", kun: "かう", yomi: ["ばい", "かう"], words: ["買う", "買物"], meaning: "お金を出して手に入れる", example: "えんぴつを買う。" },
  { k: "麦", on: "バク", kun: "むぎ", yomi: ["ばく", "むぎ"], words: ["麦", "小麦"], meaning: "こくもつの一つ", example: "麦から粉を作る。" },
  { k: "半", on: "ハン", kun: "なかば", yomi: ["はん", "なかば"], words: ["半分", "半年"], meaning: "二つに分けた一つ", example: "半分に分ける。" },
  { k: "番", on: "バン", kun: "", yomi: ["ばん"], words: ["番号", "当番"], meaning: "順番を表す", example: "番号を言う。" },
  { k: "父", on: "フ", kun: "ちち", yomi: ["ふ", "ちち"], words: ["父", "父母"], meaning: "お父さん", example: "父と出かける。" },
  { k: "風", on: "フウ・フ", kun: "かぜ", yomi: ["ふう", "ふ", "かぜ"], words: ["風", "台風"], meaning: "空気の流れ", example: "風がふく。" },
  { k: "分", on: "ブン・フン・ブ", kun: "わける・わかる", yomi: ["ぶん", "ふん", "ぶ", "わける", "わかる"], words: ["分ける", "気分"], meaning: "わける、時間の単位", example: "半分に分ける。" },
  { k: "聞", on: "ブン・モン", kun: "きく", yomi: ["ぶん", "もん", "きく"], words: ["聞く", "新聞"], meaning: "音や話をきく", example: "話を聞く。" },
  { k: "米", on: "ベイ・マイ", kun: "こめ", yomi: ["べい", "まい", "こめ"], words: ["米", "白米"], meaning: "ごはんになるもの", example: "米を炊く。" },
  { k: "歩", on: "ホ・ブ・フ", kun: "あるく", yomi: ["ほ", "ぶ", "ふ", "あるく"], words: ["歩く", "散歩"], meaning: "足で進む", example: "道を歩く。" },
  { k: "母", on: "ボ", kun: "はは", yomi: ["ぼ", "はは"], words: ["母", "父母"], meaning: "お母さん", example: "母と話す。" },
  { k: "方", on: "ホウ", kun: "かた", yomi: ["ほう", "かた"], words: ["方角", "夕方"], meaning: "向き、人", example: "北の方を見る。" },
  { k: "北", on: "ホク", kun: "きた", yomi: ["ほく", "きた"], words: ["北", "北風"], meaning: "方角の一つ", example: "北から風がふく。" },
  { k: "毎", on: "マイ", kun: "", yomi: ["まい"], words: ["毎日", "毎朝"], meaning: "いつもくり返す", example: "毎日本を読む。" },
  { k: "妹", on: "マイ", kun: "いもうと", yomi: ["まい", "いもうと"], words: ["妹", "姉妹"], meaning: "年下の女のきょうだい", example: "妹と遊ぶ。" },
  { k: "万", on: "マン・バン", kun: "", yomi: ["まん", "ばん"], words: ["一万", "万年"], meaning: "大きな数", example: "一万円を見る。" },
  { k: "明", on: "メイ・ミョウ", kun: "あかるい", yomi: ["めい", "みょう", "あかるい"], words: ["明るい", "明日"], meaning: "光があって見やすい", example: "明るい部屋です。" },
  { k: "鳴", on: "メイ", kun: "なく・なる", yomi: ["めい", "なく", "なる"], words: ["鳴く", "鳴る"], meaning: "音が出る", example: "鳥が鳴く。" },
  { k: "毛", on: "モウ", kun: "け", yomi: ["もう", "け"], words: ["毛", "羽毛"], meaning: "細く生えるもの", example: "犬の毛が白い。" },
  { k: "門", on: "モン", kun: "かど", yomi: ["もん", "かど"], words: ["門", "正門"], meaning: "出入り口", example: "門をくぐる。" },
  { k: "夜", on: "ヤ", kun: "よる・よ", yomi: ["や", "よる", "よ"], words: ["夜", "今夜"], meaning: "日がしずんだあと", example: "夜に星を見る。" },
  { k: "野", on: "ヤ", kun: "の", yomi: ["や", "の"], words: ["野原", "野菜"], meaning: "広い土地", example: "野原で遊ぶ。" },
  { k: "友", on: "ユウ", kun: "とも", yomi: ["ゆう", "とも"], words: ["友だち", "友情"], meaning: "なかよくする人", example: "友だちと遊ぶ。" },
  { k: "用", on: "ヨウ", kun: "もちいる", yomi: ["よう", "もちいる"], words: ["用事", "使用"], meaning: "使うこと", example: "用事をすませる。" },
  { k: "曜", on: "ヨウ", kun: "", yomi: ["よう"], words: ["曜日", "日曜"], meaning: "一週間の日の名に使う字", example: "日曜日に本を読む。" },
  { k: "来", on: "ライ", kun: "くる", yomi: ["らい", "くる"], words: ["来る", "未来"], meaning: "こちらへ近づく", example: "友だちが来る。" },
  { k: "里", on: "リ", kun: "さと", yomi: ["り", "さと"], words: ["里", "里山"], meaning: "人が住むところ", example: "里に帰る。" },
  { k: "理", on: "リ", kun: "", yomi: ["り"], words: ["理科", "理由"], meaning: "ものごとのすじ道", example: "理由を話す。" },
  { k: "話", on: "ワ", kun: "はなす・はなし", yomi: ["わ", "はなす", "はなし"], words: ["話す", "電話"], meaning: "ことばで伝える", example: "友だちと話す。" }
];

const els = {
  resultList: document.querySelector("#resultList"),
  listSearchInput: document.querySelector("#listSearchInput"),
  listVoiceButton: document.querySelector("#listVoiceButton"),
  listStatus: document.querySelector("#listStatus"),
  voiceButton: document.querySelector("#voiceButton"),
  voiceStatus: document.querySelector("#voiceStatus"),
  catBubble: document.querySelector("#catBubble"),
  sentenceInput: document.querySelector("#sentenceInput"),
  analyzeSentenceButton: document.querySelector("#analyzeSentenceButton"),
  highlightedSentence: document.querySelector("#highlightedSentence"),
  sentenceCandidates: document.querySelector("#sentenceCandidates"),
  bigKanji: document.querySelector("#bigKanji"),
  selectedWord: document.querySelector("#selectedWord"),
  selectedReadings: document.querySelector("#selectedReadings"),
  selectedRuby: document.querySelector("#selectedRuby"),
  selectedMeaning: document.querySelector("#selectedMeaning"),
  selectedKunExample: document.querySelector("#selectedKunExample"),
  selectedOnExample: document.querySelector("#selectedOnExample"),
  selectedWords: document.querySelector("#selectedWords"),
  writingTipText: document.querySelector("#writingTipText"),
  originalSentenceBox: document.querySelector("#originalSentenceBox"),
  traceGuide: document.querySelector("#traceGuide"),
  strokeSvg: document.querySelector("#strokeSvg"),
  strokeStatus: document.querySelector("#strokeStatus"),
  strokeTip: document.querySelector("#strokeTip"),
  traceCanvas: document.querySelector("#traceCanvas"),
  traceBoard: document.querySelector("#traceBoard"),
  showModelButton: document.querySelector("#showModelButton"),
  playStrokeButton: document.querySelector("#playStrokeButton"),
  nextCandidateButton: document.querySelector("#nextCandidateButton"),
  photoInput: document.querySelector("#photoInput"),
  photoPreview: document.querySelector("#photoPreview"),
  cameraSearchInput: document.querySelector("#cameraSearchInput"),
  cameraSearchButton: document.querySelector("#cameraSearchButton"),
  quizLabel: document.querySelector("#quizLabel"),
  quizPrompt: document.querySelector("#quizPrompt"),
  quizOptions: document.querySelector("#quizOptions"),
  quizMessage: document.querySelector("#quizMessage"),
  answerOverlay: document.querySelector("#answerOverlay"),
  fireworkOverlay: document.querySelector("#fireworkOverlay"),
  stickerSlots: document.querySelector("#stickerSlots"),
  stickerGoal: document.querySelector("#stickerGoal"),
  nextQuizButton: document.querySelector("#nextQuizButton"),
  installDialog: document.querySelector("#installDialog")
};

const savedKanji = localStorage.getItem("kanji-support-selected");
let selectedKanji = kanjiData.find((item) => item.k === savedKanji) || kanjiData.find((item) => item.k === "曜") || kanjiData[0];
let currentSentence = "";
let currentCandidateHits = [];
let selectedCandidateIndex = -1;
let selectedDisplayWord = "";
let selectedDisplayReading = "";
let quizAnswer = null;
let currentQuiz = null;
let drawing = false;
let strokeTimers = [];
let correctStickers = Number(localStorage.getItem("kanji-support-stickers") || "0");
const STICKERS_PER_PAGE = 10;
const selectedAlternativeByReading = {};
let sentenceInputTimer = 0;
let traceParentView = "searchView";

function clearSelectedAlternatives() {
  Object.keys(selectedAlternativeByReading).forEach((key) => {
    delete selectedAlternativeByReading[key];
  });
}
const kanjiVgCache = new Map();

const normalize = (text) => (text || "").trim().toLowerCase().replace(/\s+/g, "");

const sentenceWordLexicon = [
  { spoken: ["えにっき", "絵日記"], display: "絵日記", displayByKanji: { "絵": "絵", "記": "日記" }, reading: "えにっき", readingByKanji: { "絵": "え", "記": "にっき" }, rubyByKanji: { "絵": [["絵", "え"]], "記": [["日", "にっ"], ["記", "き"]] }, kanji: ["絵", "記"] },
  { spoken: ["にっき", "日記"], display: "日記", reading: "にっき", ruby: [["日", "にっ"], ["記", "き"]], kanji: ["記"] },
  { spoken: ["かく", "書く"], display: "書く", reading: "かく", kanji: ["書"] },
  { spoken: ["かいた", "書いた"], display: "書いた", reading: "かいた", kanji: ["書"] },
  { spoken: ["かいて", "書いて"], display: "書いて", reading: "かいて", kanji: ["書"] },
  { spoken: ["はしる", "走る"], display: "走る", reading: "はしる", kanji: ["走"] },
  { spoken: ["はしった", "走った"], display: "走った", reading: "はしった", kanji: ["走"] },
  { spoken: ["はしって", "走って"], display: "走って", reading: "はしって", kanji: ["走"] },
  { spoken: ["こうてい", "校庭"], display: "校庭", reading: "こうてい", kanji: [] }
];

const phraseAlternativeGroups = [
  {
    reading: "こうてい",
    triggers: ["こうてい", "工程", "校庭", "肯定"],
    options: [
      { display: "工程", reading: "こうてい", kanji: ["工"] },
      { display: "校庭", reading: "こうてい", kanji: [] },
      { display: "肯定", reading: "こうてい", kanji: [] }
    ]
  },
  {
    reading: "こうえん",
    triggers: ["こうえん", "公園", "公演", "講演"],
    options: [
      { display: "公園", reading: "こうえん", kanji: ["公", "園"] },
      { display: "公演", reading: "こうえん", kanji: ["公"] },
      { display: "講演", reading: "こうえん", kanji: [] }
    ]
  }
];

const grade4KanjiRows = [
  ["愛", "アイ", "", "愛情"], ["案", "アン", "", "案内"], ["以", "イ", "", "以上"], ["衣", "イ・エ", "ころも", "衣服"],
  ["位", "イ", "くらい", "順位"], ["茨", "", "いばら", "茨城"], ["印", "イン", "しるし", "印刷"], ["英", "エイ", "", "英語"],
  ["栄", "エイ", "さかえる・はえる", "栄養"], ["媛", "エン", "", "愛媛"], ["塩", "エン", "しお", "食塩"], ["岡", "", "おか", "岡山"],
  ["億", "オク", "", "一億"], ["加", "カ", "くわえる", "加える"], ["果", "カ", "はたす・はて", "結果"], ["貨", "カ", "", "貨物"],
  ["課", "カ", "", "課題"], ["芽", "ガ", "め", "芽"], ["賀", "ガ", "", "佐賀"], ["改", "カイ", "あらためる", "改める"],
  ["械", "カイ", "", "機械"], ["害", "ガイ", "", "害"], ["街", "カイ・ガイ", "まち", "街"], ["各", "カク", "おのおの", "各自"],
  ["覚", "カク", "おぼえる・さます", "覚える"], ["潟", "", "かた", "新潟"], ["完", "カン", "", "完成"], ["官", "カン", "", "官庁"],
  ["管", "カン", "くだ", "水道管"], ["関", "カン", "かかわる・せき", "関係"], ["観", "カン", "みる", "観察"], ["願", "ガン", "ねがう", "願う"],
  ["岐", "キ", "", "岐阜"], ["希", "キ", "", "希望"], ["季", "キ", "", "季節"], ["旗", "キ", "はた", "国旗"],
  ["器", "キ", "うつわ", "器"], ["機", "キ", "はた", "機械"], ["議", "ギ", "", "会議"], ["求", "キュウ", "もとめる", "求める"],
  ["泣", "キュウ", "なく", "泣く"], ["給", "キュウ", "", "給食"], ["挙", "キョ", "あげる", "挙手"], ["漁", "ギョ・リョウ", "", "漁業"],
  ["共", "キョウ", "とも", "共同"], ["協", "キョウ", "", "協力"], ["鏡", "キョウ", "かがみ", "鏡"], ["競", "キョウ・ケイ", "きそう・せる", "競走"],
  ["極", "キョク・ゴク", "きわめる", "南極"], ["熊", "", "くま", "熊本"], ["訓", "クン", "", "訓読み"], ["軍", "グン", "", "軍隊"],
  ["郡", "グン", "", "郡"], ["群", "グン", "むれる・むれ・むら", "群れ"], ["径", "ケイ", "", "半径"], ["景", "ケイ", "", "景色"],
  ["芸", "ゲイ", "", "芸術"], ["欠", "ケツ", "かける", "欠席"], ["結", "ケツ", "むすぶ・ゆう", "結ぶ"], ["建", "ケン・コン", "たてる", "建てる"],
  ["健", "ケン", "すこやか", "健康"], ["験", "ケン", "", "実験"], ["固", "コ", "かたい・かためる", "固い"], ["功", "コウ・ク", "", "成功"],
  ["好", "コウ", "このむ・すく", "好き"], ["香", "コウ・キョウ", "か・かおり", "香り"], ["候", "コウ", "そうろう", "気候"], ["康", "コウ", "", "健康"],
  ["佐", "サ", "", "佐賀"], ["差", "サ", "さす", "差"], ["菜", "サイ", "な", "野菜"], ["最", "サイ", "もっとも", "最高"],
  ["埼", "", "さい", "埼玉"], ["材", "ザイ", "", "材料"], ["崎", "", "さき", "長崎"], ["昨", "サク", "", "昨日"],
  ["札", "サツ", "ふだ", "名札"], ["刷", "サツ", "する", "印刷"], ["察", "サツ", "", "観察"], ["参", "サン・シン", "まいる", "参加"],
  ["産", "サン", "うむ・うぶ・うまれる", "産む"], ["散", "サン", "ちらかす・ちらす・ちる", "散る"], ["残", "ザン", "のこす・のこる", "残る"], ["氏", "シ", "うじ", "氏名"],
  ["司", "シ", "つかさどる", "司会"], ["試", "シ", "こころみる・ためす", "試す"], ["児", "ジ・ニ", "", "児童"], ["治", "ジ・チ", "おさめる・なおる", "治る"],
  ["滋", "ジ", "", "滋賀"], ["辞", "ジ", "やめる", "辞書"], ["鹿", "", "しか・か", "鹿児島"], ["失", "シツ", "うしなう", "失う"],
  ["借", "シャク", "かりる", "借りる"], ["種", "シュ", "たね", "種"], ["周", "シュウ", "まわり", "周り"], ["祝", "シュウ・シュク", "いわう", "祝う"],
  ["順", "ジュン", "", "順番"], ["初", "ショ", "はじめ・はつ・うい・そめる", "初め"], ["松", "ショウ", "まつ", "松"], ["笑", "ショウ", "えむ・わらう", "笑う"],
  ["唱", "ショウ", "うたう・となえる", "合唱"], ["焼", "ショウ", "やく", "焼く"], ["照", "ショウ", "てらす・てる", "照る"], ["城", "ジョウ", "しろ", "城"],
  ["縄", "ジョウ", "なわ", "縄"], ["臣", "シン・ジン", "おみ", "大臣"], ["信", "シン", "", "信じる"], ["井", "セイ・ショウ", "い", "井戸"],
  ["成", "セイ・ジョウ", "なす・なる", "成る"], ["省", "セイ・ショウ", "かえりみる・はぶく", "省く"], ["清", "セイ・ショウ", "きよい・きよめる", "清い"], ["静", "セイ・ジョウ", "しず・しずか・しずまる・しずめる", "静か"],
  ["席", "セキ", "", "席"], ["積", "セキ", "つむ・つもる", "積む"], ["折", "セツ", "おる・おり・おれる", "折る"], ["節", "セツ・セチ", "ふし", "季節"],
  ["説", "セツ・ゼイ", "とく", "説明"], ["浅", "セン", "あさい", "浅い"], ["戦", "セン", "いくさ・たたかう", "戦う"], ["選", "セン", "えらぶ", "選ぶ"],
  ["然", "ゼン・ネン", "", "自然"], ["争", "ソウ", "あらそう", "争う"], ["倉", "ソウ", "くら", "倉庫"], ["巣", "ソウ", "す", "巣"],
  ["束", "ソク", "たば", "花束"], ["側", "ソク", "がわ", "側"], ["続", "ゾク", "つづく", "続く"], ["卒", "ソツ", "", "卒業"],
  ["孫", "ソン", "まご", "孫"], ["帯", "タイ", "おびる・おび", "帯"], ["隊", "タイ", "", "隊"], ["達", "タツ", "", "友達"],
  ["単", "タン", "", "簡単"], ["置", "チ", "おく", "置く"], ["仲", "チュウ", "なか", "仲"], ["沖", "チュウ", "おき", "沖縄"],
  ["兆", "チョウ", "きざし・きざす", "兆"], ["低", "テイ", "ひくい", "低い"], ["底", "テイ", "そこ", "底"], ["的", "テキ", "まと", "目的"],
  ["典", "テン", "のり", "辞典"], ["伝", "デン", "つたえる", "伝える"], ["徒", "ト", "", "生徒"], ["努", "ド", "つとめる", "努力"],
  ["灯", "トウ", "ひ", "灯"], ["働", "ドウ", "はたらく", "働く"], ["特", "トク", "", "特別"], ["徳", "トク", "", "徳島"],
  ["栃", "", "とち", "栃木"], ["奈", "ナ", "", "奈良"], ["梨", "", "なし", "梨"], ["熱", "ネツ", "あつい", "熱い"],
  ["念", "ネン", "", "記念"], ["敗", "ハイ", "やぶれる", "敗れる"], ["梅", "バイ", "うめ", "梅"], ["博", "ハク・バク", "", "博士"],
  ["阪", "ハン", "", "大阪"], ["飯", "ハン", "めし", "ご飯"], ["飛", "ヒ", "とぶ", "飛ぶ"], ["必", "ヒツ", "かならず", "必ず"],
  ["票", "ヒョウ", "", "投票"], ["標", "ヒョウ", "しるし", "目標"], ["不", "フ・ブ", "", "不足"], ["夫", "フ・フウ", "おっと", "夫"],
  ["付", "フ", "つく・つける", "付ける"], ["府", "フ", "", "大阪府"], ["阜", "フ", "", "岐阜"], ["富", "フ・フウ", "とむ・とみ", "富士"],
  ["副", "フク", "そう", "副"], ["兵", "ヘイ・ヒョウ", "", "兵庫"], ["別", "ベツ", "わける・わかれる", "別れる"], ["辺", "ヘン", "あたり・べ・ほとり", "辺り"],
  ["変", "ヘン", "かえる・かわる", "変わる"], ["便", "ベン・ビン", "たより", "便利"], ["包", "ホウ", "つつむ", "包む"], ["法", "ホウ・ハッ・ホッ", "", "方法"],
  ["望", "ボウ・モウ", "のぞむ", "望む"], ["牧", "ボク", "まき", "牧場"], ["末", "マツ・バツ", "すえ", "週末"], ["満", "マン", "みたす・みちる", "満ちる"],
  ["未", "ミ", "", "未来"], ["民", "ミン", "たみ", "国民"], ["無", "ム・ブ", "ない", "無い"], ["約", "ヤク", "", "約束"],
  ["勇", "ユウ", "いさむ", "勇気"], ["要", "ヨウ", "かなめ・いる", "必要"], ["養", "ヨウ", "やしなう", "栄養"], ["浴", "ヨク", "あびる", "浴びる"],
  ["利", "リ", "きく", "便利"], ["陸", "リク", "", "陸"], ["良", "リョウ", "よい", "良い"], ["料", "リョウ", "", "料理"],
  ["量", "リョウ", "はかる", "量る"], ["輪", "リン", "わ", "輪"], ["類", "ルイ", "たぐい", "種類"], ["令", "レイ", "", "命令"],
  ["冷", "レイ", "さめる・つめたい・ひえる", "冷たい"], ["例", "レイ", "たとえる", "例"], ["連", "レン", "つらなる", "連絡"], ["老", "ロウ", "おいる・おい・ふける", "老人"],
  ["労", "ロウ", "", "労働"], ["録", "ロク", "", "記録"]
];

const grade4Meanings = {
  愛: ["大切に思う気持ち。かわいがること。"],
  案: ["考えた内容。計画や下書き。"],
  以: ["それから先。それをもとにすること。"],
  衣: ["体に着るもの。ころも。"],
  位: ["場所や順番。身分の高さ。"],
  茨: ["とげのある木。県名にも使う字。"],
  印: ["しるし。はんこ。心に残る感じ。"],
  英: ["すぐれていること。英語や英国に使う字。"],
  栄: ["さかえること。元気に育つこと。"],
  媛: ["女性を表す字。愛媛県に使う字。"],
  塩: ["しお。海水などから取れる白い調味料。"],
  岡: ["小高い土地。地名に使う字。"],
  億: ["一万の一万倍の数。とても大きな数。"],
  加: ["くわえること。足し合わせること。"],
  果: ["くだもの。物事の終わりや結果。"],
  貨: ["品物。お金や荷物に関係する字。"],
  課: ["わりあてられた仕事や学習。"],
  芽: ["植物のめ。新しく始まるもの。"],
  賀: ["お祝いすること。"],
  改: ["前よりよくすること。あらためること。"],
  械: ["道具や機械に関係する字。"],
  害: ["悪い影響。じゃまや損になること。"],
  街: ["人や店が集まるまち。"],
  各: ["それぞれ。一つ一つ。"],
  覚: ["おぼえること。気づくこと。目がさめること。"],
  潟: ["海や湖の近くの浅い水辺。地名に使う字。"],
  完: ["すっかり終わること。全部そろうこと。"],
  官: ["国や役所に関係する仕事。"],
  管: ["くだ。ものを通したり管理したりすること。"],
  関: ["かかわること。出入りを調べる場所。"],
  観: ["よく見ること。考えながら見ること。"],
  願: ["こうなってほしいと思うこと。"],
  岐: ["道が分かれること。地名に使う字。"],
  希: ["めずらしいこと。願い望むこと。"],
  季: ["春夏秋冬などの時期。"],
  旗: ["目じるしとして立てる布。"],
  器: ["ものを入れるうつわ。道具。"],
  機: ["機械。よい時期やきっかけ。"],
  議: ["話し合うこと。意見を出すこと。"],
  求: ["ほしいと思って探すこと。"],
  泣: ["悲しい時などに涙を出すこと。"],
  給: ["必要なものをわたすこと。"],
  挙: ["上にあげること。みんなに示すこと。"],
  漁: ["魚や貝をとること。"],
  共: ["いっしょ。同じようにすること。"],
  協: ["力を合わせること。"],
  鏡: ["姿をうつして見る道具。"],
  競: ["くらべて勝ち負けを決めること。"],
  極: ["いちばん端。これ以上ないところ。"],
  熊: ["くま。大きな動物。"],
  訓: ["漢字の日本語の読み方。教え。"],
  軍: ["兵士の集まり。戦いに関係する組織。"],
  郡: ["町や村をまとめた地域の名。"],
  群: ["多くのものが集まること。"],
  径: ["円の中心を通る長さ。道すじ。"],
  景: ["見えるようす。けしき。"],
  芸: ["身につけたわざ。人に見せる技術。"],
  欠: ["足りないこと。こわれて一部がなくなること。"],
  結: ["むすぶこと。物事の終わりや結果。"],
  建: ["建物をたてること。"],
  健: ["体や心が元気なこと。"],
  験: ["ためして確かめること。"],
  固: ["かたいこと。しっかり動かないこと。"],
  功: ["よい結果を出した働き。手柄。"],
  好: ["好きなこと。よいと思うこと。"],
  香: ["よいにおい。かおり。"],
  候: ["天気や季節のようす。昔の言葉にも使う字。"],
  康: ["体や暮らしが安らかで元気なこと。"],
  佐: ["人を助けること。地名にも使う字。"],
  差: ["ちがい。へだたり。"],
  菜: ["食べる草や野菜。"],
  最: ["いちばん。もっとも。"],
  埼: ["地名に使う字。さい。"],
  材: ["ものを作るもとになる材料。"],
  崎: ["海や土地が突き出たところ。地名に使う字。"],
  昨: ["今より一つ前の日や年。"],
  札: ["文字を書いたふだ。お金の紙。"],
  刷: ["文字や絵を紙にうつすこと。"],
  察: ["ようすから考えて気づくこと。"],
  参: ["参加すること。目上の人の所へ行くこと。"],
  産: ["うむこと。作り出すこと。"],
  散: ["ばらばらになること。ばらばらにすること。"],
  残: ["あとにのこること。"],
  氏: ["名字。家の名前。"],
  司: ["役目として仕事を受け持つこと。"],
  試: ["ためすこと。テストすること。"],
  児: ["子ども。"],
  治: ["病気やけががよくなること。国などをおさめること。"],
  滋: ["育つ力があること。地名に使う字。"],
  辞: ["ことば。やめること。"],
  鹿: ["しか。角のある動物。"],
  失: ["なくすこと。うしなうこと。"],
  借: ["あとで返す約束で使うこと。"],
  種: ["植物のたね。種類。"],
  周: ["まわり。ぐるりと一回まわること。"],
  祝: ["おめでとうと喜ぶこと。"],
  順: ["ならび方。決まった流れ。"],
  初: ["はじめて。ものごとの始まり。"],
  松: ["まつ。冬も緑の葉をつける木。"],
  笑: ["楽しい時などに顔をほころばせること。"],
  唱: ["声に出して言うこと。歌うこと。"],
  焼: ["火で熱を通すこと。"],
  照: ["光を当てること。明るくすること。"],
  城: ["昔、守るために作った大きな建物。"],
  縄: ["わらなどをより合わせたひも。"],
  臣: ["主君に仕える人。大臣などに使う字。"],
  信: ["本当だと思うこと。たよりにすること。"],
  井: ["水をくみ上げる場所。地名にも使う字。"],
  成: ["できあがること。ある状態になること。"],
  省: ["ふり返って考えること。むだをはぶくこと。"],
  清: ["きれいでにごりがないこと。"],
  静: ["音や動きが少なく、しずかなこと。"],
  席: ["すわる場所。集まりの場所。"],
  積: ["つみ重ねること。量を計算すること。"],
  折: ["曲げること。途中で切りかえること。"],
  節: ["区切り。季節。竹などのふし。"],
  説: ["わかるように話すこと。考えや意見。"],
  浅: ["深くないこと。時間があまりたっていないこと。"],
  戦: ["たたかうこと。試合や争い。"],
  選: ["いくつかの中からえらぶこと。"],
  然: ["そのとおりであること。自然に使う字。"],
  争: ["あらそうこと。けんかや競争。"],
  倉: ["ものをしまっておく建物。"],
  巣: ["鳥や虫などのすみか。"],
  束: ["たばねたもの。まとめること。"],
  側: ["そば。片方のがわ。"],
  続: ["切れずにつながること。"],
  卒: ["学校を終えること。兵士。"],
  孫: ["子どもの子ども。"],
  帯: ["身につける長い布。細長い部分。"],
  隊: ["目的を持って集まった人のまとまり。"],
  達: ["目的の場所や高さに届くこと。複数の人を表すこと。"],
  単: ["一つだけ。簡単でこみいっていないこと。"],
  置: ["ある場所におくこと。"],
  仲: ["人と人との関係。なか。"],
  沖: ["岸から遠い海。地名に使う字。"],
  兆: ["とても大きな数。前ぶれ。"],
  低: ["高さや程度がひくいこと。"],
  底: ["もののいちばん下。"],
  的: ["まと。ねらい。何かに合っていること。"],
  典: ["決まりや手本になる本。"],
  伝: ["人に知らせること。受けつぐこと。"],
  徒: ["歩いて行くこと。仲間や生徒に使う字。"],
  努: ["力を出してがんばること。"],
  灯: ["あかり。火や光。"],
  働: ["仕事をすること。力が作用すること。"],
  特: ["ふつうとちがって目立つこと。"],
  徳: ["よい行い。人として立派な心。"],
  栃: ["とちの木。地名に使う字。"],
  奈: ["地名や人名に使う字。"],
  梨: ["なし。くだものの一つ。"],
  熱: ["あつさ。ものごとに夢中になる気持ち。"],
  念: ["心の中で思うこと。気をつけること。"],
  敗: ["負けること。やぶれること。"],
  梅: ["うめ。春の初めに花が咲く木。"],
  博: ["広く知っていること。大きく広いこと。"],
  阪: ["坂や地名に使う字。"],
  飯: ["ごはん。食事。"],
  飛: ["空中をとぶこと。勢いよく動くこと。"],
  必: ["かならず。どうしても必要なこと。"],
  票: ["投票などに使う紙。数を数える札。"],
  標: ["目じるし。目標。"],
  不: ["そうではないこと。否定を表す字。"],
  夫: ["おっと。成人した男性。"],
  付: ["くっつけること。そえること。"],
  府: ["大きな役所。大阪府・京都府に使う字。"],
  阜: ["おか。岐阜県に使う字。"],
  富: ["財産が多いこと。豊かなこと。"],
  副: ["主なものを助けるもの。そえること。"],
  兵: ["戦う人。軍隊に関係する字。"],
  別: ["分けること。ちがうこと。"],
  辺: ["近くの場所。あたり。"],
  変: ["前とちがうようになること。"],
  便: ["都合がよいこと。手紙や交通の便。"],
  包: ["外からつつむこと。"],
  法: ["決まり。やり方。"],
  望: ["こうなってほしいと思うこと。遠くを見ること。"],
  牧: ["牛や馬などを飼う場所。"],
  末: ["ものの終わり。先の細い部分。"],
  満: ["いっぱいになること。足りていること。"],
  未: ["まだそうなっていないこと。"],
  民: ["国や地域に住む人々。"],
  無: ["ないこと。存在しないこと。"],
  約: ["約束すること。だいたいの数。"],
  勇: ["こわがらずに進む強い心。"],
  要: ["大事なところ。必要なこと。"],
  養: ["育てること。体に必要な力をたくわえること。"],
  浴: ["水や光などを全身に受けること。"],
  利: ["役に立つこと。よい点。"],
  陸: ["海ではない土地。"],
  良: ["よいこと。すぐれていること。"],
  料: ["ものごとに使う材料や代金。"],
  量: ["多さや重さをはかること。"],
  輪: ["まるい形。人のつながり。"],
  類: ["同じようなもののなかま。"],
  令: ["命令すること。決まり。"],
  冷: ["つめたいこと。熱が下がること。"],
  例: ["同じようなものとして示すこと。"],
  連: ["つながること。いっしょに行くこと。"],
  老: ["年をとること。"],
  労: ["力を使って働くこと。苦労。"],
  録: ["書きしるして残すこと。"]
};

function readingToSearchKana(reading) {
  return kanaFromKatakana(reading)
    .replace(/[（）()]/g, "")
    .replace(/[・/]/g, " ")
    .split(/\s+/)
    .map((value) => value.trim())
    .filter(Boolean);
}

function makeGrade4KanjiEntry([k, on, kun, mainWord]) {
  const yomi = [...new Set([...readingToSearchKana(on), ...readingToSearchKana(kun)])];
  const words = [...new Set([mainWord, k].filter(Boolean))];
  const meanings = grade4Meanings[k] || ["小4で習う漢字。意味はこれから少しずつくわしくします。"];
  return {
    k,
    on,
    kun,
    yomi,
    words,
    meaning: meanings.join(""),
    meanings,
    example: `${mainWord || k}を使って文を作る。`,
    grade: 4
  };
}

kanjiData.push(...grade4KanjiRows.map(makeGrade4KanjiEntry));

const rubyDictionary = {
  "絵日記": [["絵", "え"], ["日", "にっ"], ["記", "き"]],
  "日記": [["日", "にっ"], ["記", "き"]],
  "書く": [["書", "か"], ["く", ""]],
  "書いた": [["書", "か"], ["いた", ""]],
  "書いて": [["書", "か"], ["いて", ""]],
  "走る": [["走", "はし"], ["る", ""]],
  "走った": [["走", "はし"], ["った", ""]],
  "走って": [["走", "はし"], ["って", ""]],
  "絵": [["絵", "え"]],
  "絵本": [["絵", "え"], ["本", "ほん"]],
  "図画": [["図", "ず"], ["画", "が"]],
  "画家": [["画", "が"], ["家", "か"]],
  "読書": [["読", "どく"], ["書", "しょ"]],
  "校庭": [["校", "こう"], ["庭", "てい"]],
  "工作": [["工", "こう"], ["作", "さく"]],
  "工程": [["工", "こう"], ["程", "てい"]],
  "校庭": [["校", "こう"], ["庭", "てい"]],
  "肯定": [["肯", "こう"], ["定", "てい"]],
  "工場": [["工", "こう"], ["場", "じょう"]],
  "曜日": [["曜", "よう"], ["日", "び"]],
  "日曜": [["日", "にち"], ["曜", "よう"]],
  "公園": [["公", "こう"], ["園", "えん"]],
  "公共": [["公", "こう"], ["共", "きょう"]],
  "公の場": [["公", "おおやけ"], ["の", ""], ["場", "ば"]],
  "公演": [["公", "こう"], ["演", "えん"]],
  "講演": [["講", "こう"], ["演", "えん"]],
  "学校": [["学", "がっ"], ["校", "こう"]],
  "教室": [["教", "きょう"], ["室", "しつ"]],
  "時間": [["時", "じ"], ["間", "かん"]],
  "友だち": [["友", "とも"], ["だち", ""]],
  "母": [["母", "はは"]],
  "父": [["父", "ちち"]],
  "店": [["店", "みせ"]],
  "紙": [["紙", "かみ"]],
  "買う": [["買", "か"], ["う", ""]],
  "読む": [["読", "よ"], ["む", ""]],
  "本": [["本", "ほん"]]
};

const writingTips = {
  "日": "たて線をまっすぐにして、中の横線はまん中あたりに書こう。",
  "記": "左の言の部分は細く、右の部分を少し大きめにすると形が整います。",
  "書": "横線の間をそろえて、下の日の部分をつぶさないように書こう。",
  "絵": "左の糸へんは細く、右側をゆったり書くと読みやすくなります。",
  "走": "下の足の部分を広げすぎず、最後の払いを右へすっと出そう。",
  "工": "上と下の横線を平行にして、たて線を中心に置こう。",
  "曜": "左の日は細め、右側は横幅を取りすぎないようにまとめよう。"
};

const defaultWritingTip = "字の中心をそろえて、止め・払い・はねをゆっくり見ながら書こう。";

function speechTextToKana(text) {
  let converted = text;
  const replacements = [
    ["絵日記", "えにっき"],
    ["日記", "にっき"],
    ["書いた", "かいた"],
    ["書いて", "かいて"],
    ["書く", "かく"],
    ["走った", "はしった"],
    ["走って", "はしって"],
    ["走る", "はしる"],
    ["校庭", "こうてい"]
  ];
  for (const [from, to] of replacements) {
    converted = converted.replaceAll(from, to);
  }
  return converted;
}

function matches(item, query) {
  const q = normalize(query);
  if (!q) return true;
  return [
    item.k,
    item.on,
    item.kun,
    item.meaning,
    item.example,
    ...item.yomi,
    ...item.words
  ].some((value) => normalize(value).includes(q));
}

function renderResults() {
  const query = els.listSearchInput.value;
  const filtered = kanjiData.filter((item) => matches(item, query));
  els.resultList.innerHTML = "";

  if (!filtered.length) {
    els.resultList.innerHTML = `<p class="status-text">見つかりませんでした。よみを短くして試してみてください。</p>`;
    els.listStatus.textContent = `「${query}」に近い漢字が見つかりませんでした。`;
    return;
  }

  els.listStatus.textContent = query.trim()
    ? `「${query}」で ${filtered.length} 件見つかりました。`
    : "文字でも、音声でもさがせます。";

  for (const item of filtered) {
    const button = document.createElement("button");
    button.className = `kanji-tile${item.k === selectedKanji.k ? " selected" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span class="tile-kanji">${item.k}</span>
      <span class="tile-reading">${item.kun || item.on}</span>
      <span class="tile-words">${item.words.slice(0, 2).join("・")}</span>
    `;
    button.addEventListener("click", () => {
      selectKanji(item);
      traceParentView = "listView";
      switchView("traceView");
    });
    els.resultList.appendChild(button);
  }
}

function readingForRuby(item) {
  const kun = item.yomi.find((reading) => /[ぁ-ん]/.test(reading) && reading.length > 1);
  return kun || item.yomi[0] || item.on;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function renderMeanings(item) {
  if (Array.isArray(item.meanings) && item.meanings.length) {
    return `<ul class="meaning-list">${item.meanings.map((meaning) => `<li>${escapeHtml(meaning)}</li>`).join("")}</ul>`;
  }
  return escapeHtml(item.meaning || "");
}

function rubyWord(display, item, reading = readingForRuby(item)) {
  const dictionaryRuby = rubyDictionary[display];
  if (dictionaryRuby) {
    return rubyFromParts(dictionaryRuby);
  }
  const customRuby = rubyPartsForDisplayWord(display, item);
  if (customRuby) {
    return rubyFromParts(customRuby);
  }
  if (!display.includes(item.k)) {
    return `<ruby>${escapeHtml(display)}<rt>${escapeHtml(reading)}</rt></ruby>`;
  }
  return escapeHtml(display).replace(item.k, `<ruby>${item.k}<rt>${escapeHtml(reading)}</rt></ruby>`);
}

function rubyPhrase(display, reading) {
  if (rubyDictionary[display]) return rubyFromParts(rubyDictionary[display]);
  return `<ruby>${escapeHtml(display)}<rt>${escapeHtml(reading)}</rt></ruby>`;
}

function rubyPhraseWithTarget(display, reading, targetKanji) {
  const chars = [...display];
  const parts = chars.map((char) => {
    const ruby = rubyDictionary[display]?.find(([text]) => text === char)?.[1] || "";
    const body = ruby ? `<ruby>${escapeHtml(char)}<rt>${escapeHtml(ruby)}</rt></ruby>` : escapeHtml(char);
    return char === targetKanji ? `<span class="target-kanji-highlight">${body}</span>` : body;
  });
  return parts.join("") || rubyPhrase(display, reading);
}

function rubyFromParts(parts) {
  return parts.map(([text, ruby]) => {
    if (!ruby) return escapeHtml(text);
    return `<ruby>${escapeHtml(text)}<rt>${escapeHtml(ruby)}</rt></ruby>`;
  }).join("");
}

function rubyKnownText(text) {
  let working = escapeHtml(text);
  const replacements = [];
  const words = Object.keys(rubyDictionary).sort((a, b) => b.length - a.length);
  for (const word of words) {
    const token = `__RUBY_${replacements.length}__`;
    const escapedWord = escapeHtml(word);
    if (!working.includes(escapedWord)) continue;
    working = working.replaceAll(escapedWord, token);
    replacements.push([token, rubyFromParts(rubyDictionary[word])]);
  }
  for (const [token, rubyHtml] of replacements) {
    working = working.replaceAll(token, rubyHtml);
  }
  return working;
}

function kanaFromKatakana(text) {
  return (text || "").replace(/[ァ-ン]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60)
  ).replace(/ー/g, "");
}

function primaryOnReading(item) {
  return kanaFromKatakana((item.on || "").split(/[・/]/)[0]);
}

function primaryKunReading(item) {
  return item.yomi.find((reading) => /[ぁ-ん]/.test(reading) && reading.length > 1)
    || item.yomi.find((reading) => /[ぁ-ん]/.test(reading))
    || "";
}

function wordReadingFallback(word, item) {
  if (rubyDictionary[word]) return "";
  if (/[ぁ-ん]/.test(word)) {
    return readingForDisplayWord(word, item);
  }
  const reading = [...word].map((char) => {
    const found = kanjiData.find((candidate) => candidate.k === char);
    return found ? primaryOnReading(found) : "";
  }).join("");
  return reading || readingForRuby(item);
}

function rubyWordForList(word, item) {
  if (rubyDictionary[word]) return rubyKnownText(word);
  const reading = wordReadingFallback(word, item);
  if (!reading) return escapeHtml(word);
  return `<ruby>${escapeHtml(word)}<rt>${escapeHtml(reading)}</rt></ruby>`;
}

function readingExamples(item) {
  if (item.kunExample || item.onExample) {
    return {
      kunText: item.kunExample || `${item.k}の訓読みを使った言葉を覚えよう。`,
      onText: item.onExample || `${item.k}の音読みを使った言葉を覚えよう。`
    };
  }
  const kunWord = item.words.find((word) => word.includes(item.k) && /[ぁ-ん]/.test(word))
    || (primaryKunReading(item) ? item.k : "");
  const onWord = item.words.find((word) => word.includes(item.k) && !/[ぁ-ん]/.test(word))
    || item.words.find((word) => word.includes(item.k))
    || item.k;
  const kunText = item.example && kunWord && item.example.includes(kunWord)
    ? item.example
    : kunWord
      ? `${kunWord}を使って文を書こう。`
      : `${item.k}の訓読みは、学校で出てきた言葉といっしょに覚えよう。`;
  const onText = onWord
    ? `${onWord}という言葉で使います。`
    : `${item.k}の音読みを使った言葉を覚えよう。`;
  return { kunText, onText };
}

function rubyPartsForDisplayWord(display, item) {
  const lexiconHit = sentenceWordLexicon.find((entry) =>
    entry.kanji.includes(item.k) && (entry.displayByKanji?.[item.k] || entry.display) === display
  );
  if (!lexiconHit) return null;
  return lexiconHit.rubyByKanji?.[item.k] || lexiconHit.ruby || null;
}

function readingForDisplayWord(display, item, fallback = readingForRuby(item)) {
  const lexiconHit = sentenceWordLexicon.find((entry) =>
    entry.kanji.includes(item.k) && (entry.displayByKanji?.[item.k] || entry.display) === display
  );
  if (lexiconHit) {
    return lexiconHit.readingByKanji?.[item.k] || lexiconHit.reading;
  }
  const word = item.words.find((candidate) => candidate === display);
  if (word && /[ぁ-ん]/.test(word)) {
    return word.replace(item.k, item.yomi.find((reading) => /[ぁ-ん]/.test(reading)) || fallback);
  }
  return fallback;
}

function sentenceForms(item) {
  const forms = [];
  const add = (match, display = match, reading = readingForRuby(item)) => {
    if (!match) return;
    if (!forms.some((form) => form.match === match && form.display === display)) {
      forms.push({ match, display, reading });
    }
  };

  add(item.k, item.k);
  item.words.forEach((word) => add(word, word, readingForDisplayWord(word, item)));

  for (const reading of item.yomi) {
    if (!/[ぁ-ん]/.test(reading)) continue;
    const writtenBase = item.words.find((word) => word.includes(item.k) && /[ぁ-ん]/.test(word)) || item.k;
    if (writtenBase === item.k) continue;
    add(reading, writtenBase, readingForDisplayWord(writtenBase, item, reading));
    if (reading.endsWith("る") && reading.length > 1) {
      const stem = reading.slice(0, -1);
      const writtenStem = writtenBase.endsWith("る") ? writtenBase.slice(0, -1) : item.k;
      [
        ["った", "った"],
        ["って", "って"],
        ["ります", "ります"],
        ["る。", "る"],
        ["らない", "らない"],
        ["れば", "れば"],
        ["ろう", "ろう"]
      ].forEach(([matchEnding, displayEnding]) => {
        add(stem + matchEnding, writtenStem + displayEnding, stem + matchEnding);
        add(writtenStem + displayEnding, writtenStem + displayEnding, stem + matchEnding);
      });
    }
    if (reading.endsWith("う") && reading.length > 1) {
      const stem = reading.slice(0, -1);
      const writtenStem = writtenBase.endsWith("う") ? writtenBase.slice(0, -1) : item.k;
      [
        ["った", "った"],
        ["って", "って"],
        ["います", "います"],
        ["わない", "わない"]
      ].forEach(([matchEnding, displayEnding]) => {
        add(stem + matchEnding, writtenStem + displayEnding, stem + matchEnding);
        add(writtenStem + displayEnding, writtenStem + displayEnding, stem + matchEnding);
      });
    }
  }
  return forms;
}

function candidatesFromSentence(text) {
  const q = normalize(text);
  if (!q) return [];
  const hits = [];
  const activeAlternativeGroups = [];

  for (const group of phraseAlternativeGroups) {
    const matched = group.triggers.find((word) => q.includes(normalize(word)));
    if (!matched) continue;
    const options = group.options.map((option) => ({
      ...option,
      items: option.kanji.map((k) => kanjiData.find((candidate) => candidate.k === k)).filter(Boolean)
    }));
    activeAlternativeGroups.push({
      reading: group.reading,
      matched,
      optionDisplays: options.map((option) => option.display)
    });
    hits.push({
      type: "alternatives",
      match: matched,
      reading: group.reading,
      options
    });

    const selectedDisplay = selectedAlternativeByReading[group.reading];
    const selectedOption = options.find((option) => option.display === selectedDisplay);
    if (selectedOption) {
      selectedOption.items.forEach((item, index) => {
        hits.push({
          item,
          match: selectedOption.display,
          display: selectedOption.display,
          reading: selectedOption.reading,
          source: "selectedAlternative",
          order: orderForMatch(q, matched, group.reading),
          subOrder: index
        });
      });
    }
  }

  for (const entry of sentenceWordLexicon) {
    const matched = entry.spoken.find((word) => q.includes(normalize(word)));
    if (!matched) continue;
    entry.kanji.forEach((kanji, index) => {
      const item = kanjiData.find((candidate) => candidate.k === kanji);
      if (!item) return;
      hits.push({
        item,
        match: matched,
        display: entry.displayByKanji?.[kanji] || entry.display,
        reading: entry.readingByKanji?.[kanji] || entry.reading,
        rubyParts: entry.rubyByKanji?.[kanji] || entry.ruby || null,
        source: "word",
        order: orderForMatch(q, matched, entry.reading),
        subOrder: index
      });
    });
  }

  const genericHits = kanjiData
    .map((item) => {
      const hit = sentenceForms(item)
        .sort((a, b) => normalize(b.match).length - normalize(a.match).length)
        .find((form) => q.includes(normalize(form.match)));
      return hit ? { item, ...hit, source: "kanji", order: orderForMatch(q, hit.match, hit.reading) } : null;
    })
    .filter(Boolean);

  for (const hit of genericHits) {
    if (!hits.some((existing) => existing.item && existing.item.k === hit.item.k)) {
      hits.push(hit);
    }
  }

  const alternativeReadings = new Set(hits.filter((hit) => hit.type === "alternatives").map((hit) => hit.reading));
  const filtered = hits.filter((hit) => {
    if (!hit.item) return true;
    const fromAlternativeChoice = activeAlternativeGroups.some((group) =>
      group.optionDisplays.includes(hit.match) || group.optionDisplays.includes(hit.display)
    );
    if (fromAlternativeChoice && hit.source !== "selectedAlternative") return false;
    const fromAlternativeReading = alternativeReadings.has(hit.reading);
    if (fromAlternativeReading && hit.source !== "selectedAlternative") return false;
    return true;
  });

  const groups = filtered.filter((hit) => hit.type === "alternatives");
  const items = filtered
    .filter((hit) => hit.item)
    .sort((a, b) => ((a.order ?? 9999) - (b.order ?? 9999)) || ((a.subOrder ?? 0) - (b.subOrder ?? 0)));
  return [...groups, ...items];
}

function orderForMatch(normalizedText, match, reading) {
  const candidates = [match, reading].filter(Boolean).map((value) => normalize(value));
  const positions = candidates
    .map((value) => normalizedText.indexOf(value))
    .filter((index) => index >= 0);
  return positions.length ? Math.min(...positions) : 9999;
}

function renderHighlightedSentence(text, hits) {
  if (!text.trim()) {
    els.highlightedSentence.innerHTML = "";
    return;
  }
  let html = escapeHtml(text);
  const matches = [...new Set(hits.map((hit) => hit.match).filter((match) => text.includes(match)))]
    .sort((a, b) => b.length - a.length);
  for (const match of matches) {
    html = html.replaceAll(escapeHtml(match), `<span class="hit-mark">${escapeHtml(match)}</span>`);
  }
  els.highlightedSentence.innerHTML = html;
}

function renderSentenceCandidates() {
  currentSentence = els.sentenceInput.value;
  const hits = candidatesFromSentence(currentSentence);
  currentCandidateHits = hits.filter((hit) => hit.item);
  els.sentenceCandidates.innerHTML = "";
  renderHighlightedSentence(currentSentence, hits);
  if (!hits.length) {
    els.sentenceCandidates.innerHTML = `<p class="status-text">候補が見つかりませんでした。読みに近い言葉を入れてみてください。</p>`;
    setCatMessage("うーん、見つからなかったよ。少し短い言葉でもう一回ためしてみよう。");
    return;
  }
  setCatMessage("見つけたよ！気になるカードを押して、お手本を見よう。");
  hits.forEach((hit) => {
    if (hit.type === "alternatives") {
      const group = document.createElement("div");
      group.className = "candidate-group";
      group.innerHTML = `<div class="candidate-group-title">「${escapeHtml(hit.reading)}」の候補</div>`;
      const list = document.createElement("div");
      list.className = "candidate-option-list";
      hit.options.forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        const isSelected = selectedAlternativeByReading[hit.reading] === option.display;
        button.className = `candidate-option${option.items.length ? "" : " unavailable"}${isSelected ? " selected-word-option" : ""}`;
        const statusText = option.items.length
          ? (isSelected ? "この言葉の漢字を下に表示中" : "この言葉をえらぶ")
          : "小2の漢字ではないため未対応";
        button.innerHTML = `<span class="candidate-word">${rubyPhrase(option.display, option.reading)}</span><span>${statusText}</span>`;

        if (!option.items.length) {
          list.appendChild(button);
          return;
        }

        button.addEventListener("click", () => {
          selectedAlternativeByReading[hit.reading] = option.display;
          renderSentenceCandidates();
          setCatMessage(`「${option.display}」をえらんだよ。下のカードから見たい漢字を選んでね。`);
        });

        list.appendChild(button);
      });
      group.appendChild(list);
      els.sentenceCandidates.appendChild(group);
      return;
    }

    const { item, match, display, reading } = hit;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "candidate-chip";
    button.innerHTML = `
      <span class="candidate-word">${rubyPhraseWithTarget(display, reading, item.k)}</span>
      <span class="target-action"><b>${item.k}</b> のお手本を見る</span>
    `;
    button.addEventListener("click", () => {
      selectedCandidateIndex = currentCandidateHits.findIndex((candidate) => candidate.item.k === item.k && candidate.display === display);
      selectKanji(item, display, reading);
      traceParentView = "searchView";
      switchView("traceView");
    });
    els.sentenceCandidates.appendChild(button);
  });
}

function selectKanji(item, displayWord = item.words.find((word) => word.includes(item.k)) || item.k, displayReading = readingForDisplayWord(displayWord, item)) {
  selectedKanji = item;
  selectedDisplayWord = displayWord;
  selectedDisplayReading = displayReading;
  els.bigKanji.textContent = item.k;
  els.selectedWord.innerHTML = `<ruby>${item.k}<rt>${readingForRuby(item)}</rt></ruby>`;
  els.selectedReadings.textContent = `音: ${item.on || "-"} / 訓: ${item.kun || "-"}`;
  els.selectedRuby.innerHTML = "";
  els.selectedMeaning.innerHTML = renderMeanings(item);
  const examples = readingExamples(item);
  els.selectedKunExample.innerHTML = rubyKnownText(examples.kunText);
  els.selectedOnExample.innerHTML = rubyKnownText(examples.onText);
  els.selectedWords.innerHTML = item.words.map((word) => rubyWordForList(word, item)).join("、");
  els.writingTipText.textContent = writingTips[item.k] || defaultWritingTip;
  els.traceGuide.textContent = item.k;
  showModel();
  switchStudyPanel("modelPanel");
  setCatMessage(`「${displayWord}」のお手本だよ。形をよく見てみよう！`);
  if (currentSentence.trim()) {
    els.originalSentenceBox.classList.add("active");
    els.originalSentenceBox.innerHTML = renderOriginalSentenceForDetail(currentSentence, displayWord);
  } else {
    els.originalSentenceBox.classList.remove("active");
    els.originalSentenceBox.innerHTML = "";
  }
  localStorage.setItem("kanji-support-selected", item.k);
  clearCanvas();
  renderResults();
}

function renderOriginalSentenceForDetail(sentence, displayWord) {
  let html = escapeHtml(sentence);
  const hit = currentCandidateHits[selectedCandidateIndex];
  const mark = hit && sentence.includes(hit.match) ? hit.match : displayWord;
  if (mark && sentence.includes(mark)) {
    html = html.replaceAll(escapeHtml(mark), `<span class="hit-mark">${escapeHtml(mark)}</span>`);
  }
  return `<strong>もとの文</strong><br>${html}`;
}

function goToNextCandidate() {
  if (!currentCandidateHits.length) {
    switchView("searchView");
    return;
  }
  const nextIndex = selectedCandidateIndex < 0 ? 0 : (selectedCandidateIndex + 1) % currentCandidateHits.length;
  const next = currentCandidateHits[nextIndex];
  selectedCandidateIndex = nextIndex;
  selectKanji(next.item, next.display, next.reading);
}

const strokeOrders = {
  "日": [
    ["M28 20 L72 20", 28, 18],
    ["M28 20 L28 78", 22, 38],
    ["M72 20 L72 78", 76, 38],
    ["M28 49 L72 49", 45, 47],
    ["M28 78 L72 78", 45, 83]
  ],
  "書": [
    ["M31 16 L72 16", 30, 14],
    ["M25 28 L78 28", 23, 26],
    ["M32 40 L71 40", 30, 38],
    ["M50 10 L50 48", 54, 17],
    ["M22 52 L82 52", 21, 50],
    ["M35 61 L68 61", 33, 59],
    ["M35 61 L35 84", 29, 69],
    ["M68 61 L68 84", 72, 69],
    ["M35 72 L68 72", 49, 70],
    ["M35 84 L68 84", 49, 89]
  ],
  "走": [
    ["M35 15 L67 15", 34, 13],
    ["M51 10 L51 38", 55, 17],
    ["M28 38 L74 38", 26, 36],
    ["M40 45 L40 79", 34, 55],
    ["M40 59 L63 59", 48, 57],
    ["M55 45 L55 82", 59, 56],
    ["M39 79 C50 87 64 89 80 85", 67, 88, "harai"]
  ],
  "絵": [
    ["M28 14 L17 34 L32 31", 25, 15, "hane"],
    ["M31 31 L17 55 L38 50", 24, 42, "hane"],
    ["M18 72 C27 68 35 64 42 58", 19, 76, "harai"],
    ["M52 16 L36 42", 47, 18, "harai"],
    ["M52 16 L78 42", 72, 32, "harai"],
    ["M43 45 L70 45", 42, 43],
    ["M36 58 L82 58", 35, 56],
    ["M47 58 L40 80 L70 76", 44, 72],
    ["M64 65 L78 84", 75, 78, "harai"]
  ],
  "記": [
    ["M23 16 L41 16", 22, 14],
    ["M18 31 L45 31", 17, 29],
    ["M22 43 L42 43", 21, 41],
    ["M22 43 L22 79", 17, 56],
    ["M42 43 L42 79", 46, 56],
    ["M22 79 L42 79", 30, 84],
    ["M56 18 L80 18", 55, 16],
    ["M80 18 L80 43 L58 43", 83, 31],
    ["M58 43 L58 75 C58 86 70 88 84 80", 62, 66]
  ],
  "工": [
    ["M31 22 L70 22", 30, 20],
    ["M50 22 L50 75", 54, 42],
    ["M24 75 L78 75", 23, 80]
  ]
};

async function renderStrokeOrder(kanji) {
  const strokes = await loadKanjiVgStrokes(kanji);
  clearStrokeTimers();
  els.strokeSvg.innerHTML = strokeMarkerDefs();
  els.strokeSvg.classList.remove("playing");
  els.traceBoard.classList.remove("model-mode");
  els.traceBoard.classList.add("stroke-mode");

  if (!strokes) {
    els.strokeStatus.textContent = "書き順データを読み込めませんでした。ネット接続を確認してください。";
    els.strokeTip.textContent = "お手本表示はそのまま使えます。";
    return;
  }

  els.traceGuide.style.opacity = "1";
  const numberNodes = [];
  const numberPositions = [];

  strokes.forEach((stroke, index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "stroke-path");
    path.setAttribute("d", stroke.d);
    path.dataset.index = String(index);
    els.strokeSvg.appendChild(path);
    prepareStrokePath(path);

    const start = getPathStart(path);
    const number = makeStrokeNumber(index + 1, start, numberPositions);
    numberNodes.push(number.node);
    numberPositions.push(number.position);
  });
  numberNodes.forEach((node) => els.strokeSvg.appendChild(node));
  els.strokeStatus.textContent = `${kanji} の書き順です。番号から矢印の向きに書きます。`;
  els.strokeTip.hidden = false;
  els.strokeTip.textContent = "番号を見ながら、青い線が出る順番を追ってみよう。";
  playStrokeAnimation();
}

function playStrokeAnimation() {
  clearStrokeTimers();
  els.strokeSvg.classList.remove("playing");
  els.strokeSvg.querySelectorAll(".stroke-path").forEach((path) => {
    path.classList.remove("active-stroke", "drawn-stroke");
    path.style.transition = "none";
    path.style.strokeDashoffset = path.dataset.strokeLength || "0";
  });
  void els.strokeSvg.offsetWidth;
  els.strokeSvg.classList.add("playing");
  const paths = [...els.strokeSvg.querySelectorAll(".stroke-path")];
  paths.forEach((path, index) => {
    strokeTimers.push(setTimeout(() => {
      paths.forEach((item) => item.classList.remove("active-stroke"));
      path.classList.add("active-stroke");
      path.style.transition = "stroke-dashoffset 1.05s ease-in-out";
      path.style.strokeDashoffset = "0";
      els.strokeTip.hidden = false;
      els.strokeTip.textContent = `${index + 1}画目: 青い線の向きに書きます。`;
    }, index * 1250));
    strokeTimers.push(setTimeout(() => {
      path.classList.remove("active-stroke");
      path.classList.add("drawn-stroke");
    }, index * 1250 + 1120));
  });
  strokeTimers.push(setTimeout(() => {
    paths.forEach((item) => item.classList.remove("active-stroke"));
    els.strokeTip.textContent = "もう一度見るときは「書き順を表示」を押してね。";
  }, paths.length * 1250 + 400));
}

function showModel() {
  clearStrokeTimers();
  els.traceBoard.classList.add("model-mode");
  els.traceBoard.classList.remove("stroke-mode");
  els.strokeSvg.innerHTML = "";
  els.strokeStatus.textContent = "";
  els.strokeTip.textContent = "";
  els.strokeTip.hidden = true;
}

async function loadKanjiVgStrokes(kanji) {
  if (kanjiVgCache.has(kanji)) return kanjiVgCache.get(kanji);
  const code = kanji.codePointAt(0).toString(16).padStart(5, "0");
  const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${code}.svg`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`KanjiVG ${response.status}`);
    const svgText = await response.text();
    const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
    const paths = [...doc.querySelectorAll("path")]
      .map((path) => ({ d: path.getAttribute("d") }))
      .filter((stroke) => stroke.d);
    const result = paths.length ? paths : null;
    kanjiVgCache.set(kanji, result);
    return result;
  } catch (error) {
    kanjiVgCache.set(kanji, null);
    return null;
  }
}

function getPathStart(path) {
  try {
    return path.getPointAtLength(0);
  } catch (error) {
    return { x: 10, y: 10 };
  }
}

function prepareStrokePath(path) {
  try {
    const length = path.getTotalLength();
    path.dataset.strokeLength = String(length);
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
  } catch (error) {
    path.dataset.strokeLength = "0";
  }
}

function makeStrokeNumber(number, start, placed) {
  const radius = number >= 10 ? 6.2 : 5.4;
  const candidates = [
    { x: start.x - 8, y: start.y - 8 },
    { x: start.x + 8, y: start.y - 8 },
    { x: start.x - 8, y: start.y + 8 },
    { x: start.x + 8, y: start.y + 8 },
    { x: start.x, y: start.y - 12 },
    { x: start.x - 12, y: start.y },
    { x: start.x + 12, y: start.y },
    { x: start.x, y: start.y + 12 },
    { x: start.x - 16, y: start.y - 2 },
    { x: start.x + 16, y: start.y - 2 },
    { x: start.x - 2, y: start.y - 16 },
    { x: start.x - 2, y: start.y + 16 }
  ].map((point) => ({
    x: Math.max(radius + 1, Math.min(108 - radius, point.x)),
    y: Math.max(radius + 1, Math.min(108 - radius, point.y))
  }));

  const position = candidates
    .map((point) => {
      const nearest = placed.length
        ? Math.min(...placed.map((other) => Math.hypot(point.x - other.x, point.y - other.y)))
        : 99;
      const startDistance = Math.hypot(point.x - start.x, point.y - start.y);
      const collisionPenalty = nearest < 12 ? (12 - nearest) * 40 : 0;
      return { point, score: collisionPenalty + startDistance };
    })
    .sort((a, b) => a.score - b.score)[0].point;

  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("class", "stroke-number-mark");
  const bg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  bg.setAttribute("class", "stroke-number-bg");
  bg.setAttribute("cx", position.x);
  bg.setAttribute("cy", position.y);
  bg.setAttribute("r", radius);
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("class", "stroke-number");
  text.setAttribute("x", position.x);
  text.setAttribute("y", position.y);
  text.textContent = String(number);
  group.append(bg, text);
  return { node: group, position };
}

function clearStrokeTimers() {
  strokeTimers.forEach((timer) => clearTimeout(timer));
  strokeTimers = [];
}

function strokeMarkerDefs() {
  return `
    <defs>
      <marker id="strokeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2b6cb0"></path>
      </marker>
      <marker id="activeStrokeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="2.6" markerHeight="2.6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#2b6cb0"></path>
      </marker>
    </defs>
  `;
}

function strokePointText(ending) {
  if (ending === "harai") return "最後は力をぬいて、すっと払うところです。";
  if (ending === "hane") return "最後に小さく方向を変えて、はねるところです。";
  return "線の終わりでぴたっと止めるところです。";
}

function makeStrokeEndNode(path, ending) {
  const length = path.getTotalLength();
  const end = path.getPointAtLength(length);
  const before = path.getPointAtLength(Math.max(0, length - 6));
  const dx = end.x - before.x;
  const dy = end.y - before.y;
  const mag = Math.hypot(dx, dy) || 1;
  const ux = dx / mag;
  const uy = dy / mag;

  if (ending === "harai") {
    const mark = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mark.setAttribute("class", "stroke-end stroke-end-harai");
    mark.setAttribute("d", `M${end.x - ux * 2} ${end.y - uy * 2} L${end.x + ux * 7} ${end.y + uy * 7}`);
    return mark;
  }

  if (ending === "hane") {
    const mark = document.createElementNS("http://www.w3.org/2000/svg", "path");
    mark.setAttribute("class", "stroke-end stroke-end-hane");
    mark.setAttribute("d", `M${end.x} ${end.y} L${end.x - uy * 7} ${end.y + ux * 7}`);
    return mark;
  }

  const mark = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  mark.setAttribute("class", "stroke-end stroke-end-tome");
  mark.setAttribute("cx", end.x);
  mark.setAttribute("cy", end.y);
  mark.setAttribute("r", "2.3");
  return mark;
}

function switchView(id) {
  if (id === "searchView" || id === "listView") {
    traceParentView = id;
  }
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === id));
  const activeNav = id === "traceView" ? traceParentView : id;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === activeNav));
  document.body.dataset.view = id;
  document.body.dataset.traceParent = id === "traceView" ? traceParentView : "";
}

function switchStudyPanel(id) {
  document.querySelectorAll(".study-panel").forEach((panel) => panel.classList.toggle("active", panel.id === id));
  document.querySelectorAll(".study-tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.studyPanel === id));
}

function resizeCanvas() {
  const rect = els.traceBoard.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  els.traceCanvas.width = Math.floor(rect.width * ratio);
  els.traceCanvas.height = Math.floor(rect.height * ratio);
  const ctx = els.traceCanvas.getContext("2d");
  ctx.scale(ratio, ratio);
  ctx.lineWidth = 12;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#1f5f87";
}

function clearCanvas() {
  const ctx = els.traceCanvas.getContext("2d");
  ctx.clearRect(0, 0, els.traceCanvas.width, els.traceCanvas.height);
  resizeCanvas();
}

function pointerPosition(event) {
  const rect = els.traceCanvas.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function startDraw(event) {
  drawing = true;
  const ctx = els.traceCanvas.getContext("2d");
  const pos = pointerPosition(event);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function draw(event) {
  if (!drawing) return;
  event.preventDefault();
  const ctx = els.traceCanvas.getContext("2d");
  const pos = pointerPosition(event);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDraw() {
  drawing = false;
}

const okuriganaQuizzes = [
  {
    label: "送り仮名も考えよう",
    prompt: "「ひろい」は、どう書く？",
    answer: "広い",
    explanation: "よくある間違いは「広ろい」。正しくは「広」が漢字で、「い」だけが送り仮名です。",
    options: ["広い", "広ろい", "広"]
  },
  {
    label: "送り仮名も考えよう",
    prompt: "「はしった」は、どう書く？",
    answer: "走った",
    explanation: "よくある間違いは「走た」。正しくは「走」に「った」を付けます。",
    options: ["走った", "走た", "走る"]
  },
  {
    label: "送り仮名も考えよう",
    prompt: "「かく」は、どう書く？",
    answer: "書く",
    explanation: "よくある間違いは送り仮名を落として「書」だけにすることです。",
    options: ["書く", "書", "書る"]
  },
  {
    label: "送り仮名も考えよう",
    prompt: "「あたらしい」は、どう書く？",
    answer: "新しい",
    explanation: "よくある間違いは「新らしい」。正しくは「新しい」です。",
    options: ["新しい", "新らしい", "新"]
  },
  {
    label: "送り仮名も考えよう",
    prompt: "「おおい」は、どう書く？",
    answer: "多い",
    explanation: "よくある間違いは「多おい」。正しくは「多い」です。",
    options: ["多い", "多おい", "多"]
  }
];

const sentenceQuizzes = [
  {
    label: "文の中の漢字",
    prompt: "絵日記を かく。",
    before: "絵日記を",
    blankReading: "か",
    after: "く。",
    answer: "書",
    explanation: "「かく」は「書く」と書きます。",
    options: ["書", "記", "絵", "工"]
  },
  {
    label: "文の中の漢字",
    prompt: "こうていを はしる。",
    before: "こうていを",
    blankReading: "はし",
    after: "る。",
    answer: "走",
    explanation: "「はしる」は「走る」と書きます。",
    options: ["走", "歩", "止", "近"]
  },
  {
    label: "文の中の漢字",
    prompt: "あたらしい 本を よむ。",
    before: "",
    blankReading: "あたら",
    after: "しい 本を よむ。",
    answer: "新",
    explanation: "「あたらしい」は「新しい」と書きます。",
    options: ["新", "親", "古", "明"]
  }
];

function makeQuiz() {
  els.quizMessage.textContent = "";
  const makers = [makeReadingQuiz, makeSentenceQuiz, makeOkuriganaQuiz];
  currentQuiz = makers[Math.floor(Math.random() * makers.length)]();
  els.quizLabel.textContent = currentQuiz.label;
  els.quizPrompt.innerHTML = quizPromptHtml(currentQuiz);
  els.quizOptions.innerHTML = "";
  currentQuiz.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = currentQuiz.compact ? "quiz-option compact" : "quiz-option";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(button, option));
    els.quizOptions.appendChild(button);
  });
}

function quizPromptHtml(quiz) {
  if (quiz.type !== "sentence-blank") return escapeHtml(quiz.prompt);
  return `
    <span class="blank-question">
      <span class="blank-line">${escapeHtml(quiz.before)}</span>
      <ruby class="quiz-blank"><span class="blank-box">□</span><rt>${escapeHtml(quiz.blankReading)}</rt></ruby>
      <span class="blank-line">${escapeHtml(quiz.after)}</span>
    </span>
  `;
}

function makeReadingQuiz() {
  const answer = kanjiData[Math.floor(Math.random() * kanjiData.length)];
  const options = [answer.k];
  while (options.length < 4) {
    const candidate = kanjiData[Math.floor(Math.random() * kanjiData.length)].k;
    if (!options.includes(candidate)) options.push(candidate);
  }
  return {
    label: "読みから漢字",
    prompt: answer.yomi[answer.yomi.length - 1] || answer.yomi[0],
    answer: answer.k,
    explanation: `「${answer.k}」の読みです。`,
    options: options.sort(() => Math.random() - 0.5)
  };
}

function makeSentenceQuiz() {
  const quiz = sentenceQuizzes[Math.floor(Math.random() * sentenceQuizzes.length)];
  return { ...quiz, type: "sentence-blank", options: [...quiz.options].sort(() => Math.random() - 0.5) };
}

function makeOkuriganaQuiz() {
  const quiz = okuriganaQuizzes[Math.floor(Math.random() * okuriganaQuizzes.length)];
  return { ...quiz, compact: true, options: [...quiz.options].sort(() => Math.random() - 0.5) };
}

function checkAnswer(button, value) {
  const buttons = [...document.querySelectorAll(".quiz-option")];
  buttons.forEach((option) => {
    option.disabled = true;
    if (option.textContent === currentQuiz.answer) option.classList.add("correct");
  });
  if (value === currentQuiz.answer) {
    els.quizMessage.textContent = `せいかい！ ${currentQuiz.explanation}`;
    showAnswerMark(true);
    addSticker();
    setCatMessage("やったね！シールをひとつゲット！");
  } else {
    button.classList.add("wrong");
    els.quizMessage.textContent = `こたえは「${currentQuiz.answer}」。${currentQuiz.explanation}`;
    showAnswerMark(false);
    setCatMessage("だいじょうぶ。よくあるまちがいを覚えたら強くなるよ。");
  }
}

function showAnswerMark(isCorrect) {
  els.answerOverlay.textContent = isCorrect ? "○" : "×";
  els.answerOverlay.className = `answer-overlay show ${isCorrect ? "correct-mark" : "wrong-mark"}`;
  window.setTimeout(() => {
    els.answerOverlay.className = "answer-overlay";
  }, 950);
}

function setCatMessage(message) {
  if (els.catBubble) els.catBubble.textContent = message;
}

function renderStickers() {
  if (!els.stickerSlots) return;
  const pageCount = correctStickers % STICKERS_PER_PAGE || (correctStickers > 0 ? STICKERS_PER_PAGE : 0);
  els.stickerSlots.innerHTML = "";
  for (let i = 0; i < STICKERS_PER_PAGE; i += 1) {
    const sticker = document.createElement("span");
    sticker.className = i < pageCount ? "sticker filled" : "sticker empty";
    sticker.textContent = i < pageCount ? "★" : "";
    if (i === 4 || i === 9) sticker.classList.add("goal-slot");
    els.stickerSlots.appendChild(sticker);
  }
  if (els.stickerGoal) {
    const remaining = STICKERS_PER_PAGE - pageCount;
    els.stickerGoal.textContent = remaining === STICKERS_PER_PAGE
      ? "10こで花火"
      : remaining === 0
        ? "花火達成！"
        : `あと${remaining}こで花火`;
  }
}

function addSticker() {
  correctStickers += 1;
  localStorage.setItem("kanji-support-stickers", String(correctStickers));
  renderStickers();
  const pageCount = correctStickers % STICKERS_PER_PAGE || STICKERS_PER_PAGE;
  if (pageCount === 5) {
    launchFireworks("small");
    setCatMessage("5こたまった！小さな花火だよ。いい調子！");
  } else if (pageCount === STICKERS_PER_PAGE) {
    launchFireworks("big");
    setCatMessage("10こたまった！花火大会だよ。すごい！");
  }
}

function launchFireworks(size = "small") {
  if (!els.fireworkOverlay) return;
  const bursts = size === "big" ? 9 : 5;
  els.fireworkOverlay.innerHTML = "";
  els.fireworkOverlay.className = `firework-overlay show ${size}`;
  for (let i = 0; i < bursts; i += 1) {
    const burst = document.createElement("span");
    burst.className = "firework-burst";
    burst.style.setProperty("--x", `${14 + Math.random() * 72}%`);
    burst.style.setProperty("--y", `${18 + Math.random() * 58}%`);
    burst.style.setProperty("--delay", `${i * 0.14}s`);
    burst.style.setProperty("--hue", `${20 + Math.random() * 55}`);
    els.fireworkOverlay.appendChild(burst);
  }
  window.setTimeout(() => {
    els.fireworkOverlay.className = "firework-overlay";
    els.fireworkOverlay.innerHTML = "";
  }, size === "big" ? 2600 : 1800);
}

function guideKeyboardDictation() {
  els.sentenceInput.focus();
  els.voiceStatus.textContent = "入力欄が開きました。iPhoneキーボードのマイクで話すと、そのまま候補を出せます。";
  setCatMessage("キーボードのマイクで話してね。言葉が入ったら、ぼくが候補を探すよ！");
}

function guideListKeyboardDictation() {
  els.listSearchInput.focus();
  els.listStatus.textContent = "入力欄が開きました。iPhoneキーボードのマイクで話すと、一覧から探せます。";
}

function setupVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    els.voiceStatus.textContent = "iPhoneでは、入力欄を開いてキーボードのマイクで話せます。";
    els.voiceButton.addEventListener("click", guideKeyboardDictation);
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  els.voiceButton.addEventListener("click", () => {
    if (!window.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      guideKeyboardDictation();
      return;
    }
    try {
      els.voiceStatus.textContent = "聞いています。ことばを言ってください。";
      recognition.start();
    } catch (error) {
      guideKeyboardDictation();
    }
  });
  recognition.addEventListener("result", (event) => {
    const text = event.results[0][0].transcript;
    clearSelectedAlternatives();
    els.sentenceInput.value = text;
    els.voiceStatus.textContent = `「${text}」から候補を出しました。ちがう時は文章を直してもう一度さがせます。`;
    setCatMessage(`「${text}」って聞こえたよ。候補を出したよ！`);
    renderSentenceCandidates();
    renderResults();
    switchView("searchView");
  });
  recognition.addEventListener("error", () => {
    guideKeyboardDictation();
  });
}

function setupListVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    els.listVoiceButton.addEventListener("click", guideListKeyboardDictation);
    return;
  }
  const recognition = new SpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.maxAlternatives = 3;
  els.listVoiceButton.addEventListener("click", () => {
    if (!window.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      guideListKeyboardDictation();
      return;
    }
    try {
      els.listStatus.textContent = "聞いています。漢字や読みを言ってください。";
      recognition.start();
    } catch (error) {
      guideListKeyboardDictation();
    }
  });
  recognition.addEventListener("result", (event) => {
    const text = event.results[0][0].transcript;
    els.listSearchInput.value = text;
    renderResults();
    els.listStatus.textContent = `「${text}」で一覧をさがしました。`;
    switchView("listView");
  });
  recognition.addEventListener("error", guideListKeyboardDictation);
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

document.querySelectorAll(".study-tab").forEach((tab) => {
  tab.addEventListener("click", () => switchStudyPanel(tab.dataset.studyPanel));
});

els.showModelButton.addEventListener("click", showModel);
els.playStrokeButton.addEventListener("click", () => renderStrokeOrder(selectedKanji.k));
els.analyzeSentenceButton.addEventListener("click", renderSentenceCandidates);
els.sentenceInput.addEventListener("input", () => {
  clearSelectedAlternatives();
  els.sentenceCandidates.innerHTML = "";
  els.highlightedSentence.innerHTML = "";
  window.clearTimeout(sentenceInputTimer);
  sentenceInputTimer = window.setTimeout(() => {
    if (els.sentenceInput.value.trim()) renderSentenceCandidates();
  }, 500);
});
els.listSearchInput.addEventListener("input", renderResults);
els.traceCanvas.addEventListener("pointerdown", startDraw);
els.traceCanvas.addEventListener("pointermove", draw);
els.traceCanvas.addEventListener("pointerup", stopDraw);
els.traceCanvas.addEventListener("pointerleave", stopDraw);
els.nextQuizButton.addEventListener("click", makeQuiz);
els.nextCandidateButton.addEventListener("click", goToNextCandidate);
els.photoInput.addEventListener("change", () => {
  const file = els.photoInput.files && els.photoInput.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  els.photoPreview.innerHTML = `<img src="${url}" alt="選んだ写真">`;
});
els.cameraSearchButton.addEventListener("click", () => {
  clearSelectedAlternatives();
  els.sentenceInput.value = els.cameraSearchInput.value;
  renderResults();
  switchView("searchView");
});
els.cameraSearchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  els.cameraSearchButton.click();
});
document.querySelector("#installHelpButton").addEventListener("click", () => els.installDialog.showModal());
document.querySelector("#closeInstallDialog").addEventListener("click", () => els.installDialog.close());

window.addEventListener("resize", clearCanvas);
selectKanji(selectedKanji);
renderResults();
resizeCanvas();
setupVoice();
setupListVoice();
makeQuiz();
renderStickers();
switchView("searchView");

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  navigator.serviceWorker.register("./sw.js").then((registration) => {
    registration.update();
  }).catch(() => {});
}
