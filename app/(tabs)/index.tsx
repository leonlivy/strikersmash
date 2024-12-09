import { Text, View, Image, StyleSheet} from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View
      style={styles.container}
    >
       {/* <Text> Home Screen</Text>
       <Link href ='./about' style ={styles.button}>
       Go to About Screen</Link> */}
      <Text 
        style={styles.text}
        numberOfLines={1}
        ellipsizeMode="clip"
      >
        Hello, My Name is Matthew, I am 7 years old! i like sking, fishing,snowboarding, hokcye, and more.
        I like fishing!
      </Text>
      <Image 
        source={require('../../assets/images/matthew.png')}
        style={{ width: 399, height: 399 }}
        resizeMode="contain"
      />
      <Text 
        style ={{fontSize:40, color: 'green'}}
        numberOfLines={1}

      >
        Picture Two:

      </Text>
      <Image
      source ={require('../../assets/images/emoji2.png')} 
      style ={{width:399,height:399}}
      resizeMode="contain"
      />


    </View>
  );
}

const styles =StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent:'center',
    },
    text :{
      color: '#fff',
    },
    button : {
      fontSize:20,
      textDecorationLine: 'underline',
      color: '#fff'
    }
  }
)
