import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ViewRouteModal({ visible, onClose, route }) {
    if (!route) return null;

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Detalles de la Ruta</Text>

                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{route.name}</Text>

                    <Text style={styles.label}>Descripción:</Text>
                    <Text style={styles.value}>{route.description}</Text>

                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Text style={styles.closeText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 15
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10
    },
    value: {
        fontSize: 14,
        marginTop: 4
    },
    closeBtn: {
        marginTop: 25,
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    closeText: {
        color: '#fff',
        fontWeight: '700'
    }
});