import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Configuracoes from './configuracoes';
import { useNavigation } from '@react-navigation/native'; 

export default function Addcontatos() { 
    const navigation = useNavigation(); 

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                style={styles.sair} 
                onPress={() => navigation.navigate('contatos')} 
            >
                <Image source={require('../assets/setaesquerda.png')} style={styles.setaesquerda} />
            </TouchableOpacity>
            
            <Text style={styles.texto}> Contatos </Text>
            <View style={styles.botoes}> 
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}> Digite o seu nome </Text>
                    <Image source={require('../assets/setinha.png')} style={styles.setinha} />
                    <Image source={require('../assets/adicionar.png')} style={styles.imagem} />
                </TouchableOpacity>
               
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFE9E9",
        height: "100%",
        width: "100%", 
        alignItems: "center",
    },
    texto: {
        marginTop: 20,
        fontSize: 17,
        textAlign: "center",
       
    },
    botoes: {
        marginTop: 60, 
        width: '100%',  
    },
    botao: {
        backgroundColor: "#fff", 
        padding: 20,
        borderColor: "#A9A4A4",
        borderTopWidth: 0.5,
        width: "100%", 
       
    },
    setinha: {
        position: "absolute",
        right: 15,
        width: 10,
        height: 20,
        top: 20,
    },
    imagem: {
        position: "absolute",
        left: 20,
        width: 30,
        height: 30,
        top: 14,
    },  
    textoBotao: {
        textAlign: "justify",
        marginLeft: 50,
        color:"#A8A3A3"
    },
    sair: {
        position: "absolute",
        width: 30,
        height: 30,
        top: 21,
        left: 20,
    },

    setaesquerda:{
       width: 10,
       height: 15,
    },
});