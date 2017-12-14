let number = document.getElementById('counter')

let counter = 0

window.addEventListener('load', function(){
  setInterval(
     function () {
         number.innerText = counter
         counter ++
     }, 1000)
})

let likes = {}

const minus = document.getElementById('-')
const plus = document.getElementById('+')
const like = document.getElementById('<3')

minus.addEventListener('click', function(e){
  number.innerText = counter--
})

plus.addEventListener('click', function(e){
  number.innerText = counter++
})

like.addEventListener('click', function(){
  if (likes[counter]){
    likes[counter]++
  } else {
    likes[counter] = 1
  }
  const list_likes = document.createElement('DIV')
  const cool = document.createTextNode(`${counter} has been liked ${likes[counter]} times`)
  list_likes.append(cool)
  document.getElementsByClassName('likes') = list_likes
})




const pause = document.getElementById('pause')

pause.addEventListener('click', function(e){

if (pause.innerText === 'pause'){
  pause.innerText = 'resume'
  minus.disabled = true
  plus.disabled = true
  like.disabled = true
}
else if (pause.innerText === 'resume') {
  pause.innerText = 'pause'
  minus.disabled = false
  plus.disabled = false
  like.disabled = false
}

})

const listComments = document.getElementById('list')

const commentBtn = document.getElementById('submit')

const comment = document.getElementById('commenty')


commentBtn.addEventListener('click', function(e){
  e.preventDefault()
  let newComment = document.createElement("DIV")
  newComment.innerText = comment.value
  listComments.append(newComment)
})
