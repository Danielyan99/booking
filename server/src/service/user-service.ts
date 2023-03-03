import {Injectable} from "@nestjs/common";
import {UserDto} from "../dtos/user-dto";

@Injectable()
export class UserService {
  // constructor(props) {
  //   // private userService: UserService
  //
  // }


  signup(dto: UserDto) {
    console.log('signup')
  }
  signin() {
    // console.log('signin')
    return 'signIN'
  }
  logout() {
    console.log('logout')
  }
  refresh() {
    console.log('refresh')
  }
  validateUser(username) {
    console.log('Validate User')
    return {user: 'asdasdasd'}
  }
}