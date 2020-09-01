import React, {Component} from "react"
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { connect } from "react-redux";
import LoadingSpinner from "../layout/Spinner"

class GetMap extends Component {
    constructor() {
        super();
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true
    }

    render() {
        const {results, error, pending} = this.props;
        // const position = [51.505,-0.09]
        if(results === undefined || results.length === 0 || !this.shouldComponentRender()) {
            return <LoadingSpinner/>
        } else {
        return(
            <div className="col s12 m6 hide-on-small-only">
            <Map style={{width:600, height:350, marginTop: 30}} center={[results[0].lat, results[0].lon]} zoom={12}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {results.map(result => (
                    <Marker position={[result.lat, result.lon]}>
                    <Popup>
                        <img width={50} height={50} src={result.image} />
                    </Popup>
                    </Marker>
                ))}
            </Map>
            </div>
        )
    }
}
}

const mapStateToProps = state => ({
//     error: getResultsError(state.search),
    results: state.search.results,
    // pending: getResultsPending(state.search)
  });

    export default connect(
        mapStateToProps
    )(GetMap);