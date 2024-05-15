import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { GlobalContextProvider } from "@/context/useGlobalState";
import COLORS from "@/constants/colors2";
import NavList from "@/components/NavList";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Layout() {
  const queryClient = new QueryClient();

  return (
  

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
          <Drawer.Screen
            name="Signup" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: () => <NavList label="Signup" />,
              title: "Signup",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
            }}
          />
          <Drawer.Screen
            name="chat" // This is the name of the page and must match the url from root
            options={{
              drawerLabel: () => <NavList label="Chat" />,
              title: "Chat",
              headerShown: true,
              headerStyle: {
                backgroundColor: COLORS.primary,
              },
              headerTintColor: COLORS.white,
            }}
          />
        </Drawer>
     
  
  );
}
