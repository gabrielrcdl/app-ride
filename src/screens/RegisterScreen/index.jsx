import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from '../../components/InputComponent';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem vindo!</Text>

      <InputComponent placeholder="Nome completo" />
      <InputComponent placeholder="Seu melhor e-mail" />
      <InputComponent placeholder="Telefone" />
      <InputComponent placeholder="Senha" />

      <ButtonComponent title="Cadastrar" />

      <View>
        <ButtonComponent title="Já tenho uma conta" /> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    marginBottom: 60,
  },
  container: {
    flex: 1,
    gap: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RegisterScreen;
