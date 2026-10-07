export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  data?: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}
