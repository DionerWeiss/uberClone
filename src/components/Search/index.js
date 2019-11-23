import React, { Component } from 'react';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
    render() {
        return <GooglePlacesAutocomplete
            placeholder="Digite seu destino"
            placeholderTextColor="#333"
            onPress={() => {}}
            query={{
                key: 'AIzaSyCoZHdQndJjEj-pqyTT-FBEtxdIu78ASjs',
                language: 'pt'
            }}

            textInputProps={{
                autoCapitalize: "none",
                autoCorrect: false
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}

        />
    }
}
