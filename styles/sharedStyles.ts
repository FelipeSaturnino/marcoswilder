// styles/sharedStyles.ts

// Estilo para inputs e textarea
export const inputStyle: React.CSSProperties = {
  padding: "0.8rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  width: "100%",
  boxSizing: "border-box",
};

// Estilo para botão
export const buttonStyle: React.CSSProperties = {
  backgroundColor: "#222",
  color: "white",
  padding: "0.8rem",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
  transition: "background-color 0.3s",
};

// Estilo para o contêiner do conteúdo central (com fundo branco)
export const contentContainerStyle: React.CSSProperties = {
  marginTop: "120px",
  padding: "2rem",
  backgroundColor: "white",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  zIndex: 1,
  position: "relative",
};

// Estilo para títulos das seções (caso queira padronizar)
export const sectionTitleStyle: React.CSSProperties = {
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#222",
};
