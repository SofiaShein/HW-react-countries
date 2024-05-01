function Country({ country }) {
  return <tr>
    <td>{country.name.common}</td>
    <td>{country.area}</td>
    <td>{country.population}</td>
    <td>{country.region}</td>
  </tr>;
}

export default Country;