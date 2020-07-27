function createAuthor(author){
    let li = createNode('li'),
    img = createNode('img'),
    span = createNode('span');

    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;

    append(li, img);
    append(li, span);
    append(ul, li);
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

export{
    createAuthor,
    createNode,
    append,

}