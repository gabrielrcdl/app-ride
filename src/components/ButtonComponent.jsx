import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonComponent = (props) => {
  const nav = useNavigation();
  
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => nav.navigate(props.screen)}
    >
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
    backgroundColor: "#4F46E5",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
