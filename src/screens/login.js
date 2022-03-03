import React, {useState} from 'react'
import {View,StyleSheet,ImageBackground } from 'react-native'
import firebase from '../services/firebase'
// import firebase from 'firebase'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextInput,Provider as PaperProvider, DefaultTheme , Button } from 'react-native-paper';
import Logo from '../component/img/waterlogo.png'


const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
    }
  };





const Login = (props)=>{
    const image = Logo

    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [loader,setLoader] = useState(false)

    const auth = getAuth();

    const OnLogout = ()=>{
    console.log("hello");
    }


    const loginUser = ()=>{
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            setEmail(null)
            setPassword(null)
            setLoader(false)
            {props.navigation.navigate("Home")}
            

        })
        .catch((err)=>{
            const errorcode = err.code;
            const errorMessage = err.message;
            console.log(errorcode,'----------',errorMessage);
            setEmail(null)
            setPassword(null)
            setLoader(false)
        })
        
    }

    const onChangeHandler = (e) => {
        setEmail(e);
      };
    const onChangeHandler2 =(e)=>{
        setPassword(e);
    }  
    return(
        <PaperProvider theme={theme}>

        <View style={{display:'flex', justifyContent:'space-evenly',flex:1,alignItems:'center'}} >
                        
              <ImageBackground source={image} resizeMode="cover" style={{width:200,height:200,justifyContent:'center'}}></ImageBackground>
            
            <View style={{width:300}} >
                <TextInput 
                style={styles.input}
                value={email}
                label="Email"
                onChangeText={onChangeHandler}
                mode={'outlined'}
                />
                <TextInput 
                style={styles.input}
                value={password}
                label="Password"
                secureTextEntry={true}
                onChangeText={onChangeHandler2}
                mode={'outlined'}
                />
                <View style={{marginBottom:20}} >
                <Button loading={loader} dark={true} mode='contained' onPress={()=> {loginUser()}}>LOGIN</Button>
                </View>
                <View style={{marginBottom:20}} >
                <Button dark={true} mode='text' onPress={()=> props.navigation.navigate('SignUp')}>SIGN UP HERE</Button>    
                </View>
            </View>
            

                
            
            
        </View>
                </PaperProvider>
    )
}


const styles = StyleSheet.create({
    input: { 
        marginBottom:20,

      },
  });


export default Login
