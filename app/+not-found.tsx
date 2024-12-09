import {View, StyleSheet} from 'react-native'
import {Link, Stack } from 'expo-router'

export default function NotFoundScreen() {
    return(
        <>
        <Stack.Screen options ={{title:"Ops,not found  ...."}} />
        <View style={styles.containers}>
            <Link href ='/' style ={styles.button}>
             Go back to Home Screen
            </Link>

        </View>
    
        </>
    )
}

const styles =StyleSheet.create(
    {
        containers: {
            flex: 1,
            backgroundColor: '#26292e',
            justifyContent:'center',
            alignItems: 'center',
        },
        button: {
            fontSize: 20,
            textDecorationLine: 'underline',
            color: '#fff',
          },
    }
)