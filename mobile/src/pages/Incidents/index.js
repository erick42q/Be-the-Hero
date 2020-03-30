import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'


import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {
    const navigation = useNavigation()

    function navigateToDetail(){
        navigation.navigate('Detail')
    }


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


            <FlatList
                data={[1, 2, 3]}
                style={styles.incidentsList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Ong: </Text>
                        <Text style={styles.incidentValue}>OngName</Text>

                        <Text style={styles.incidentProperty}>Caso: </Text>
                        <Text style={styles.incidentValue}>Description of incident</Text>

                        <Text style={styles.incidentProperty}>Valor: </Text>
                        <Text style={styles.incidentValue}>R$ 100,00</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>View more...</Text>
                            <Feather name='arrow-right' size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>

                )}

            />
        </View>
    )

}