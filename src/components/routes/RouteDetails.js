// src/components/routes/RouteDetail.js
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapComponent from '../map/MapComponent';

export default function RouteDetail({ route, onClose }) {
  if (!route) return null;

  const coordinates = route.coordinates || [];

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>{route.name}</Text>

      {/* Descripción */}
      {route.description && (
        <Text style={styles.description}>{route.description}</Text>
      )}

      {/* Mapa */}
      <View style={styles.mapContainer}>
        <MapComponent routeCoordinates={coordinates} />
      </View>

      {/* Botones */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.saveBtn} onPress={onClose}>
          <Text style={styles.saveText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#E0A8A8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: '#F1E2E2',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveText: {
    color: '#3291B6',
    fontWeight: 'bold',
  },
});