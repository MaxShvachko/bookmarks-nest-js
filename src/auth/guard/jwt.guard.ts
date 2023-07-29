import { AuthGuard } from '@nestjs/passport';

export class JwtGuar extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
