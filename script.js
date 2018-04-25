var name = 'Anna';

console.log('Hello ' + name);

function go() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var result = Number(a) + Number(b);

    console.log(result);

    document.getElementById('result').innerHTML = result;
}


