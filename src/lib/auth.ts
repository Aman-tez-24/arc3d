export const auth = {
  login: (user: any) => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  getUser: () => {
    if (typeof window === "undefined") return null;
    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;
  },
};