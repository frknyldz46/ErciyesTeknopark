import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

import styles from "./Card.style";

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.card_container}>
      <Text style={styles.text1}>{props.text1}</Text>
      <Text style={styles.text2}>{props.text2}</Text>
      <Text style={styles.text3}>{props.text3}</Text>
      <Image
        source={{
          uri: props.imageuri,
        }}
        style={styles.card_image}
      ></Image>
    </TouchableOpacity>
  );
};
export default Card;
