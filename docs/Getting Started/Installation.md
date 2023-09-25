---
id: installation
title: Installation
sidebar_label: Installation
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Installation

React, React DOM, @emotion/react, @emotion/styled 는 peerDependencies 입니다.

<Tabs>
<TabItem value="npm" label="npm">

```bash
npm install react react-dom @emotion/react @emotion/styled react-color-spin-wheel
```

</TabItem>
<TabItem value="yarn" label="yarn">

```bash
yarn add react react-dom @emotion/react @emotion/styled react-color-spin-wheel
```

</TabItem>

</Tabs>

## The gist

```jsx live
function Wheel() {
  const wheelColors = ["MistyRose", "Wheat", "lightblue", "Khaki", "Lavender"];

  const [selectedColor, setSelectedColor] = useState("");

  return (
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
  );
}
```
