import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Zirvedekiler:Türkçe Pop",
  },
];
const App = (props) => {
  const Item = ({ title }) => {
    return (
      <View>
        <Image
          style={styles.resim}
          source={require("./sarkilarbüyükresim.jpeg")}
        />
        <Text style={styles.title1}>{title}</Text>
        <Text style={styles.title2}>Apple Music:POP</Text>
        <Text style={styles.title3}>DÜN GÜNCELLENDİ</Text>
        <View style={styles.butonlar}>
          <View style={styles.cal_button}>
            <Button
              title="Çal"
              onPress={() => props.navigation.navigate("Radyodeneme")}
              color="red"
            />
          </View>

          <View style={styles.cal_button2}>
            <Button
              title="Karıştır"
              onPress={() => props.navigation.navigate("Radyodeneme")}
              color="red"
            />
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album14.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Ne Söz Ne Saz</Text>
            <Text style={styles.sarkiadialt}>Sufle</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album15.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Yalanı Bırak</Text>
            <Text style={styles.sarkiadialt}>Sakiler & Oğuzdan Koç</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album16.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Sonunda </Text>
            <Text style={styles.sarkiadialt}>Berkay</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album18.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Antidepresan</Text>
            <Text style={styles.sarkiadialt}>Mert Demir</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album9.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Bu Kafayla</Text>
            <Text style={styles.sarkiadialt}>Ferhat Göçer</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album6.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Anıları Yak</Text>
            <Text style={styles.sarkiadialt}>Burcu Güneş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album7.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Sen Yokken</Text>
            <Text style={styles.sarkiadialt}>Hande Ünsal</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album1.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Yeniden Doğar Mı Güneş</Text>
            <Text style={styles.sarkiadialt}>Burak Bulut & Kurtuluş Kuş</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image
            style={styles.kucukresim}
            source={require("./sarkiresim9.jpeg")}
          />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Yana Yana</Text>
            <Text style={styles.sarkiadialt}>Semincek & Reynmen</Text>
          </View>
        </View>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./uzamsal.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Bu Aşk Yerde Kalmaz</Text>
            <Text style={styles.sarkiadialt}>Sinan Akçıl</Text>
          </View>
        </View>

        <View style={styles.view_1}>
          <Text style={styles.title}>Öne Çıkan Sanatçılar</Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./hakan.jpg")} />
            <Text style={styles.text_resimalti}>Hakan Altun</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./sinan.jpg")} />
            <Text style={styles.text_resimalti}>Sinan Akçıl </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./reynmen.jpeg")}
            />
            <Text style={styles.text_resimalti}>Reynmen </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./burak.jpeg")} />
            <Text style={styles.text_resimalti}>Burak Bulut</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./semincek.jpeg")}
            />
            <Text style={styles.text_resimalti}>Semincek</Text>
          </TouchableOpacity>
        </ScrollView>
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
    marginTop: StatusBar.currentHeight || 0,
  },

  resim: {
    margin: 25,
    marginLeft: 85,
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width / 1.8,
    borderRadius: 10,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 105,
  },
  title2: {
    color: "red",
    fontSize: 20,
    marginLeft: 125,
  },
  title3: {
    color: "gray",
    fontSize: 10,
    marginLeft: 145,
  },
  cal_button: {
    width: 100,
    margin: 25,
    marginLeft: 60,
  },
  butonlar: {
    flexDirection: "row",
  },
  cal_button2: {
    width: 100,
    margin: 25,
    marginLeft: 50,
  },
  kucukresim: {
    height: Dimensions.get("window").height / 12,
    width: Dimensions.get("window").width / 7.4,
    borderRadius: 7,
  },
  card2: {
    flexDirection: "column",
    margin: 10,
    marginLeft: 15,
  },
  card1: {
    flexDirection: "row",
    margin: 10,
    marginLeft: 15,
    marginBottom: 0,
    marginTop: 0,
  },
  sarkiadi: {
    fontSize: 18,
    fontWeight: "400",
  },
  sarkiadialt: {
    fontSize: 14,
    color: "gray",
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    marginLeft: 15,
  },
  text_tumunugor: {
    textAlign: "right",
    fontSize: 19,
    marginLeft: 55,
    marginTop: 11,
    color: "red",
  },
  view_1: {
    flexDirection: "row",
    marginTop: 20,
  },
  text_resimalti: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  card_kucuk: {
    height: Dimensions.get("window").height / 7,
    width: Dimensions.get("window").width / 4,
    margin: 10,
    borderRadius: 50,
  },
});

export default App;
