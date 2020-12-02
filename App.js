import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { View, Button, Text, StyleSheet} from 'react-native';
import { FlatList} from 'react-native-gesture-handler';

function Home({navigation}){
  const [counter, setCounter] = useState(0);
  return(
    
    <View style = {styles.container}>
     <Button
    title="Go to List"
    onPress={() => navigation.navigate('List')}
    />
     <Button
    title="Increase counter value!"
    onPress={() => {
     setCounter(counter + 1) 
    }}
    />
     <Button
    title="Decrease counter value!"
    onPress={() => {setCounter(counter - 1) 
    }}
    />
    <Text style={styles.counter}>Counter value is {counter}!</Text>
    </View>
  );
}
function List(){
const data =  new Array(10).fill(null).map((v, i) => ({ key: (i + 1).toString(), value: `John Doe` }));
  return (
    <View style={styles.container}>
      <Text style = {styles.headline}>John Does</Text>
      <FlatList
      data = {data}
      renderItem={({item}) => 
  <Text style = {styles.item}>{item.value} {item.key}</Text>
    
    }
      />
    </View>
  );
}
const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options= {{title: 'Home'}}
                   
        />
        <Stack.Screen name="List"
        component={List}
        options= {{title: 'List'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
      alignItems: 'stretch',
      justifyContent: 'flex-start'
  },
  item:{
    textAlign: 'center',
    fontSize:20

  },
  counter: {
    textAlign: 'center',
    fontStyle : 'italic',
    fontSize : 25
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 0
  }
 
});