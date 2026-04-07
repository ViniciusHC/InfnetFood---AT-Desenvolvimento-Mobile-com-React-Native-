import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigation } from '../navigation/AppNavigation';
import { Login } from '../screens/Login';

const Stack = createNativeStackNavigator();

export function Router() {
  const { logged } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {logged ? (
        <Stack.Screen
          name="Navigation"
          component={AppNavigation}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
}
