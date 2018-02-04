import React from 'react'
import countryService from './services/countries'

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

const Countries = ({countries, filter}) => {
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
            {countriesToShow.map(country => <div key={country.numericCode}>{country.name}</div>)}
        </div>
    )
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            filter: ''
        }
    }

    componentWillMount() {
        countryService
            .getAll()
            .then(countries => {
                console.log(countries);
                this.setState({
                    countries
                });
            });
    }

    handleFilterChange = (event) => {
        this.setState({
            filter: event.target.value
        })
    };


    render() {

        return (
            <div>
                <div>
                    Find countries:
                    <input
                        value={this.state.filter}
                        onChange={this.handleFilterChange}
                    />
                </div>
                <Countries countries={this.state.countries} filter={this.state.filter} />
            </div>
        )
    }

}

export default App;









