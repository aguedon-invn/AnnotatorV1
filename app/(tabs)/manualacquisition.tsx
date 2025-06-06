import { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Header from '@/components/header';
import NavBar from '@/components/navbar';
import { getCurrentTime } from '@/utils/currenttime';
import scenarioData from '../../config/exempleScenario.json';
import { useAnnotationTimer } from '../../utils/timers_save';
import { annotEvent } from '@/utils/log';
import { LogTimerContext, AnnotationTimerContext } from '@/components/timerContext';

const currenttime = getCurrentTime();
const logname = `${currenttime}_scenario1_room1_user1_0`;




export default function manualacquisition() {
    // const [timer, setTimer] = useState('00:00:00');
    // const [annotationTimer, setAnnotationTimer] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [deviceConnected, setDeviceConnected] = useState(false);
    const {logTimer, runLogTimer, setRunLogTimer} = useContext(LogTimerContext);
    const { annotationTimer, runAnnotationTimer, setRunAnnotationTimer, reset, setReset } = useContext(AnnotationTimerContext);
    // const annotTimer = useAnnotationTimer(annotationTimer);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.lognameContainer}>
                        <Text style={styles.lognameText}>{logname}</Text>
                    </View>
                    <View style={styles.centralTopContainer}>
                        <Pressable style={styles.pressable} onPress={
                            () => {
                                setRunLogTimer(!runLogTimer);
                                setRunAnnotationTimer(!runLogTimer);
                                // setStartAnnotTimer(!startTimer);
                                 //TODO set comom pause
                            }
                        } >;
                            <Text style={styles.buttonText}>
                                {runLogTimer ? "Stop" : "Start"}
                            </Text>
                        </Pressable>
                        <Text style={styles.timerText}>{annotationTimer}</Text>
                    </View>
                    <View style={styles.connectionContainer}>
                        <Text style={styles.connectionText}>Connected</Text>
                        <Pressable style={{ backgroundColor: deviceConnected ? "green" : "#c2c0c0" }} >
                            <Text style={styles.buttonText}>
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.annotationContainer}>
                    {scenarioData.map((item: any, index: number) => (
                        <Pressable
                            key={index}
                            style={[
                                styles.buttonContainer,
                                { backgroundColor: item.color },
                            ]}
                            onPress={() => {
                                annotEvent(item.annotation, logTimer, annotationTimer);
                                setReset(true)
                                console.log(`Annotation pressed: ${item.annotation}\n reset: ${reset}`);
                                item.count += 1
                            }}
                        >
                            <Text style={styles.buttonText}>{item.annotation}</Text>
                            <Text style={styles.counterText}>{item.count}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    headerContainer: {
        flex: 0.3,
    },
    navBarContainer: {
        flex: 0.2,
    },
    //containers
    mainContainer: {
        flex: 1,
        backgroundColor: '#B3BEBE',
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    topContainer: {
        width: '100%',
        height: '10%',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    lognameContainer: {
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    centralTopContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    connectionContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    annotationContainer: {
        width: '80%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
    },
    buttonContainer: {
        width: '33%', // Adjust the width as needed
        borderColor: '#000',
        aspectRatio: 1,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    //text
    lognameText: {
        fontSize: 10,
        color: '#000',
    },
    timerText: {
        fontSize: 20,
        color: 'red',
    },
    connectionText: {
        fontSize: 20,
        color: '#000',
    },
    connectionIndicator: {
        backgroundColor: '#c2c0c0',
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    counterText: {
        fontSize: 10,
        color: '#000',
    },
    //buttons
    pressable: {
        backgroundColor: '#d7d9d7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',

    },

    disabledButton: {
        backgroundColor: '#D3D3D3',
    },
    pressedButton: {
        backgroundColor: '#A9CDFF',
    },
})