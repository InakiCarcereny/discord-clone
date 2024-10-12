export interface FormValues {
  email: string;
  username: string;
  password: string;
  name: string;
  day: string;
  month: string;
  year: string;
}

export type LoginValues = FormValues<Pick, "username" | "password">;
