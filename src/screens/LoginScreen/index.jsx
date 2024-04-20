import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";

const LoginScreen = () => {

  return (
    <View style={styles.container}>
     


      <Text style={styles.title}>Carona fácil</Text>
      <View style={styles.inputsContainer}>

      <InputComponent placeholder="E-mail" />
      <InputComponent placeholder="Senha" />
      <ButtonComponent title="Login" screen="Login" />
        <ButtonComponent title="Quero me cadastrar" screen="Register" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 300,
    fontSize: 30,
    textTransform: 'uppercase'
  },
  container: {
    flex: 2,
    gap: 200,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  inputsContainer: {
    backgroundColor: "#fff",
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 600,
    borderTopRightRadius: '50px',
    borderTopLeftRadius: '50px',
    width: '100%',
    
  }
});

export default LoginScreen;
