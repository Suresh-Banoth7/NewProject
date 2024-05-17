
export function emailValidation(email){

    var emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return emailregex.test(email)
}

