import { Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem vindo!</Text>

      <InputComponent placeholder="Nome" />
      <InputComponent placeholder="E-mail" />
      <InputComponent placeholder="Telefone" />
      <InputComponent placeholder="Senha" />

      <ButtonComponent title="Cadastrar" screen="Home" />

      <View>
        <ButtonComponent title="Já tenho uma conta" screen="Login" />
      </View>
    </View>
  );
};

export default RegisterScreen;
