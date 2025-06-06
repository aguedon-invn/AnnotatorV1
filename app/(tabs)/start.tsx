import { useState, useContext } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable, Switch, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { LogTimerContext, AnnotationTimerContext } from '@/components/timerContext';
import {startlog} from '@/utils/log';
import settings from '@/config/settings.json';

export default function Start() {
    const [ipAddress, setIpAddress] = useState('0.0.0.0')
    const [auto, setAuto] = useState(false);
    const [paired, setPaired] = useState(false);
    // const [startTimer, setStartTimer] = useState(false);
    const [logMessages, setLogMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const {logTimer, runLogTimer, setRunLogTimer} = useContext(LogTimerContext);
    const { annotationTimer, runAnnotationTimer, setRunAnnotationTimer, reset, setReset} = useContext(AnnotationTimerContext);
    const handleAddLog = (inputValue: string) => {
        if (inputValue.trim() === '') {
            setLogMessages((inputValue) => [...inputValue, 'Error: Input cannot be empty!']);
        } else {
            setLogMessages((inputValue) => [...inputValue, `Input received: ${inputValue}`]);
            setInputValue('');
        };
    }
    const data = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
    ];
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.driveModeContainer}>
                    <Text style={styles.label}> Drive modes</Text>
                    <View style={styles.modeOptionContainer}>
                        <Text style={styles.label}>Manual</Text>
                        <Switch
                            style={styles.toggleButton}
                            thumbColor={auto ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={() => setAuto(!auto)}
                            value={auto}
                        />
                        <Text style={styles.label}>Auto</Text>
                    </View>
                    <View style={styles.modeOptionContainer}>
                        <Text style={styles.label}>standalone</Text>
                        <Switch
                            style={styles.toggleButton}
                            thumbColor={paired ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={() => setPaired(!paired)}
                            value={paired}
                        />
                        <Text style={styles.label}>paired</Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    {paired ? (
                        <PairedLayout ipAddress={ipAddress} setIpAddress={setIpAddress} auto={auto} />
                    ) : (
                        <StandaloneLayout data={data} />)
                    }
                </View>
                <View style={styles.bottomContainer}>
                    <Pressable style={styles.startButton}
                        onPress={() => {
                            setRunLogTimer(!runLogTimer); 
                            setRunAnnotationTimer(!runLogTimer); // synching timers
                            setLogMessages((inputValue) => [...inputValue, `Start pressed: ${runLogTimer}\n Annotation Timer: ${annotationTimer}`]);
                            startlog();
                        }}
                    >
                        <Text style={styles.label}>{runLogTimer ? "Stop" : "Start"}</Text>
                    </Pressable>
                </View>
                {/* <View style={styles.bottomContainer}>
                    <TextInput 
                        style={styles.nbDeviceButtonStyle}
                        placeholder="Enter log message"
                        placeholderTextColor="#111" 
                        onChangeText={(text) => handleAddLog(text)}
                        value={inputValue}
                    >
                        
                    </TextInput>
                </View> */}
                <ScrollView style={styles.consolDisplay} contentContainerStyle={styles.consolContent}>
                    {logMessages.map((message, index) => (
                        <Text key={index} style={styles.consolText}>
                            {message}
                        </Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}
const PairedLayout = ({ ipAddress, setIpAddress, auto }: { ipAddress: string; setIpAddress: (text: string) => void; auto: boolean }) => (
    <>
        <TextInput
            style={styles.nbDeviceButtonStyle}
            placeholder={ipAddress}
            placeholderTextColor="#111"
            onChangeText={(text) => { setIpAddress(text) }}
            value={ipAddress}
        />
        <Pressable style={[
            styles.connectionIndicator,
            auto && { backgroundColor: 'green' }
        ]}
            onPress={() => console.log('Connect pressed')}
        >
        </Pressable>
        {/* <ActivityIndicator size="small" color="lightgreen"/> */}
    </>
);

const StandaloneLayout = ({ data }: { data: any }) => (

    <>

        <Dropdown
            style={styles.nbDeviceButtonStyle}
            placeholderStyle={styles.nbdeviceText}
            selectedTextStyle={styles.nbdeviceText}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={null}
            onChange={(item) => {
                console.log(item);
                settings.ManualAcquisition.nb_devices = item.value
            }}
        // renderLeftIcon={() => (
        //     <IconComponent name="chevron-down" size={20} color="black" />
        // )}
        ></Dropdown>
    </>
);
const styles = StyleSheet.create({
    headerContainer: {
        flex: 0.3,
    },
    navBarContainer: {
        flex: 0.2,
        // backgroundColor: '#5E5E5E',
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#B3BEBE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    driveModeContainer: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'blue',
    },
    modeOptionContainer: {
        // backgroundColor: 'red',
        // padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleContainer: {
        flex: 0.33,
        // backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 0.33,
        // backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    adresscontainer: {
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 15,
        // fontWeight: 'bold',
        color: '#000',
        fontFamily: 'inter',
    },

    toggleButton: {
        // backgroundColor: 'lightgrey',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    connectionIndicator: {
        backgroundColor: '#c2c0c0',
        borderColor: '#000',
        width: 30,
        height: 30,
        borderRadius: 20,
        borderWidth: 1,
    },
    connectButton: {
        padding: 10,
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        alignItems: 'center',
        width: 120,
        backgroundColor: '#d4d2d2',
        borderColor: '#000',
        borderWidth: 0.4,
        borderRadius: 15,
    },
    nbDeviceButtonStyle: {
        backgroundColor: '#fff',
        width: 150,
        height: 40,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    nbdeviceText: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
    },
    startButton: {
        padding: 10,
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        alignItems: 'center',
        width: 120,
        backgroundColor: '#d4d2d2',
        borderColor: '#000',
        borderWidth: 0.4,
        borderRadius: 15,
    },
    consolDisplay: {
        backgroundColor: '#000',
        height: 20, // Set a fixed height for the ScrollView
        width: '80%', // Optional: Ensure it spans the full width
        padding: 10,
    },
    consolContent: {
        flexGrow: 1, // Ensures content is scrollable even if it doesn't fill the height
    },
    consolText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'inter',
        marginBottom: 5,
    }
});