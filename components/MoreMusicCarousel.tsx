import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import styles from "./MusicCarousel.module.css";

type Track = {
  title: string;
  year: string;
  url: string;
};

const moreMusic: Track[] = [
  { title: "Hellena Almeida - Bete Balanço", year: "2025", url: "https://www.youtube.com/embed/XF41A7qCzS4" },
  { title: "Helleno & Os Universais - Redemoinho", year: "2025", url: "https://www.youtube.com/embed/okwOoaQo_Os" },
  { title: "Helleno & Os Universais - Belo Natural", year: "2025", url: "https://www.youtube.com/embed/UjHiJq_uboo" },
  { title: "Helleno & Os Universais - Os Olhos", year: "2024", url: "https://www.youtube.com/embed/LwMxoMqA1Hg" },
  { title: "Luiza Akimoto - Baiao de Dois", year: "2024", url: "https://www.youtube.com/embed/1pOMlLZjODU" },
  { title: "Luiza Akimoto - Espetáculo Especialista Numa Nota Só", year: "2024", url: "https://www.youtube.com/embed/kD-yTfIypgI" },
  { title: "Helleno & Os Universais - Próxima Estação", year: "2023", url: "https://www.youtube.com/embed/q6BMTkONdO8" },
  { title: "Luiza Akimoto - Meio Copo", year: "2022", url: "https://www.youtube.com/embed/fpyuL9u_684" },
];

export default function MoreMusicCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      "(min-width: 600px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
  });

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <div style={{ position: "relative", minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <button
        onClick={() => instanceRef.current?.prev()}
        aria-label="Voltar"
        onMouseEnter={() => setIsLeftHovered(true)}
        onMouseLeave={() => setIsLeftHovered(false)}
        style={{
          position: "absolute",
          top: "50%",
          left: "-40px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowLeft size={40} color={isLeftHovered ? "#ccc" : "#fff"} />
      </button>

      <button
        onClick={() => instanceRef.current?.next()}
        aria-label="Avançar"
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}
        style={{
          position: "absolute",
          top: "50%",
          right: "-40px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowRight size={40} color={isRightHovered ? "#ccc" : "#fff"} />
      </button>

      <div ref={sliderRef} className="keen-slider">
        {moreMusic.map((track, index) => (
          <div key={index} className="keen-slider__slide">
            <div
              style={{
                backgroundColor: "white",
                padding: "1.5rem",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                height: "100%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "1.2rem" }}>
                <span>{track.title}</span>
                <span>{track.year}</span>
              </div>
              <iframe
                width="100%"
                height="250"
                src={track.url}
                title={`YouTube player - ${track.title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
