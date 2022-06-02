import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";

export default function Country({ country }) {
  return (
    <View style={styles.items}>
      <Text style={styles.title}>Name: {country.name?.common}</Text>
      <Text style={styles.title}>Capital: {country.capital}</Text>
      <Image
        source={{
          uri: country?.flags?.png,
        }}
        style={{ width: 400, height: 200 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  items: {
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 10,
    paddingTop: 10,
  },
  title: {
    color: "red",
    fontWeight: "900",
    marginBottom: 10,
  },
});
