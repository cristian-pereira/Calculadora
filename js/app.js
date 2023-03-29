const botones  = document.querySelectorAll('.boton');
const operadores  = document.querySelectorAll('.operadores');
const valorActual = document.querySelector('#valor-actual');
const valorAnterior = document.querySelector('#valor-anterior');
const cero = document.querySelector('.cero');
const igual = document.querySelector('.igual');
const eliminar = document.querySelector('.delete');
let validar =  false;


window.addEventListener('load', () => {
    setBotones();
    setOperadores();
    setIgual();
    setCero();
    setDelete();
})



const setBotones = () => {
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if (validar && e.target.attributes.class.value === 'boton') {
                validar = false;
                valorActual.innerHTML = '';
                valorAnterior.innerHTML = '';
            }
            

            if (!boton.classList.contains('cero')
            && !boton.classList.contains('delete'))
            {
                valorActual.innerHTML += e.target.innerHTML;
            }

        })
    });
}

const setOperadores = () => {
    operadores.forEach(botonOperador => {
       botonOperador.addEventListener('click', (e) => {
           
           if (botonOperador.classList.contains('operadores') && !botonOperador.classList.contains('igual')) {
                valorAnterior.innerHTML += valorActual.innerHTML + " " + e.target.innerHTML + " " ;
                valorActual.innerHTML = '';
            }

        } )
    });
}


const setIgual = () => {
    igual.addEventListener('click', () => {

        const resultado = eval(valorAnterior.innerHTML += valorActual.innerHTML);  
        valorActual.innerHTML = resultado;
        validar = true;

    })
    
}


const setCero = () => {
    cero.addEventListener('click', () => {
        valorActual.innerHTML = '';
        valorAnterior.innerHTML = '';
    })
}


const setDelete = () => {
    eliminar.addEventListener('click', () => {
        
        if (valorActual.innerHTML.length > 0) {
            valorActual.innerHTML = valorActual.innerHTML.slice(0, valorActual.innerHTML.length - 1);
            
        }
    })
}

