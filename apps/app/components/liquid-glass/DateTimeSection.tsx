import {
  DateTimePicker,
  DateTimePickerProps,
  Picker,
  Section,
  Text,
} from "@expo/ui/swift-ui";
import React, { use, useState } from "react";
import { AppContext } from "./AppContext";
import { AppState } from "./types";

export function DateTimeSection() {
  const { selectedDate, setSelectedDate } = use(AppContext) as AppState;
  const [pickerType, setPickerType] = useState(0);
  const [displayStyle, setDisplayStyle] = useState(0);

  const displayOptions = ["compact", "graphical", "wheel"];
  const typeOptions = ["date", "hourAndMinute", "dateAndTime"];

  return (
    <Section title="📅 Date & Time Management">
      <Text
        size={16}
      >{`Current Selection: ${selectedDate.toLocaleString()}`}</Text>

      <Picker
        label="Display Style"
        options={displayOptions}
        selectedIndex={displayStyle}
        onOptionSelected={({ nativeEvent: { index } }) => {
          setDisplayStyle(index);
        }}
        variant="segmented"
      />

      <Picker
        label="Picker Type"
        options={typeOptions}
        selectedIndex={pickerType}
        onOptionSelected={({ nativeEvent: { index } }) => {
          setPickerType(index);
        }}
        variant="segmented"
      />

      <DateTimePicker
        onDateSelected={(date) => {
          setSelectedDate(date);
        }}
        displayedComponents={
          typeOptions[pickerType] as DateTimePickerProps["displayedComponents"]
        }
        title="Select Date & Time"
        initialDate={selectedDate.toISOString()}
        variant={displayOptions[displayStyle] as DateTimePickerProps["variant"]}
      />
    </Section>
  );
}
