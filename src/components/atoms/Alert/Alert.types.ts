export enum MessageType {
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
    Success='success'
}

export type MessageProps = {
    messageType: MessageType;
    text: string;
};
