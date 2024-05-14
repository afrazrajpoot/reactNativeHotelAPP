import COLORS from "@/constants/colors2";
import { useGlobalState } from "@/context/useGlobalState";
import { router } from "expo-router";
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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { data } = useGlobalState();
  const handleLogin = () => {
    // Logic to handle login
    console.log("Username:", username);
    console.log("Password:", password);
    // Add your authentication logic here
  };
  if (data) {
    router.push("/login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        {/* <Button style={styles.btn} onPress={handleLogin} textColor="white">
          Login
        </Button> */}
        <RectButton
          style={styles.btn}
          underlayColor={COLORS.primary}
          rippleColor={"rgba(10, 10, 10, 0.5)"}
        >
          <Text style={{ color: "white" }}>Sign up</Text>
        </RectButton>
        <Text>{data}</Text>
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
