import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RouteItem from '../routes/RouteItem';

const { width } = Dimensions.get('window');

export default function Sidebar({ visible, onClose, routes, onViewRoute, onEditRoute, onDeleteRoute }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.sidebar}>
        <Text style={styles.title}>Rutas del Usuario</Text>

        {/* Botón cerrar */}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Cerrar Sidebar</Text>
        </TouchableOpacity>

        <ScrollView style={{ marginTop: 20 }}>
          {(routes || []).map(route => (
            <RouteItem
              key={route.id}
              route={route}
              onView={onViewRoute}
              onEdit={onEditRoute}
              onDelete={onDeleteRoute}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    zIndex: 100,
  },
  sidebar: {
    width: width * 0.75,
    height: '100%',
    backgroundColor: '#F1E2E2', // fondo claro
    padding: 20,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3291B6', // azul principal
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#BB8ED0', // azul principal
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});