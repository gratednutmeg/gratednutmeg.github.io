function code() {
    const code = [38,
        38,
        40,
        40,
        37,
        39,
        37,
        39,
        66,
        65];
    
    let index = 0;

    $(document).keydown(function(key) {
        if (key.which === code[index]) {
            index++;
            if (index === code.length) {
                alert(`KONAMI`);
                index = 0;
            }
        } else {
            index = 0;
        }
    });

}

$(document).ready(function() {
    code();
});