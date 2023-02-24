import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

import Button from "./Button";

export default function MinToHrs() {
  // const [min, setMin] = useState("");
  // const [hrs, setHrs] = useState("");

  const [number, setNumber] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Min To Hrs</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Min"
          maxLength={7}
          onChange={setNumber}
          value={number}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Hrs"
          maxLength={7}
          onChange={setNumber}
          value={number}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 5,
    width: 150,
    borderWidth: 1,
  },
});
