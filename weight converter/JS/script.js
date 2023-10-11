// hidden the menu
document.getElementById('output').style.visibility = 'hidden'

document.getElementById('input').addEventListener('click', () => {
    document.getElementById('output').style.visibility = 'visible'
    let pounds = input.value; //get the value of the the input
    document.getElementById('gramsOutput').innerHTML = pounds/0.0022046;
    document.getElementById('kgOutput').innerHTML = pounds * 0.453592;
    document.getElementById('ozOutput').innerHTML = pounds*16;
})
