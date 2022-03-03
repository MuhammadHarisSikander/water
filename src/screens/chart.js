import React from 'react'
import { Text, View } from 'react-native'
import Speedometer from 'react-native-speedometer-chart';

const Chart = () => {
    const value = 52
    return (
        <View style={{ flex: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            <View>
                <Text style={{ textAlign: 'center', fontSize: 45 }}>
                    Water-Temperature
                </Text>
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Speedometer
                    value={value}
                    showText
                    totalValue={150}
                    size={300}
                    outerColor="#d3d3d3"
                    internalColor="#ff0000"
                    showText
                    text={`${value}C°`}
                    textStyle={{ color: 'green' }}
                    showLabels
                    labelStyle={{ color: 'blue' }}
                />
            </View>
        </View>
    )
}
export default Chart