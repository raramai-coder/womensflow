import firebase from 'react-native-firebase';
import { add } from 'react-native-reanimated';

export function addSanitaryBin(SanitaryBin, addComplete)
{
    firebase.firestore().collection('SanitaryBins').add({
        ID: SanitaryBin.ID,
        status: SanitaryBin.status,
        padsNumber: SanitaryBin.padsNumber
    }).then((data) => addComplete(data)).catch((error) => console.log(error))
}

export async function getSanitaryBin(SanitaryBinsAdded)
{

var SanitaryBinList = [];

    var snapshot = await firebase.firestore()
    .collection.collection('SanitaryBinsAdded')
    .get()
    // .orderBy('') ideally order by location, before get
    snapshot.forEach((doc) => {
        SanitaryBinList.push(doc.data())
    }); //send back bins in the area

    SanitaryBinsAdded(SanitaryBinList);
}
