import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manager from './Manager';
import PersonalInfo from './PersonalInfo';
import Form from "./src/screens/form";
import Home from './Home';

const Stack = createNativeStackNavigator();
const App=()=> {
   return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home' component={Home}
            />
            <Stack.Screen
                name='Form' component={Form}
            />
             <Stack.Screen
                name='Manager' component={Manager}
            />
            <Stack.Screen
                name='PersonalInfo' component={PersonalInfo}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
