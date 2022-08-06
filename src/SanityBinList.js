import react from "react";
import {addSanitaryBin, getSanitaryBin} from '.api/SanitaryBinList';

let binNum = 0;

userAddSanitaryBin()
{
    binNum++;
}

componentDidMount()
{
    getSanitaryBin()
}