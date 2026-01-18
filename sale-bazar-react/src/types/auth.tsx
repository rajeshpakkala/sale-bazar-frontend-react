export interface AuthResponse<T> {
  status: boolean;
  responseCode: number;
  message: string;
  data: T;
}

export interface LoginResponse {
  email: string;
  role: string;
  token: string;
}
