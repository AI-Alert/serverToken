import { Injectable } from '@nestjs/common';

@Injectable()
export class TokenhashService {


    // async refreshTokens(userId: number, rt: string): Promise<Tokens> {
    //     const user = await this.prisma.user.findUnique({
    //         where: {
    //             id: userId,
    //         },
    //     });
    //     if (!user || !user.hashedRt) throw new ForbiddenException('Access Denied');
    //
    //     const rtMatches = await argon.verify(user.hashedRt, rt);
    //     if (!rtMatches) throw new ForbiddenException('Access Denied');
    //
    //     const tokens = await this.getTokens(user.id, user.email);
    //     await this.updateRtHash(user.id, tokens.refresh_token);
    //
    //     return tokens;
    // }
    //
    // async updateRtHash(userId: number, rt: string): Promise<void> {
    //     const hash = await argon.hash(rt);
    //     await this.prisma.user.update({
    //         where: {
    //             id: userId,
    //         },
    //         data: {
    //             hashedRt: hash,
    //         },
    //     });
    // }
    //
    // async getTokens(userId: number, email: string): Promise<Tokens> {
    //     const jwtPayload: JwtPayload = {
    //         sub: userId,
    //         email: email,
    //     };
    //
    //     const [at, rt] = await Promise.all([
    //         this.jwtService.signAsync(jwtPayload, {
    //             secret: this.config.get<string>('AT_SECRET'),
    //             expiresIn: '15m',
    //         }),
    //         this.jwtService.signAsync(jwtPayload, {
    //             secret: this.config.get<string>('RT_SECRET'),
    //             expiresIn: '7d',
    //         }),
    //     ]);
    //
    //     return {
    //         access_token: at,
    //         refresh_token: rt,
    //     };
    // }


}
