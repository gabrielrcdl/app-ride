import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/base";
import * as React from "react";
import { View } from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import RideInfoComponent from "../../components/RideInfoComponent";
import { styles } from "./styles";

const RideScreen = () => {
  const nav = useNavigation();

  return (
    <View style={styles.container}>
      <HeaderComponent title="MINHAS CARONAS" />

      <View style={styles.list}>
        <RideInfoComponent
          destination="CENTRO DE MESSIAS"
          date="10/10/2020"
          driver="Gabriel"
          contact="(82) 99388-0861"
          vacancies="5"
        />

        <RideInfoComponent
          destination="CENTRO DE MESSIAS"
          date="10/10/2020"
          driver="Gabriel"
          contact="(82) 99388-0861"
          vacancies="5"
        />
      </View>

      <View style={styles.buttons}>
        <Button
          radius={"sm"}
          type="solid"
          color="black"
          onPress={() => nav.navigate("Profile")}
        >
          <Icon name="person" color="white" />
        </Button>

        <Button
          radius={"sm"}
          type="solid"
          color="black"
          onPress={() => nav.navigate("Creation")}
        >
          <Icon name="add" color="white" />
        </Button>
      </View>
    </View>
  );
};

export default RideScreen;
