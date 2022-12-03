(() => {

    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {

        if( upper ) {

            return `${firstName} ${lastName || '123'}`.toUpperCase();
        }else {
            return `${firstName} ${lastName || '123'}`;

        }


    }

    const name = fullName('Tony', 'Stark', true)

    console.log({ name });

})()