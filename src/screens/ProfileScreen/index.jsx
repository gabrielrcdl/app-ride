import * as React from "react";
import { Text, View } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import { styles } from "./styles";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderComponent title="Perfil" />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
