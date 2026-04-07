import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home"
import DetailsCategoria from "../screens/DetailsCategoria"
import DetailsProduto from "../screens/DetailsProduto"
import CarrinhoScreen from "../screens/CarrinhoScreen"
import CheckoutScreen from "../screens/CheckoutScreen"
import PerfilScreen from "../screens/PerfilScreen"
import ConfiguracaoScreen from "../screens/ConfiguracaoScreen"
import ReceitasScreen from "../screens/ReceitasScreen"
import DetailsReceita from "../screens/DetailsReceita"
import DetailsRestaurante from "../screens/DetailsRastaurante"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function AppNavigation() {

  function homeStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Categorias' }}
        />
        <Stack.Screen 
          name="DetailsCategoria" 
          component={DetailsCategoria} 
          options={{ title: 'Produtos' }} 
        />
        <Stack.Screen 
          name="DetailsProduto" 
          component={DetailsProduto} 
          options={{ title: 'Produto' }} 
        />
         <Stack.Screen 
          name="DetailsRestaurante" 
          component={DetailsRestaurante} 
          options={{ title: 'Restaurante' }} 
        />
      </Stack.Navigator>
    )
  }

  function carrinhoStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Carrinho" 
          component={CarrinhoScreen} 
          options={{ title: 'Carrinho' }}
        />
        <Stack.Screen 
          name="Checkout" 
          component={CheckoutScreen} 
          options={{ title: 'Checkout' }} 
        />
      </Stack.Navigator>
    )
  }

  function perfilStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen 
          name="Configuracao" 
          component={ConfiguracaoScreen} 
          options={{ title: 'Configuracao' }} 
        />
      </Stack.Navigator>
    )
  }

   function receitaStack (){
    return(
      <Stack.Navigator>
        <Stack.Screen 
          name="Receitas" 
          component={ReceitasScreen} 
          options={{ title: 'Receitas' }}
        />
        <Stack.Screen 
          name="Receita" 
          component={DetailsReceita} 
          options={{ title: 'Receita' }} 
        />
      </Stack.Navigator>
    )
  }

   return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homeStack} 
        options={{ headerShown: false }} />
        <Tab.Screen name="Carrinho" component={carrinhoStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Receitas" component={receitaStack} options={{ headerShown: false }}/>
        <Tab.Screen name="Perfill" component={perfilStack} options={{ headerShown: false }}/>
      </Tab.Navigator >
  );
}