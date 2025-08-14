export const searchCountry = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,region,languages,currencies,callingCodes,borders,area,population,maps,coatOfArms`
    )

    const json = await response.json()

    // Para cada país encontrado
    const countries = await Promise.all(
      json.map(async (country) => {
        // Si tiene borders, busca info de los países vecinos
        let bordersInfo = []
        if (country.borders && country.borders.length > 0) {
          const bordersCodes = country.borders.join(',')
          const bordersResponse = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${bordersCodes}&fields=name,flags,cca3`
          )
          const bordersJson = await bordersResponse.json()
          bordersInfo = bordersJson.map((borderCountry) => ({
            name: borderCountry.name.common,
            flag: borderCountry.flags.svg,
            code: borderCountry.cca3,
          }))
        }

        return {
          flags: country.flags.svg,
          name: country.name.common,
          currency: country.currencies
            ? country.currencies[Object.keys(country.currencies)[0]]
                .name
            : null,
          capital: country.capital,
          region: country.region,
          lang: country.languages
            ? country.languages[Object.keys(country.languages)[0]]
            : null,
          borders: bordersInfo,
          area: country.area,
          maps: {
            googleMaps: country.maps?.googleMaps,
            openStreetMaps: country.maps?.openStreetMaps,
          },
          population: country.population,
          coatOfArms: {
            png: country.coatOfArms?.png,
            svg: country.coatOfArms?.svg,
          },
        }
      })
    )

    return countries
  } catch (e) {
    throw new Error('Pais no encontrado')
  }
}
