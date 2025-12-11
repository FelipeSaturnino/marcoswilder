import { FaInstagram, FaSpotify, FaYoutube, FaApple, FaDeezer, FaAmazon } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .socialIconsContainer {
            display: none !important;
          }
        }
      `}</style>
      <div className="socialIconsContainer" style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        display: "flex",
        gap: "1rem",
        zIndex: 10,
      }}>
        <a href="https://www.instagram.com/marcoswilder" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaInstagram /></a>
        <a href="http://open.spotify.com/intl-pt/artist/5DI25EANr1hmAkGsFrgRI7" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaSpotify /></a>
        <a href="https://www.youtube.com/marcoswilder" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaYoutube /></a>
        <a href="https://music.apple.com/br/artist/marcos-wilder/1499568348" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaApple /></a>
        <a href="https://www.deezer.com/br/artist/12388962" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaDeezer /></a>
        <a href="https://music.amazon.com/artists/B084ZBQ6NL/marcos-wilder" target="_blank" rel="noopener noreferrer" style={{ color: "white", fontSize: "1.8rem" }}><FaAmazon /></a>
      </div>
    </>
  );
}
