import {create} from "zustand";

const useAuthStore = create ((set) => ({
    
    user: null,
    token: null,
    isAuthenticated: false,

    login: (userData) => 
        set({
            user: userData,
            token: userData.token,
            isAuthenticated: true,
        }),
    
    logout: () => 
        set({
            user: null,
            token: null,
            isAuthenticated: false,
        })

}))

export default useAuthStore;