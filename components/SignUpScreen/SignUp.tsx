import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const SignUpScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <Button title='Sign up' onPress={()=> alert('todo')}> Sign In</Button>
            <Button title='Sign in' onPress={()=> navigation.navigate('SignInScreen')}> Sign In</Button>

        </>
    )
}

export default SignUpScreen;
