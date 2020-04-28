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
  email: string;
  password: string;
}

export interface NewUser {
  privateName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
  confirmPassword: string;
  remmberMe:boolean;
}

export enum UserRole{
  other = 'אחר',
  advisor = 'יועץ/ת',
  mk = 'חבר כנסת',
  activist = 'אקטיביסט/ת',
}
