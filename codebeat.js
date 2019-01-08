(function(){
  let notes = [
    {url: '/codebeat/', title: 'About the Course'},
    {url: '/codebeat/htmlcss', title: 'HTML and CSS'},
    {url: '/codebeat/JsLibraries', title: 'JavaScript Library'},
    {url: '/codebeat/chromeExtension', title: 'Chrome Extension'}
  ];

  let tab = document.querySelector('.tab')
  let body = document.querySelector('.body')

  let html = notes.map(note => `<div class="a" data-url="${note.url}">${note.title}</div>`).join('')
  tab.innerHTML = html

  document.onclick = e => {
    let element = e.srcElement
    if(element.dataset.url){
      window.location = element.dataset.url
    }
  }

}());

// (function(){
//   let codes = document.querySelectorAll('code')
//   let keywords = ['window','from','import','abstract',	'arguments',	'boolean',	'break','byte',	'case',	'catch',	'char','const',	'continue',	'debugger',	'default','delete',	'do',	'double',	'else','eval',	'false',	'final',	'finally','float',	'for',	'function',	'goto','if',	'implements','in','instanceof','int','interface','let','long','native','new','null','package','private','protected','public','return','short','static','switch','synchronized','this','throw','throws','transient','true','try','typeof','var','void','volatile','while','with','yield']
//   let arr = []
//   codes.forEach(code=>{
//     arr.push(code.innerHTML)
//   })
//   let words = []
//   for (let i = 0; i < arr.length; i++) {
//     words = arr[i].split(' ')
//     let html = words.map(word =>{
//       if(keywords.indexOf(word)>-1){
//         return `<span class='keyword'>${word}</span>`
//       }else{
//         let tf = {
//           t: false,
//           type: null,
//           place: [0, 0]
//         }
//         keywords.forEach(keyword=>{
//           if(word.indexOf(keyword)>-1){
//             tf.t = true
//             tf.type = 'keyword'
//             tf.place = [word.indexOf(keyword), keyword.length-1]
//           }
//         })
//         if(tf.t){
//           if(tf.type == 'keyword'){
//             let sen = ''
//             for(let i=0; i<word.length; i++){
//               if(i>=tf.place[0] & i<=tf.place[1]){
//                 sen += `<span class="keyword">${word[i]}</span>`
//               }else{
//                 sen += `<span class="text">${word[i]}</span>`
//               }
//             }
//             return sen
//           }
//         }else{
//           return `<span class='text'>${word}</span>`
//         }
//       }
//     }).join(' ')
//     codes[i].innerHTML = html
//     console.log(html)
//   }
// }())