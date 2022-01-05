import create from "zustand";

const authenticationStore = create((set) => ({
  isLoggedIn: localStorage.getItem("token") ? true : false,
  setLoggedIn: (val) => set((state) => ({ isLoggedIn: val })),
}));

export default authenticationStore;
