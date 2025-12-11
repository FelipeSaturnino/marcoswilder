import { useState } from 'react';

type FooterProps = {
  onSelect: (section: string) => void;
};

const menuItems = ["Música", "Mais música", "Agenda", "Fotos", "Bio", "Contato"];

export default function Footer({ onSelect }: FooterProps) {
  const [active, setActive] = useState("MÚSICA");

  const handleClick = (item: string) => {
    setActive(item);
    onSelect(item);
  };

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(1rem, 2vw, 2rem)",
        padding: "clamp(0.75rem, 2vw, 1rem) 0",
        background: "transparent",
        zIndex: 5,
      }}
    >
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontWeight: "bold",
            fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
            textTransform: "uppercase",
            cursor: "pointer",
            padding: "0.5rem clamp(0.5rem, 1vw, 0.8rem)",
            position: "relative",
          }}
        >
          {item}
          <span
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: active === item ? "#ccc" : "transparent",
              transition: "background-color 0.2s",
            }}
          />
          <style jsx>{`
            button:hover span {
              background-color: white !important;
            }
          `}</style>
        </button>
      ))}
    </footer>
  );
}
