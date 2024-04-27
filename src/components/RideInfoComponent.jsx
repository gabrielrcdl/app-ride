import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const RideInfoComponent = ({
  destination,
  driver,
  contact,
  vacancies,
  date,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ color: "green" }}>DESTINO</Text>
        <Text style={styles.destination}>{destination}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.driver}>MOTORISTA: {driver}</Text>
        <Text style={styles.contact}>CONTATO: {contact}</Text>
        <Text style={styles.seats}>VAGAS: {vacancies} PESSOAS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  destination: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    color: "green",
    fontSize: 16,
    marginBottom: 8,
  },
  driver: {
    color: "black",
    fontSize: 10,
    marginBottom: 8,
  },
  contact: {
    color: "black",
    fontSize: 10,
    marginBottom: 8,
  },
  seats: {
    color: "black",
    fontSize: 10,
  },
});

export default RideInfoComponent;
