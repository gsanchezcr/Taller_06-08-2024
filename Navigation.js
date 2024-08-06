import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome';
import Home from './Home';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={Home} />
            <Tab.Screen name="Welcome" component={Welcome} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}