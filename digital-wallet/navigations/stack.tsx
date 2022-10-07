import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Scan, SignUp } from "../screens";

const Stacked = createStackNavigator();

const DigitalWallet = () => {
    return (
      <Stacked.Navigator initialRouteName="DigitalWalletHome">
        <Stacked.Group>
            <Stacked.Screen name="DigitalWalletLogin" component={Login}/>
            <Stacked.Screen name="DigitalWalletSignup" component={SignUp}/>
        </Stacked.Group>
        <Stacked.Screen name="DigitalWalletHome" component={Home} />
        <Stacked.Screen name="DigitalWalletScan" component={Scan} />
      </Stacked.Navigator>
    )
}

export default DigitalWallet;
