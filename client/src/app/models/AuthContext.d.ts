export interface AuthContextTypes {
  user: User | null;
  error: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
  signUp: (value: FormValues) => void;
  signIn: (value: LoginValues) => void;
  logOut: () => void;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  name: string;
  day: string;
  month: string;
  year: string;
}
