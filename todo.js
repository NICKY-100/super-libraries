import $e from './library/main.js'

// create a SuperForm
const form = $e('SuperForm')

// create a todo list using type and text
const todo = $e('SuperInput', { type: 'text', name: 'todoitem' })

const submit = $e('SuperButton', { type: 'submit', text: 'submit' })

const select = $e('SuperSelect', { type: 'checkbox', name: 'todoitem' })

todo.appendTo(form)

submit.appendTo(form)
select.appendTo(form)

form.appendTo(document.body)
form.submit(() => {
  const todo = form.getVal('todoitem')
  console.log(todo)
})
