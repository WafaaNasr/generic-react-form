export interface IRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export class RegisterUser implements IRegister {
    constructor(public firstName: string, public lastName: string, public email: string, public password: string) {}
}
