import React from 'react';

import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => {
    console.log("HHHH", destination, origin, onReady)
    return (
        <MapViewDirections
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey={"AIzaSyCoZHdQndJjEj-pqyTT-FBEtxdIu78ASjs"}
            strokeWidth={3}
            strokeColor="#222"
        />
    );
}
export default Directions;
