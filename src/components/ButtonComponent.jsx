import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = (props) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#4F46E5"
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
