import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import GözAt from "./pages/GözAt";
import Ara from "./pages/Ara";
import Radyo from "./pages/Radyo";
import Sarkilar1 from "./pages/Sarkilar1";
import Sarkilar2 from "./pages/Sarkilar2";
import Sarkilar3 from "./pages/Sarkilar3";
import Sarkilar4 from "./pages/Sarkilar4";
import SimdiDinle from "./pages/SimdiDinle";
import SarkiSöyle from "./pages/SarkiSöyle";
import Radyodeneme from "./pages/Radyodeneme";
import Alternatif from "./pages/Alternatif";
import Caz from "./pages/Caz";
import Arsiv from "./pages/Arsiv";
import Sarkilar5 from "./pages/Sarkilar5";
import Sarkilar6 from "./pages/Sarkilar6";
import Sarkilar7 from "./pages/Sarkilar7";
import Sarkilar8 from "./pages/Sarkilar8";
import Sarkilar9 from "./pages/Sarkilar9";
import Sarkilar10 from "./pages/Sarkilar10";
import Sarkilar11 from "./pages/Sarkilar11";
import Sarkilar12 from "./pages/Sarkilar12";
import Sarkilar13 from "./pages/Sarkilar13";
import Sarkilar14 from "./pages/Sarkilar14";
import Sarkilar15 from "./pages/Sarkilar15";
import Sarkilar16 from "./pages/Sarkilar16";
import Sarkilar17 from "./pages/Sarkilar17";
import Sarkilar18 from "./pages/Sarkilar18";
import Sarkilar19 from "./pages/Sarkilar19";
import Sarkilar20 from "./pages/Sarkilar20";
import Sarkilar21 from "./pages/Sarkilar21";
import Sarkilar22 from "./pages/Sarkilar22";
import Sarkilar23 from "./pages/Sarkilar23";
import Sarkilar24 from "./pages/Sarkilar24";
import Sarkilar25 from "./pages/Sarkilar25";
import Sarkilar26 from "./pages/Sarkilar26";
import Sarkilar27 from "./pages/Sarkilar27";
import Ara2000 from "./pages/Ara2000";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Arsiv"
        component={Arsiv}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("./pages/arsiv.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#747a75",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ŞimdiDinle"
        component={SimdiDinle}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("./pages/simdidinle.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#747a75",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="GözAt"
        component={GözAt}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("./pages/gözaticon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#747a75",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Ara"
        component={Ara}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("./pages/büyütec.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#747a75",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Radyo"
        component={Radyo}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 3,
              }}
            >
              <Image
                source={require("./pages/radioicon.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#747a75",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Sarkilar1"
          component={Sarkilar1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar2"
          component={Sarkilar2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar3"
          component={Sarkilar3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar4"
          component={Sarkilar4}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar5"
          component={Sarkilar5}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar6"
          component={Sarkilar6}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar7"
          component={Sarkilar7}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar8"
          component={Sarkilar8}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar9"
          component={Sarkilar9}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar10"
          component={Sarkilar10}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar11"
          component={Sarkilar11}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar12"
          component={Sarkilar12}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar13"
          component={Sarkilar13}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar14"
          component={Sarkilar14}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar15"
          component={Sarkilar15}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar16"
          component={Sarkilar16}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar17"
          component={Sarkilar17}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar18"
          component={Sarkilar18}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar19"
          component={Sarkilar19}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar20"
          component={Sarkilar20}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar21"
          component={Sarkilar21}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar22"
          component={Sarkilar22}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar23"
          component={Sarkilar23}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar24"
          component={Sarkilar24}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar25"
          component={Sarkilar25}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar26"
          component={Sarkilar26}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sarkilar27"
          component={Sarkilar27}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SarkiSöyle"
          component={SarkiSöyle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Radyodeneme"
          component={Radyodeneme}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Alternatif"
          component={Alternatif}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Caz"
          component={Caz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Ara2000"
          component={Ara2000}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
