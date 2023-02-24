import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";

import Button from "./Button";

export default function MinToHrs() {
  // const [min, setMin] = useState("");
  // const [hrs, setHrs] = useState("");

  const [number, setNumber] = useState(0);
  const [invert, setInvert] = useState(false);

  const reset = () => {
    setNumber(0);
  };

  const onInvert = () => {
    setInvert((current) => !current);
  };
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
          editable={invert}
        />
        <TextInput
          style={styles.input}
          placeholder="Hrs"
          maxLength={7}
          onChange={setNumber}
          value={number}
          keyboardType="numeric"
          editable={!invert}
        />
      </View>
      <View style={styles.flex}>
        <Pressable style={styles.button} onPress={onInvert}>
          <Text style={styles.text}>Invert</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Reset</Text>
        </Pressable>
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
