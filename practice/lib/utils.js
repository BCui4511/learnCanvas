const addText = function (textString, element=document.body) {
    const textNode = document.createTextNode(textString);
    element.appendChild(textNode);
}

const addCanvas = function (id, element=document.body, width=300, height=300) {
    const canvasNode = document.createElement('canvas');
    canvasNode.id = id;
    canvasNode.width = width;
    canvasNode.height = height;
    element.appendChild(canvasNode);
    return canvasNode;
}


export{
    addText,
    addCanvas,
};