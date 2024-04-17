import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem vindo!</Text>
      <TextInput placeholder="Nome completo" style={styles.inputs}></TextInput>
      <TextInput
        placeholder="Seu melhor e-mail"
        style={styles.inputs}
      ></TextInput>
      <TextInput placeholder="Telefone" style={styles.inputs}></TextInput>

      <StatusBar style="auto" />

      <View>
        <Button backgroundColor="red" title="Já tenho uma conta"></Button>
        <Button style={styles.button} title="Quero me cadastrar"></Button>
      </View>
    </View>
  );
}

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

  inputs: {
    width: 380,
    height: 60,
    padding: 10,
    borderRadius: 7,
    borderColor: "gray",
    borderWidth: 1,
  },
});
