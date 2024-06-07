const me = {
    name: 'giorgi',
    lastName: 'vanishvili',
    displayInfo(){
        console.log(this.name, this.lastName)
    }
}


const anotherDude = Object.assign({}, me)



function manualAssign(changeObj, ...copyObj) {
    for (let source of copyObj) {
        for (let key in copyObj) {
            if (copyObj.hasOwnProperty(key)) {
                changeObj[key] = copyObj[key];
            }
        }
    }
    return changeObj;
}

