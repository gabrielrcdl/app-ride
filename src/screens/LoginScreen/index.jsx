import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <InputComponent placeholder="E-mail" />
      <InputComponent placeholder="Senha" />

      <ButtonComponent title="Login" screen="Login" />

      <View>
        <ButtonComponent title="Quero me cadastrar" screen="Register" />
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

export default LoginScreen;
