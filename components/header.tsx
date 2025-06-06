import {Text, View, StyleSheet} from 'react-native'
import React, { useState, useEffect, useContext} from 'react';
import {useTimer} from '@/utils/timers_save';
import { LogTimerContext } from './timerContext';

export default function Header() {
        // const [time, setTime] = useState(0);
        // const timer = useLogTimer(startTimer);
        const {logTimer, runLogTimer, setRunLogTimer} = useContext(LogTimerContext);
    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.text}>Annotator</Text>
        </View>
        <View style={styles.timerContainer}>
            <Text style={styles.textTimer}>{logTimer}</Text>
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