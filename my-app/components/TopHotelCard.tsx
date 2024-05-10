import COLORS from "@/constants/colors2";
import { Image, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { style } from "@/constants/styles";

const TopHotelCard = ({ hotel }: any) => {
  return (
    <View style={style.topHotelCard}>
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: "row",
        }}
      >
        <Icon name="star" size={15} color={COLORS.orange} />
        <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 15 }}>
          5.0
        </Text>
      </View>
      <Image style={style.topHotelCardImage} source={hotel.image} />
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>{hotel.name}</Text>
        <Text style={{ fontSize: 7, fontWeight: "bold", color: COLORS.grey }}>
          {hotel.location}
        </Text>
      </View>
    </View>
  );
};
export default TopHotelCard;
