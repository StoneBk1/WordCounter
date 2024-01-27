const textArea = document.querySelector('.text');
const wordBtn = document.querySelector('.count');
const characBtn = document.querySelector('.character');
let count = 0;
    let characterCount = 0;
function wordCounting () {
    textArea.addEventListener('input', function () {
        count = textArea.value.split(/\s+/).filter(word => word.length > 0).length;

        wordBtn.innerHTML = 'Count Words: ' + count;
        characterCount = textArea.value.replace(/\s/g, '').length;
        characBtn.innerHTML = 'Character Count: ' + characterCount;
        
    })
    

}
function otherFeatures () {
    
    const clearBtn = document.querySelector('.clear');
    clearBtn.addEventListener('click', function () {
        textArea.value = '';
        count = 0;
        characterCount = 0;
        wordBtn.innerHTML = 'Count Words: ' + count;
        characBtn.innerHTML = 'Character Count: ' + characterCount;
    });
}
        
wordCounting ();
otherFeatures ();


