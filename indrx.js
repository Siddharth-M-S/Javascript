const add = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const input = document.getElementById('input-task')

add.addEventListener('click', function () {
  let task = document.createElement('div')
  task.classList.add('task')

  let li = document.createElement('li')
  li.innerText = input.value
  task.appendChild(li)

  let checkButton = document.createElement('button')
  checkButton.innerHTML = '<i class="fa fa-check"></i>'
  checkButton.classList.add('checkTask')
  task.appendChild(checkButton)
  //   alert(input.value)

  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = '<i class="fa fa-trash"></i>'
  deleteButton.classList.add('deleteTask')
  task.appendChild(deleteButton)

  if (input.value === '') {
    alert('Please Enter a Task')
  } else {
    taskContainer.appendChild(task)
  }
  input.value = ''

  checkButton.addEventListener('click', function () {
    checkButton.parentElement.style.textDecoration = 'line-through'
  })

  deleteButton.addEventListener('click', function (e) {
    let target = e.target
    target.parentElement.parentElement.remove()
  })
})
