import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  Button
} from "react-native";
import React, { Component, useState } from "react";
import { Picker } from "@react-native-picker/picker";

const Home = () => {
  // 1. Radio Button State (Memory)
  const [radioChoice, setRadioChoice] = useState("Pick Options to display");

  // 2. Dropdown State (Memory)
  const [dropdownChoice, setDropdownChoice] = useState("Null");

  // 3. Alert Function
  const showAlert = () => {
    Alert.alert(
      "Summary of Choices",
      `Radio Choice: ${radioChoice}\nDropdown Color: ${dropdownChoice}`,
      [{ text: "OK" }]
    );
  };

  async function handleWebPress() {
    const url = "https://www.srh-university.de/de/";
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Error", "Unable to open the link");
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Image
        source={require("../assets/images/srh_logo.png")}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        placeholder="Enter something"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          marginTop: 20,
          paddingLeft: 10,
        }}
      />
      <TouchableOpacity onPress={handleWebPress}>
        <Text style={styles.text}>Tap this card to open the website</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Demo</Text>

      {/* 1. RADIO BUTTONS WITH STYLE */}
      <Text style={styles.sectionTitle}>1. Choose an Option:</Text>
      {/* Radio Option 1 */}
      <TouchableOpacity
        style={styles.radioRow}
        onPress={() => setRadioChoice("A")}
      >
        <View style={styles.radioOuterCircle}>
          {/* Apply inner dot style ONLY if radioChoice is 'A' */}
          {radioChoice === "A" && <View style={styles.radioInnerDot} />}
        </View>
        <Text style={styles.radioText}>Option A</Text>
      </TouchableOpacity>

      {/* Radio Option 2 */}
      <TouchableOpacity
        style={styles.radioRow}
        onPress={() => setRadioChoice("B")}
      >
        <View style={styles.radioOuterCircle}>
          {/* Apply inner dot style ONLY if radioChoice is 'B' */}
          {radioChoice === "B" && <View style={styles.radioInnerDot} />}
        </View>
        <Text style={styles.radioText}>Option B</Text>
      </TouchableOpacity>

      <Text style={styles.statusText}>Your Selection: {radioChoice}</Text>

      <View style={styles.divider} />

      {/* ----------------------------------- */}
      {/* 2. DROPDOWN WITH STYLE */}
      {/* ----------------------------------- */}
      <Text style={styles.sectionTitle}>2. Choose a Color:</Text>

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={dropdownChoice}
          onValueChange={(itemValue) => setDropdownChoice(itemValue)}
          style={styles.picker} // Apply specific style to the Picker
        >
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="Blue" value="blue" />
          <Picker.Item label="Yellow" value="yellow" />
        </Picker>
      </View>

      <Text style={styles.statusText}>Current Color: {dropdownChoice}</Text>

      <View style={styles.divider} />

      {/* ----------------------------------- */}
      {/* 3. ALERT BUTTON */}
      {/* ----------------------------------- */}
      <Button
        title="Show Summary Alert"
        onPress={showAlert}
        color="#007AFF" // iOS blue color
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the whole screen
    padding: 30,
    backgroundColor: "#fff",
    justifyContent: "center", // Center content vertically
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
    color: "#555",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 30,
  },
  statusText: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    fontSize: 14,
    color: "#666",
  },

  // --- Radio Button Styles ---
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioOuterCircle: {
    height: 24,
    width: 24,
    borderRadius: 12, // Makes it a perfect circle
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  radioInnerDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#007AFF", // The filled color
  },
  radioText: {
    fontSize: 16,
    color: "#333",
  },

  // --- Picker/Dropdown Styles ---
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden", // Ensures the border wraps the picker cleanly
    backgroundColor: "#f8f8f8",
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    color: "#333",
  },
});
