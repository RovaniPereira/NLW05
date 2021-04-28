import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

interface IUsersService{
    email: string
};

class UsersService{
    async create({email}){
        const userRepository = getCustomRepository(UserRepository); 
        
        const userJaExiste = await userRepository.findOne({
            where:{
                email
            }
        });
        if (!userJaExiste){
            const user = userRepository.create({email});
            userRepository.save(user);
            return user;
        }
        return userJaExiste;
    }
}
export {UsersService};