import { Tabs } from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs

      screenOptions ={{
        tabBarActiveTintColor:'#fed54d',
        headerStyle: {
          backgroundColor: '#25297e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fee',
        tabBarStyle:{
          backgroundColor: 'd5292e',
        },
      }}>


      <Tabs.Screen name="index" options={{ title: 'Home', 
        tabBarIcon: ({color,focused})=> (
          <Ionicons name ={focused?'home-sharp':'home-outline'} color ={color} size ={24} />
        )
       }} />

      <Tabs.Screen name="about" options={{ title: 'About', 
        tabBarIcon: ({color, focused})=>(
          <Ionicons name ={focused? 'information-circle': 'information-circle-outline'} color={color} size ={36} />
        )
       }  } />
    </Tabs>
  );
}
