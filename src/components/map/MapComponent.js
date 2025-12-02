// MapComponent.js
import MapboxGL from '@rnmapbox/maps';
import React from 'react';
import { StyleSheet, View } from 'react-native';

MapboxGL.setAccessToken('pk.eyJ1IjoiYW1lbGlhcmMiLCJhIjoiY21mdHd0ZXE0MHEzbTJ3b2Z6Mnh2NDFqdiJ9.Nt_GcspL1oogo83M8zIOZg');

export default function MapComponent({ routeCoordinates = [], style }) {
  const defaultCoords = [-68.1193, -16.4897];

  return (
    <View style={[styles.container, style]}>
      <MapboxGL.MapView style={[styles.map, style]} styleURL={MapboxGL.StyleURL.Street}>
        <MapboxGL.Camera
          zoomLevel={12}
          centerCoordinate={
            routeCoordinates.length > 0
              ? [routeCoordinates[0].longitude, routeCoordinates[0].latitude]
              : defaultCoords
          }
        />

        {routeCoordinates.length > 1 && (
          <MapboxGL.ShapeSource
            id="routeLine"
            shape={{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: routeCoordinates.map(c => [c.longitude, c.latitude]),
              },
            }}
          >
            <MapboxGL.LineLayer
              id="routeLayer"
              style={{
                lineColor: '#3291B6',
                lineWidth: 4,
                lineCap: 'round',
                lineJoin: 'round',
              }}
            />
          </MapboxGL.ShapeSource>
        )}

        {routeCoordinates.length > 0 && (
          <MapboxGL.PointAnnotation
            id="startPoint"
            coordinate={[routeCoordinates[0].longitude, routeCoordinates[0].latitude]}
          />
        )}

        {routeCoordinates.length > 1 && (
          <MapboxGL.PointAnnotation
            id="endPoint"
            coordinate={[
              routeCoordinates[routeCoordinates.length - 1].longitude,
              routeCoordinates[routeCoordinates.length - 1].latitude,
            ]}
          />
        )}
      </MapboxGL.MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});