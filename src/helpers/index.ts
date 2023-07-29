export const setFirstLetterOfTheStringToCapital = (str: string): string => {
    const newStr = `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;
    
    return newStr
};
