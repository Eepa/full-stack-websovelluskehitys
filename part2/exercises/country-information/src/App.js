import React from 'react'
import countryService from './services/countries'
import Countries from './components/Countries'

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

    selectOneCountry = (countryName) => {
        return () => {
            this.setState({
                filter: countryName
            })
        }
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
                <Countries countries={this.state.countries} filter={this.state.filter} selectCountry={this.selectOneCountry} />
            </div>
        )
    }

}

export default App;









