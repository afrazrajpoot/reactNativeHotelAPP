import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NavList = ({ label }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default NavList;
