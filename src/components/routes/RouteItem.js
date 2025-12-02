// src/components/routes/RouteItem.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RouteItem({ route, onView, onEdit, onDelete }) {
    return (
        <View style={styles.item}>
            <Text style={styles.routeName}>{route.name}</Text>

            <View style={styles.actions}>
                <TouchableOpacity style={[styles.btn, { backgroundColor: '#3291B6' }]} onPress={() => onView(route)}>
                    <Text style={styles.btnText}>Ver</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, { backgroundColor: '#BB8ED0' }]} onPress={() => onEdit(route)}>
                    <Text style={styles.btnText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, { backgroundColor: '#E0A8A8' }]} onPress={() => onDelete(route)}>
                    <Text style={styles.btnText}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff', // Card blanca
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    routeName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#3291B6', // Nombre azul
        marginBottom: 8,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        flex: 1,
        paddingVertical: 6,
        borderRadius: 6,
        marginHorizontal: 3,
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontWeight: '600',
    },
});