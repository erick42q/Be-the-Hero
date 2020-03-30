import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Image, Text, TouchableOpacity } from 'react-native'


import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de 0 casos
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos a baixo e salve o dia</Text>


            <View style={styles.incidentsList}>
                <View style={styles.incident}>
                    <Text style={styles.incidentsProperty}>Ong: </Text>
                    <Text style={styles.incidentsValue}>OngName</Text>

                    <Text style={styles.incidentsProperty}>Caso: </Text>
                    <Text style={styles.incidentsValue}>Description of incident</Text>

                    <Text style={styles.incidentsProperty}>Valor: </Text>
                    <Text style={styles.incidentsValue}>R$ 100,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>View more...</Text>
                        <Feather name='arrow-right' size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.incident}>
                    <Text style={styles.incidentsProperty}>Ong: </Text>
                    <Text style={styles.incidentsValue}>OngName</Text>

                    <Text style={styles.incidentsProperty}>Caso: </Text>
                    <Text style={styles.incidentsValue}>Description of incident</Text>

                    <Text style={styles.incidentsProperty}>Valor: </Text>
                    <Text style={styles.incidentsValue}>R$ 100,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>View more...</Text>
                        <Feather name='arrow-right' size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.incident}>
                    <Text style={styles.incidentsProperty}>Ong: </Text>
                    <Text style={styles.incidentsValue}>OngName</Text>

                    <Text style={styles.incidentsProperty}>Caso: </Text>
                    <Text style={styles.incidentsValue}>Description of incident</Text>

                    <Text style={styles.incidentsProperty}>Valor: </Text>
                    <Text style={styles.incidentsValue}>R$ 100,00</Text>

                    <TouchableOpacity
                        style={styles.detailsButton}
                        onPress={() => { }}
                    >
                        <Text style={styles.detailsButtonText}>View more...</Text>
                        <Feather name='arrow-right' size={16} color="#E02041"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}