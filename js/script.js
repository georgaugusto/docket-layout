var input = document.querySelector('#tel1'),
    oldValue,
    oldCursor,
    regex = new RegExp(/^\d{0,11}$/g),
    mask = function(value) {
      var output = [];
        for(var i = 0; i < value.length; i++) {
          if (i < 1) {
            output.push("(");
          }
          else if (i === 2) {
            output.push(") ");
          }
          else if (i === 6) {
            output.push("-");
          }
            output.push(value[i]);
          }
        return output.join("");
    },
    unmask = function(value) {
      var output = value.replace(new RegExp(/[^\d]/, 'g'), '');
      return output;
    },
    checkSeparator = function(position, interval) {
      return Math.floor(position / (interval + 1));
    },
    keydownHandler = function(e) {
      var el = e.target;
      
      oldValue = el.value;
      oldCursor = el.selectionEnd;
    },
    inputHandler = function(e) {
      var el = e.target,
          newCursorPosition,
          newValue = unmask(el.value)
      ;
      
      if(newValue.match(regex)) {
        newValue = mask(newValue);
        
        newCursorPosition = oldCursor - checkSeparator(oldCursor, 4) + checkSeparator(oldCursor + (newValue.length - oldValue.length), 4) + (unmask(newValue).length - unmask(oldValue).length);
                
        if(newValue !== "") {
          el.value = newValue;
        } else {
          el.value = "";
        }
      } else {
        el.value = oldValue;
        newCursorPosition = oldCursor;
      }
      el.setSelectionRange(newCursorPosition, newCursorPosition);
    }
;

input.addEventListener('keydown', keydownHandler);
input.addEventListener('input', inputHandler);

function getDataBtn() {
  const inputName = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const inputTel1 = document.getElementById('tel1').value;
  let inputTel2 = document.getElementById('tel2').value;

  inputTel2 = inputTel2 == ''  ? 'Não informado' : inputTel2;

  let classColor = inputTel2 == 'Não informado'  ? 'semibold-color' : 'semibold';

  let resultName = document.getElementById('resultName').innerHTML = `<div id="resultName">
    <p class="regular">Nome completo:</p>
    <p class="semibold">${inputName}</p>
    <p class="regular">E-mail:</p>
    <p class="semibold">${inputEmail}</p>
    <p class="regular">Telefone 1:</p>
    <p class="semibold">${inputTel1}</p>
    <p class="regular">Telefone 2:</p>
    <p class="${classColor}">${inputTel2}</p>
  </div>`

  let element = document.getElementById("resultName");
  // element.remove();
  element.classList.remove("beforeresult");

  // console.log(inputName);
  // console.log(inputEmail);
  // console.log(inputTel1);
  // console.log(inputTel2);
}



function invalidName() {
  let inputName = document.getElementById('name');
  let invalidName = document.getElementById('nameMessage');

  inputName.classList.remove("padding-bottom");
  invalidName.removeAttribute('hidden');
  invalidName.innerHTML = 'O campo Nome Completo é de preenchimento obrigatório';
}

function invalidEmail() {
  let inputEmail = document.getElementById('email');
  let invalidEmail = document.getElementById('emailMessage');

 
  inputEmail.classList.remove("padding-bottom");
  invalidEmail.removeAttribute('visible');
  invalidEmail.innerHTML = 'O campo Email é de preenchimento obrigatório e deve conter um endereço de e-mail válido.';
}

function invalidTel() {
  let inputTel = document.getElementById('tel');
  let invalidTel = document.getElementById('telMessage');

 
  inputTel.classList.remove("padding-bottom");
  invalidTel.removeAttribute('hidden');
  invalidTel.innerHTML = 'O campo obrigatório';
}

function tooltipMenssge() {
  let tooltip = document.getElementById('tooltip');
  // console.log(tooltip);

  tooltip.classList.remove("visible");
  setTimeout(tooltipMenssgeRemove, 2000);
  // tooltip.classList.add("visible");
}

function tooltipMenssgeRemove() {
  let tooltip = document.getElementById('tooltip');
  tooltip.classList.add("visible");
}



document.addEventListener('DOMContentLoaded', ()=> {
	
	const previousButton = document.querySelector('.previous');
	const nextButton = document.querySelector('.next');
	const content = document.querySelector('.carousel .carousel-content');
	const totalItems = document.querySelectorAll('.carousel .carousel-content > *').length - 1;
	let activeItem = 0;
	
	previousButton.addEventListener('click', ()=> {
		if (activeItem === 0) {
			activeItem = totalItems;
			content.style.transform = `translateX(-${totalItems * 100}%)`;
		} else {
			activeItem--;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		}
	});

	nextButton.addEventListener('click', ()=> {
		if (activeItem < totalItems) {
			activeItem++;
			content.style.transform = `translateX(-${activeItem * 100}%)`;
		} else {
			activeItem = 0;
			content.style.transform = `none`;
		}
	});

});