import React, {useContext} from 'react'
import { StyleSheet, Text, View, Dimensions,TextInput } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import {PeliculasContext} from '../Context/PeliculasContext';

const PeliculasScreen = ({navigation}) => {
    const {compra,calcular,eliminarCompra,comprar} = useContext(PeliculasContext);
    let ScreenHeight = Dimensions.get("window").height;
    ScreenHeight= (ScreenHeight * .78);
    
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <Header
                centerComponent={{ text: 'Carrito', style: { color: '#fff'}}}
            />
            <View style={styles.container}>
                    <Text>{compra.nombre}({compra.idioma})</Text>
                    <Text>Hora: {compra.horario}</Text>
                <SafeAreaView>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                    <Text>Cantidad: </Text>
                        <TextInput
                        onChangeText={(e)=>{calcular(e,compra)}}
                        placeholder="Numero de boletos"
                        keyboardType='numeric'
                        />
                    </View>
                </SafeAreaView>
                    <Text>Total: ${compra.total}.00</Text>
                <View>
                    <Button 
                    title="Cancelar"
                    onPress={()=>(
                        eliminarCompra(),
                        navigation.goBack()
                        )}
                    />
                </View>
                <View>
                    <Button 
                    title="Comprar"
                    onPress={()=>{
                        comprar(compra),
                        navigation.goBack()
                    }}
                    />  
                </View>
    
            </View>
            
        </View>
    )
}

export default PeliculasScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});