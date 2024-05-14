import COLORS from "@/constants/colors2";
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableHighlight,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import { Button } from "react-native-paper";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logic to handle login
    console.log("Username:", username);
    console.log("Password:", password);
    // Add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {/* <Button style={styles.btn} onPress={handleLogin} textColor="white">
          Login
        </Button> */}
        <RectButton
          style={styles.btn}
          rippleColor={"rgba(10,10,10,11)"}
          underlayColor={COLORS.primary}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 300,
    height: 400,
    marginTop: -4,
    maxWidth: "80%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
  },
  input: {
    height: 40,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
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
  },
});

export default Login;
