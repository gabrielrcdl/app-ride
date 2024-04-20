import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    marginTop: -90,
    fontSize: 30,
    textTransform: "uppercase",
  },
  container: {
    flex: 3,
    gap: 80,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  inputsContainer: {
    backgroundColor: "#fff",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 600,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
  },

  logo: {
    marginTop: 200,
  },
  registerContainer:{
    display: "flex",
    flexDirection: "row",
    gap: 5
  }
});
