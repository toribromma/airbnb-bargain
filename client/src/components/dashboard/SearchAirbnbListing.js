import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import fetchResultsAction from "../../actions/fetchResults";
class SearchAirbnbListing extends Component {
    constructor() {
        super();
        this.state = {
            selectedState: "AK",
            selectedCity: "",
            selectedZipCode: ""
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    onSubmit = e => {
        e.preventDefault();
        const searchData = {
            state: this.state.selectedState,
            city: this.state.selectedCity,
            zip: this.state.selectedZipCode
        };
        // console.log(searchData)
        this.props.fetchResults(searchData)

        
    };

    states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

    
    render() {
        return(
            <div className="row">
            <div className="col s12 center-align">
            <div className="card-panel">
                <span class="card-title"><b>Find an Airbnb Listing</b></span>
                <div class="row">
                    <form onSubmit={this.onSubmit} class="col s12">
                    <div class="row">
                        <div class="input-field col m4 s12">
                        <i class="material-icons prefix">location_city</i>
                        <input id="icon_prefix" name="selectedCity" value={this.state.selectedCity} onChange={this.onChange} type="text" class="validate"/>
                        <label for="icon_prefix">City</label>
                        </div>
                        <div class="input-field col m4 s12">
                        <select onChange={this.onChange} name="selectedState" value={this.state.selectedState} class="browser-default">
                        <option disabled selected>Choose your option</option>
                        {this.states.map(function(object, i){
                            return <option value = {object}>{object}</option>
                        })}
                        </select>
                        </div>
                        <div class="input-field col m4 s12">
                        <input name="selectedZipCode" value={this.state.selectedZipCode} onChange={this.onChange} type="text" class="validate"/>
                        <label>Zip Code</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                    </button>
                    </form>
                </div>
            </div>
            </div>
            </div>
            
        )
    }
}

SearchAirbnbListing.propTypes = {

  };

const mapStateToProps = state => ({
    search: state.search
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchResults: fetchResultsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchAirbnbListing);
