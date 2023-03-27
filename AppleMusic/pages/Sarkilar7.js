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
  ImageBackground,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Zirvedekiler:Türkçe Rock",
  },
];
const App = (props) => {
  Item = ({ title }) => {
    return (
      <View>
        <ImageBackground style={styles.resim} source={require("./22.jpeg")}>
          <View style={styles.resimüstütext}>
            <Text style={styles.title1}>{title}</Text>
            <Text style={styles.title2}>Apple Music:Rock</Text>
            <Text style={styles.title3}>DÜN GÜNCELLENDİ</Text>
          </View>
          <View style={styles.butonlar}>
            <View style={styles.cal_button}>
              <Button
                title="Çal"
                onPress={() => props.navigation.navigate("Radyodeneme")}
                color="black"
              />
            </View>

            <View style={styles.cal_button2}>
              <Button
                title="Karıştır"
                onPress={() => props.navigation.navigate("Radyodeneme")}
                color="black"
              />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album1.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Miracle</Text>
            <Text style={styles.sarkiadialt}>Calvin Harris</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album2.png")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Vampir</Text>
            <Text style={styles.sarkiadialt}>UZI</Text>
          </View>
        </View>

        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album3.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Ghost</Text>
            <Text style={styles.sarkiadialt}>Ava Max</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album4.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Durmaz Akar</Text>
            <Text style={styles.sarkiadialt}>Yüzyüzeyken Konuşuruz</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album5.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>People</Text>
            <Text style={styles.sarkiadialt}>Libianca</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album6.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Heaven</Text>
            <Text style={styles.sarkiadialt}>Niall Horan</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album7.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Gazing</Text>
            <Text style={styles.sarkiadialt}>Neemz</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album8.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Alibi</Text>
            <Text style={styles.sarkiadialt}>The Ringo Jest</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album9.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Boşver Be </Text>
            <Text style={styles.sarkiadialt}>Skapova</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album10.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Uyan</Text>
            <Text style={styles.sarkiadialt}>Taylan Ayık</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album11.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Üstü Kalsın</Text>
            <Text style={styles.sarkiadialt}>Kendimden Hallice</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album12.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Bu Düş Çok Güzel</Text>
            <Text style={styles.sarkiadialt}>Norm Ender</Text>
          </View>
        </View>

        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album13.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Birileri Var</Text>
            <Text style={styles.sarkiadialt}>Şebnem Ferah</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album14.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Unut Beni</Text>
            <Text style={styles.sarkiadialt}>Lacivert</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album15.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Aşk Koydum Adını</Text>
            <Text style={styles.sarkiadialt}>Pera</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album16.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Sustum</Text>
            <Text style={styles.sarkiadialt}>Can Bonomo</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album17.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Hasanpaşa</Text>
            <Text style={styles.sarkiadialt}>Yedinci Ev</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album18.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Tükenirken</Text>
            <Text style={styles.sarkiadialt}>RockA</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album19.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Rüzgarlar</Text>
            <Text style={styles.sarkiadialt}>Sercan İke</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./uzamsal.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Okyanuslarda</Text>
            <Text style={styles.sarkiadialt}>Louis Stotesbery</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.view_1}>
          <Text style={styles.title}>Öne Çıkan Sanatçılar</Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperator} />

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
  resimüstütext: {
    marginTop: 380,
  },

  resim: {
    margin: 0,
    marginLeft: 0,
    height: Dimensions.get("window").height / 1.2,
    width: Dimensions.get("window").width / 1,
    borderRadius: 10,
    marginBottom: 10,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 80,
    color: "black",
  },
  title2: {
    color: "black",
    fontSize: 23,
    marginLeft: 125,
    fontWeight: "500",
  },
  title3: {
    color: "black",
    fontSize: 14,
    marginLeft: 145,
    fontWeight: "500",
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
    borderRadius: 3,
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
    marginTop: 4,
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
