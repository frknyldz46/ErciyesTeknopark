import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  card_image: {
    height: Dimensions.get("window").height / 3,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 5,
  },
  card_container: {
    margin: 10,
  },
  text1: {
    fontSize: 13,
  },
  text2: {
    fontSize: 25,
    fontWeight: "500",
  },
  text3: {
    fontSize: 19,
    fontWeight: "300",
    marginBottom: 15,
  },
});
