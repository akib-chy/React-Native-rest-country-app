import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <View>
      <Text style={styles.hello}>All Country {countries.length}</Text>
      <ScrollView style={styles.allCountry}>
        {countries.map((country) => (
          <Country key={country.id} country={country} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  hello: {
    fontSize: 30,
    color: "green",
    textAlign: "center",
  },
  allCountry: {
    paddingHorizontal: 20,
  },
});
