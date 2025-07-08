import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    mensagem: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch("https://formsubmit.co/ajax/contato@marcoswilder.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("Mensagem enviada com sucesso!");
      setFormData({ nome: "", contato: "", mensagem: "" });
    } catch (error) {
      setSuccessMessage("Erro ao enviar. Tente novamente.");
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 4000); // 4 segundos
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}>
      <h2>Fale com Marcos Wilder</h2>

      {successMessage && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "1rem",
            borderRadius: "4px",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
        <input type="text" name="contato" placeholder="E-mail ou telefone" value={formData.contato} onChange={handleChange} required />
        <textarea name="mensagem" placeholder="Mensagem" rows={5} value={formData.mensagem} onChange={handleChange} required />
        <button type="submit" style={{ padding: "0.6rem", fontWeight: "bold" }}>Enviar</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        Ou envie diretamente para: <a href="mailto:contato@marcoswilder.com">contato@marcoswilder.com</a>
      </p>
    </div>
  );
}
