(() => {

    type venger = {
        name: string,
        weapon: string;
    }

    const ironman: venger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: venger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: venger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: venger[]= [ ironman, thor, captainAmerica ]

    for (const avenger of avengers) {
        console.log( avenger.name, avenger.weapon );

    }

})()