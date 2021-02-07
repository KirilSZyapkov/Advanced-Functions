function solve() {
   const movieList = document.getElementById('movies');
   const archiveList = document.getElementById('archive');
   const inputContainer = document.getElementById('container');

   let ulMovies = movieList.querySelector('ul');
   let ulArchive = archiveList.querySelector('ul');
   let [name, hall, price] = Array.from(inputContainer.querySelectorAll('input'));

   let onScreenBtn = inputContainer.querySelector('button').addEventListener('click', (e) => {
      e.preventDefault();
      if (!name.value || !hall.value || !Number(price.value)) return;

      let li = document.createElement('li');
      let span = document.createElement('span');
      span.textContent = name.value;
      let strongH = document.createElement('strong');
      strongH.textContent = `Hall: ${hall.value}`;
      let div = document.createElement('div');
      let strongP = document.createElement('strong');
      strongP.textContent = Number(price.value).toFixed(2);
      let inputLine = document.createElement('input');
      inputLine.placeholder = 'Tickets Sold'
      let btn = document.createElement('button');
      btn.textContent = "Archive"
      btn.addEventListener('click', archiveTicket);
      div.appendChild(strongP);
      div.appendChild(inputLine);
      div.appendChild(btn);
      li.appendChild(span);
      li.appendChild(strongH);
      li.appendChild(div);
      ulMovies.appendChild(li);

      name.value = '';
      hall.value = '';
      price.value = '';
   });

   function archiveTicket(e) {
      let target = e.target.parentNode.parentNode;
      let inputTicket = movieList.querySelector('input').value;
      let movieName = movieList.querySelector('span').textContent;
      let moviePrice = movieList.querySelector('div>strong').textContent;
      if (!Number(inputTicket)) return;
      let li = document.createElement('li');
      let spanM = document.createElement('span');
      spanM.textContent = movieName;
      let strongTotalPr = document.createElement('strong');
      strongTotalPr.textContent = `Total amount: ${(Number(moviePrice) * Number(inputTicket)).toFixed(2)}`;
      let delBtn = document.createElement('button');
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', deleteLine);
      li.appendChild(spanM);
      li.appendChild(strongTotalPr);
      li.appendChild(delBtn);
      ulArchive.appendChild(li);
      target.remove()
   }

   function deleteLine(e) {
      let target = e.target.parentNode;
      target.remove();
   }

   let clearBtn = archiveList.querySelector('button').addEventListener('click', (e) => {
      let target = e.target.parentNode.querySelector('ul');
      target.textContent = '';
   });
}