import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import MapView from 'react-native-maps'

import Map from './components/Map'



export default function App() {
  return (
    <Map />
  )
}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

});


