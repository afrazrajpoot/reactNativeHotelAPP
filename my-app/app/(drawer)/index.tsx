import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  Animated,
  Pressable,
  Button,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
// import COLORS from "../../consts/colors";
import COLORS from "@/constants/colors2";
// import hotels from "../../consts/hotels";
import hotels from "@/constants/hotels";

import Card from "@/components/Card";
import TopHotelCard from "@/components/TopHotelCard";
import CategoryList from "@/components/CategoryList";
import { style } from "@/constants/styles";
import { useGlobalState } from "@/context/useGlobalState";
import { router } from "expo-router";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

const index = () => {
  // const [state ,setState] = useState()
  const { data, setData } = useGlobalState();
  const [activeCardIndex, setActiveCardIndex] = React.useState(0);
  const [value, setValue] = useState<string>("");

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const test = () => {
    setData(value);
    router.push("Signup");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Find your Rastorant
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>in </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: COLORS.primary,
              }}
            >
              Paris
            </Text>
          </View>
        </View>
        <Pressable onPress={() => router.push("/login")}>
          <Icon name="person-outline" size={38} color={COLORS.grey} />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput
            placeholder="Search"
            style={{ fontSize: 20, paddingLeft: 10 }}
            onChangeText={(text) => setValue((prev) => text)}
          />
        </View>
        <CategoryList />
        <View>
          <Animated.FlatList
            onMomentumScrollEnd={(e) => {
              setActiveCardIndex(
                Math.round(e.nativeEvent.contentOffset.x / cardWidth)
              );
            }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            horizontal
            data={hotels}
            contentContainerStyle={{
              paddingVertical: 30,
              paddingLeft: 10,
              paddingRight: cardWidth / 2 - 90,
            }}
            showsHorizontalScrollIndicator={true}
            renderItem={({ item, index }) => (
              <Card hotel={item} index={index} />
            )}
            snapToInterval={cardWidth}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: COLORS.grey }}>
            Top hotels
          </Text>
          <Text style={{ color: COLORS.grey }}>Show all</Text>
        </View>
        <FlatList
          data={hotels}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20,
            marginTop: 20,
            paddingBottom: 30,
          }}
          renderItem={({ item }) => <TopHotelCard hotel={item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
