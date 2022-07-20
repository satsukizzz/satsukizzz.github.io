'use strict';

window.onload = () => {
  const endpoint_get_contents =
    "https://script.google.com/macros/s/AKfycbxO7BdPGsLfLoZreH0s-3w1hqCwrqzExReCa16ioKwBHHevLis/exec";

  axios
    .get(endpoint_get_contents, {
      adapter: axiosJsonpAdapter,
      callbackParamName: "callback",
      params: {
        case: "blog_content",
      },
    })
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        add_contents(res.data[i]);
      }
      // console.log(data)
    })
    .catch((e) => {
      add_contents({
        date: "",
        content: "error: blogのコンテンツを読み込めませんでした。",
      });
    });
};

function add_contents(content_json){
  const target = document.getElementById('content-container');

  const diary_content = JSON.parse(content_json);

  const div_daily = document.createElement('article');
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
