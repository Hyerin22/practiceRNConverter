import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

import Button from "./Button";

export default function MinToHrs() {
  // const [min, setMin] = useState("");
  // const [hrs, setHrs] = useState("");

  const [number, setNumber] = useState(0);
  const [invert, setInvert] = useState(true);

  const reset = () => {
    setNumber(0);
  };

  const onInvert = () => {};
  const convert = () => {
    setInvert((current) => !current);
  };
  return (
    <View style={styles.container}>
      <Text>Min To Hrs</Text>
      <View>
        <TextInput
          style={[styles.input, { backgroundColor: !invert ? "silver" : null }]}
          placeholder="Min"
          maxLength={7}
          onChange={setNumber}
          value={number}
          keyboardType="numeric"
          editable={invert}
        />
        <Pressable style={styles.button} onPress={convert}>
          <Text style={styles.text}>Convert</Text>
        </Pressable>
        <TextInput
          style={[styles.input, { backgroundColor: invert ? "silver" : null }]}
          placeholder="Hrs"
          maxLength={7}
          onChange={setNumber}
          value={number}
          keyboardType="numeric"
          editable={!invert}
        />
      </View>
      <Pressable style={[styles.button, { backgroundColor: "skyblue" }]}>
        <Text style={styles.text}>Reset</Text>
      </Pressable>
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
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: "white",
  },
});
