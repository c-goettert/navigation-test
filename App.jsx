import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name={'tabscreen'}
      component={TestScreen('See those ugly edges? 😭😭😭')}
    />
  </Tab.Navigator>
);

const StackNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name={'tabscreen'}
      component={TestScreen('Beautiful fullscreen layout 💅')}
    />
  </Stack.Navigator>
);

const TestScreen = text => () =>
  (
    <View style={styles.testScreen}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

function App() {
  const [navigationType, setNavigationType] = React.useState('stack');
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        {navigationType === 'stack' ? <StackNavigation /> : <TabNavigation />}
      </NavigationContainer>
      <TouchableOpacity
        style={styles.touchable}
        onPress={
          navigationType === 'stack'
            ? () => setNavigationType('tabs')
            : () => setNavigationType('stack')
        }>
        <Text>Switch Navigators</Text>
      </TouchableOpacity>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  testScreen: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  touchable: {
    backgroundColor: 'green',
    height: 50,
    width: 180,
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default App;
