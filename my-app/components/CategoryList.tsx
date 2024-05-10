import COLORS from "@/constants/colors2";
import { style } from "@/constants/styles";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const CategoryList = () => {
  const categories = ["All", "Popular", "Top Rated", "Featured", "Luxury"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  return (
    <View style={style.categoryListContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View>
            <Text
              style={{
                ...style.categoryListText,
                color:
                  selectedCategoryIndex == index ? COLORS.primary : COLORS.grey,
              }}
            >
              {item}
            </Text>
            {selectedCategoryIndex == index && (
              <View
                style={{
                  height: 3,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CategoryList;
