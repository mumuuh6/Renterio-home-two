const getstoredWishList=()=>{
    const storedListstr=localStorage.getItem('WhishList');
    if(storedListstr){
        const storedList=JSON.parse(storedListstr);
        return storedList;
    }
    else{
        return [];
    }
}
const addstoredWhishList=(id)=>{
    const storedcart=getstoredWishList();
    if(storedcart.includes(id)){
        console.log('alreadyexist');
    }
    else{
        storedcart.push(id);
        const storedListstr=JSON.stringify(storedcart);
        localStorage.setItem('WhishList',storedListstr);
    }

}
export {addstoredWhishList,getstoredWishList}
