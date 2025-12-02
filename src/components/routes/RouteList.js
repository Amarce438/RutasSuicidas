import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import RouteItem from './RouteItem';

export default function RouteList({ routes = [], onViewRoute, onEditRoute, onDeleteRoute }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar rutas según el texto de búsqueda
  const filteredRoutes = routes.filter(route =>
    route.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View>
      {/* Buscador */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar ruta..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />

      {/* Lista de rutas */}
      <ScrollView style={{ marginTop: 10 }}>
        {filteredRoutes.map(route => (
          <RouteItem
            key={route.id}
            route={route}
            onViewRoute={onViewRoute}
            onEditRoute={onEditRoute}
            onDeleteRoute={onDeleteRoute}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});