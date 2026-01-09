import React from "react";

type Show = {
  date: string;
  city: string;
  venue: string;
  ticketLink: string;
};

const shows: Show[] = [
  {
    date: "23/01/2026",
    city: "São Paulo - SP",
    venue: "Casa Lab",
    ticketLink: "https://www.clubedoingresso.com/evento/jorgens-marcoswilder-casalab/",
  },
  // Para simular ausência de eventos, deixe o array vazio []
];

const Schedule = () => {
  const hasEvents = shows.length > 0;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 1rem" }}>
      {hasEvents ? (
        isMobile ? (
          // Mobile: Card layout
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {shows.map((show, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
                }}
              >
                <div style={{ marginBottom: "0.5rem" }}>
                  <strong style={{ fontSize: "1rem", color: "#222" }}>Data:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>{show.date}</p>
                </div>
                <div style={{ marginBottom: "0.5rem" }}>
                  <strong style={{ fontSize: "1rem", color: "#222" }}>Cidade:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>{show.city}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <strong style={{ fontSize: "1rem", color: "#222" }}>Local:</strong>
                  <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.95rem" }}>{show.venue}</p>
                </div>
                <a
                  href={show.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    padding: "0.6rem 1rem",
                    textDecoration: "none",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  Ingressos
                </a>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: Table layout
          <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "2rem" }}>
            <tbody>
              {shows.map((show, index) => (
                <tr key={index}>
                  <td style={{ padding: "0.8rem", borderBottom: "1px solid #eee", textAlign: "left" }}>
                    {show.date}
                  </td>
                  <td style={{ padding: "0.8rem", borderBottom: "1px solid #eee", textAlign: "left" }}>
                    {show.city}
                  </td>
                  <td style={{ padding: "0.8rem", borderBottom: "1px solid #eee", textAlign: "left" }}>
                    {show.venue}
                  </td>
                  <td style={{ padding: "0.8rem", borderBottom: "1px solid #eee", textAlign: "right" }}>
                    <a
                      href={show.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "0.5rem 1rem",
                        textDecoration: "none",
                        borderRadius: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      Ingressos
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : (
        <>
          <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Não há eventos próximos.</p>
          <a
            href="https://instagram.com/marcoswilder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "0.6rem 1rem",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            SIGA MARCOS WILDER
          </a>
        </>
      )}
    </div>
  );
};

export default Schedule;
