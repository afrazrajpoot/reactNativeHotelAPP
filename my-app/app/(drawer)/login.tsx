import React, { useEffect } from "react";
import { Text, View, TextInput, ActivityIndicator, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { RectButton } from "react-native-gesture-handler";
import COLORS from "@/constants/colors2";
import { useLoginMutation } from "@/store/storeApi";

import { router } from "expo-router";
import { style } from "@/constants/styles";

interface FormData {
  name: string;
  username: string;
  password: string;
}

const Login = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [signupMutation, { isLoading, isError, error, isSuccess }] =
    useLoginMutation();

  const onSubmit = async (data: FormData) => {
    signupMutation(data);
  };

  useEffect(() => {
    if (isSuccess) {
      Alert.alert("Login Successful", "Welcome back!", [
        { text: "OK", onPress: () => router.push("/") },
      ]);
      reset();
    }
  }, [isSuccess]);

  return (
    <View style={style.container}>
      <View style={style.formContainer}>
        <Text style={style.title}>Login</Text>

        <Controller
          control={control}
          render={({ field }: any) => (
            <TextInput
              style={style.input}
              placeholder="Username"
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
          name="username"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.username && <Text>This field is required.</Text>}

        <Controller
          control={control}
          render={({ field }: any) => (
            <TextInput
              style={style.input}
              placeholder="Password"
              onChangeText={field.onChange}
              value={field.value}
              secureTextEntry
            />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.password && <Text>This field is required.</Text>}

        <RectButton
          style={style.loginAndSignupBtn}
          rippleColor={"rgba(10,10,10,11)"}
          underlayColor={COLORS.primary}
          onPress={handleSubmit(onSubmit)}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "white" }}>Login</Text>
          )}
        </RectButton>
        {isError && <Text style={style.error}>Login failed</Text>}
      </View>
    </View>
  );
};

export default Login;
