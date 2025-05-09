import {Text, View, StyleSheet} from 'react-native'
import React, { useState, useEffect } from 'react';

export default function Header( {startTimer}: {startTimer : boolean}) {
        const [time, setTime] = useState(0);

        useEffect(() => {
            let interval: NodeJS.Timeout | null = null;
    
            if (startTimer) {
                interval = setInterval(() => {
                    setTime((prevTime) => prevTime + 1);
                }, 1000);
            }
    
            return () => {
                if (interval) clearInterval(interval);
            };
        });
    
    
        const formatTime = (seconds: number) => {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
    
            return `${hours.toString().padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        };
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.text}>Annotator</Text>
        </View>
        <View style={styles.timerContainer}>
            <Text style={styles.textTimer}>{formatTime(time)}</Text>
            {/* <Text> set start Timer value : {`${startTimer}`}</Text> */}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#A9CDFF',
        padding: 10,
    },
    headerContainer: {
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'inter'
    },
    timerContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    textTimer:{
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'inter',
    },
})