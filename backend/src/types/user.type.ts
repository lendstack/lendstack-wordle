export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  hashPassword: string;
  firstName?: string | null;
  lastName?: string | null;
};
