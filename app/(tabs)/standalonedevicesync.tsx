import {useState, useContext} from 'react';
import {Text, View, StyleSheet, Pressable } from 'react-native';
import { syncEvent } from '@/utils/log';
import { LogTimerContext } from '@/components/timerContext';
import settings from '@/config/settings.json';


export default function standalonedevicesync(){
    const maxDevices = 9; // hardcoded max number of devices
    const nb_devices = settings.ManualAcquisition.nb_devices; // Number of devices to enable
    const {logTimer, runLogTimer, setRunLogTimer} = useContext(LogTimerContext);
    
    return (
        
    <View style={{flex: 1}}>
        {/* <View style={styles.headerContainer}>
            <Header startTimer={startTimer}/>
            <NavBar />
        </View> */}
        <View style={styles.mainContainer}>
            <View style={styles.padContainer}>
                {[...Array(maxDevices)].map((_, index) => (
                        <View key={index} style={styles.buttonContainer}>
                            <Pressable
                                onPress={() => {
                                    console.log(`Device ${index + 1} pressed`);
                                }}
                                onTouchEnd={() => syncEvent(`P${index+1}`,logTimer ) }
                                disabled={index + 1 > nb_devices} // Disable if index + 1 is greater than n
                                style={({ pressed }) => [
                                    styles.pressable,
                                    index + 1 > nb_devices && styles.disabledButton, // Apply disabled style
                                    pressed && !(index + 1 > nb_devices) && styles.pressedButton, // Apply pressed style only if enabled
                                ]}
                            >
                                <Text style={styles.buttonText}>
                                    Device {index + 1}
                                </Text>
                            </Pressable>
                        </View>
                    ))}
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.3,
    },
    navBarContainer: {
        flex: 0.2,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#B3BEBE',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    padContainer: {
        width: '90%',
        height: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    lineContainer:{
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'flex-start',
    },
    buttonContainer:{
        width: '33%',
        aspectRatio: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressable: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    disabledButton: {
        backgroundColor: '#ccc',
        borderColor: '#aaa',
    },
    pressedButton: {
        backgroundColor: '#ddd',
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
    },
});