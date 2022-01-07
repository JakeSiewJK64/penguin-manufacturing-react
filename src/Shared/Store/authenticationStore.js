import create from "zustand";

const authenticationStore = create((set) => ({
  isLoggedIn: localStorage.getItem("token") ? true : false,
  setLoggedIn: (val) => set((state) => ({ isLoggedIn: val })),
  currentUserSession: null,
  setCurrentUser: (val) =>
    set((state) => ({
      currentUserSession: {
        username: val !== null ? val.username : null,
        userrole: val !== null ? val.role : null,
      },
    })),
}));

export default authenticationStore;
