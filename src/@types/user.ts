export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: number;
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
}
