import React, {Component} from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
class Search extends Component {
    render() {
        return(
            <div>
                <div class="row">
                    <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <textarea id="textarea1" class="materialize-textarea"></textarea>
                        <label for="textarea1">Textarea</label>
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
