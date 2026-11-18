// url=<FIGMA_BUTTONS_BUTTON>
// source=https://github.com/prohila-figma/rescue-design-system/blob/main/src/ui/primitives/Button/Button.tsx
// component=Button
import figma from "figma";
const instance = figma.selectedInstance;
const variant = instance.getEnum("Variant", { Primary: "primary", Neutral: "neutral", Subtle: "subtle" });
const size = instance.getEnum("Size", { Medium: "medium", Small: "small" });
const isDisabled = instance.getEnum("State", { Default: false, Hover: false, Disabled: true });
const label = instance.getString("Label");
const start = instance.getInstanceSwap("Icon Start");
const end = instance.getInstanceSwap("Icon End");
const iconStart = instance.getBoolean("Has Icon Start") && start?.type === "INSTANCE" ? start.executeTemplate().example : undefined;
const iconEnd = instance.getBoolean("Has Icon End") && end?.type === "INSTANCE" ? end.executeTemplate().example : undefined;
export default {
  id: "Button",
  imports: ['import { Button } from "primitives";'],
  example: figma.code`<Button variant="${variant}" size="${size}" ${isDisabled ? "isDisabled" : ""}>${iconStart}${label}${iconEnd}</Button>`,
  metadata: { nestable: true },
};
