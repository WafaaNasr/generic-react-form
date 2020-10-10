

export enum MessageType {
    Info='info',
    Warning='warning',
    Error='error'
}

export type MessageProps = {
    messageType: MessageType,
    text: string
}

