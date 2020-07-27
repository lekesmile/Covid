import React, { useState, useEffect } from "react";
import FormControl from "@material-ui/core/FormControl";
import { Select, MenuItem } from "@material-ui/core";
import axios from "axios";
import CardsInfo from "./CardsInfo";
import TableData from "./TableData";
import Lifecases from "./Lifecases";

const Subhead = () => {
  const [country, setCountry] = useState([]);
  const [selecting, setSelecting] = useState("Worldwide");
  const [individualCountry, setIndividualCountry] = useState([]);
  const getAllcountries = async () => {
    const data = await axios.get("https://disease.sh/v3/covid-19/countries");
    console.log(data.data);
    setCountry(data.data);
  };

  useEffect(() => {
    getAllcountries();
  }, []);

  const newCountry_Onselete = country.map((country) => {
    return (
      <MenuItem key={country.countryInfo.iso2} value={country.country}>
        {country.country}{" "}
      </MenuItem>
    );
  });

  const handleChange = async (event) => {
    const selectedCountry = event.target.value;
    console.log("country = " + selectedCountry);
    setSelecting(selectedCountry);

    const url =
      selectedCountry === "Worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selectedCountry}`;

    const givenCountry = await axios.get(url);
    setIndividualCountry(givenCountry.data);
    console.log(givenCountry.data);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://disease.sh/v3/covid-19/all");
      response = await response.json();
      setIndividualCountry(response);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="container">
      <div className="App__left">
        <div className="App__left__inner">
          <div>
            <h3 style={{ marginLeft: 5 }}>Covid 19</h3>
          </div>
          <div>
            <FormControl variant="outlined">
              <Select value={selecting} onChange={handleChange}>
                <MenuItem value="Worldwide">Worldwide</MenuItem>
                {newCountry_Onselete}
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="Subhead__cards">
          <CardsInfo
            title="Covid Cases"
            flag=""
            cases={individualCountry.todayCases}
            total={individualCountry.cases}
          />
          <CardsInfo
            title="Recovered"
            flag=""
            cases={individualCountry.todayRecovered}
            total={individualCountry.recovered}
          />
          <CardsInfo
            title="Death"
            flag=""
            cases={individualCountry.todayDeaths}
            total={individualCountry.deaths}
          />
        </div>
      </div>
      <div className="App__right">
        <Lifecases />
        <TableData country={country} />
      </div>
    </div>
  );
};

export default Subhead;
