const { get } = require("http")

const myDate = () => {
  return new Date();
}

const myValue = () => "This is my value"


const getCookies = () => {
    const expireDate = new Date();

    const oneDayMilliseconds = 24 * 60 * 60 * 1000;

    expireDate.setTime(expireDate.getTime() + oneDayMilliseconds)

    return {
        name: 'myName',
        value: expireDate,
    };
}

module.exports = {
    myDate,
    myValue,
    getCookies
}
