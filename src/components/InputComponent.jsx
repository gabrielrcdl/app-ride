import { MaterialIcons } from "@expo/vector-icons";
import { Input } from "@rneui/base";
import { StyleSheet, View } from "react-native";

const InputComponent = ({ icon, type, ...rest }) => {
  return (
    <View style={styles.container}>
      <Input
        leftIcon={<MaterialIcons name={icon} size={24} color="black" />}
        {...rest}
        inputContainerStyle={{borderBottomWidth: 0}}
        style={styles.inputs}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    padding: 10
  },
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20
  },
});

export default InputComponent;
