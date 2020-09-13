const names =  require('./data/names.json');

const random = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(names.length));
    return names[randomIndex];
}

module.exports = random;



