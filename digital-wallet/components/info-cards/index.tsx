import React from 'react';
import {TouchableOpacity, Text, View, Image, FlatList} from 'react-native';
import { SIZES,COLORS,FONTS } from '../../assets/theme';

import images from "../../assets/images";

const InfoCards = () => {
    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it, Grab it now!"
        }
    ];
    const [speciaPromos, setSpecialPromos] = React.useState(specialPromoData)

    const renderItem = ({item}) => (
        <TouchableOpacity
            style={{
                marginVertical: SIZES.base,
                width: SIZES.width / 2.5
            }}
            onPress={() => console.log(item.title)}
        >
            <View
                style={{
                    height: 80,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.primary
                }}
            >
                <Image
                    source={images.promoBanner}
                    resizeMode='cover'
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}
                />
            </View>
            <View
                style={{
                    padding: SIZES.padding,
                    backgroundColor: COLORS.lightGray,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
                <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )


    return (
        <View>
            <FlatList
                data={speciaPromos}
                renderItem={renderItem}
                columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                numColumns={2}
                keyExtractor={item => `${item.id}`}
                style={{marginTop: SIZES.padding * 2}}
            />
        </View>
    );
}

export default InfoCards;