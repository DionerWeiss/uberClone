import React, { Component } from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import MapView from 'react-native-maps'
import Search from '../Search';

export default class Map extends Component {

    state = {
        region: null,
    }

    async componentDidMount() {
        Geolocation.getCurrentPosition(
            //success
            ({ coords: { latitude, longitude } }) => {
                console.log(latitude, longitude);
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    }
                });
            },

            //error
            (e) => {
                console.log(e)
            },
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000


            }
        );
    }

    render() {

        const { region } = this.state;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={region}

                    showsUserLocation
                    loadingEnabled

                />
                <Search />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
       

    },

    map: {
        flex: 1
    },

});