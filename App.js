import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
		<Stack.Screen 
          name="Login"
          component={Login}
          options={{title: "Login to eCommerce"}}
        />
        <Stack.Screen 
          name="SignUp"
          component={SignUp}
		  options={{title: "Sign up to eCommerce"}}
        />
		<Stack.Screen 
          name="Home"
          component={Home}
          options={{title: "Welcome To eCommerce"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


