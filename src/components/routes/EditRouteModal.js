import { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditRouteModal({ visible, onClose, route, onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (route) {
            setName(route.name);
            setDescription(route.description);
        }
    }, [route]);

    return (
        <Modal visible={visible} transparent animationType="slide">
            <View style={styles.overlay}>
                <View style={styles.modal}>
                    <Text style={styles.title}>Editar Ruta</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        style={[styles.input, { height: 80 }]}
                        placeholder="Descripción"
                        multiline
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TouchableOpacity
                        style={styles.saveBtn}
                        onPress={() => onSave({ ...route, name, description })}
                    >
                        <Text style={styles.saveText}>Guardar Cambios</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
                        <Text style={styles.closeText}>Cancelar</Text>
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
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    },
    saveBtn: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    saveText: {
        color: '#fff',
        fontWeight: '700'
    },
    closeBtn: {
        marginTop: 15,
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    closeText: {
        color: '#fff',
        fontWeight: '700'
    }
});