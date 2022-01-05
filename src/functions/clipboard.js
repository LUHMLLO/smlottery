export const copyToClipboard = (StringToCopy) => {
    navigator.clipboard.writeText(StringToCopy).catch((error) => {
        console.log(error)
    })
}
