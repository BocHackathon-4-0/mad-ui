export function isObjectEmpty(obj: any): boolean {
    const keys = Object.keys(obj);
    return keys.length === 0;
}

export function toArray(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}
