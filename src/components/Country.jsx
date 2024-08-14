/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function ListOfCountry({ country }) {
  return (
    <section className="sect_countrys">
      {country.map((country) => (
        <div key={country.name} className="card_countrys">
          <div className="flags_countrys">
            <img src={country.flags} alt={country.alt} />
          </div>
          <table className="data_country">
            <tbody>
              <tr>
                <td>
                  <h2 className="subtitle">Nombre Oficial:</h2>
                </td>
                <td>{country.name}</td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Capital:</h2>
                </td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Region:</h2>
                </td>
                <td>{country.region}</td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Lenguaje Oficial:</h2>
                </td>
                <td>{country.lang}</td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Moneda Oficial:</h2>
                </td>
                <td>{country.currency}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
}

function NoCountry() {
  return (
    <h2 style={{ textAlign: "center", color: "yellowgreen" }}>
      Ingrese el nombre de su pais...
    </h2>
  );
}

export function Country({ country }) {
  const hasCountry = country?.length > 0;

  return hasCountry ? <ListOfCountry country={country} /> : <NoCountry />;
}
