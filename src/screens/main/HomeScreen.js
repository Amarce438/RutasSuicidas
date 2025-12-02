// src/screens/main/HomeScreen.js
import { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapComponent from '../../components/map/MapComponent';
import RouteDetail from '../../components/routes/RouteDetail';
import Sidebar from '../../components/ui/Sidebar';

const HomeScreen = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: 'Ruta 1',
      description: 'Descripción de la Ruta 1',
      coordinates: [
        { latitude: -16.4897, longitude: -68.1193 },
        { latitude: -16.4900, longitude: -68.1180 },
      ],
    },
    {
      id: 2,
      name: 'Ruta 2',
      description: 'Descripción de la Ruta 2',
      coordinates: [
        { latitude: -16.4905, longitude: -68.1200 },
        { latitude: -16.4910, longitude: -68.1210 },
      ],
    },
  ]);

  // Botones
  const handleViewRoute = (route) => {
    setSelectedRoute(route);
    setSidebarVisible(false);
  };

  const handleEditRoute = (route) => {
    alert(`Editar ruta: ${route.name}`);
  };

  const handleDeleteRoute = (route) => {
    alert(`Eliminar ruta: ${route.name}`);
    setRoutes(prev => prev.filter(r => r.id !== route.id));
  };

  const closeRouteDetail = () => {
    setSelectedRoute(null);
  };

  return (
    <View style={styles.container}>
      {/* Mapa */}
      <MapComponent style={styles.map} />

      {/* Botón abrir Sidebar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.sidebarBtn}
          onPress={() => setSidebarVisible(true)}
        >
          <Text style={styles.sidebarBtnText}>Abrir Sidebar</Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
        routes={routes}
        onViewRoute={handleViewRoute}
        onEditRoute={handleEditRoute}
        onDeleteRoute={handleDeleteRoute}
      />

      {/* Modal RouteDetail */}
      <Modal visible={selectedRoute !== null} animationType="slide" transparent>
        {selectedRoute && (
          <RouteDetail
            route={selectedRoute}
            onClose={closeRouteDetail}
          />
        )}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },
  sidebarBtn: {
    backgroundColor: '#F1E2E2',
    padding: 10,
    borderRadius: 6,
  },
  sidebarBtnText: {
    color: '#3291B6',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;