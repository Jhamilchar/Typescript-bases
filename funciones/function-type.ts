(() => {

    const addNumber = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    let myFunction: () => string;

    // myFunction = 10;
    // console.log(myFunction);

    // myFunction = addNumber
    // console.log( myFunction(1, 4) );

    // myFunction = greet
    // console.log(myFunction("Jhamil"));

    myFunction = saveTheWorld
    console.log(myFunction());

})()