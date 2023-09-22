import React, { useState } from "react";
import { SpinWheel } from "react-color-spin-wheel";

const wheelColors = [
  "red",
  "green",
  "blue",
  "black",
  "skyblue",
  "gray",
  "purple",
];

export default function Test({ children, color }) {
  const [selectedWheelColor, setSelectedWheelColor] = useState("---");
  const [lineWeight, setLineWeight] = useState(4);
  const [initialRotationDegree, setInitialRotationDegree] = useState(22);
  const [extractionDegrees, setExtractionDegrees] = useState(0);
  const onColorSelect = (color) => {
    setSelectedWheelColor(color);
  };

  return (
    <SpinWheel
      colors={wheelColors}
      lineWeight={lineWeight}
      onColorSelect={onColorSelect}
      initialRotationDegree={200}
      extractionDegrees={extractionDegrees}
      size={200}
    />
  );
}
