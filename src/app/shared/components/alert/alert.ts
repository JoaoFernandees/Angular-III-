export class Alert {

    constructor
    (
        public readonly alertType: AlertType, 
        public readonly message: string
    ) {}
}

export enum AlertType{

    SUCCSESS,
    WARNING,
    DANGER,
    INFO
}

