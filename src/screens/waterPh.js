import React, { useState } from 'react'
import { Text, View, ImageBackground, Button } from 'react-native'
import Logo from '../component/img/phgraph.png'
import { database } from '../../Setup';
import { format } from "date-fns";




const WaterPh = () => {

    var date = new Date();
    var formattedDate = format(date, "MMMM do, yyyy");
    const [phValue, setPhValue] = useState('Calculating Reading')
    const [arr, setArr] = useState([])


    React.useEffect(() => {
        database().ref('/pHValue').on('value', snapshot => { setPhValue(snapshot.val()) })
        database().ref('/History').on('value', snapshot => { setArr([snapshot.val()]) })

    },
        []);

    React.useEffect(() => {
        if (arr.length > 0) {
            for (key in arr[0]) {
                let abc = arr[0][key].date
                console.log("abc", abc);
            }
        }
    }, [arr])

    const pushData = () => {
        console.log(arr);
        const newReference = database().ref('/History').push();
        console.log('Auto generated key: ', newReference.key);
        newReference
            .set({
                phHistory: phValue,
                date: formattedDate,

            })
            .then(() => console.log('Data updated.'));
    }
    const image = Logo
    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 60 }}>
                    Water-PH
                </Text>
            </View>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 60 }} >
                    {phValue}
                </Text>
            </View>
            <View>
                <Button color="red" onPress={() => pushData()} title='Save Record' />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                <ImageBackground source={image} resizeMode="stretch" style={{ width: 310, height: 170, justifyContent: 'center' }}></ImageBackground>
            </View>
        </View>
    )
}
export default WaterPh