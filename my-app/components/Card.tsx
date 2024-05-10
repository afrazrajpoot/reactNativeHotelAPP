import COLORS from "@/constants/colors2";
import { style } from "@/constants/styles";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
const Card = ({ hotel, index }: any) => {
  // console.log(hotel, "myHotel");
  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: `details/[item]`,
          params: {
            name: hotel.name,
            image: hotel.image,
            price: hotel.price,
            rating: hotel.rating,
            description: hotel.description,
            location: hotel.location,
          },
        })
      }
    >
      <View style={style.card}>
        <View style={style.priceTag}>
          <Text
            style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
          >
            ${hotel.price}
          </Text>
        </View>
        <Image source={hotel.image} style={style.cardImage} />
        <View style={style.cardDetails}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                {hotel.name}
              </Text>
              <Text style={{ color: COLORS.grey, fontSize: 12 }}>
                {hotel.location}
              </Text>
            </View>
            <Icon name="bookmark-border" size={26} color={COLORS.primary} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.orange} />
              <Icon name="star" size={15} color={COLORS.grey} />
            </View>
            <Text style={{ fontSize: 10, color: COLORS.grey }}>365reviews</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
export default Card;
