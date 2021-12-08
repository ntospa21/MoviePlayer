import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <Button title='Sign in' onPress={()=> navigation.navigate('HomeCategory')}> Sign In</Button>
            <Button title='Sign up' onPress={()=> navigation.navigate('SignUpScreen')}> Sign Up</Button>

        </>
    )
}

export default SignInScreen;
