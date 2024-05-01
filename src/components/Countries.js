import { useEffect, useState } from "react";
import Country from "./Country";
import Table from 'react-bootstrap/Table';

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then(res => res.json())
      .then(data => {
        setCountries(data);
      });
  }, []);

  return <>
    <h1>Countries</h1>
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Name</th>
        <th>Area</th>
        <th>Population</th>
        <th>Region</th>
      </tr>
      </thead>
      <tbody>
      {countries.map(country => <Country country={country} key={country.car.cca3} />)}
      </tbody>
    </Table>
  </>
}

export default Countries;