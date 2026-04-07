import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './context/AuthContext';
import ProductProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import { Router } from './navigation/Router';
import { ThemeContext } from './context/ThemeContext';
import ThemeProvider from './context/ThemeContext';
import RecipeProvider from './context/RecipeContext';
import { useContext } from 'react';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';

function DefinirTema() {
  const { tema } = useContext(ThemeContext);

  if (tema === 'escuro') {
    esquemaCores = DarkTheme;
    corFundo = 'black';
  } else {
    esquemaCores = DefaultTheme;
    corFundo = '';
  }

  return (
    <NavigationContainer theme={esquemaCores} style={{ background: corFundo }}>
      <Router />
    </NavigationContainer>
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RecipeProvider>
            <ThemeProvider>
              <DefinirTema />
            </ThemeProvider>
          </RecipeProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
