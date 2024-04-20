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
    paddingVertical: 15,
    paddingHorizontal: 20,
    width:200,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "black",
  },
  buttonText: {
    color: "white",
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
