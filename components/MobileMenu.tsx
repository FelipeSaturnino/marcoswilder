"use client";

import { useState } from "react";
import styles from "./MobileMenu.module.css";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaSpotify, FaYoutube, FaApple, FaDeezer, FaAmazon } from "react-icons/fa";

interface Props {
  onSelect: (section: string) => void;
}

export default function MobileMenu({ onSelect }: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (section: string) => {
    onSelect(section);
    setOpen(false);
  };

  return (
    <>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.topBar}>
          <div className={styles.logo}>MARCOS WILDER</div>
          <button className={styles.menuButton} onClick={() => setOpen(true)} aria-label="Abrir menu">
            <Menu size={28} />
          </button>
        </div>

        {open && (
          <>
            <div className={styles.backdrop} onClick={() => setOpen(false)} />
            <div className={styles.overlay}>
              <button className={styles.closeButton} onClick={() => setOpen(false)} aria-label="Fechar menu">
                <X size={32} />
              </button>

              <div className={styles.logoMenu}>MARCOS WILDER</div>

              <nav className={styles.navItems}>
                {["Música", "Mais música", "Agenda", "Fotos", "Bio", "Contato"].map((item) => (
                  <button key={item} onClick={() => handleSelect(item)}>
                    {item}
                  </button>
                ))}
              </nav>

              <div className={styles.social}>
                <a href="https://www.instagram.com/marcoswilder" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="http://open.spotify.com/intl-pt/artist/5DI25EANr1hmAkGsFrgRI7" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <FaSpotify />
                </a>
                <a href="https://www.youtube.com/marcoswilder" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://music.apple.com/br/artist/marcos-wilder/1499568348" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
                  <FaApple />
                </a>
                <a href="https://www.deezer.com/br/artist/12388962" target="_blank" rel="noopener noreferrer" aria-label="Deezer">
                  <FaDeezer />
                </a>
                <a href="https://music.amazon.com/artists/B084ZBQ6NL/marcos-wilder" target="_blank" rel="noopener noreferrer" aria-label="Amazon Music">
                  <FaAmazon />
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
