import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const LoginScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../../assets/car.png")}
        />
        <Text style={styles.title}>Carona fácil</Text>
      </View>

      <View style={styles.inputsContainer}>
        <InputComponent placeholder="E-mail" icon="alternate-email" />
        <InputComponent placeholder="Senha" icon="lock" secureTextEntry />

        <View style={styles.button}>
          <ButtonComponent title="Entrar" screen="Ride" />
        </View>

        <View style={styles.registerContainer}>
          <Text>Não tem conta?</Text>

          <TouchableOpacity onPress={() => nav.navigate("Register")}>
            <Text style={{ fontWeight: "bold" }}>Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
