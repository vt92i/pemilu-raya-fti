import { atom } from "recoil";


export const teaserRef = atom({
  key: "teaserRef",
  default: HTMLDivElement,
});

export const kandidatRef = atom({
  key: "kandidatRef",
  default: {
    ref: "",
  },
});

export const timelineRef = atom({
  key: "timelineRef",
  default: {
    ref: "",
  },
});
