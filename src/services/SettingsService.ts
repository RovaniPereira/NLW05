import {getCustomRepository} from "typeorm";
import {SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate{
    chat: boolean;
    username: string;
}
class SettingsService{

    async create({username, chat}: ISettingsCreate){
        const settingsRepository = getCustomRepository(SettingsRepository);
    
        const settings = settingsRepository.create({
            chat,
            username,
        });
        const usuarioJaExiste = settingsRepository.findOne({
            where:{
                username
            }
        });
        if (usuarioJaExiste){
            throw new Error("Usuário já existe!");
        }
        await settingsRepository.save(settings);

        return settings;
    }
}

export {SettingsService}