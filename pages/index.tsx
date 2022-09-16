import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="mt-3">プリコネRのツール・ゲーム集だよ</div>
      <div className="alert alert-info mt-3" role="alert">
        9.14 <a href="https://priconne-yabai.vercel.app">プリコネヤバイ</a> リリース
      </div>
      <div className="row text-center gy-3">
        <hr />
        <div className="col-sm-6 co-12">
          <Image
            src={"/img/priconne-stickers.webp"}
            width={1214}
            height={468}
            alt={"priconne-stickers"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-stickers.vercel.app">
            プリコネスタンプ
          </a>
          <div className="mt-3">スタンプ集</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-good.webp"}
            width={320}
            height={312}
            alt={"priconne-good"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-good.vercel.app">プリコネグッド</a>
          <div className="mt-3">クラメンへのいいね管理ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-profile.webp"}
            width={1920}
            height={1080}
            alt={"priconne-profile"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-profile.vercel.app">プリコネプロフ</a>
          <div className="mt-3">プロフカード作成ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-fresher.webp"}
            width={900}
            height={500}
            alt={"priconne-fresher"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-fresher.vercel.app">
            プリコネフレッシャー
          </a>
          <div className="mt-3">ガチャ告知画像作成ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-match.webp"}
            width={1322}
            height={617}
            alt={"priconne-match"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-match.vercel.app">
            プリコネマッチ
          </a>
          <div className="mt-3">クラン登録/検索ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-cherun.webp"}
            width={477}
            height={370}
            alt={"priconne-cherun"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-cherun.vercel.app">
            プリコネちぇるーん
          </a>
          <div className="mt-3">プログラミング言語ちぇる (Brainf***のちぇる語版)</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-radio.webp"}
            width={1190}
            height={644}
            alt={"priconne-radio"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-radio.vercel.app">
            プリコネラジオファン
          </a>
          <div className="mt-3">プリコネラジオのファンサイト</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-panel.webp"}
            width={364}
            height={320}
            alt={"priconne-panel"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-panel.vercel.app">
            プリコネパネル
          </a>
          <div className="mt-3">エリザベスパークの特大顔出しパネルの画像作成ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-tarots.webp"}
            width={369}
            height={249}
            alt={"priconne-tarots"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-tarots.vercel.app">
            プリコネタロット
          </a>
          <div className="mt-3">タロット占い</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-tower.webp"}
            width={320}
            height={240}
            alt={"priconne-tower"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-tower.vercel.app">
            プリコネタワー
          </a>
          <div className="mt-3">ハノイの塔 (パズルゲーム)</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-nano.webp"}
            width={599}
            height={247}
            alt={"priconne-nano"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-nano.vercel.app">
            プリコネなの
          </a>
          <div className="mt-3">Twitterの文章をなの語尾にするChrome拡張</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-block.webp"}
            width={195}
            height={315}
            alt={"priconne-block"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-block.vercel.app">
            プリコネブロック
          </a>
          <div className="mt-3">落ち物パズル</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-15.webp"}
            width={300}
            height={315}
            alt={"priconne-15"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-15.vercel.app">
            プリコネ15
          </a>
          <div className="mt-3">15パズル</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-who.webp"}
            width={639}
            height={344}
            alt={"priconne-who"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-who.vercel.app">
            プリコネ誰かな
          </a>
          <div className="mt-3">画像の一部からキャラを当てるクイズ</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-calendar.webp"}
            width={377}
            height={545}
            alt={"priconne-calendar"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-calendar.vercel.app">
            プリコネカレンダー
          </a>
          <div className="mt-3">キャラの誕生日カレンダー</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-cord.webp"}
            width={1307}
            height={720}
            alt={"priconne-cord"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-cord.vercel.app">
            プリコード (アルファ版)
          </a>
          <div className="mt-3">クランバトル管理ツール</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-rosetta.webp"}
            width={375}
            height={200}
            alt={"priconne-rosetta"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-rosetta.vercel.app">
            プリコネロゼッタ
          </a>
          <div className="mt-3">ロゼッタのチャットボット</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-jigsaw.webp"}
            width={809}
            height={806}
            alt={"priconne-jigsaw"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-jigsaw.vercel.app">
            プリコネジグソー
          </a>
          <div className="mt-3">ジグソーパズル</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-timer.webp"}
            width={375}
            height={386}
            alt={"priconne-timer"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-timer.vercel.app">
            プリコネタイマー
          </a>
          <div className="mt-3">タイマーアプリ</div>
        </div>
        <hr />
        <div className="col-sm-6 col-12">
          <Image
            src={"/img/priconne-yabai.webp"}
            width={361}
            height={422}
            alt={"priconne-yabai"}
          />
        </div>
        <div className="col-sm-6 col-12">
          <a href="https://priconne-yabai.vercel.app">
            プリコネヤバイ
          </a>
          <div className="mt-3">やばいですね画像表示ツール</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
