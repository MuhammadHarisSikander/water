import React, { useState } from 'react'
import { View, StyleSheet, ImageBackground, TouchableOpacity, Text } from 'react-native'
import firebase from '../services/firebase'
// import firebase from 'firebase'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { TextInput, Provider as PaperProvider, DefaultTheme, Button } from 'react-native-paper';
import Logo from '../component/img/waterlogo.png'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
    }
};



const SignUp = (props) => {
    const image = Logo

    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [loader, setLoader] = useState(false)
    const auth = getAuth();

    const signUpNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            setLoader(true)
            const user = userCredential.user;
            setLoader(false)
            props.navigation.navigate('Login')
        })
            .catch((err) => {
                const errorcode = err.code;
                const errorMessage = err.message;
                console.log(errorcode, '----------', errorMessage);
                setEmail(null)
                setPassword(null)
                setLoader(false)
                props.navigation.navigate('Login')
            })
    }
    const onChangeHandler = (e) => {
        setEmail(e);
    };
    const onChangeHandler2 = (e) => {
        setPassword(e);
    }
    return (
        <PaperProvider theme={theme} >
            <View style={{ display: 'flex', justifyContent: 'space-evenly', flex: 1, alignItems: 'center' }} >
                <ImageBackground source={image} resizeMode="cover" style={{ width: 200, height: 200, justifyContent: 'center' }}></ImageBackground>
                <View style={{ width: 300 }} >
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
                    <View style={{ marginBottom: 20 }} >
                        <Button loading={loader} dark={true} mode='contained' onPress={() => signUpNewUser()}>SIGN UP</Button>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Button dark={true} mode='text' onPress={() => props.navigation.navigate("Login")}>Already have an Account</Button>
                    </View>
                </View>

            </View>
        </PaperProvider>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 20,

    },
});


export default SignUp
