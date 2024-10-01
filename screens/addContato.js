import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contatos() { 
    const navigation = useNavigation(); 

    // State para armazenar o valor do nome e do celular
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');

    return (
        <View style={styles.view}>
            <TouchableOpacity 
                style={styles.sair} 
                onPress={() => navigation.navigate('configuracoes')} 
            >
                <Image source={require('../assets/setaesquerda.png')} style={styles.setaesquerda} />
            </TouchableOpacity>
            
            <Text style={styles.texto}>Adicionar Contatos</Text>
            
            <View style={styles.botoes}>
                <View style={styles.botao}>
                    <Text style={styles.textoBotao}>Nome</Text>
                    <TextInput
                        style={styles.textInput}
                        value={nome}
                        onChangeText={setNome}
                        placeholder=""
                    />
                    <Image source={require('../assets/setinha.png')} style={styles.setinha} />
                </View>


                <View style={styles.botao}>
                    <Text style={styles.textoBotao}>Celular</Text>
                    <TextInput
                        style={styles.textInput}
                        value={celular}
                        onChangeText={setCelular}
                        placeholder=""
                        keyboardType="numeric" 
                    />
                    <Image source={require('../assets/setinha.png')} style={styles.setinha} />
                </View>
            </View>
            
            <TouchableOpacity style={styles.botaoSalvar}>
                    <Text style={styles.textoSalvar}> Salvar </Text>
                </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#FFE9E9",
        height: "100%",
        width: "100%", 
        alignItems: "center",
        paddingTop: 40,
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
        flexDirection: 'row',
        alignItems: 'center',
    },
    setinha: {
        position: "absolute",
        left: 90,
        width: 10,
        height: 20,
        top: 30,
    },
    textoBotao: {
        flex: 1,
        color: "#A8A3A3",
    },
    sair: {
        position: "absolute",
        width: 30,
        height: 30,
        top: 54,
        left: 20,
    },
    setaesquerda: {
       width: 10,
       height: 15,
    },
    textInput: {
        flex: 2,
        padding: 5,
        marginLeft: 10,
    },
    botaoSalvar:{
        height: 50,
        margintop: 200,
        
    },
    textoSalvar:{
        height:50,
        width:200,
        backgroundColor:"#F9497D",
        marginTop:30,
        fontSize:20,
        paddingTop:7,
        color:"#black",
        borderRadius:10,
        textAlign:"center",

    }
});
