import * as React from 'react';
import { View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';

import Swiper from 'react-native-swiper';

const Picker: React.FC<{elements:string[], onChange:(val:any)=>void, initialValue:string}> = ({ elements = [], onChange = ()=>{}, initialValue="" }) => {

    return (
        <View style={{
            alignItems: "center",
            height: 150,
            width: 50,
        }}>

            {/* <IconButton icon="chevron-up" /> */}
            <Swiper
                horizontal={false}
                showsPagination={false}
                showsButtons={true}
                nextButton = {<IconButton icon="chevron-up" style={{bottom:"75%", left:"-120%"}}/>}
                prevButton = {<IconButton icon="chevron-down" style={{top:"75%", left:"-20%"}} />}
                onIndexChanged={(index) => onChange(elements[index])}
                index={elements.indexOf(initialValue)}
            >
                {
                    elements.map((element, index) => {
                        return (
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} key={index}>
                                <Text>{element}</Text>
                            </View>
                        )
                    })
                }
            </Swiper>
            {/* <IconButton icon="chevron-down" />  */}
        </View>
    )
}

const TimePicker: React.FC<{initialValue?:string, onChange:(val:string)=>void}> = ({initialValue= "12:01 AM", onChange=()=>{}}) => {
    const [hour, setHour] = React.useState(initialValue.split(':')[0]);
    const [minute, setMinute] = React.useState(initialValue.split(':')[1].split(' ')[0]);
    const [amPm, setAmPm] = React.useState(initialValue.split(':')[1].split(' ')[1]);

    React.useEffect(() => {
        onChange(`${hour}:${minute} ${amPm}`)
    }, [hour, minute, amPm])

    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems:"center" }}>
            <Picker  elements={Array.from({ length: 12 }, (_, i) => `${i + 1}`.padStart(2, '0'))} onChange={setHour} initialValue={hour} />
            <Text>:</Text>
            {/* do the same for all the 59 minutes */}
            <Picker elements={Array.from({ length: 60 }, (_, i) => `${i}`.padStart(2, '0'))} onChange={setMinute} initialValue={minute}/>
            <Picker elements={["AM", "PM"]} onChange={setAmPm} initialValue={amPm} />
        </View>
    )
}

export default TimePicker;