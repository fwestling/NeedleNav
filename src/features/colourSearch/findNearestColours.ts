import * as colorDiff from "color-diff";
import colours from "../dmc-table/dmcColours.json";

interface Color extends colorDiff.RGBColor {}

export default function findNearestColours(
  targetColour: colorDiff.RGBColor,
  numColours: number
): typeof colours {
  const deltaEList = [];
  for (const color of colours) {
    const deltaE = colorDiff.diff(
      colorDiff.rgb_to_lab(targetColour),
      colorDiff.rgb_to_lab({ R: color.red, G: color.green, B: color.blue })
    );
    deltaEList.push({ deltaE, color });
  }
  const sortedDeltaEList = deltaEList.sort((a, b) => a.deltaE - b.deltaE);
  const closestColors = sortedDeltaEList
    .slice(0, numColours)
    .map((d) => d.color);
  return closestColors;
}
