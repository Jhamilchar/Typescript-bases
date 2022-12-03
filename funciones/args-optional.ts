(() => {

    //EL argumento opcional aqui es "?" lo cual puede no ser declarado

    const fullName = (firstName: string, lastName? : string ): string => {

        return `${firstName} ${lastName || '123'}`;

    }

    const name = fullName('Tony')

    console.log({ name });

})()