let paras = document.getElementsByTagName("p");


function byTagName(node, name){
    let childNodes = node.childNodes; 
    let result = [];

    if(childNodes === null) return result;

    function getAllName(childNodes, name){
        for(let i = childNodes.length; i >= 0; i--){
            let currentNode = childNodes[i];
            
            if(currentNode.childNodes !== null) getAllName(currentNode.childNodes, name);

            try{
                if(currentNode.nodeName === "P"){
                    result.push(currentNode);
                }
            }catch{
                continue;
            }
        }
    }

    getAllName(childNodes, name);

    return result;
}

byTagName(document.body, "p").length



