import { useState } from "react";
import Image from "next/image";
import styles from "./Apoie.module.css";

const pixKey = "c0bd6ef1-1bca-4196-86c9-33108fb994d3";

export default function Apoie() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "success" | "error">("idle");

  const copyPixKey = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API indisponível");
      }

      await navigator.clipboard.writeText(pixKey);
      setCopyStatus("success");
    } catch {
      setCopyStatus("error");
    }
  };

  return (
    <article className={styles.content}>
      <h2 className={styles.title}>Apoie meu projeto</h2>


      <section className={styles.section} aria-labelledby="pix-title">
        <h3 id="pix-title">Pix</h3>
        <p className={styles.instruction}>
          Escaneie o QR Code pelo aplicativo do seu banco ou copie a chave Pix.
        </p>
        <Image
          className={styles.qrCode}
          src="/pix-qrcode.jpeg"
          alt="QR Code Pix para apoiar a música de Marcos Wilder"
          width={501}
          height={494}
          priority
        />
        <div className={styles.pixKey}>
          <code>{pixKey}</code>
          <button type="button" onClick={copyPixKey}>
            Copiar chave Pix
          </button>
          <p className={styles.copyStatus} role="status" aria-live="polite">
            {copyStatus === "success" && "Chave Pix copiada!"}
            {copyStatus === "error" &&
              "Não foi possível copiar. Selecione a chave e copie manualmente."}
          </p>
        </div>
      </section>

      <p className={styles.thanks}>Obrigado por apoiar minha música!</p>
    </article>
  );
}
