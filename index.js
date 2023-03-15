// TASK B //


function array(a){
    let newArray = a.trim().replaceAll(',','/').toUpperCase().split([]);
    return newArray;
}

console.log(array(' qara,at, '))

