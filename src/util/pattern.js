export default class Pattern {
    constructor(){

    }
    isPhone( val ){
        return /^1[3|4|5|7|8|6|9][0-9]{9}$/.test( val );
    }
}
