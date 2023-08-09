export const  generateSaltRound = async ()  =>  {
    // generate radom number
    return   Math.floor(Math.random() * 5) + 8;
}