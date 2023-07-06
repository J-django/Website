export interface menuGroupActive {
    path: String,
    checked: Boolean
}

export interface IResponseData<T> {
    code: number;
    data: T;
    message: string;
}

export interface ChatGPT {
    content: String,
}

export interface ChatResponse {
    id: String,
    object: String,
    created: Number,
    choices: Choices[],
    usage: Usage
}

export interface Choices {
    index: Number,
    message: Message,
    finish_reason: String
}

export interface Message {
    role: String,
    content: string
}

export interface Usage {
    prompt_tokens: Number,
    completion_tokens: Number,
    total_tokens: Number
}

export interface Dialogue {
    id: String,
    name: String
}

export interface Answer {
    waiting: Boolean,
    abnormal: Boolean,
    request: Request,
    response: Response
}

interface Request extends Time {
    content: String
}

interface Response extends Time {
    content: String,
}

interface Time {
    time: String
}

