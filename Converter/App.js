import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

import MinToHrs from "./components/MinToHrs";

export default function App() {
  // const [counter, setCounter] = useState(0);
  const [selected, setSelected] = useState();

  const data = [
    { key: "1", value: "Min to Hrs" },
    { key: "2", value: "Kg to Lb" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Super Convert</Text>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        maxHeight={80}
      />
      <MinToHrs />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    top: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});
