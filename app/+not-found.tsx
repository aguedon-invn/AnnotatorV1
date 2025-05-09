import {View,Text, StyleSheet} from "react-native";
import {Link} from "expo-router";
import {useRouter} from 'expo-router';

export default function NotFound() {
    const router = useRouter();
    return (
      <>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#000'}}>404 - Not Found</Text>
          <Link href="./(tabs)/index" style={{color: 'blue', textDecorationLine: 'underline'}}>Go to Scenario</Link>
        </View>
      </>  
    );

}