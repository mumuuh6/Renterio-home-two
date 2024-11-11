const getstoredcartList=()=>{
    const storedListstr=localStorage.getItem('Cart');
    if(storedListstr){
        const storedList=JSON.parse(storedListstr);
        return storedList;
    }
    else{
        return [];
    }
}
const addstoredcartList=(id)=>{
    const storedcart=getstoredcartList();
    if(storedcart.includes(id)){
        console.log('alreadyexist');
    }
    else{
        storedcart.push(id);
        const storedListstr=JSON.stringify(storedcart);
        localStorage.setItem('Cart',storedListstr);
    }

}
export {addstoredcartList,getstoredcartList}
