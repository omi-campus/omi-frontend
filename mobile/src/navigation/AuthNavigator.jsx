import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '../screens/auth/WelcomeScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import OTPScreen from '../screens/auth/OTPScreen'
import IDUploadScreen from '../screens/auth/IDUploadScreen'
import InterestsScreen from '../screens/auth/InterestsScreen'
import ProfileSetupScreen from '../screens/auth/ProfileSetupScreen'
import LoginScreen from '../screens/auth/LoginScreen'

const Stack = createNativeStackNavigator()

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="IDUpload" component={IDUploadScreen} />
      <Stack.Screen name="Interests" component={InterestsScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}