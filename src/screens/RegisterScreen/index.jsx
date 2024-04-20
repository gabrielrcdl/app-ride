import { Text, View, TouchableOpacity } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const RegisterScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Cadastro</Text>
      </View>

      <InputComponent styles={styles.placeColor} placeholder="Nome" />
      <InputComponent styles={styles.placeColor} placeholder="Celular" />
      <InputComponent styles={styles.placeColor} placeholder="E-mail" />
      <InputComponent styles={styles.placeColor} placeholder="Senha" />

      <ButtonComponent title="Criar" screen="Home" />

      <View style={styles.registerContainer}>
          <Text>Já tem um conta?</Text>

          <TouchableOpacity
            onPress={() => nav.navigate('Login')}
          >
            <Text>Clique aqui!</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default RegisterScreen;
