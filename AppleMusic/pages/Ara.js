import React from "react";

import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  SearchBar,
  TouchableOpacity,
} from "react-native";
import BarSearch from "./SearchBar";

const DATA = [
  {
    id: "1",
    title: "Ara",
  },
];
const App = (props) => {
  Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <BarSearch />

        <Text style={styles.title2}>Katagorilere Göz At</Text>

        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar6")}
          >
            <Image style={styles.kucukImage} source={require("./show.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.kucukImage}
              source={require("./sarkisoyle.jpeg")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar4")}
          >
            <Image
              style={styles.kucukImage}
              source={require("./uzamsal.jpeg")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar8")}
          >
            <Image
              style={styles.kucukImage}
              source={require("./listeler.jpeg")}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar2")}
          >
            <Image style={styles.kucukImage} source={require("./1.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar3")}
          >
            <Image style={styles.kucukImage} source={require("./2.jpeg")} />
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar10")}
          >
            <Image style={styles.kucukImage} source={require("./3.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar12")}
          >
            <Image style={styles.kucukImage} source={require("./4.jpeg")} />
          </TouchableOpacity>
        </View>

        <View style={styles.view}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar11")}
          >
            <Image style={styles.kucukImage} source={require("./5.jpeg")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Ara2000")}
          >
            <Image style={styles.kucukImage} source={require("./6.jpeg")} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 15,
    marginTop: 50,
  },
  title2: {
    fontSize: 21,
    fontWeight: "bold",
    margin: 15,
    marginTop: 20,
  },
  kucukImage: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2.2,
    margin: 10,
    marginLeft: 10,
    borderRadius: 15,
  },
  view: {
    flexDirection: "row",
  },
});
export default App;
