/*
    Resolvé las 10 funciones declaradas en este archivo con el menor código posible, aprovechando las ventajas de las funciones de orden superior y la sintaxis de ES6 con JavaScript.

    En el archivo 'data.js' se encuentra una variable global que contiene un array de países sudamericanos. Tené en cuenta la estructura de cada objeto país para resolver lo pedido.
*/

// Función de ejemplo, operando sobre la variable 'data' declarada en el archivo homónimo
const cantPaises = () => data.length;
const poblMundial = 8300000000;

// 1
const imprimirPaises = () => {
    /* Debe imprimir la info de todos los países (solo su nombre común y su capital) */
    data.forEach(pais => console.log(`Nombre común: ${pais.name.common} || Capital: ${pais.capital}`));
}

// 2
const nombresDePaises = () => {
    /* Debe retornar un array con los nombres oficiales de cada país */
    const nombresOficiales = data.map(pais => pais.name.official);

    return nombresOficiales;
}

// 3
const nombresDeCapitales = () => {
    /* Debe retornar un array con los nombres de las capitales de cada país */
    const nombresCapitales = data.map(pais => pais.capital);
    
    return nombresCapitales; 
}

// 4
const poblacionTotal = () => {
    let poblacionSudamerica = data.reduce((acumulador, pais) => {return acumulador + pais.population}, 0);

    return poblacionSudamerica;
}

// 5
const poblacionTotalMundialSinSud = (poblMundial) => {
    /* Debe retornar la población total mundial (llega por parámetro) sin reutilizar la función 'poblacionTotal', más bien restando sucesivamente la población de cada país a la población mundial */
    let poblacionSinSud = data.reduce((acumulador, pais) => {return acumulador - pais.population}, poblMundial);

    return poblacionSinSud;
}

// 6
const todosEmpiezanLosLunes = () => {
    /* Debe retornar si todos los países inician la semana los días lunes (monday) */
    let arrancanLunes = data.every(pais => pais.startOfWeek === "monday");

    return arrancanLunes;
}

// 7
const algunoNoConducePorLaDerecha = () => {
    /* Debe retornar si en alguno de los países no se conduce por la derecha (right) */
    let conduceDerecha = data.some(pais => pais.car.side === "right");

    return conduceDerecha;
}

// 8
const cualesNoConducenPorLaDerecha = () => {
    /* Debe retornar a los países donde no se conduce por la derecha (right) */
    const noConducenDerecha = data.filter(pais => pais.car.side !== "right");
    
    return noConducenDerecha;
}

// 9
const cualesNoConducenPorLaDerechaSimpl = () => {
    /* Debe retornar solo los nombres comunes de los países donde no se conduce por la derecha (right) */
    const nombresNoConducenDerecha = data.filter(pais => pais.car.side !== "right").map(pais => pais.name.common);
    
    return nombresNoConducenDerecha;
}

// 10
const paisesQueLimitanConArgentina = () => {
    /* Debe retornar solo los nombres comunes de los países que limitan con Argentina */
    /* WARNING: Hay países que no tienen esa info. A tenerlo en cuenta para evitar errores */
    const limitanArgentina = data.filter(pais => pais.borders?.includes("ARG")).map(pais => pais.name.common)

    return limitanArgentina;
}