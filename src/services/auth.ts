export const validatePassword = (password: string) => {
    const currentPassword = Intl.DateTimeFormat('pt-br').format(new Date()).split('/').join('');
                                                        // 10/02/2003 --> [ 10, 02, 2023] --> 10022023

   return password === currentPassword;                                             
}

export const createToken = () => {
    const currentPassword = Intl.DateTimeFormat('pt-br').format(new Date()).split('/').join('');
    return `${process.env.DEFAULT_TOKEN}${currentPassword}`;
}

export const validateToken = (token: string) => {
    const currentToken = createToken();
    return token === currentToken;
}