export const requiredField = (value) => {
    if (value) return undefined
    return 'req field';
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return 'error maxlength'
    }
    return undefined
}



