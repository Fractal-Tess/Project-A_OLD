export type Theme = 'dark' | 'light';

export type RegisterSchema = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type RecoveryUserStore = {
  email: string;
  showRecoveryCodeInput: false;
  recoveryCode: number;
};

export type LoginUserStore = {
  email: string;
  password: string;
};

export type UserStore = {
  username: string;
  isLoggedIn: false;
};

export type ServerStatus = boolean;

export type State = 'login' | 'register' | 'recovery';
