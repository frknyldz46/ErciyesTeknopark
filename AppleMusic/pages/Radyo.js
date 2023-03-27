import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

const DATA = [
  {
    id: "1",
    title: "Radyo",
  },
];

const App = (props) => {
  Item = ({ title }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Radyodeneme")}
        >
          <Image style={styles.image2} source={require("./denememusic.jpeg")} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.seperator} />
        <Text style={styles.title2}>Music 1</Text>
        <Text style={styles.title3}>En iyi yeni müzik </Text>

        <Image style={styles.image1} source={require("./image1.jpeg")} />
        <View style={styles.seperator} />
        <Text style={styles.title2}>Music Hit's</Text>
        <Text style={styles.title3}>Sevdiğiniz Şarkılar </Text>
        <Image style={styles.image1} source={require("./musicHits.jpeg")} />
        <View style={styles.seperator} />
        <Text style={styles.title2}>Music Country</Text>
        <Text style={styles.title3}>Country hayranlarına özel </Text>
        <Image style={styles.image1} source={require("./countryMusic.jpeg")} />
        <View style={styles.seperator} />
        <Text style={styles.title2}>Türe Göre Radyo</Text>
        <ScrollView horizontal>
          <View style={styles.resimAlti}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Radyodeneme")}
            >
              <Image
                style={styles.scrollImage}
                source={require("./hitler.jpeg")}
              />
              <Text style={styles.title5}> Hit'ler İstasyonu</Text>
              <Text style={styles.title4}> Apple Music İstasyonu</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resimAlti}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Radyodeneme")}
            >
              <Image
                style={styles.scrollImage}
                source={require("./rap.jpeg")}
              />
              <Text style={styles.title5}> Türkçe Rap İstasyonu</Text>
              <Text style={styles.title4}> Apple Music İstasyonu</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.resimAlti}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Radyodeneme")}
            >
              <Image
                style={styles.scrollImage}
                source={require("./rock.jpeg")}
              />
              <Text style={styles.title5}> Türkçe Rock İstasyonu</Text>
              <Text style={styles.title4}> Apple Music İstasyonu</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Text style={styles.title2}> Daha Fazlasını Keşfet</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Alternatif")}
        >
          <Text style={styles.title6}> Alternatif ve Indie</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Caz</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Country</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Dans</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Dünya Müzikleri</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Elektronik</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Hip-Hop</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Klasik</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Latin</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Metal</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Pop</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Rock</Text>
          <View style={styles.seperator} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Caz")}>
          <Text style={styles.title6}> Şarkıcı-Şarkı Yazarı</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.flatContainer}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image1: {
    height: Dimensions.get("window").height / 2,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 15,
    marginBottom: 10,
  },
  container: {
    margin: 15,
  },
  flatContainer: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title2: {
    fontSize: 25,
    fontWeight: "bold",
  },
  title3: {
    fontSize: 15,
    marginBottom: 10,
    color: "gray",
  },
  image2: {
    height: Dimensions.get("window").height / 10,
    width: Dimensions.get("window").width * 0.93,
    borderRadius: 15,
    marginBottom: 15,
  },

  scrollImage: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 1.8,
    margin: 10,
    marginLeft: 3,
    marginBottom: 3,
    borderRadius: 5,
  },
  resimAlti: {
    flexDirection: "column",
  },
  title4: {
    color: "gray",
    fontSize: 15,
    marginBottom: 40,
  },
  title5: {
    fontSize: 15,
  },
  title6: {
    color: "red",
    marginTop: 18,
    fontSize: 25,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
});
export default App;
