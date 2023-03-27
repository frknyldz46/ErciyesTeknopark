import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";

import Card from "./components/Card/Card";

const Data = [
  {
    title: "Şimdi Uzamsal Ses'te",
    id: "0",
    imageuri:
      "https://www.donanimhaber.com/images/images/haber/144035/1400x1050whatsapp-resim-ve-videolarin-uzerine-cizim-yapmayi-test-ediyor.jpg",
  },
  /*{
  'title':'deneme yazisi',
  'id':'1',
  'imageuri':"https://evrimagaci.org/public/content_media/2757d1b0f673f5399e73005bbbb73115.jpg"

},
{
  'title':'deneme yazisi',
  'id':'2',
  'imageuri':"https://www.donanimhaber.com/images/images/haber/144035/1400x1050whatsapp-resim-ve-videolarin-uzerine-cizim-yapmayi-test-ediyor.jpg"

},*/
];

const App = (props) => {
  Item = ({ title }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text_container}>2000'ler</Text>
        <View style={styles.seperator} />

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar1")}
          >
            <Text style={styles.text_resimustu}>Nostalji:Emo </Text>
            <Text style={styles.text_resimustu2}>Apple Music :Punk </Text>
            <Image
              style={styles.card_ortabas}
              source={require("./ikibin1.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar2")}
          >
            <Text style={styles.text_resimustu}>
              En İyileri:2000'ler Alternatif
            </Text>
            <Text style={styles.text_resimustu2}>Apple Music :2000'ler </Text>
            <Image
              style={styles.card_ortabas}
              source={require("./ikibin2.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar3")}
          >
            <Text style={styles.text_resimustu}>%100 Nostalji </Text>
            <Text style={styles.text_resimustu2}>Apple Music :Pop</Text>
            <Image
              style={styles.card_ortabas}
              source={require("./ikibin3.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar4")}
          >
            <Text style={styles.text_resimustu}>The Estelle Show </Text>
            <Text style={styles.text_resimustu2}>Estelle</Text>
            <Image
              style={styles.card_ortabas}
              source={require("./ikibin4.jpg")}
            />
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}>{title.title}</Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar9")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./ikibin5.jpg")}
            />
            <Text style={styles.text_resimalti}>Rater R </Text>
            <Text style={styles.text_resimalti2}>Rihanna </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar10")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./ikibin6.jpeg")}
            />
            <Text style={styles.text_resimalti}>Music of the Sun </Text>
            <Text style={styles.text_resimalti2}>Rihanna </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar3")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./ikibin7.jpg")}
            />
            <Text style={styles.text_resimalti}>AOI:Bionix </Text>
            <Text style={styles.text_resimalti2}>De La Soul </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar4")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./ikibin8.jpg")}
            />
            <Text style={styles.text_resimalti}>Justified</Text>
            <Text style={styles.text_resimalti2}>Justin Timberlake </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}> Her zaman Yanında </Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar6")}
          >
            <Image style={styles.card_kucuk} source={require("./11.jpeg")} />
            <Text style={styles.text_resimalti}>Zirvedekiler:Türkçe Rock </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Hit'ler </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar7")}
          >
            <Image style={styles.card_kucuk} source={require("./22.jpeg")} />
            <Text style={styles.text_resimalti}>Yarının Hit'leri </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar8")}
          >
            <Image style={styles.card_kucuk} source={require("./33.jpeg")} />
            <Text style={styles.text_resimalti}>
              Zirvedekiler:Türkçe Alternatif{" "}
            </Text>
            <Text style={styles.text_resimalti2}>Apple Music:Alternatif </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./44.jpeg")} />
            <Text style={styles.text_resimalti}>High Drama</Text>
            <Text style={styles.text_resimalti2}>Adam Lambert </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}> Yeni Yerli Müzik </Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./aa.jpeg")} />
            <Text style={styles.text_resimalti}>Beraber Beraber </Text>
            <Text style={styles.text_resimalti2}>Pinhani </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./bb.jpeg")} />
            <Text style={styles.text_resimalti}>SIR-EP </Text>
            <Text style={styles.text_resimalti2}>Pitch Black Process </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./cc.jpeg")} />
            <Text style={styles.text_resimalti}>COREX </Text>
            <Text style={styles.text_resimalti2}>Kore </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./dd.jpeg")} />
            <Text style={styles.text_resimalti}>METHİYELER</Text>
            <Text style={styles.text_resimalti2}>Onurr </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}>Egzersiz Zamanı </Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor1.jpeg")} />
            <Text style={styles.text_resimalti}>EDM Hit'leri</Text>
            <Text style={styles.text_resimalti2}>Apple Music :Dans </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor2.jpeg")} />
            <Text style={styles.text_resimalti}>Solid Gold Workout </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor3.jpeg")} />
            <Text style={styles.text_resimalti}>Spor Saati:Hip-Hop </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={{
                uri: "https://evrimagaci.org/public/content_media/224a4357852224ab3d0eb800a664b28d.jpg",
              }}
            />
            <Text style={styles.text_resimalti}>Sabah Sporu</Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor4.jpeg")} />
            <Text style={styles.text_resimalti}>Spor Saati:Pop </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor5.jpeg")} />
            <Text style={styles.text_resimalti}>30 Dakika Egzersiz </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor6.jpeg")} />
            <Text style={styles.text_resimalti}>Gymflow </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor7.jpeg")} />
            <Text style={styles.text_resimalti}>%100 Egzersiz </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor8.jpeg")} />
            <Text style={styles.text_resimalti}>45 Dakika Egzersiz </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./spor9.jpeg")} />
            <Text style={styles.text_resimalti}>Spor Saati Türkçe Müzik </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Egzersiz </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}>Şehir Listeleri </Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./istanbul.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:İstanbul</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./london.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:London </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./newyork.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:New York </Text>
            <Text style={styles.text_resimalti2}>Apple Music</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./paris.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Paris </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.card_kucuk}
              source={require("./barcelona.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:Barcelona</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./dubai.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Dubai </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./roma.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Roma</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./rio.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Rio</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./accra.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Accra </Text>
            <Text style={styles.text_resimalti2}>Apple Music</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={Data} renderItem={({ item }) => <Item title={item} />} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text_container: {
    fontSize: 33,
    margin: 10,
    marginTop: 45,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    marginTop: 20,
  },

  card_kucuk: {
    height: Dimensions.get("window").height / 3.6,
    width: Dimensions.get("window").width / 2.2,
    margin: 10,
    borderRadius: 5,
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
  },
  text_resimalti: {
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  text_resimalti2: {
    fontSize: 15,
    margin: 10,
    marginTop: 0,
    color: "gray",
  },

  pemberesim: {
    height: Dimensions.get("window").height / 13,
    width: Dimensions.get("window").width / 1.09,
    margin: 15,
    borderRadius: 15,
  },
  seperator: {
    borderWidth: 1,
    borderColor: "#eceff1",
  },
  card_kucukapple: {
    height: Dimensions.get("window").height / 8,
    width: Dimensions.get("window").width / 2.2,
    margin: 10,
    borderRadius: 5,
  },
  title2: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
  },
  title6: {
    color: "red",
    marginTop: 18,
    fontSize: 25,
    marginLeft: 15,
  },
  card_ortabas: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
    margin: 10,
  },
  text_resimustu: {
    fontSize: 25,
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
  },
  text_resimustu2: {
    fontSize: 18,
    margin: 10,
    marginTop: 0,
    color: "gray",
  },
});

export default App;
