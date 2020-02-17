
export const truncate = (string:string, max: number) => {
    if(string.length < max) return string
    return string.substring(0, max) + "..."
}