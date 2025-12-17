import { create } from "zustand";
import axios from "axios";

const useUsersStore = create((set) => ({
  users: [],
  selectedUser: null,
  loading: false,

  fetchUsers: async () => {
    set({ loading: true });

    try {
      const url = `https://dummyjson.com/users?limit=100`;

      const res = await axios.get(url);

      set({
        users: res.data.users,
        total: res.data.total,
        loading: false
      });
    } catch (error) {
      console.error("Failed to fetch users", error);
      set({ loading: false });
    }
  },

  fetchUserById: async (id) => {
    set({ loading: true });

    try {
      const res = await axios.get(
        `https://dummyjson.com/users/${id}`
      );

      set({
        selectedUser: res.data,
        loading: false
      });
    } catch (error) {
      console.error("Failed to fetch user", error);
      set({ loading: false });
    }
  } 

  
}));

export default useUsersStore;
