export type User = {
  id: number;
  name: string;
  email: string;
  gender: string;
  active: string;
};

export type InitialState = {
  loading: boolean;
  error: string;
  users: User[];
};
