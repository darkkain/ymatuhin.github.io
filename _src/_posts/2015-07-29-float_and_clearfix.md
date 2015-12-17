---
layout: post
title: Время обновить clearfix
description: >
  Исправляем поведение плавающих классов и контейнера с помощью css класса clearfix и его новой, короткой версией.
categories: front-end
redirect_from:
  - /blog/float_and_clearfix/
keywords: >
  clearfix css after div плавающие элементы float обновить класс
tags: [css, clearfix, float]

image: clearfix/clearfix.png
imageWidth: 800
imageHeight: 380
imageCaption: Как работает Clearfix CSS
imageTitle: Clearfix в действии
---

Clearfix — вспомогательный класс в css, с помощью которого мы исправляем схлопывающиеся размеры контейнера у плавающих элементов.

<!-- more -->

## Clearfix раньше
Если вы знаете что такое clearfix, то вероятно вы читали о нем в старых статьях и книгах. В которых встречали следующий код или его разновидности:

~~~js
.clearfix {
    zoom: 1;
}
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
~~~

Он рабочий, но проблема в том, что он поддерживает устаревшие <code>IE 6/7</code>. Вы еще поддерживаете эти браузеры?

## Clearfix сейчас
Если у вас поддержка браузеров начиная с <code>IE 8</code>, то воспользуйтесь сокращенной версией:

~~~js
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
~~~

Немножко экономии и эстетической красоты 😊
Я редко пользуюсь этим классом, ведь установив у контейнера значение <code>overflow</code> в <code>hidden</code> или <code>auto</code> мы добиваемся тех-же результатов.
А вы используете clearfix css в своих проектах? 😉


**UPD #1:** Хорошая статья про виды clearfix и их работе можно прочитать в <a href="http://css-live.ru/tricks/novaya-alternativa-clearfix-u-i-overflowhidden.html">этой статье</a>.

<footer class="keywords section-subtitle visuallyhidden" aria-hidden="true" role="contentinfo">
    <h3>class clearfix</h3>
    <h4>div clearfix</h4>
    <h4>clearfix css</h4>
    <h5>clearfix after</h5>
    <h5>как использовать clearfix</h5>
</footer>
