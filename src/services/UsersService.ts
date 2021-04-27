import { UsersRepository } from "../repositories/UserRepository";

interface IUsersService{
    email: string
};

class UsersService{
    async create({email}){
        const userRepository = new UsersRepository(); 
        const userJaExiste = await userRepository.findOne({
            email
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