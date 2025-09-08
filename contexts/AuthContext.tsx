import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  isLoading: boolean;
  isAuthenticated: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AUTH_STORAGE_KEY = "@auth_state";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load auth state from storage on mount
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedAuth = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (storedAuth) {
          const { isAuthenticated: storedIsAuthenticated } =
            JSON.parse(storedAuth);
          setIsAuthenticated(storedIsAuthenticated);
        }
      } catch (error) {
        console.log("Error loading auth state:", error);
      } finally {
        setIsInitialized(true);
      }
    };

    loadAuthState();
  }, []);

  // Save auth state to storage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      const saveAuthState = async () => {
        try {
          await AsyncStorage.setItem(
            AUTH_STORAGE_KEY,
            JSON.stringify({ isAuthenticated })
          );
        } catch (error) {
          console.log("Error saving auth state:", error);
        }
      };
      saveAuthState();
    }
  }, [isAuthenticated, isInitialized]);

  const login = async () => {
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 500);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    } catch (error) {
      console.log("Error clearing auth state:", error);
    }
  };

  const value = {
    isLoading,
    isAuthenticated,
    login,
    logout,
  };

  // Don't render children until auth state is loaded
  if (!isInitialized) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
