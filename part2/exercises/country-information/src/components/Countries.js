import React from 'react'

const Country = ({country}) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p>
                Capital: {country.capital}
            </p>
            <p>
                Population: {country.population}
            </p>
            <img src={country.flag} alt={`The flag of ${country.name}`}/>
        </div>
    )
};

const Countries = ({countries, filter, selectCountry}) => {
    const filterCountry = (country) => {
        const filterValue = filter.toLowerCase();
        const lowerCaseName = country.name.toLowerCase();

        return lowerCaseName.indexOf(filterValue) !== -1;
    };

    const countriesToShow = countries.filter(filterCountry);

    if(countriesToShow.length > 10) {
        return (
            <div>Too many matches. Specify another filter.</div>
        )
    } else if (countriesToShow.length === 1) {
        return (
            <Country country={countriesToShow[0]}/>
        )
    }

    return (
        <div>
            {countriesToShow.map(country => <div onClick={selectCountry(country.name)} key={country.numericCode}>{country.name}</div>)}
        </div>
    )
};


export default Countries;