export const replaceSpaceFor = (string, forThis) => {
    return string.replace(/\s+/g, forThis)
}

export const removeSpecialCharacters = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, '')
}

export const cleanString = (string) => {
    const clean = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    return clean.replace(/\s+/g, '-').toLowerCase()
}

export const cleanSearch = (string) => {
    const clean = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
    return clean.replace(/\s+/g, '').toLowerCase()
}
