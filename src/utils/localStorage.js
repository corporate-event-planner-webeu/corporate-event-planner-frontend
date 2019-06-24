export const set = (name, value) => {
    let savedValue;
    if(typeof(value !== 'string')) {
        savedValue = JSON.stringify(value); 
    } else {
        savedValue = value;
    }
    localStorage.setItem(name, savedValue)
}


export const get = (name) => {
    const item = localStorage.getItem(name);
    return item;
}