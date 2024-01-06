import $e from './library/main.js'

// create a SuperForm
const form = $e('SuperForm')

// create a todo list using type and text
const todo = $e('SuperInput', { type: 'text', name: 'todoitem' })

const submit = $e('SuperButton', { type: 'submit', text: 'submit' })

const showAll = $e('SuperButton', { type: 'button', text: 'show-all' })
const completeAll = $e('SuperButton', { type: 'button', text: 'complete-all' })
const showCompleted = $e('SuperButton', { type: 'button', text: 'show-completed' })
const showActive = $e('SuperButton', { type: 'button', text: 'show-active' })
const activeAll = $e('SuperButton', { type: 'button', text: 'active-all' })

const ol = $e('SuperBox', { tag: 'ol' })

let filterType = 'show-all'

todo.appendTo(form)

submit.appendTo(form)

form.appendTo(document.body)
showAll.appendTo(document.body)
completeAll.appendTo(document.body)
showCompleted.appendTo(document.body)
showActive.appendTo(document.body)
activeAll.appendTo(document.body)
// list represents ol
ol.appendTo(document.body)

form.submit(() => {
  // only add text if exist
  const todoValue = form.getVal('todoitem')
  if (!todoValue) {
    return
  }

  // list1 is li
  const li = $e('SuperBox', { tag: 'li' })
  li.appendTo(ol)
  // creat button type with text delete
  const addBtn = $e('SuperButton', { type: 'button', text: 'delete' })
  addBtn.click(() => {
    li.remove()
  })

  const inputId = Math.random()
  const input = $e('SuperInput', { type: 'checkbox', name: 'checkbox', attributes: [['id', inputId]] })
  const label = $e('SuperBox', { tag: 'label', attributes: [['for', inputId]] })

  label.addText(todoValue)
  input.appendTo(li)
  label.appendTo(li)
  addBtn.appendTo(li)

  console.log(todoValue)
  todo.clear()

  if (filterType === 'active') {
    filterActive()
  } else if (filterType === 'show-all') {
    filterAll()
  } else if (filterType === 'completed') {
    filterCompleted()
  }
})

// click event for showAll,
function filterActive () {
// create a checkbox and getting the results using queryselectorall
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // show active
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].parentElement.style.display = 'list-item'
    } else {
      checkboxes[i].parentElement.style.display = 'none'
    }
  }
}

showAll.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
  ///
  filterType = 'active'
  console.log('showAll')
  filterAll()
})

// complete all
completeAll.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
  console.log('completeAll')
})

showCompleted.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = true
  }
  console.log('showCompleted')
  filterCompleted()
})
function filterAll () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].parentElement.style.display = 'list-item'
    console.log('showAll')
  }
}

function filterCompleted () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')

  // show completed
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].parentElement.style.display = 'none'
    } else {
      checkboxes[i].parentElement.style.display = 'list-item'
    }
  }
  console.log('filterCompleted')
}

showActive.click(() => {
  filterType = 'active'
  filterActive()
})

activeAll.click(() => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false
  }
})
