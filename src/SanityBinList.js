import {addSanitaryBin, getSanitaryBin} from '.api/SanitaryBinList';

let binNum = 0; //should equal corresponding number  in the database

userAddSanitaryBin() //option to remove bin
{
    binNum++;
}

componentDidMount()
{
    getSanitaryBin()
}