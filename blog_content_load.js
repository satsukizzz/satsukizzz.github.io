'use strict';

window.onload=()=>{
  const endpoint_get_contents="https://script.google.com/macros/s/AKfycbxO7BdPGsLfLoZreH0s-3w1hqCwrqzExReCa16ioKwBHHevLis/exec";

  $.ajax({
    type:'GET',
    url:endpoint_get_contents,
    dataType:'jsonp',
    data: {
      case: 'blog_content',
      callback:'myFunc001'
    },
  })
  .then(
//    (data) => add_contents(data),
    (data) => {
      for(let i=0; i< data.length; i++){
      add_contents(data[i])};
      // console.log(data)
    },
    (jqXHR, textStatus, errorThrown) => {
      alert('Ajax通信に失敗しました。');
      console.log("jqXHR          : " + jqXHR.status); // HTTPステータスを表示
      console.log("textStatus     : " + textStatus);    // タイムアウト、パースエラーなどのエラー情報を表示
      console.log("errorThrown    : " + errorThrown.message); //例外情報を表示
    }
  )
};

function add_contents(content_json){
  const target = document.getElementById('content-container');

  const diary_content = JSON.parse(content_json);

  const div_daily = document.createElement('div');
  div_daily.classList.add('mdl-grid', 'mdl-cell', 'mdl-cell--4-col', 'mdl-cell--4-col-tablet', 'mdl-card', 'mdl-shadow--4dp');

  const div_date = document.createElement('div');
  div_date.classList.add('mdl-card__supporting-text');

  const div_date_time = document.createElement('time');
  div_date_time.setAttribute('datetime',diary_content.date);
  div_date_time.textContent = diary_content.date;
  div_date.appendChild(div_date_time);

  const div_content = document.createElement('div');
  div_content.classList.add('mdl-card__supporting-text');

  const div_content_text = document.createElement('p');
  div_content_text.textContent= diary_content.content;
  div_content.appendChild(div_content_text);

  target.appendChild(div_daily);
  div_daily.appendChild(div_date);
  div_daily.appendChild(div_content);
}
