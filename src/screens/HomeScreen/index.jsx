import { Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import { styles } from "./styles";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <ButtonComponent title="perfil" screen="Profile"/>
    </View>
  );
};

export default HomeScreen;
