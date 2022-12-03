(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ): string => {
        return `${ firstName } ${ restArgs.join(' ') }`
    }

    const Superman = fullName( 'Clack', 'Joseph', 'kent','Herrera' );

    console.log(Superman);


})()