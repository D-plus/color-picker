export default class Color {
  static rgbToHex({ r, g, b }) {
    const rgb = b | (g << 8) | (r << 16);
    return `#${(0x1000000 + rgb).toString(16).slice(1)}`;
  }

  static hexToRgb(hex) {
    let replacedHex;
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    replacedHex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      replacedHex
    );
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }
}
