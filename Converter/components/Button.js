import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function Button({}) {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>{counter}</Text>
      <View style={styles.flex}>
        <Pressable style={styles.button} onPress={onClick}>
          <Text style={styles.text}>click me</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={reset}>
          <Text style={styles.text}>reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItem: "center",
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
