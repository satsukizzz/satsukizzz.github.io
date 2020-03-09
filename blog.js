'use strict';

window.onload=function(){

const target = document.getElementById('content-container');

const div_daily = document.createElement('div');
div_daily.classList.add('mdl-grid', 'mdl-cell', 'mdl-cell--4-col', 'mdl-cell--4-col-tablet', 'mdl-card', 'mdl-shadow--4dp');

const div_date = document.createElement('div');
div_date.classList.add('mdl-card__supporting-text');

const div_date_text = document.createElement('small');
div_date_text.textContent = '2020.03.10';
// 上記を後々ロードして書くように設定。
div_date.appendChild(div_date_text);

const div_content = document.createElement('div');
div_content.classList.add('mdl-card__supporting-text');

const div_content_text = document.createElement('p');
div_content_text.textContent= 'JavaScriptを用いてブログ記事を直接blog.htmlに書かないよう試行錯誤。';
// 上記を後々ロードして書くように設定。最終的にブログ記事をwhile文か何かでblog_contents内部を掃引する。
div_content.appendChild(div_content_text);

target.appendChild(div_daily);
div_daily.appendChild(div_date);
div_daily.appendChild(div_content);
}


