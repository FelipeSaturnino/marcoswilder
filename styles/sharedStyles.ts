// styles/sharedStyles.ts

// Estilo para inputs e textarea - responsivo
export const inputStyle: React.CSSProperties = {
  padding: "clamp(0.5rem, 2vw, 0.8rem)",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

// Estilo para botão - responsivo
export const buttonStyle: React.CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  padding: "clamp(0.6rem, 2vw, 0.8rem)",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "clamp(0.875rem, 2vw, 1rem)",
  transition: "background-color 0.3s",
};

// Estilo para o contêiner do conteúdo central (com fundo branco) - responsivo
export const contentContainerStyle: React.CSSProperties = {
  marginTop: "clamp(80px, 15vw, 120px)",
  padding: "clamp(1rem, 4vw, 2rem)",
  backgroundColor: "white",
  maxWidth: "min(100%, 800px)",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  position: "relative",
};

// Estilo para títulos das seções (caso queira padronizar) - responsivo
export const sectionTitleStyle: React.CSSProperties = {
  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#222",
};
