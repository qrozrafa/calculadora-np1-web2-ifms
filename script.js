/* ======= FUNCAO CALCULADORA =======*/

let teladeSaida = document.getElementById("tela-saida");

// FUNCAO TELA/VALOR
function display(num){
    teladeSaida.value += num;
}

// CALCULAR
function calcular(){
    try{
        teladeSaida.value = eval(teladeSaida.value);
        
    }
    catch(err){
        alert("Operação invalida")
        teladeSaida.value = "";
    }
}

function limpar(){
    teladeSaida.value = "";
}

function excluir(){
    teladeSaida.value = teladeSaida.value.slice(0, -1);
}



/* ======= DARK LIGHT TEMA =======*/
const themeButton = document.getElementById('theme-button') 
const darkTheme = 'dark-theme' 
const iconTheme = 'bx-sun'

// Thema fica salvo
const selectedTheme = localStorage.getItem('selected-theme') 
const selectedIcon = localStorage.getItem('selected-icon') 

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme= () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon= () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}


// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* =======  SCROLL REVEAL ANIMATION =======*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal('.calculadora',{
    interval: 200
});