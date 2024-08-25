import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [currentColor, setCurrentColor] = useState(color);

  const handleChangeComplete = (color: any) => {
    setCurrentColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div style={{ position: 'absolute', top: 20, right: 20 }}>
      <SketchPicker color={currentColor} onChangeComplete={handleChangeComplete} />
    </div>
  );
};

export default ColorPicker;
