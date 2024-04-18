import { StyleSheet, TextInput } from "react-native";

const InputComponent = (props) => {
  return <TextInput placeholder={props.placeholder} style={styles.inputs}/>;
};

const styles = StyleSheet.create({
  inputs: {
    width: 380,
    height: 60,
    padding: 10,
    borderRadius: 7,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default InputComponent;
