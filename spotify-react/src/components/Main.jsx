import {
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  Play,
} from "@phosphor-icons/react";

import styles from "./Main.module.css";

import album1 from "../assets/playlist/1.jpeg";
import album2 from "../assets/playlist/2.png";
import album3 from "../assets/playlist/3.jpeg";
import album4 from "../assets/playlist/4.jpeg";
import album5 from "../assets/playlist/5.jpeg";
import album6 from "../assets/playlist/6.jpeg";
import album7 from "../assets/playlist/7.jpeg";
import album8 from "../assets/playlist/8.jpeg";
import album9 from "../assets/playlist/9.jpeg";
import album10 from "../assets/playlist/10.jpeg";
import album11 from "../assets/playlist/11.jpeg";
import album12 from "../assets/playlist/12.jpeg";
import album13 from "../assets/playlist/13.jpeg";
import album14 from "../assets/playlist/14.jpeg";
import album15 from "../assets/playlist/15.jpeg";
import { useEffect, useState } from "react";

export function Main() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const currentTime = new Date().getHours();

      if (currentTime >= 6 && currentTime < 12) {
        setGreeting("Bom Dia! ☀️");
      } else if (currentTime >= 12 && currentTime < 18) {
        setGreeting("Boa Tarde! 🌤️");
      } else {
        setGreeting("Boa Noite! 🌙");
      }
    };

    updateGreeting();

    const intervalID = setInterval(updateGreeting, 60000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <main className={styles.main} id="main">
      <div className={styles.mainContainer}>
        <nav className={styles.headerNavigation}>
          <div className={styles.navigation}>
            <button className={styles.arrowLeft}>
              <CaretLeft size={24} />
            </button>
            <button className={styles.arrowRight}>
              <CaretRight size={24} />
            </button>
          </div>
          <div className={styles.headerSearch}>
            <MagnifyingGlass size={24} className={styles.magnifyingGlass} />
            <input
              type="text"
              id="search-input"
              maxlength="800"
              placeholder="O que você quer ouvir?"
            />
          </div>
          <div className={styles.headerLogin}>
            <button className={styles.subscribe}>Inscreva-se</button>
            <button className={styles.login}>Entrar</button>
          </div>
        </nav>
        <div className={styles.playlistContainer}>
          <div id={styles.resultPlaylists}>
            <div className={styles.playlist}>
              <h1 className={styles.salutation}>Olá, {greeting} </h1>
              <h2 className={styles.session}>Navegar por todas as seções</h2>
            </div>
            <div className={styles.offerScrollContainer}>
              <div className={styles.offerList}>
                <section className={styles.offerListItem}>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card1}`}>
                      <img src={album1} alt="" />
                      <span>Boas festas</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card2}`}>
                      <img src={album2} alt="" />
                      <span>Feitos para você</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card3}`}>
                      <img src={album3} alt="" />
                      <span>Lançamentos</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card4}`}>
                      <img src={album4} alt="" />
                      <span>Creators</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card5}`}>
                      <img src={album5} alt="" />
                      <span>Para treinar</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card6}`}>
                      <img src={album6} alt="" />
                      <span>Podcasts</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card7}`}>
                      <img src={album7} alt="" />
                      <span>Sertanejo</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card8}`}>
                      <img src={album8} alt="" />
                      <span>Samba e pagode</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card9}`}>
                      <img src={album9} alt="" />
                      <span>Funk</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card10}`}>
                      <img src={album10} alt="" />
                      <span>MPB</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card11}`}>
                      <img src={album11} alt="" />
                      <span>Rock</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card12}`}>
                      <img src={album12} alt="" />
                      <span>Hip Hop</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card13}`}>
                      <img src={album13} alt="" />
                      <span>Indie</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card14}`}>
                      <img src={album14} alt="" />
                      <span>Relax</span>
                    </div>
                  </a>
                  <a href="" className={styles.cards}>
                    <div className={`${styles.cards} ${styles.card15}`}>
                      <img src={album15} alt="" />
                      <span>Música Latina</span>
                    </div>
                  </a>
                </section>
              </div>
            </div>
          </div>
          <div id={styles.resultArtist} className={styles.hidden}>
            <div className={styles.gridContainer}>
              <div className={styles.artistCard} id="">
                <div className={styles.cardImg}>
                  <img id={styles.artistImg} className={styles.artistImg} />
                  <div className={styles.play}>
                    <Play className={styles.iconPlay} />
                  </div>
                </div>
                <div className={styles.cardText}>
                  <a title="Foo Fighters" className={styles.vst} href="">
                    <span className={styles.artistName} id="artist-name"></span>
                    <span className={styles.artistCategorie}>Artista</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
