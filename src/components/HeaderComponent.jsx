import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderComponent = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "100%",
    maxHeight: 100,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: -25,
    color: "white",
    textTransform: "uppercase",
  },
});

export default HeaderComponent;
