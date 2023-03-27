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
    title: "Şimdi Uzamsal Seste",
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Radyodeneme")}
        >
          <Image style={styles.pemberesim} source={require("./music.jpeg")} />
        </TouchableOpacity>
        <Text style={styles.text_container}>Göz At</Text>
        <View style={styles.seperator} />

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar1")}
          >
            <Text style={styles.text_resimustu}>Zirvedekiler:Türkçe Pop </Text>
            <Text style={styles.text_resimustu2}>Apple Music :Pop </Text>
            <Image
              style={styles.card_ortabas}
              source={{
                uri: "https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar2")}
          >
            <Text style={styles.text_resimustu}>Güneş:En İyileri</Text>
            <Text style={styles.text_resimustu2}> Apple Music :R & B</Text>
            <Image
              style={styles.card_ortabas}
              source={{
                uri: "https://www.audiotool.com/images/homepage/slides/start.jpg",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar3")}
          >
            <Text style={styles.text_resimustu}>%100 Nostalji </Text>
            <Text style={styles.text_resimustu2}>Apple Music :Pop</Text>
            <Image
              style={styles.card_ortabas}
              source={{
                uri: "https://www.prsformusic.com/-/media/images/mmagazine/mm-article-images/news/b2l-m-main.jpg",
              }}
            />
          </TouchableOpacity>
        </ScrollView>
        {/* <ScrollView horizontal>
          <Card
            text1="Şimdi Dinle"
            text2="Zirvedekiler :Türkiye"
            text3="Apple Music:Pop"
            imageuri="https://variety.com/wp-content/uploads/2022/07/Music-Streaming-Wars.jpg"
          />
          <Card
            text1="HAFTANIN SINGLE'I"
            text2="LOVERS HURRİCANE"
            text3="Selin"
            imageuri="https://www.audiotool.com/images/homepage/slides/start.jpg"
          />
          <Card
            text1="GÜNCEL LİSTE"
            text2="Günün Yenileri"
            text3="Apple Music"
            imageuri="https://www.prsformusic.com/-/media/images/mmagazine/mm-article-images/news/b2l-m-main.jpg"
          />
        </ScrollView> */}

        <View style={styles.seperator} />

        <View style={styles.view_1}>
          <Text style={styles.title}>{title.title}</Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar1")}
          >
            <Image style={styles.card_kucuk} source={require("./77.jpeg")} />
            <Text style={styles.text_resimalti}>Uzamsal Ses :Hit'ler </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Hit'ler </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar2")}
          >
            <Image style={styles.card_kucuk} source={require("./88.jpeg")} />
            <Text style={styles.text_resimalti}>Cracker Island </Text>
            <Text style={styles.text_resimalti2}>Gorillaz </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar3")}
          >
            <Image style={styles.card_kucuk} source={require("./99.jpeg")} />
            <Text style={styles.text_resimalti}>Mapping Home </Text>
            <Text style={styles.text_resimalti2}>Çiğdem Borucu </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar4")}
          >
            <Image
              style={styles.card_kucuk}
              source={{
                uri: "https://evrimagaci.org/public/content_media/224a4357852224ab3d0eb800a664b28d.jpg",
              }}
            />
            <Text style={styles.text_resimalti}>High Drama</Text>
            <Text style={styles.text_resimalti2}>Adam Lambert </Text>
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

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar5")}
          >
            <Image style={styles.card_kucuk} source={require("./55.jpeg")} />
            <Text style={styles.text_resimalti}>Uzamsal Ses :Hit'ler </Text>
            <Text style={styles.text_resimalti2}>Apple Music :Hit'ler </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar11")}
          >
            <Image
              style={styles.card_kucuk}
              source={{
                uri: "https://i.pinimg.com/originals/ea/e8/5b/eae85b1dea5404b8299212d66a13fed5.jpg",
              }}
            />
            <Text style={styles.text_resimalti}>Gazino </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar12")}
          >
            <Image
              style={styles.card_kucuk}
              source={{
                uri: "https://e1.pxfuel.com/desktop-wallpaper/373/433/desktop-wallpaper-4-girl-dj-women-technology-thumbnail.jpg",
              }}
            />
            <Text style={styles.text_resimalti}>Pusula </Text>
            <Text style={styles.text_resimalti2}>Apple Music:Pop </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar13")}
          >
            <Image
              style={styles.card_kucuk}
              source={{
                uri: "https://cdn.pixabay.com/photo/2013/07/12/18/17/equalizer-153212__340.png",
              }}
            />
            <Text style={styles.text_resimalti}>Yepyeni:Türkçe Pop</Text>
            <Text style={styles.text_resimalti2}>Apple Music:Pop </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}> Yeni Yerli Müzik </Text>
          <TouchableOpacity>
            <Text style={styles.text_tumunugor}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar14")}
          >
            <Image style={styles.card_kucuk} source={require("./aa.jpeg")} />
            <Text style={styles.text_resimalti}>Beraber Beraber </Text>
            <Text style={styles.text_resimalti2}>Pinhani </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar15")}
          >
            <Image style={styles.card_kucuk} source={require("./bb.jpeg")} />
            <Text style={styles.text_resimalti}>SIR-EP </Text>
            <Text style={styles.text_resimalti2}>Pitch Black Process </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar16")}
          >
            <Image style={styles.card_kucuk} source={require("./cc.jpeg")} />
            <Text style={styles.text_resimalti}>COREX </Text>
            <Text style={styles.text_resimalti2}>Kore </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar17")}
          >
            <Image style={styles.card_kucuk} source={require("./dd.jpeg")} />
            <Text style={styles.text_resimalti}>METHİYELER</Text>
            <Text style={styles.text_resimalti2}>Onurr </Text>
          </TouchableOpacity>
        </ScrollView>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar18")}
          >
            <Image style={styles.card_kucuk} source={require("./ee.jpeg")} />
            <Text style={styles.text_resimalti}>Alabora-Single </Text>
            <Text style={styles.text_resimalti2}>Nodewave </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./ff.jpeg")} />
            <Text style={styles.text_resimalti}>Harekete kimse mani... </Text>
            <Text style={styles.text_resimalti2}>Adamlar </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./gg.jpeg")} />
            <Text style={styles.text_resimalti}>KAYB8L </Text>
            <Text style={styles.text_resimalti2}>Aqtaii</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.card_kucuk} source={require("./hh.jpeg")} />
            <Text style={styles.text_resimalti}>Bursa Bülbülü</Text>
            <Text style={styles.text_resimalti2}>Ata Demirer </Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.view_1}>
          <Text style={styles.title}> Apple Music ile Şarkı Söyle </Text>
        </View>

        <ScrollView horizontal>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.card_kucukapple}
              source={require("./apple.jpeg")}
            />
            <Text style={styles.text_resimalti}>Şimdi Şarkı Söyle </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.card_kucukapple}
              source={require("./mmusic.jpeg")}
            />
            <Text style={styles.text_resimalti}>Şimdi Şarkı Söyle </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.card_kucukapple}
              source={require("./ile.jpeg")}
            />
            <Text style={styles.text_resimalti}>Şimdi Şarkı Söyle </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.card_kucukapple}
              source={require("./sarki.jpeg")}
            />
            <Text style={styles.text_resimalti}>Şimdi Şarkı Söyle</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("SarkiSöyle")}
          >
            <Image
              style={styles.card_kucukapple}
              source={require("./söyle.jpeg")}
            />
            <Text style={styles.text_resimalti}>Şimdi Şarkı Söyle</Text>
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar19")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./istanbul.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:İstanbul</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar20")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./london.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:London </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar21")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./newyork.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:New York </Text>
            <Text style={styles.text_resimalti2}>Apple Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar22")}
          >
            <Image style={styles.card_kucuk} source={require("./paris.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Paris </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar23")}
          >
            <Image
              style={styles.card_kucuk}
              source={require("./barcelona.jpeg")}
            />
            <Text style={styles.text_resimalti}>Top 25:Barcelona</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar24")}
          >
            <Image style={styles.card_kucuk} source={require("./dubai.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Dubai </Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar25")}
          >
            <Image style={styles.card_kucuk} source={require("./roma.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Roma</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar26")}
          >
            <Image style={styles.card_kucuk} source={require("./rio.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Rio</Text>
            <Text style={styles.text_resimalti2}>Apple Music </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Sarkilar27")}
          >
            <Image style={styles.card_kucuk} source={require("./accra.jpeg")} />
            <Text style={styles.text_resimalti}>Top 25:Accra </Text>
            <Text style={styles.text_resimalti2}>Apple Music</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.title2}> Daha Fazlasını Keşfet</Text>

        <Text style={styles.title6}> Kategoriye Göre Göz At</Text>
        <View style={styles.seperator} />

        <Text style={styles.title6}> Listeler</Text>
        <View style={styles.seperator} />

        <Text style={styles.title6}> Huzur</Text>
        <View style={styles.seperator} />

        <Text style={styles.title6}> En İyileri</Text>
        <View style={styles.seperator} />

        <Text style={styles.title6}> Çocuklar</Text>
        <View style={styles.seperator} />

        <Text style={styles.title6}>Video Klipler</Text>
        <View style={styles.seperator} />
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
  card_ortabas: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
    margin: 10,
  },
});

export default App;
