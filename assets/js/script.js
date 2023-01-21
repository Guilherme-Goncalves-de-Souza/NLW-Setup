const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today);

    if(dayExists){
        return alert('Dia já incluso')
    }

    nlwSetup.addDay( today );
}

form.addEventListener('change', save)

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) // Guarda em string na memoria do browser
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // Para não dar erro de null


nlwSetup.setData(data)
nlwSetup.load();