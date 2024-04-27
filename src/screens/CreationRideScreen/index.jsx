import { Text, View } from "react-native";
import ButtonComponent from "../../components/ButtonComponent";
import HeaderComponent from "../../components/HeaderComponent";
import InputComponent from "../../components/InputComponent";
import { styles } from "./styles";

const CreationRideScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title="CRIAÇÂO DE CARONA" />

      <Text>DADOS DO MOTORISTA</Text>

      <View style={styles.inputContainer}>
        <InputComponent placeholder="Nome" icon="person" style={styles.input} />
        <InputComponent placeholder="E-mail" icon="alternate-email" />
        <InputComponent placeholder="Senha" icon="lock" />
      </View>

      {/* <Text style={styles.title}>DADOS DA CARONA</Text> */}

      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row" }}>
          <InputComponent placeholder="DATA" icon="person" />
          <InputComponent placeholder="HORA" icon="person" />
        </View>

        <View style={{ flexDirection: "row" }}>
          <InputComponent placeholder="DESTINO" icon="person" />
          <InputComponent placeholder="VAGAS" icon="person" />
        </View>
      </View>

      <Text style={styles.id}>ID: CARONA001</Text>

      <ButtonComponent title="Criar" screen="Ride" />
    </View>
  );
};

export default CreationRideScreen;
