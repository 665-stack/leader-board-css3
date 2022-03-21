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
//=================
let add = 0;
document.getElementById('add-number').addEventListener('click', function () {
    add = add + 1;
    if (add <= 5) {
        document.getElementById('add-num-input').value = add;
    }
})
document.getElementById('add-num-input').addEventListener('keyup', function () {
    const addNumber = document.getElementById('add-number');
    if (event.target.value == 'f') {
        addNumber.removeAttribute('disabled')
    }
    else {
        addNumber.setAttribute('disabled', true)
    }

})
//chanage
document.getElementById('add-num-input').addEventListener('change', function () {
    const addField = document.getElementById('add-num-input');
})
