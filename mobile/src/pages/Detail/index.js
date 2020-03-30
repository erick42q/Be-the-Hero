import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './style.js'

export default function Detail() {
    const message = 'Olá Ong Name, estou entrando em contato pois gostaria de ajudar no caso "cadelinha atropelada" com o valor de R$120,00'
    const navigation = useNavigation()

    function navigateToIncidents(){
        navigation.goBack()
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: asdf asdf',
            recipients: ['erickq.faria@gmail.com'],
            body: message
        })
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5561981786774&&text=${message}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color='#E82041' />
                </TouchableOpacity>
            </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty, {marginTop: 0}]}>Ong: </Text>
                    <Text style={styles.incidentValue}>OngName</Text>

                    <Text style={styles.incidentProperty}>Caso: </Text>
                    <Text style={styles.incidentValue}>Description of incident</Text>

                    <Text style={styles.incidentProperty}>Valor: </Text>
                    <Text style={styles.incidentValue}>R$ 100,00</Text>
            </View>
            <View style={styles.contactBox}> 
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}