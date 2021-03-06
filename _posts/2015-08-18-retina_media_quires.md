---
layout: post
title: Правильный сниппет медиа выражений для retina
description: >
  Которкий сниппет media quires для определения retina дисплеев и старые сниппеты от которых нужно давно избавиться.
categories: front-end
redirect_from:
  - /blog/retina_media_quires/
tags: [css, retina, лучшие практики, media quires, медиа выражения]
---

Я видел разные способы определения мониторов retina. Одни объемные, другие наоборот. Разберемся какие из media quires изпользовать.

## Правильное решение для retina (2x)

~~~js
@media (-webkit-min-device-pixel-ratio: 2),
(min-resolution: 192dpi) {
    /* CSS правила для retina */
}
~~~

Этот сниппет определяет только ретина дисплеи (2х), но есть еще и дисплеи с <code>device-pixel-ratio</code> больше 1 и меньше 2 — мобильные телефоны. Для них лучше тоже показывать оптимизированные под retina изображения.

<!-- more -->

У себя в сниппете я проверяю на <code>120dpi</code>:

~~~js
/* 1.25 dpr */
@media
(-webkit-min-device-pixel-ratio: 1.25),
(min-resolution: 120dpi){
    /* CSS правила для retina */
}
~~~

Какой из них использовать решать вам. Предупрежу, что если <code>dpi</code> больше 1 и меньше 2, то это мобильное устройство. А если загружать для мобильного устройства оптимизированную под ретина дисплеи графику, то сайт будет дольше загружаться. Что важно для пользователей мобильных устройств.

## Почему эти правила

Ответ найдем в поддержке браузерами этих свойств. Открываем <a href="http://caniuse.com/#feat=css-media-resolution">caniuse</a> и видим следующее:

<figure itemscope itemtype="http://schema.org/ImageObject">
	<img itemprop="contentUrl" alt="Поддержка Media Queries в браузерах" src="/assets/img/media_queries/support.png">
	<figcaption itemprop="description">Поддержка Media Queries в браузерах</figcaption>
</figure>

Зеленые столбцы и столбцы с номером 1 — поддерживают min/max resolution с единицами измерения <code>dpi</code>, а столбцы с номером 3 — поддерживают <code>-webkit-device-pixel-ratio</code>. То есть нам требуются только эти два свойства.

<h3>Старые правила (не используйте)</h3>

~~~js
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1) {
  /* CSS правила для retina */
}
~~~

Или даже

~~~js
@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {
  /* CSS правила для retina */
}
~~~

<!-- <footer class="keywords section-subtitle visuallyhidden" aria-hidden="true" role="contentinfo">
    <h3>ретина css</h3>
    <h4>retina media quires</h4>
    <h5>ретина медиа выражения</h5>
</footer> -->
