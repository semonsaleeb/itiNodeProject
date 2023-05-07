const fs = require('fs')


const path =process.env.FILE_PATH || "./db.json"
function CreateFileNotExist(path) {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path,JSON.stringify([]))
    }
}
CreateFileNotExist(path)

function parseData(data){
    const parseData=data.reduce((prev,element,index)=>{
        const [key, value]=element.split("=")
        prev[key]=value
        return prev
    },{})
   // console.log(parseData)
    return parseData
}


function add(parseData){
    const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
    const todo={
    id:todlist[todlist.length-1].id+1,
    title:parseData.title,
    body:parseData.body,
    checked:Boolean(parseData.checked)
    }
    todlist.push(todo)

    fs.writeFileSync(path,JSON.stringify(todlist) )   

}
function edit(id,parseData) {
    const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
            let editedItem={}
            const updateElement=todlist.map((element,index)=>{
                if (id==element.id) 
                {
                    element.title=parseData.title
                    element.body=parseData.body
                    editedItem=element
                }
                fs.writeFileSync(path,JSON.stringify(todlist) )  
            })
            return editedItem;
}


 function remove(id) {
    const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
            const removedElement=todlist.map((element,index)=>{
                if(id==element.id){
                    delete todlist[todlist.indexOf(element)]
              }
                fs.writeFileSync(path,JSON.stringify(todlist) )   
            })
        
            return removedElement;
    }

    function checked(parseData){
        const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
                const updateElement=todlist.map((element,index)=>{
                    if (parseData.id==element.id) 
                    {
                        console.log(element.checked);
                        if (element.checked==false) {
                            element.checked=true
                            
                        }
                    }    
                    fs.writeFileSync(path,JSON.stringify(todlist) )   
                })
                return updateElement;
    }
    function uncheck(parseData){
        const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
                const updateElement=todlist.map((element,index)=>{
                    if (parseData.id==element.id) 
                    {
                        console.log(element.checked);
                        if (element.checked==true) {
                            element.checked=false
                            
                        }
                    }    
                    fs.writeFileSync(path,JSON.stringify(todlist) )   
                })
                return updateElement;
    }
function list(){
    const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
        return todlist
        
}
function list_id(id){
    const todlist=JSON.parse(fs.readFileSync(path,"utf-8"))
    let item={};    
            const list_id=todlist.map((element,index)=>{
                if (id==element.id) 
                { 
                    console.log(element);
                    item=element
                   }    
})
return item
}
module.exports={add, edit, remove, checked,uncheck, list, list_id, parseData, CreateFileNotExist}