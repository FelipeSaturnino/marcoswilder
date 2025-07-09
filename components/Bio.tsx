import React from "react";
import styles from "./Bio.module.css";

export default function Bio() {
  return (
    <div className={styles.bioContainer}>
      <p>
        Marcos Wilder é cantor, compositor, arranjador, instrumentista, sonoplasta e produtor musical natural de São Paulo.
        Quando criança, teve contato com a música através do contrabaixo e violão, mas só a partir de 2014, com o projeto
        autoral que leva seu nome, passou a publicar suas músicas nas redes sociais e a se apresentar em bares, saraus,
        nas ruas e espaços culturais.
      </p>

      <p>
        Além dos singles, lança dois EPs: <strong>Molhado</strong> (2020) e <strong>Prolixo</strong> (2022). Também faz participação
        vocal na faixa <em>João</em>, do álbum <strong>Seg/Sex</strong> (2022), da banda <em>Jorgens</em>. No mesmo ano, assume o papel
        de produtor no álbum <strong>Especialista numa nota só</strong>, de <em>Luiza Akimoto</em>.
      </p>

      <p>
        Em 2024, lança o EP <strong>Novos tempos</strong>, com a banda <em>Helleno e os Universais</em>. No mesmo ano, inicia o
        espetáculo <strong>A volta do sangue latino</strong>, uma homenagem aos 50 anos do grupo <em>Secos e Molhados</em>. Ainda
        em 2024, se apresenta no <em>Centro Cultural de São Paulo (CCSP)</em>.
      </p>

      <p>
        Já em 2025, participa do show na exposição de <em>Ney Matogrosso</em>, no <em>Museu da Imagem e do Som (MIS)</em>, e também da estreia
        do filme <em>Homem com H</em>, de <em>Esmir Filho</em>, produzido pela <em>Paris Entertainment</em>, com <em>Helleno e os Universais</em>.
      </p>

      <p>
        Atualmente, é tecladista do músico <em>Gil Santanna</em>, integrante das bandas <em>Helleno e os Universais</em> e <em>Jammô</em>,
        que acompanha artistas como <em>Adriano Nascimento</em>, <em>Ester Reis</em>, <em>Zoioo Mc</em>, <em>Tay Oluá</em> e <em>Luiza Akimoto</em>.
      </p>
    </div>
  );
}
