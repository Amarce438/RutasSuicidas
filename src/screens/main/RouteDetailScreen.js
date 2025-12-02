// src/screens/main/RouteDetailScreen.js
import { StyleSheet, Text, View } from 'react-native';

const RouteDetailScreen = ({ route }) => {
  const { routeId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Detalle de la ruta: {routeId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RouteDetailScreen;