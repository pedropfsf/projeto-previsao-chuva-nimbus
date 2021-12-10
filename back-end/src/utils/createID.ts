function createID() {
    const numberRandom = Math.floor(Math.random() * 10);
    const numberRandomString = String(numberRandom);
    return numberRandomString.slice(2, numberRandomString.length);
}

export default createID;