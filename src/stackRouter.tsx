import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// @ts-ignore
import Icon from 'react-native-vector-icons/Ionicons'

const Stack = createNativeStackNavigator();

function HomeView(props: any): React.JSX.Element {
    return <>
        <View style={[style.container]}>
            <Text> this is HomeView </Text>
            <Icon name={'add-circle'} ></Icon>
            <Button 
             title='goto newsPage'
             onPress={() => {props.navigation.navigate('News')}}
            />
        </View>
    </>
}

function NewsView(props: any): React.JSX.Element {
    return <>
        <View style={[style.container]}>
            <Text> this is newsview </Text>
            <Button 
             title='goto homePage'
             onPress={() => {props.navigation.navigate('Home')}}
            />
        </View>
    </>
}

function Index(): React.JSX.Element {
    return <>
        <Stack.Navigator initialRouteName='News'>
            <Stack.Screen 
             name='Home' 
             component={HomeView}
             options={{
                title: 'home页面',
                
             }}
            />
            <Stack.Screen 
             name='News' 
             component={NewsView}
             options={{
                title: 'news页面'
             }}
            />
        </Stack.Navigator>
    </>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Index