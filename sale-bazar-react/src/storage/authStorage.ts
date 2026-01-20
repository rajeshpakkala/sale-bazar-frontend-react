const TOKEN_KEY = "token";
const ROLES_KEY = "roles";

export const authStorage = {
  setAuth(token: string, roles: string[]) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ROLES_KEY, JSON.stringify(roles));
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },

  getRoles(): string[] {
    return JSON.parse(localStorage.getItem(ROLES_KEY) || "[]");
  },

  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ROLES_KEY);
  },
};
