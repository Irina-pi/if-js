(() => {
    //task 17.5
    function sum(a) {
        return function (b) {
            return a + b;
        }
    }

    console.log(sum(5)(2));

    //task 17.6
    const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');


    text1.addEventListener('click', (event) => {
        event.target.style.color = colors[0];
    });

    text2.addEventListener('click', (event) => {
        event.target.style.color = colors[1];
    });

    text3.addEventListener('click', (event) => {
        event.target.style.color = colors[2];
    });

})();