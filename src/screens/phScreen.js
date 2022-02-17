import React,{useState} from 'react'
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import Logo from '../component/img/logo.png'
import Speedometer from 'react-native-speedometer-chart';



const PhScreen = ()=>{
    const value = 52

    const [ fill , setFill ] = useState(null)
    const image = Logo

    const onValueHandler = () => {
        setFill(1);
      };

    return(
        <View style={{display:'flex',justifyContent:'space-evenly', flex:1}} >
            <View style={{justifyContent:'center',alignItems:'center'}} >
              <ImageBackground source={image} resizeMode="cover" style={{flex:1,width:60,height:60,justifyContent:'center'}}></ImageBackground>
            </View>
            <Text style={{textAlign:'center',fontSize:40}} >Water-PH Testing</Text>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}} >
                PH-Count: 52
                </Text>
            </View>

            <View style={{alignSelf:'center'}}>
             <Speedometer
    value={value}
    showText

    totalValue={150}
    size={250}
    outerColor="#d3d3d3"
    internalColor="#ff0000"
    showText
    text={`${value}C°`}
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    // showPercent
    // percentStyle={{ color: 'red' }}
    />
    </View>

            <View style={{display:'flex', flexDirection:"row",justifyContent:'space-evenly'}} >
                <TouchableOpacity onPress={onValueHandler} style={{borderWidth:1,padding:10,borderRadius:5,backgroundColor:'#2e7eff',borderColor:'#2e7eff',width:'30%'}}><Text style={{color:'white',textAlign:'center'}} >Fill-Tank</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log(fill)} style={{borderWidth:1,padding:10,borderRadius:5,backgroundColor:'#ff9d2e',borderColor:'#ff9d2e',width:'30%'}}><Text style={{color:'white',textAlign:'center'}} >Stop-Filling</Text></TouchableOpacity>
            </View>
        </View>
    )

}
export default PhScreen;