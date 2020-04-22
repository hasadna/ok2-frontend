export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  token:string;
  isActive:boolean;
  // role:string;
}

export interface CredentialRequest {
  username: string;
  password: string;
}

export interface NewUser {
  privateName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export enum UserRole{
  other = 'אחר',
  advisor = 'יועץ/ת',
  mk = 'חבר כנסת',
  activist = 'אקטיביסט/ת',
}
