import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import {UserService} from "../user/user-service";
import {UnauthorizedException} from "@nestjs/common";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(payload: any) {
    const user = await this.userService.validateUser(payload.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user
  }
}
