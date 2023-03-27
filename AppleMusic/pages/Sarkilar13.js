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
    title: "Yepyeni:Türkçe Pop",
  },
];
const App = (props) => {
  Item = ({ title }) => {
    return (
      <View>
        <ImageBackground
          style={styles.resim}
          source={{
            uri: "https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212__340.png",
          }}
        >
          <View style={styles.resimüstütext}>
            <Text style={styles.title1}>{title}</Text>
            <Text style={styles.title2}>Apple Music:POP</Text>
            <Text style={styles.title3}>DÜN GÜNCELLENDİ</Text>
          </View>
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
        </ImageBackground>

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album1.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>VAMPİR</Text>
            <Text style={styles.sarkiadialt}>UZI</Text>
          </View>
        </View>
        <View style={styles.seperator} />
        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album2.png")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>RANDEVU</Text>
            <Text style={styles.sarkiadialt}>Motive</Text>
          </View>
        </View>

        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album3.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Yaz Baştan</Text>
            <Text style={styles.sarkiadialt}>Allame</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album4.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Günleri Saydım</Text>
            <Text style={styles.sarkiadialt}>Burry Soprano</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album5.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Boğar Beni Gündüz</Text>
            <Text style={styles.sarkiadialt}>Anıl Piyancı&Mai</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album6.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>İmparator</Text>
            <Text style={styles.sarkiadialt}>Heijan&Muti</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album7.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Özür</Text>
            <Text style={styles.sarkiadialt}>Halodayı</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album8.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Diyardan Diyara</Text>
            <Text style={styles.sarkiadialt}>Cakal,Arem Ozguc</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album9.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kalabilirim Ayakta </Text>
            <Text style={styles.sarkiadialt}>Grogi & Murda</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album10.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>HAYIR</Text>
            <Text style={styles.sarkiadialt}>Cakal & Eftalya Yağcı</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album11.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Gitti</Text>
            <Text style={styles.sarkiadialt}>Sefo & Aerro</Text>
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
            <Text style={styles.sarkiadi}>İnan Bana</Text>
            <Text style={styles.sarkiadialt}>Ayaz & Heijan</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album14.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Gelmelisin</Text>
            <Text style={styles.sarkiadialt}>Bedo</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album15.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Kalite</Text>
            <Text style={styles.sarkiadialt}>Organize</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album16.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Haybe</Text>
            <Text style={styles.sarkiadialt}>Ahiyan</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album17.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Özür</Text>
            <Text style={styles.sarkiadialt}>Halodayı</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album18.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Astigmat</Text>
            <Text style={styles.sarkiadialt}>emir taha</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./album19.jpg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Switch </Text>
            <Text style={styles.sarkiadialt}>Defa & Mavi</Text>
          </View>
        </View>
        <View style={styles.seperator} />

        <View style={styles.card1}>
          <Image style={styles.kucukresim} source={require("./uzamsal.jpeg")} />
          <View style={styles.card2}>
            <Text style={styles.sarkiadi}>Sür</Text>
            <Text style={styles.sarkiadialt}>Aksan</Text>
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
    fontSize: 25,
    marginLeft: 105,
    color: "white",
  },
  title2: {
    color: "white",
    fontSize: 23,
    marginLeft: 125,
    fontWeight: "500",
  },
  title3: {
    color: "white",
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
