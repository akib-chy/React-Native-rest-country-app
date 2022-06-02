import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
        setCountries(data);
      });
  }, []);
  const onChangeText = (text) => {
    const searchData = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearch(searchData);
  };
  return (
    <View>
      <Text style={styles.hello}>All Country {countries.length}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="useless placeholder"
      />
      <ScrollView style={styles.allCountry}>
        {search.map((country) => (
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
