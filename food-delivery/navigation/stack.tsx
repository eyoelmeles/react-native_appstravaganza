import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

const Stacked = createStackNavigator();

const FoodDelivery = () => {
    return (
      <Stacked.Navigator initialRouteName="FoodDeliveryHome" screenOptions={{headerShown: false}}>
        <Stacked.Screen name="FoodDeliveryHome" component={Home} />
      </Stacked.Navigator>
    )
}

export default FoodDelivery;
