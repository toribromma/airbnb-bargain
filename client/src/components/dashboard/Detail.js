import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Detail(props) {
    const [listing, setListing] = useState({});
    const {id} = useParams()

//     useEffect(() => {
//         axios.get(`https://mashvisor-api.p.rapidapi.com/airbnb-property/${id}?state=CA`, {
// 	"headers": {
// 		"x-rapidapi-host": "mashvisor-api.p.rapidapi.com",
// 		"x-rapidapi-key": process.env.REACT_APP_MV_KEY
// 	}
// })
// .then(response => {
//     console.log(response);
//     setListing(response.data.content)
// })
// .catch(err => {
// 	console.log(err);
// });
//         // return () => {
//         //     cleanup
//         // }
//     }, [])

    return (
        <div className="container">
                <div>
                <h2>Cozy Fish Lake Chalet</h2>
                </div>
                <div style={{marginBottom: 10}}>
                    <span>4.89 </span>
                    <span>Superhost </span>
                    <span>Tustin, CA, 92782 </span>
                </div>
                <img style={{float:"left", margin: "5px 5px 0px 0px"}} src="https://via.placeholder.com/300x200"></img>
                <div>
                    <img style={{margin: "5px 5px 0 0"}} src="https://via.placeholder.com/149x97"></img>
                    <img style={{margin: "5px 0px 0 0" }} src="https://via.placeholder.com/147x97"></img>
                </div>
                <div>
                    <img style={{margin: "0 5px 0 0"}} src="https://via.placeholder.com/149x98"></img>
                    <img style={{margin: "0 0 0 0"}} src="https://via.placeholder.com/147x98"></img>
                </div>
                <div style={{fontWeight: "bold", fontSize: 20}}>
                    <span>room_type</span> <span>hosted by</span> <span>Host</span>
                </div>
                <div>
                    <span>Guests </span>
                    <span># bedrooms </span>
                    <span># beds </span>
                    <span># baths </span>
                </div>
                <div className="divider"></div>
                <ul>
                    <li>
                        <h5>Entire Home</h5>
                        <p>You'll have it all to yourself!</p>
                    </li>
                    <li>
                        <h5>Self Check-In</h5>
                        <p>Check in with a keypad</p>
                    </li>
                    <li>
                        <h5>Superhost</h5>
                        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    </li>
                </ul>
                <div className="divider"></div>
                <div>
                    <p>summary</p>
                    <p>space</p>
                    <p>access</p>
                </div>
                <Link style={{float:"right"}} to="/search"><button>Go back</button></Link>
                </div>
    )
}

export default Detail;