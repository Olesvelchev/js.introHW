function getMessage(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Доброго ранку";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Доброго дня";
    } else if (currentHour >= 18 && currentHour < 23) {
        greeting = "Доброго вечора";
    } else {
        greeting = "Доброї ночі";
    }

    return `${greeting}, ${username}`;
}

module.exports = {
    getMessage
};
