import { Request } from 'express';
import { User } from 'src/types/user.type';

export interface UserRequest extends Request {
  user: User;
}
