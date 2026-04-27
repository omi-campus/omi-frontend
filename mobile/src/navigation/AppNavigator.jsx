import { NavigationContainer } from '@react-navigation/native'
import { useAuthStore } from '../store/authStore'
import AuthNavigator from './AuthNavigator'
import MainTabNavigator from './MainTabNavigator'

export default function AppNavigator() {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated)

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainTabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}