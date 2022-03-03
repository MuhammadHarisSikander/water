import React, { useState } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { database } from '../../Setup';
import {
    LineChart,
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';

const Graph = () => {
    const [sorted, setSorted] = useState([])
    const [s, setS] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    React.useEffect(() => {
        database().ref('/History').on('value', snapshot => {
            let _data = [];
            let _phData = []
            for (key in snapshot.val()) {
                _data.push(snapshot.val()[key]);
                _phData.push(snapshot.val()[key].phHistory)
                // console.log("testtttttt", snapshot.val()[key].phHistory)
            }
            setSorted(_data);
            setS(_phData)
        })
    }, []);
    const TestTable = () => {
        return (
            <ScrollView>
                {
                    sorted.map((val, key) => {
                        return (
                            <View key={key} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1 }} >
                                <Text>{val.date}</Text>

                                <Text>{val.phHistory}</Text>

                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <View>
                <Text style={{ textAlign: 'center', margin: 10, fontSize: 25, }}>LAST 10 RECORDS</Text>
                <LineChart
                    data={{
                        labels: ["1st", "2nd", '3rd', '4th', '5th', '6th', '7th', '8th', '9th', "10th"],
                        datasets: [
                            {
                                data: s.map((val) => {
                                    return (
                                        val
                                    )
                                })


                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={230}
                    //   yAxisLabel="$"
                    //   yAxisSuffix="k"
                    //   yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "red",
                        backgroundGradientFrom: "#036fa5",
                        backgroundGradientTo: "#21bbdd",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "5",
                            strokeWidth: "2",
                            stroke: "#074682"
                        }
                    }}
                    bezier
                    style={{
                    }}
                />
            </View>
            <Text style={{ textAlign: 'center', fontSize: 25, margin: 10 }}>PH Record's</Text>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#074682' }}>
                <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }} >
                    Sno
                </Text>
                <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center' }}>
                    PH Value
                </Text>
            </View>
            <TestTable />
        </View>
    )
}
export default Graph