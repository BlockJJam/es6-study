function a(){
    throw new Error('error!')
}

function b(){
    try{
        a();
    }catch(error){
        console.log('생각해보니 여기서 에러핸들링 못할 것 같다');
        throw error;
    }
}

function c(){
    b();
}

try{
    c();
}catch(error){
    console.log('Catched');
}
console.log('done');