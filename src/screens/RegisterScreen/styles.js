import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: -120,
    color: "white",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titleContainer: {
    backgroundColor: "black",
    width: "100%",
    height: 240,
    marginTop: -220,
    alignItems: "center",
    justifyContent: "center",
  },
  registerContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
});
