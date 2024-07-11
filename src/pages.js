
export async function getPagesName(){
    setTimeout(
        ()=>{
            console.log("just waiting ...");

        },
    200)
    return ["page1","page2","page3"];
}
export async function getNameByPagesId(id){
    setTimeout(
        ()=>{
            console.log("just waiting ...");

        },
        100)
    return `page${id}`;
}

