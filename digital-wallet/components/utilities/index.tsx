import React from 'react'
import icons from "../../assets/icons";
import { COLORS, FONTS, SIZES } from "../../assets/theme";
import {FlatList, View, Text, Image, TouchableOpacity} from "react-native";

const Utilities = () => {

    const featureData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightPurple,
            description: "Withdraw"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightPurple,
            description: "More"
        }
    ];
    
    const [features, setFeatures] = React.useState(featureData)

    
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={{ marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center' }}
            onPress={() => console.log(item.description)}
        >
            <View
                style={{
                    height: 50,
                    width: 50,
                    marginBottom: 5,
                    borderRadius: 20,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode='contain'
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: item.color
                    }}
                />
            </View>
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }}>
                {item.description}
            </Text>
        </TouchableOpacity>
    )

    return (
        <View>
            <FlatList
                data={features}
                numColumns={4}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                style={{ marginTop: SIZES.padding * 2, marginHorizontal: SIZES.padding }}
            />
        </View>
    )
}

export default Utilities;