// index.tsx
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// Importamos MapComponent como "any" para evitar errores de TS
import MapComponent from '../../src/components/map/MapComponent';
import Sidebar from '../../src/components/ui/Sidebar';

type Route = {
  id: number;
  name: string;
};

export default function HomeScreen() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [routes, setRoutes] = useState<Route[]>([
    { id: 1, name: 'Ruta 1' },
    { id: 2, name: 'Ruta 2' },
    { id: 3, name: 'Ruta 3' },
    { id: 4, name: 'Ruta 4' },
  ]);

  // Para modal de Ver
  const [viewRoute, setViewRoute] = useState<Route | null>(null);

  // Para modal de Editar
  const [editRoute, setEditRoute] = useState<Route | null>(null);
  const [editName, setEditName] = useState('');

  // Botones
  const handleViewRoute = (route: Route) => {
    setViewRoute(route);
  };

  const handleEditRoute = (route: Route) => {
    setEditRoute(route);
    setEditName(route.name);
  };

  const handleDeleteRoute = (route: Route) => {
    setRoutes(prev => prev.filter(r => r.id !== route.id));
  };

  const handleSaveEdit = () => {
    if (editRoute) {
      setRoutes(prev =>
        prev.map(r => (r.id === editRoute.id ? { ...r, name: editName } : r))
      );
      setEditRoute(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Mapa */}
      <MapComponent style={styles.map} />

      {/* Botón abrir Sidebar */}
      <View style={styles.buttonContainer}>
        <Button title="Abrir Sidebar" onPress={() => setSidebarVisible(true)} />
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

      {/* Modal Ver */}
      <Modal visible={!!viewRoute} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalle de la Ruta</Text>
            <Text>ID: {viewRoute?.id}</Text>
            <Text>Nombre: {viewRoute?.name}</Text>

            <Button title="Cerrar" onPress={() => setViewRoute(null)} />
          </View>
        </View>
      </Modal>

      {/* Modal Editar */}
      <Modal visible={!!editRoute} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Ruta</Text>
            <TextInput
              style={styles.input}
              value={editName}
              onChangeText={setEditName}
            />
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 10 }}>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSaveEdit}>
                <Text style={{ color: '#fff' }}>Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setEditRoute(null)}
              >
                <Text style={{ color: '#fff' }}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  buttonContainer: {
    position: 'absolute',
    top: 50,
    left: 10,
    zIndex: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
  },
  saveBtn: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  cancelBtn: {
    backgroundColor: '#FF4D4D',
    padding: 10,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
});