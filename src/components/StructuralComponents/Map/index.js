import React, {useEffect, useRef} from 'react';
import { useMediaQuery } from 'react-responsive';

// Variables
const GOOGLE_MAP_API_KEY = 'AIzaSyArrzT1uhH3oVsX6g_Wbs-u1RErPldO9w8';
const myLocation = { // CN Tower Landmark
    lat: 54.972460,
    lng:  -1.623386
};
// styles
const mapStyles = {
    width: '800px',
    height: '600px',
};
const mapStylesMobile = {
    width: '100%',
    height: '400px',
};


function GoogleMaps(props) {
    // refs
    const googleMapRef = React.createRef();
    const googleMap = useRef(null);
    const marker = useRef(null);

    // helper functions
    const createGoogleMap = () =>
        new window.google.maps.Map(googleMapRef.current, {
            zoom: 16,
            center: {
                lat: myLocation.lat,
                lng: myLocation.lng
            }
        });

    const createMarker = () =>
        new window.google.maps.Marker({
            position: {lat: myLocation.lat, lng: myLocation.lng},
            map: googleMap.current
        });


        useEffect(() => {
            const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`
            window.document.body.appendChild(googleMapScript);

            googleMapScript.addEventListener('load', () => {
                googleMap.current = createGoogleMap();
                marker.current = createMarker()
            })
        },[]);

    return (
        <div className="card"
            id="google-map"
            ref={googleMapRef}
            style={useMediaQuery({ maxWidth: 767 })? mapStylesMobile:mapStyles} />
    )

}

export default GoogleMaps