import { KeyboardAvoidingView, View, TextInput, TouchableOpacity, Modal, FlatList, Text } from "react-native";
import { COLORS, FONTS } from "../assets/theme";
import InfoCards from "../components/info-cards";
import Utilities from "../components/utilities";

const Home = () => {
    return (
        <View>
            <Utilities />
            <InfoCards />
        </View>
    )
}

export default Home;