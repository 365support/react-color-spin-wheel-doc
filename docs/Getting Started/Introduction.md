---
sidebar_position: 1
---

```jsx live
function Wheel() {
  const wheelColors = ["MistyRose", "Wheat", "lightblue", "Khaki", "Lavender"];

  const [selectedColor, setSelectedColor] = useState("휠을 돌려보세요.");

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "25px",
  };

  const colorDisplayStyle = {
    color: selectedColor,
    border: `2px solid ${selectedColor}`,
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={wrapperStyle}>
      <SpinWheel
        colors={wheelColors}
        lineWeight={4}
        onColorSelect={(color) => {
          setSelectedColor(color);
        }}
        initialRotationDegree={0}
        extractionDegrees={0}
        size={300}
      />
      <div style={colorDisplayStyle}>selectedColor: {selectedColor}</div>
    </div>
  );
}
```
