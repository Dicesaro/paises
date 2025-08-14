/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function ListOfCountry({ country }) {
  return (
    <section className="sect_countrys">
      {country.map((country) => (
        <div key={country.name} className="card_countrys">
          <section className="section_flags_coatOfArms">
            <div className="flags_countrys">
              <img src={country.flags} alt={country.alt} />
            </div>
            <div className="coatOfArms_countrys">
              <img src={country.coatOfArms.png} alt={country.alt} />
            </div>
          </section>
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
              <tr>
                <td>
                  <h2 className="subtitle">Fronteras:</h2>
                </td>
                <td>
                  {country.borders?.length > 0 ? (
                    <div className="borders_grid">
                      {country.borders.map((border) => (
                        <div key={border.code} className="border">
                          <img
                            style={{ maxWidth: '50px' }}
                            src={border.flag}
                            alt={border.name}
                          />
                          {/* <span>{border.name}</span> */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span>No tiene fronteras</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Area:</h2>
                </td>
                <td>{country.area} km²</td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Huso Horario:</h2>
                </td>
                <td>
                  {country.timezones?.length > 0 ? (
                    country.timezones.map((timezone, index) => (
                      <span key={index}>
                        {timezone}
                        {index < country.timezones.length - 1
                          ? ', '
                          : ''}
                      </span>
                    ))
                  ) : (
                    <span>No disponible</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className="subtitle">Mapa:</h2>
                </td>
                <td>
                  {country.maps?.openStreetMaps ? (
                    <a
                      style={{ color: '#f97316' }}
                      href={country.maps.openStreetMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver en Mapa
                    </a>
                  ) : (
                    <span>No disponible</span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </section>
  )
}

function NoCountry() {
  return (
    <h2 style={{ textAlign: 'center', color: 'yellowgreen' }}>
      Ingrese el nombre de su pais...
    </h2>
  )
}

export function Country({ country }) {
  const hasCountry = country?.length > 0

  return hasCountry ? (
    <ListOfCountry country={country} />
  ) : (
    <NoCountry />
  )
}
