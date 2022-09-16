import { IUser } from "src/app/interfaces/user";


export interface IUserState {
  currentUser: IUser | null
};

export const initialUserState: IUserState = {
  currentUser: null
}