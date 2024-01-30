export interface Authenticated {
  id: number;
  username: string;
  firstName: string;
  lastName?: string;
  email: string;
  status: string;
  isActive: boolean;
  roles: string[];
  token: string;
}
