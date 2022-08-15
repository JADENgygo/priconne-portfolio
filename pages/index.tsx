import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="row text-center mt-1 gy-5">
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-stickers.netlify.app">
                プリコネスタンプ
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-stickers.webp"}
            width={1214}
            height={468}
            alt={"priconne-stickers"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-good.webp"}
            width={320}
            height={312}
            alt={"priconne-good"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-good.vercel.app">プリコネグッド</a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <a href="https://priconne-profile.vercel.app">プリコネプロフ</a>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-profile.jpg"}
            width={1920}
            height={1080}
            alt={"priconne-profile"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-fresher.jpg"}
            width={900}
            height={500}
            alt={"priconne-fresher"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-fresher.vercel.app">
                プリコネフレッシャー
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://princess-connect-clan-matcher.netlify.app">
                ぷりこねまっち
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-match.jpg"}
            width={1190}
            height={644}
            alt={"priconne-match"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-cherun.jpg"}
            width={477}
            height={370}
            alt={"priconne-cherun"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-cherun.vercel.app">
                プリコネちぇるーん
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-radio.vercel.app">
                プリコネラジオファン
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-radio.jpg"}
            width={1190}
            height={644}
            alt={"priconne-radio"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-panel.png"}
            width={364}
            height={320}
            alt={"priconne-panel"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-panel.vercel.app">
                プリコネパネル
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-tarots.vercel.app">
                プリコネタロット
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-tarots.png"}
            width={369}
            height={249}
            alt={"priconne-tarots"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-tower.png"}
            width={320}
            height={240}
            alt={"priconne-tower"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-tower.vercel.app">
                プリコネタワー
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-nano.vercel.app">
                プリコネなの
              </a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-nano.png"}
            width={599}
            height={247}
            alt={"priconne-nano"}
          />
        </div>
        <div className="col-6">
          <Image
            src={"/img/priconne-block.png"}
            width={195}
            height={315}
            alt={"priconne-block"}
          />
        </div>
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <div>
              <a href="https://priconne-block.vercel.app">
                プリコネブロック
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
