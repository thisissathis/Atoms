import s, { forwardRef as r } from "react";
const l = r((t, n) => {
  const { variant: a, ...o } = t, e = {
    lite: "button-lite",
    dark: "button-dark",
    black: "button-black"
  }[a];
  return /* @__PURE__ */ s.createElement("button", { ref: n, className: e, ...o });
});
export {
  l as Button
};
