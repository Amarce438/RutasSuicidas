import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithGoogle } from '../../services/authService';
import { setUser, setLoading, setError } from '../../store/slices/authSlice';
import { RootState } from '../../store';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  const handleGoogleLogin = async () => {
    try {
      dispatch(setLoading(true));
      const user = await signInWithGoogle();
      dispatch(setUser(user));
    } catch (error: any) { // ← Aquí está la solución
      const errorMessage = error?.message || 'Error desconocido durante el login';
      dispatch(setError(errorMessage));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>
            Mi App Rutas
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Inicia sesión para guardar y compartir tus rutas
          </Text>
          
          <Button 
            mode="contained" 
            onPress={handleGoogleLogin}
            style={styles.button}
            icon="google"
            loading={isLoading} // ← Ahora conectado al estado real
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Continuar con Google'}
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  button: {
    marginTop: 20,
  },
});

export default LoginScreen;