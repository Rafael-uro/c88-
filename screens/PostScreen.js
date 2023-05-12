import * as React from "react";

import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

export default class PostScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}> Espectagrama</Text>
        </View>
        <View>
          <Image
            source={require("../assets/image_1.jpg")}
            style={styles.postImage}
          ></Image>
        </View>
        <View>
          <Text style={styles.captionText}>{this.props.post.caption}</Text>
        </View>
        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
        <Text style={styles.likeText}>12k</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  captionText: { fontSize: 13, color: "white", paddingTop: RFValue(10) },
  postImage: {
    marginTop: RFValue(20),
    resizeMode: "contain",
    width: "100%",
    alignSelf: "center",
    height: RFValue(275),
  },
  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },
  captionContainer: {},
  likeText: { color: "white", fontSize: RFValue(25), marginLeft: RFValue(5) },
});
