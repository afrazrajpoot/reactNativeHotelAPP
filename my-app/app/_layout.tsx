import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { GlobalContextProvider } from "@/context/useGlobalState";
import COLORS from "@/constants/colors2";
import NavList from "@/components/NavList";

export default function Layout() {
  return (
    <GlobalContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: () => <NavList label="Home" />,
              title: "Home",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
            }}
          />
          <Drawer.Screen
            name="details/[item]" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: () => <NavList label="Hotel detailes" />,
              title: "overview",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
            }}
          />
          <Drawer.Screen
            name="login" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: () => <NavList label="Login" />,
              title: "Login",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </GlobalContextProvider>
  );
}
