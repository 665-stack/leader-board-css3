document.getElementById('top-players').style.color = '#791692';
document.getElementById('top-blogs').style.color = '#791692';
//============
const player = document.getElementsByClassName('player');
for (const minPlayer of player) {
    minPlayer.style.backgroundColor = '#791692';
    minPlayer.style.margin = '5px';
    minPlayer.style.borderRadius = '10px';
    minPlayer.style.color = 'white'
}
console.log(player);
//==================
document.getElementById('add-item').addEventListener('click', function () {
    const li = document.createElement('li');
    li.innerText = 'new item';
    const parent = document.getElementById('item-container');
    parent.appendChild(li);
});


