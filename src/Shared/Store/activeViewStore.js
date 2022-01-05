import create from "zustand";

const activeViewStore = create((set) => ({
  activeView: "home",
  setActiveView: (val) => set((state) => ({ activeView: val })),
}));

export default activeViewStore;
