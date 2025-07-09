import React from "react";

type Show = {
  date: string;
  city: string;
  venue: string;
  ticketLink: string;
};

const shows: Show[] = [
  {
    date: "20/07/2025",
    city: "São Paulo - SP",
    venue: "Auditório Ibirapuera",
    ticketLink: "https://example.com/ingresso1",
  },
  {
    date: "05/08/2025",
    city: "Belo Horizonte - MG",
    venue: "Palácio das Artes",
    ticketLink: "https://example.com/ingresso2",
  },
  // Para simular ausência de eventos, deixe o array vazio []
];

const Schedule = () => {
  const hasEvents = shows.length > 0;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      {hasEvents ? (
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
                    Ingresso
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
