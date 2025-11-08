import { Module } from "@nestjs/common";
import { userProviders } from "src/providers/user.providers";
import { UserService } from "src/services/user.service";
import { DatabaseModule } from "./database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders
    ]
})