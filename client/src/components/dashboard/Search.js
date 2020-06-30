import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Search extends Component {
    constructor() {
        super();
        this.state = {
            selectedState: ""
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]

    
    render() {
        return(
            <div>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s4">
                        <i class="material-icons prefix">location_city</i>
                        <input id="icon_prefix" type="text" class="validate"/>
                        <label for="icon_prefix">City</label>
                        </div>
                        <div class="input-field col s4">
                        <select onChange={this.onChange} id="selectedState" value={this.state.selectedState} class="browser-default">
                        <option disabled selected>Choose your option</option>
                        {this.states.map(function(object, i){
                            return <option value = {object}>{object}</option>
                        })}
                        </select>
                        </div>
                        <div class="input-field col s4">
                        <input type="text" class="validate"/>
                        <label for="textarea1">Zip Code</label>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

Search.propTypes = {

  };

const mapStateToProps = state => ({

  });

export default connect(
    mapStateToProps
)(Search);
