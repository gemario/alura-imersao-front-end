import styles from "./Sidebar.module.css";

import spotifyLogo from "../assets/image/logo-spotify.png";
import {
  Books,
  Globe,
  House,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNavigation}>
        <div className={styles.logo}>
          <a href="#">
            <img src={spotifyLogo} alt="Logotipo do Spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <House size={30} />
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <MagnifyingGlass size={30} />
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.sidebarLibrary}>
        <div className={styles.libraryContent}>
          <button className={styles.libraryButton}>
            <Books size={30} />
            <span>Sua biblioteca</span>
          </button>
          <button className={styles.plusButton}>
            <Plus size={18} />
          </button>
        </div>
        <section className={styles.sectionPlaylist}>
          <div className={styles.sectionPlaylistContent}>
            <span className={`${styles.text} ${styles.title}`}>
              Crie sua primeira playlist
            </span>
            <span className={`${styles.text} ${styles.subtitle}`}>
              É fácil, vamos te ajudar.
            </span>
            <button className={styles.sectionPlaylistButton}>
              <span>Criar Playlist</span>
            </button>
          </div>
        </section>
        <div className={styles.cookies}>
          <a href="#">Cookies</a>
        </div>
        <div className={styles.languages}>
          <button className={styles.languagesButton}>
            <Globe size={24} />
            <span>Português do Brasil</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
