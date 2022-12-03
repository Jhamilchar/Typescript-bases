(() => {


    const batman: string = "Batman";
    const linternaVerde: string = "Linterna verde";
    const volcanNegro: string = `Héroe: Volcan Negro`;

    const abc = 123;

    console.log(` Im ${ batman }, ${ abc } `);


    console.log( batman.toUpperCase() );
    console.log( batman[10]?.toUpperCase );

    console.log( batman[10]?.toUpperCase() || "No esta presente" );


})()

