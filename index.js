const filterInputEl = document.querySelector('.filter-input')

function filterUsers(e) {
  let query = e.target.value.toLowerCase()
  let elements = document.getElementsByClassName('name')

  for (i=0; i<elements.length; i++) {
    let current = elements[i].textContent.toLowerCase()
    if (current.includes(query)) {
      elements[i].style.display = 'block'
    } else {
      elements[i].style.display = 'none'
    }
  }
}

filterInputEl.addEventListener('keyup', filterUsers)