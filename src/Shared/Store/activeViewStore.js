import create from "zustand";

const activeViewStore = create((set) => ({
  activeView: "Home",
  setActiveView: (val) => set((state) => ({ activeView: val })),
}));

export default activeViewStore;
