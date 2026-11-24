import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";
import SocialIcons from "@/components/SocialIcons";
import styles from "@/styles/Apoie.module.css";

const pixKey = "c0bd6ef1-1bca-4196-86c9-33108fb994d3";

export default function Apoie() {
  const router = useRouter();
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

  const returnToHome = () => {
    void router.push("/");
  };

  return (
    <>
      <Head>
        <title>Apoie o projeto | Marcos Wilder</title>
        <meta
          name="description"
          content="Apoie os projetos musicais de Marcos Wilder por Pix."
        />
      </Head>
      <Background />
      <SocialIcons />
      <MobileMenu onSelect={returnToHome} />
      <header className={styles.brand}>MARCOS WILDER</header>

      <main className={styles.page}>
        <article className={styles.content}>
          <h1>Apoie o projeto</h1>

          <section className={styles.section} aria-labelledby="pix-title">
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
      </main>

      <Footer onSelect={returnToHome} activeItem="Apoie" />
    </>
  );
}
