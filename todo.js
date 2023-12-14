import $e from './library/main.js'

// create a SuperForm
const form = $e('SuperForm')

// create a todo list using type and text
const todo = $e('SuperInput', { type: 'text', name: 'todoitem' })

const submit = $e('SuperButton', { type: 'submit', text: 'submit' })

// const select1 = $e('SuperButton', { type: 'button', text: 'complete-all' })
// const select2 = $e('SuperButton', { type: 'button', text: 'show-completed' })
// const select3 = $e('SuperButton', { type: 'button', text: 'show-active' })

const ol = $e('SuperBox', { tag: 'ol' })

todo.appendTo(form)

submit.appendTo(form)

// select1.appendTo(form)
// select2.appendTo(form)
// select3.appendTo(form)

form.appendTo(document.body)
// list represents ol
ol.appendTo(document.body)
form.submit(() => {
  // list1 is li
  const li = $e('SuperBox', { tag: 'li' })
  li.appendTo(ol)

  const addBtn = $e('SuperButton', { type: 'button', text: 'delete' })
  addBtn.click(() => {
    li.remove()
  })
  // added last session

  const todoValue = form.getVal('todoitem')
  li.addText(todoValue)
  addBtn.appendTo(li)
  console.log(todoValue)
  todo.clear()
})
