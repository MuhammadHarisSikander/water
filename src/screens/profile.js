import React from 'react'
import { Text, View, ImageBackground, ScrollView } from 'react-native'
// import Speedometer from 'react-native-speedometer-chart';
import Logo from '../component/img/phgraph.png'

const Profile = () => {


    const dataList = [
        {
            name: "Arbaz Ali: Group Leader",
            title: "Roles and Responsibilities",
            role1: '• Lead the team and assign tasks to group members',
            role2: '• Worked in developing Mobile app.',
            role3: '• Worked in integrating app with hardware.',
            role4: '• Worked in integrating and setting hardware.'

        },
        {
            name: 'Adnan Sohail Qureshi: Group Member',
            title: 'Roles and Responsibilities',
            role1: '• Worked in developing Mobile app.',
            role2: '• Worked in connecting app with hardware.',
            role3: '• Worked in integrating and setting hardware.'

        },
        {
            name: 'Abdullah Shakir: Group Member',
            title: 'Roles and Responsibilities',
            role1: '• Worked in developing Mobile app.',
            role2: '• Worked in connecting app with hardware.',
            role3: '• Worked in integrating and setting hardware.'
        }
    ]

    const DevData = () => {
        return (
            <ScrollView>
                {
                    dataList.map((val, key) => {
                        return (
                            <View key={key} style={{ display: 'flex', padding: 20 }} >
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }} >{val.name}</Text>
                                <Text style={{ fontWeight: 'bold', textAlign: 'center' }} >{val.title}</Text>
                                <Text style={{ textAlign: 'center' }}>{val.role1}</Text>
                                <Text style={{ textAlign: 'center' }}>{val.role2}</Text>
                                <Text style={{ textAlign: 'center' }}>{val.role3}</Text>
                                <Text style={{ textAlign: 'center' }}>{val.role4}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
    const image = Logo
    const value = 52

    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            <Text style={{ textAlign: 'center', fontSize: 40 }}>
                Developer info
            </Text>
            <View>
                <DevData />
            </View>
        </View>
    )
}
export default Profile