import { colorInverter } from "./color-inverter";

export const generateBlockStyles = (hex) => ({
  background: hex,
  color: colorInverter(hex, true)
});