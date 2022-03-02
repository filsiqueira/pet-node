type MenuSelected = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenu = (activeMenu: MenuSelected) => {
    
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true;
    }

    return returnObject;



}