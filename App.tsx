import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DigitalWallet from './digital-wallet/navigations/stack';
import { FlatList } from 'react-native-gesture-handler';
import { FONTS, SIZES } from './digital-wallet/assets/theme';
import FoodDelivery from './food-delivery/navigation/stack';

const Stack = createStackNavigator();

function AppList ({ navigation }) {
  const Screens = [
    {
      name: "DigitalWallet",
      bgColor: "",
      description: "This Wallet uses your bank account to pay for utility bills and more",
    },
    {
      name: "FoodDelivery",
      bgColor: "",
      description: "Order and watch your food gets near and near you in seconds",
    },
  ];

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.2,
          height: 130,
          marginTop: SIZES.padding2,
          backgroundColor: 'green',
          margin: SIZES.padding,
        }}
        onPress={() => navigation.navigate(item.name)}
      >
        <View style={{padding: SIZES.padding}}>
          <Text style={{color: "white"}}>{item.name}</Text>
          <Text style={[FONTS.body4, {color: "#fefefe"}]}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{marginTop: 30,}}>
      <FlatList 
        data={Screens}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        numColumns={2}
      />
    </View>
  )
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'inconsolata-light': require('./assets/fonts/Inconsolata_Condensed-Light.ttf'),
    'inconsolata-regular': require('./assets/fonts/Inconsolata_Condensed-Regular.ttf'),
    'inconsolata-bold': require('./assets/fonts/Inconsolata_Condensed-Bold.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppList" screenOptions={{headerShown: false}}>
        <Stack.Screen name="AppList" component={AppList} />
        <Stack.Screen name="DigitalWallet" component={DigitalWallet} />
        <Stack.Screen name="FoodDelivery" component={FoodDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
