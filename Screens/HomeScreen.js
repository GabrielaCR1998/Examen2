import React, {useContext} from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native'
import { Header, Card, Image, Button} from 'react-native-elements';
import {PeliculasContext} from '../Context/PeliculasContext';

const HomeScreen = ({navigation}) => {
    const {cartelera,agregar} = useContext(PeliculasContext);
    return (
        <ScrollView>
            <Header
                centerComponent={{ text: 'Cinepolis', style: { color: '#fff'}}}
            />
            <View style={{backgroundColor: '#D6EAF8',}}>
            {cartelera.map((e,i)=>{
                return(
                    <Card   
                    key={i}>
                        <Card.Title style={{textAlign: "left", fontSize: 20}}>{e.nombre}</Card.Title> 
                        <Card.Divider/>
                        <View style={{flexDirection:'row',}}>
                            <View>
                                <Image
                                style={{minHeight:150, minWidth: 100}}
                                source={{
                                   uri: `${e.url}`, 
                                }}
                                />
                            </View>
                            <View style={styles.container}>
                                <Text>{e.idioma}</Text>
                                <Text>{e.clasificacion}</Text>
                                {e.horarios.map((horario,index)=>{
                                    return( 
                                        <View style={{paddingBottom:10}}>
                                            <Button
                                                onPress={()=>(
                                                    agregar(e,horario),
                                                    navigation.navigate('PeliculasScreen')
                                                    )}
                                                key={index}
                                                title={horario}  
                                            />
                                        </View> 
                                    )
                                })} 
                            </View>
                        </View>
                    </Card>
                );
            })
            }
            </View>
        </ScrollView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
});