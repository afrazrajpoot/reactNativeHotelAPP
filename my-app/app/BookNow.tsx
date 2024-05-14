import COLORS from "@/constants/colors2";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const BookNow: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<Date>(new Date()); // New state for selected time
  const [isDatePickerVisible, setDatePickerVisibility] =
    useState<boolean>(false);
  const [isTimePickerVisible, setTimePickerVisibility] =
    useState<boolean>(false); // State for time picker visibility

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate: Date) => {
    console.warn("A date has been picked: ", selectedDate);
    setDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (selectedTime: Date) => {
    console.warn("A time has been picked: ", selectedTime);
    setTime(selectedTime);
    hideTimePicker();
  };

  const handleBookNow = () => {
    // Handle booking logic here
    console.log("Booking details:", { name, email, phone, date, time });
    // You can send this data to your backend or perform any other actions
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Now</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.dateButton} onPress={showDatePicker}>
        <Text style={styles.dateButtonText}>
          Selected Date: {date.toDateString()}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dateButton} onPress={showTimePicker}>
        <Text style={styles.dateButtonText}>
          {" "}
          Selected Time: {time.toLocaleTimeString()}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
      <TouchableOpacity style={styles.button} onPress={handleBookNow}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff", // Updated background color
    elevation: 3, // Add elevation (shadow)
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3498db", // Blue title color
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff", // White input background
  },
  dateButton: {
    backgroundColor: "#fff", // White input background
    // Same blue color as title
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  dateButtonText: {
    color: "black",
    fontSize: 16,
  },
  dateText: {
    width: "100%",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#3498db", // Same blue color as title
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BookNow;
