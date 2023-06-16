export const requiredField = (value: string) => {
    if (value) {
        return undefined
    } else {
        return `${value} is wrong`
    }
}

export const maxLength = (size: number ) => {
    return (value: string) => {
        if (value && value.length < size) {
            return undefined
        } else {
            return `Max length ${size} symbol`
        }
    }
}
