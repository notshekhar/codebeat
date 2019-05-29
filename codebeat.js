(function(){
  let tab = document.querySelector('.tab')
  let body = document.querySelector('.body')
  let iframe = document.querySelector('iframe')
  if(iframe){
    let url = window.location.href
    let m = url.replace(/(codebeat)/, "blogs")
    console.log(m)
    iframe.src = m
  }
  
  fetch("/codebeat/blogs.json")
  .then(data=>data.json())
  .then(d=>{
    let notes = d
    let html = notes.map(note => `<div class="a" data-url="${note.url}">${note.title}</div>`).join('')
    tab.innerHTML = html
  })

  document.onclick = e => {
    let element = e.srcElement
    if(element.dataset.url){
      window.location = element.dataset.url
    }
  }

}());
