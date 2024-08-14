export const searchCountry = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${search}?fields=name,capital,flags,region,languages,currencies,callingCodes`
    );

    const json = await response.json();

    const country = json.map((country) => country);

    return country?.map((country) => ({
      flags: country.flags.svg,
      name: country.name.common,
      currency: country.currencies[Object.keys(country.currencies)[0]].name,
      capital: country.capital,
      region: country.region,
      lang: country.languages[Object.keys(country.languages)[0]],
    }));
  } catch (e) {
    throw new Error("Pais no encontrado");
  }
};
