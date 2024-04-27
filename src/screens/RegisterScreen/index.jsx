import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import HeaderComponent from "../../components/HeaderComponent";
import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const RegisterScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderComponent title="Cadastro"/>

      <View style={styles.inputsContainer}>
        <InputComponent placeholder="Nome" icon="person" />
        <InputComponent placeholder="Celular" icon="phone" />
        <InputComponent placeholder="E-mail" icon="alternate-email" />
        <InputComponent placeholder="Senha" icon="lock" />
      </View>
      
      <CheckBox title="Sou um motorista" />

      <View style={styles.submit}>
        <ButtonComponent title="Criar" screen="Ride" />

        <View style={styles.registerContainer}>
          <Text>Já tem um conta?</Text>

          <TouchableOpacity onPress={() => nav.navigate("Login")}>
            <Text style={{ fontWeight: "bold" }}>Clique aqui!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
