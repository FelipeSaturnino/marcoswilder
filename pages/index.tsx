import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from "next/head";
import Footer from '@/components/Footer';
import SocialIcons from '@/components/SocialIcons';
import Background from '@/components/Background';
import MusicCarousel from "@/components/MusicCarousel";
import MoreMusicCarousel from "@/components/MoreMusicCarousel";
import GalleryCarousel from '@/components/GalleryCarousel';
import Schedule from "@/components/Schedule";
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import {
  inputStyle,
  buttonStyle,
  contentContainerStyle,
  sectionTitleStyle,
} from "../styles/sharedStyles";


export default function Home() {
  const [section, setSection] = useState("home");

  const content = {
    home: null,

Música: (
  <div style={{ background: "transparent" }}>
    <MusicCarousel />
  </div>
),

"Mais música": (
  <div style={{ background: "transparent" }}>
    <MoreMusicCarousel />
  </div>
),


Agenda: <Schedule />,

Fotos: (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <div style={{ width: "95%", maxWidth: "1800px" }}>
      <GalleryCarousel />
    </div>
  </div>
),


    Bio: (
    <Bio />
    ),

    Contato: <Contact />,

  };

  return (
    <>
      <Background />

      <SocialIcons />
  <Head>
    <title>Marcos Wilder</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
      <motion.div
  animate={{
    top: section !== "home" ? "20px" : "50%",
    left: section !== "home" ? "20px" : "50%",
    scale: section !== "home" ? 0.6 : 1,
    transform: section === "home" ? "translate(-50%, -50%)" : "none",
  }}
  initial={{
    top: "50%",
    left: "50%",
    scale: 1,
    transform: "translate(-50%, -50%)",
  }}
  transition={{ duration: 0.6 }}
  style={{
    position: "fixed",
    zIndex: 2,
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
  }}
>
  <h1
  style={{
    color: "white",
    fontSize: section === "home" ? "5rem" : "3rem", // ⬅️ Aumenta só na home
    fontWeight: "bold",
    margin: 0,
    whiteSpace: "nowrap",
    fontFamily: "'Brown Sugar', cursive",
  }}
>
  MARCOS WILDER
</h1>

</motion.div>






      <main style={{ padding: "4rem 1rem", textAlign: "center", zIndex: 3, position: "relative" }}>
  <motion.div
  key={section}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  style={{
    backgroundColor:
      section !== "home" &&
      section !== "Música" &&
      section !== "Mais música" &&
      section !== "Fotos"
        ? "white"
        : "transparent",
    maxWidth:
      section === "Bio" || section === "Contato" || section === "Agenda"
        ? "800px"
        : "1200px", // ⬅️ aplica limite só para Bio, Contato e Agenda
    margin: "0 auto",
    padding: section !== "home" ? "1.5rem" : "0",
    borderRadius: "0",
    boxShadow:
      section !== "home" ? "0 4px 16px rgba(0, 0, 0, 0.1)" : "none",
    width: "100%",
  }}
>
  {content[section as keyof typeof content]}
</motion.div>

</main>




      <Footer onSelect={(s) => setSection(s)} />
    </>
  );
}
