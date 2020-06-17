import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './Components/Simplemap';
// import Secondmap from './Components/Secondmap';
// import { 
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
//  } from  "react-google-maps";
//  import "../node_modules/bootstrap/dist/css/css/bootstrap.min.css";

//  const MyMapComponent = withScriptjs(
//    withGoogleMap(props => (
//      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 30.7333, lng: 76.7794}}>
//        {props.isMarkerShown && (
//          <Marker position={{ lat: 30.733, lng: 76.7794}} />
//        )}
//        </GoogleMap>
//    ))
//  );


class App extends Component {
  render() {
    return (
      <div>
        <SimpleMap />
        {/* <Secondmap /> */}
        {/* <div className="text-center">
          <h1>GOOGLE MAPS API with REACT JS</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              MAPS
              <div>
                <MyMapComponent
            isMarkerShown
            googleMapURL="AlzaSyDenxDqZNXjNai-ff0MjNfOGjg45-y7x4"
            loadingElement={<div style={{height: `100%` }} />}
            containerElement={<div style={{height: `400px` }} />}
            mapElement ={<div style={{height: `100%`}} />}
            />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}


export default App;
