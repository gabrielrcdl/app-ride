import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center',
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
    justifyContent: "center",
    height: 500,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    padding: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginTop: 200,
  },
  registerContainer:{
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    gap: 5
  }
});
