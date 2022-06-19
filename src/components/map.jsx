import { GoogleMap, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux'

const containerStyle = {
  position: "relative",
  width: '100vw',
  height: '100vh',
  pading: '0',
  margin: '0',
  top: '0px',
  left: '0px',
};

const center = {
  lat: 40.55,
  lng: -3.623
};

const onLoad = marker => {
  console.log('marker: ', marker)
}

const defaultMapOptions = {
  disableDefaultUI: false,
  fullscreenControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,  
};


function MapBox() {

    const point = useSelector(state => {
        //console.log ( "MAP  STATE > ", state.pointReducer.points.locate)
        let lpoint = state.pointReducer.points.locate;
        return (lpoint ? lpoint : center ) ;
    })

  return (
    <div id = 'mapbox' >
        
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={point}
          zoom={12}
          options={defaultMapOptions}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>

            <Marker
                //icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                onLoad={onLoad}
                position={point}
                //placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4'
            />

        </GoogleMap>
        
    </div>
  );
}

export default MapBox;