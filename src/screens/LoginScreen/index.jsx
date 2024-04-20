import { Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carona fácil</Text>
      <View style={styles.inputsContainer}>
        <InputComponent placeholder="E-mail" />
        <InputComponent placeholder="Senha" />
        <ButtonComponent title="Login" screen="Home" />
        <ButtonComponent title="Quero me cadastrar" screen="Register" />
      </View>
    </View>
  );
};

export default LoginScreen;
