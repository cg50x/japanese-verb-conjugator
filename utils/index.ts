
export function endsWith(inputString, suffix: string): boolean {
    return inputString.substr(-1 * suffix.length) === suffix;
}
