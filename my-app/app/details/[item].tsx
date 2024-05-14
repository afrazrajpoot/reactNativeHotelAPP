import React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import COLORS from '../../consts/colors';
import COLORS from "@/constants/colors2";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import { style } from "@/constants/styles";
import { useGlobalState } from "@/context/useGlobalState";
import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const DetailsScreen = () => {
  const item = useLocalSearchParams();
  console.log(item.name, "myItem");
  return (
    <GestureHandlerRootView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: COLORS.white,
          paddingBottom: 20,
        }}
      >
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="rgba(0,0,0,0)"
        />
        <ImageBackground style={style.headerImage} source={item?.image}>
          <View style={style.header}>
            <Icon name="bookmark-border" size={28} color={COLORS.white} />
          </View>
        </ImageBackground>
        <View>
          <View style={style.iconContainer}>
            <Icon name="place" color={COLORS.white} size={28} />
          </View>
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: COLORS.grey,
                marginTop: 5,
              }}
            >
              {item.location}
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon name="star" size={20} color={COLORS.orange} />
                  <Icon name="star" size={20} color={COLORS.orange} />
                  <Icon name="star" size={20} color={COLORS.orange} />
                  <Icon name="star" size={20} color={COLORS.orange} />
                  <Icon name="star" size={20} color={COLORS.grey} />
                </View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}
                >
                  4.0
                </Text>
              </View>
              <Text style={{ fontSize: 13, color: COLORS.grey }}>
                365reviews
              </Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ lineHeight: 20, color: COLORS.grey }}>
                {item.details}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Price per night
            </Text>
            <View style={style.priceTag}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: COLORS.grey,
                  marginLeft: 5,
                }}
              >
                ${item.price}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "bold",
                  color: COLORS.grey,
                  marginLeft: 5,
                }}
              >
                +breakfast
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 33 }}>
            <RectButton
              style={styles.btn}
              underlayColor={COLORS.primary}
              rippleColor={"rgba(10, 10, 10, 0.5)"}
              onPress={() => router.push("/BookNow")}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 20 }}
              >
                Book now
              </Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginTop: 30,
    width: 300,
  },
});
