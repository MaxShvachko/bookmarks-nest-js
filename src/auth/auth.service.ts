import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async signup(dto: AuthDto) {
    try {
      const hash = await argon.hash(dto.password);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      delete user.hash;

      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credentials already been taken',
          );
        }
      } else {
        throw error;
      }
    }
  }

  async signin(dto: AuthDto) {
    try {
      const user =
        await this.prisma.user.findUnique({
          where: { email: dto.email },
        });

      if (!user) {
        throw new ForbiddenException(
          'Credential incorrect',
        );
      }

      const pwMatches = await argon.verify(
        user.hash,
        dto.password,
      );

      if (!pwMatches) {
        throw new ForbiddenException(
          'Credential incorrect',
        );
      }

      return this.signToken(user.id, user.email);
    } catch (error) {
      throw error;
    }
  }

  async signToken(userId: number, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(
      payload,
      {
        expiresIn: '15m',
        secret: process.env.JWT_SECRET,
      },
    );

    return { access_token: token };
  }
}
