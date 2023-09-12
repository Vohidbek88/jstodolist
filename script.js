let inp = document.querySelector('#inputHand')
let lists = document.querySelector('.lists')

function Add() {
   if (!inp.value) {
      alert("Input value empty!!")
   } else {
      let item = document.createElement('div')
      item.setAttribute('class', 'item')
      let list = document.createElement('p')
      let btnDel = document.createElement('button')
      let btnEdit = document.createElement('button')
      let check = document.createElement('input')
      btnDel.setAttribute('class', 'btndel')
      btnEdit.setAttribute('class', 'btnedit')

      check.setAttribute('type', 'checkbox')
      check.setAttribute('class', 'check')
      btnEdit.innerHTML = 'Edit'
      btnDel.innerHTML = 'Delete'
      list.textContent = inp.value

      btnDel.addEventListener('click', (event) => {
         event.preventDefault()
         list.remove()
         btnDel.remove()
         btnEdit.remove()
         check.remove()
      })

      btnEdit.addEventListener('click', (event) => {
         event.preventDefault()

         let val = list.textContent
         let btnsave = document.createElement('button')
         let inpedit = document.createElement('input')
         btnsave.innerHTML = 'Save'
         inpedit.setAttribute('type', 'text')
         inpedit.setAttribute('value', val)
         inpedit.setAttribute('class','inpedit')
         btnsave.setAttribute('class','btnsave')
         item.appendChild(inpedit)
         item.appendChild(btnsave)
         btnEdit.style.display = 'none'
         list.style.display = 'none'
         btnDel.style.display='none'
         btnsave.addEventListener('click', (event) => {
            event.preventDefault()
            btnsave.remove()
            inpedit.remove()
            btnEdit.style.display = 'inline-block'
            list.style.display = 'inline-block'
            btnDel.style.display = 'inline-block'
            list.textContent = inpedit.value
         })
      })

      check.addEventListener('change', (event) => {
         event.preventDefault()
         console.log(check.checked);
         list.classList.toggle('red')
      })
      lists.appendChild(item)
      item.appendChild(check)
      item.appendChild(list)
      item.appendChild(btnEdit)
      item.appendChild(btnDel)
      inp.value = ''
   }

}



