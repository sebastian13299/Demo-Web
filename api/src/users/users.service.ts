import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private USERS = [
    {
      id: 1,
      name: 'José Arturo García Rodríguez',
    },
    {
      id: 2,
      name: 'Mariano Espinoza',
    },
    {
      id: 3,
      name: 'Katherine Alpízar',
    },
  ];

  getAllUsers() {
    return this.USERS;
  }
}
