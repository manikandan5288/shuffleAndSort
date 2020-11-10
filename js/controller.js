let ulContainer;
let liNode;
let childNodes;
window.onload = ()=> {
    ulContainer = document.getElementById('shuffleAndSort');
    createLi();
}

createLi = () => {
    for (let i = 1; i <= 9; i++) {
        liNode = document.createElement("li");
        liNode.setAttribute('class', 'li-'+i);
        liNode.innerHTML = i;
        ulContainer.appendChild(liNode);
    }
};

shuffleNodes = ()=>{
    childNodes = ulContainer.children;
    let i = 0;
    childNodes = Array.prototype.slice.call(childNodes);
    childNodes = shuffle(childNodes);
    while(i < childNodes.length)
    {
        ulContainer.appendChild(childNodes[i]);
        ++i;
    }
};

shuffle = (items)=>{
    let getSlicedItems = items.slice(0);
    let temp;
    let i = getSlicedItems.length;
    let randomNumbers;
    while(--i)
    {
        randomNumbers = Math.floor(i * Math.random());
        temp = getSlicedItems[randomNumbers];
        getSlicedItems[randomNumbers] = getSlicedItems[i];
        getSlicedItems[i] = temp;
    }
    return getSlicedItems;
};

sort = ()=> {
    ulContainer.querySelectorAll('*').forEach(n => n.remove());
    createLi();
}
