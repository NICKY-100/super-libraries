import $e from './library/main.js'

// create a SuperForm
const form = $e('SuperForm')

// create a todo list using type and text
const todo = $e('SuperInput', { type: 'text', name: 'todoitem' })

const submit = $e('SuperButton', { type: 'submit', text: 'submit' })

const addBtn = $e('SuperButton', { type: 'submit', text: 'delete' })
// const select1 = $e('SuperButton', { type: 'button', text: 'complete-all' })
// const select2 = $e('SuperButton', { type: 'button', text: 'show-completed' })
// const select3 = $e('SuperButton', { type: 'button', text: 'show-active' })

const list = $e('SuperBox', { tag: 'ol' })

todo.appendTo(form)

submit.appendTo(form)
// select1.appendTo(form)
// select2.appendTo(form)
// select3.appendTo(form)

form.appendTo(document.body)
// list represents ol
list.appendTo(document.body)
form.submit(() => {
  // list1 is li
  const list1 = $e('SuperBox', { tag: 'li' })
  list1.appendTo(list)

  // const addBtn = $e('SuperButton', { type: 'submit', text: 'delete' })
  // added last session
  addBtn.appendTo(list)

  const todoValue = form.getVal('todoitem')
  list1.addText(todoValue)
  console.log(todoValue)
  todo.clear()
})
// line 35, 11
