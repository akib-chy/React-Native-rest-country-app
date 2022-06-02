import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Countries from "./Components/Countries";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTag}>Welcome To My Rest Country</Text>
      <Countries />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 50,
  },
  headerTag: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
  },
});
