function getArticleGenerator(articles) {
    let arr = articles;
    let toPrint = document.getElementById('content');

    return action;

    function action() {
        let p = document.createElement('p');
        if (arr.length > 0) {
            p.textContent = arr.shift();
            toPrint.appendChild(p);
            
        }

    }
}
