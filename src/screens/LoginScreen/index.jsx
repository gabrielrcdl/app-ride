import { Text, View, Image, TouchableOpacity  } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import InputComponent from "../../components/InputComponent";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const LoginScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../../assets/car.png')} />
      <Text style={styles.title}>Carona fácil</Text>
      <View style={styles.inputsContainer}>
        <InputComponent styles={styles.placeColor} placeholder="E-mail" />
        <InputComponent styles={styles.placeColor} placeholder="Senha" />
        <ButtonComponent styles={styles.placeColor} title="Entrar" screen="Home" />
       
        <View style={styles.registerContainer}>
          <Text>Não tem conta?</Text>

          <TouchableOpacity
            onPress={() => nav.navigate("Register")}
          >
            <Text>Cadastre-se!</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </View>
  );
};

export default LoginScreen;
