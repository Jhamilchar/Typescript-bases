(()=> {

    type vengadores = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: vengadores = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Betatny',
        activo: true,
        poder: 1500

    }

    // const { poder, vision } = avengers
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...resto }: vengadores ) => {
        console.log( ironman, resto );

    }

    // printAvenger( avengers );

    const avengersArr: [string, boolean, number] = ['Cap. América', true, 150.15]

    const [ capi, ironman, serNum ] = avengersArr;

    console.log({ ironman, capi });


})()