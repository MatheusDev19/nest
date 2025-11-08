import { Module } from "@nestjs/common";
import { userProviders } from "../providers/user.providers";
import { UserService } from "../services/user.service";
import { UserController } from "../controller/user.controller";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders
    ]
})
export class UserModule {}