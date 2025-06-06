import { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Pressable } from 'react-native';
import { getCurrentTime } from '@/utils/currenttime';
import settings from '@/config/settings.json';

export default function Scenario() {
    const [startTimer, setStartTimer] = useState(false);
    const [userId, setUserId] = useState(settings.user.Id);
    const [room, setRoom] = useState(settings.room.Id);
    const [scenario, setScenario] = useState(settings.header.usecase);
    const [iteration, setIteration] = useState(1);
    const currenttime = getCurrentTime();
    settings.header.date = currenttime;
    const logname = `${currenttime}_${scenario}_${room}_user${userId}_${iteration}`;
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={styles.headerContainer}> */}
            {/* <Header startTimer={startTimer}/>
            <NavBar /> */}
            {/* </View> */}
            {/* <View style={styles.mainContainer}>

            
        </View> */}
            <View style={styles.scenarioContainer}>

                <View style={styles.centerContainer}>
                    <View style={styles.lognameContainer}>
                        <Text style={styles.lognameText}>{logname}</Text>
                    </View>
                    <View style={styles.informationsContainer}>
                        <View style={styles.informationContainer}>
                            <Text style={styles.fieldLabel}>User ID</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput style={styles.fieldTextInput}
                                placeholder="User ID"
                                onEndEditing={(event) => {
                                    setUserId(event.nativeEvent.text);
                                    settings.user.Id = event.nativeEvent.text
                                    }
                                }
                                value={userId}
                                placeholderTextColor="#111" />
                                <Pressable style={styles.infoButton}>
                                    <Text >Info</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.informationContainer}>

                            <Text style={styles.fieldLabel}>Room</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput style={styles.fieldTextInput}
                                placeholder="Room"
                                placeholderTextColor="#111"
                                onEndEditing={(event) => { 
                                    setRoom(event.nativeEvent.text);
                                    settings.room.Name = event.nativeEvent.text
                                    }
                                }
                                />
                                <Pressable style={styles.infoButton}> <Text >Info</Text></Pressable>
                            </View>
                        </View>
                        <View style={styles.informationContainer}>

                            <Text style={styles.fieldLabel}>Scenario</Text>
                            <View style={styles.fieldContainer}>
                                <TextInput style={styles.fieldTextInput}
                                placeholder="Scenario"
                                placeholderTextColor="#111"
                                onEndEditing={(event) => {
                                    setScenario(event.nativeEvent.text);
                                    settings.header.usecase = event.nativeEvent.text;
                                }} />
                                <Pressable style={styles.infoButton}> <Text >Info</Text></Pressable>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.browserContainer}>
                        <Text style={styles.fieldLabel}>Target Directory</Text>
                        <Pressable style={styles.button}>
                            <Text>browse</Text>
                        </Pressable>
                    </View>
                    <View style={styles.configContainer}>
                        <Text style={styles.fieldLabel}>Config</Text>
                        <Pressable style={styles.button}>
                            <Text>save</Text>
                        </Pressable>
                        <Pressable style={styles.button}>
                            <Text>load</Text>
                        </Pressable>
                    </View>
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
    mainContainer: {
        flex: 0.1,
        // flexDirection: 'column',
        backgroundColor: '#B3BEBE',
        // backgroundColor: 'green',
    },
    scenarioContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#B3BEBE',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        // padding: 10,
    },
    centerContainer: {
        flex: 0.65,
        // padding: 10,
        // backgroundColor: 'green',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    rightContainer: {
        flex: 0.35,
        // padding: 10,
        // backgroundColor: '#92b0b0',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    browserContainer: {
        flex: 0.2,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'yellow',
    },
    configContainer: {
        flex: 0.7,
        // padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // backgroundColor: 'orange',
    },
    lognameContainer: {
        flex: 0.1,
        // padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'purple',
    },
    informationsContainer: {
        flex: 0.7,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    informationContainer: {
        // padding: 10,
        // backgroundColor: 'red',
        paddingBottom: 40,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    labelContainer: {
        // padding: 10,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
    },
    fieldContainer: {
        // padding: 10,
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    lognameText: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        fontWeight: 'bold',
        top: 0,
        // padding: 10,
    },
    fieldLabel: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        // padding: 10,
    },
    fieldTextInput: {
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        padding: 10,
        // marginTop: 20,
        // marginBottom: 20,
        marginRight: 10,
        marginLeft: 10,
        width: 150,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    infoButton: {
        padding: 10,
        color: '#000',
        fontSize: 15,
        fontFamily: 'inter',
        alignItems: 'center',
        width: 70,
        backgroundColor: '#d4d2d2',
        borderColor: '#000',
        borderWidth: 0.4,
        borderRadius: 15,
    },
    button: {
        padding: 10,
        margin: 5,
        color: '#000',
        fontFamily: 'inter',
        alignItems: 'center',
        fontSize: 20,
        width: 70,
        borderColor: '#000',
        borderWidth: 0.4,
        backgroundColor: '#d6d4d4',
        borderRadius: 15,
    },
})
