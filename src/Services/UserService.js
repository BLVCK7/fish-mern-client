import $api from '../axios';

export default class UserService {
  static fetchUsers() {
    return $api.get('/users');
  }
}


