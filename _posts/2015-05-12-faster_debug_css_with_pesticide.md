---
layout: post
title: Быстрый дебаг CSS слоев с Pesticide
categories: front-end
redirect_from:
  - /front-end/faster_debug_css_layout_with_pesticide/
  - /blog/faster_debug_css_with_pesticide/
tags: [css, pesticide, debug]
keywords: >
  css debug дебаг
description: >
  Дебажим CSS слои с помощью библиотеки Pesticide и расширений для Chrome и Firefox.

image: pesticide/logo.png
imageWidth: 530
imageHeight: 140
imageCaption: Логотип библиотеки для дебага CSS — Pesticide
imageTitle: Pesticide — библиотека для дебага CSS
---

Как часто у вас бывали проблемы со схлопыванием плавающих элементов? Или элемент уезжал непонятно куда? Эти и другое проблемы, связанные с позиционированием элементов на странице решает маленькая CSS/Sass/LESS библиотека — <strong>Pesticide</strong>.

Что делает этот ваш Pesticide? На официальном сайте: «Kill your CSS layout bugs. Without 2000 clicks in Chrome Dev Tools». На самом деле принцип её работы очень прост, и я думаю многие разработчики писали у себя в стилях во время разработки нечто вроде этого:

~~~css
* {
  outline: red;
}
~~~

Но Адам Морс (Adam Morse) пошел дальше, и добавил свой цвет для каждого элемента. И теперь, если немного привыкнуть, то по цвету можно определять цвет элемента и его область.

Сам CSS файл до смешного прост, познакомиться подробнее с Pesticide можно на официальном сайте <a href="http://pesticide.io">pesticide.io</a>. Посмотреть исходники и скачать файл можно с <a href="https://github.com/mrmrs/pesticide" rel="nofollow">github</a>.

<figure itemscope itemtype="http://schema.org/ImageObject">
	<img itemprop="contentUrl" width="640" alt="Пример использования Pesticide на Github" src="/assets/img/pesticide/github.png">
	<figcaption itemprop="description">Пример использования Pesticide на Github</figcaption>
</figure>
<figure itemscope itemtype="http://schema.org/ImageObject">
	<img itemprop="contentUrl" width="640" alt="Пример использования Pesticide на Yandex" src="/assets/img/pesticide/ya.png">
	<figcaption itemprop="description">Пример использования Pesticide на Yandex</figcaption>
</figure>

Мне кажется, что подключать эту библиотеку как css файл на свой проект не рационально. Особенно когда у неё есть расширения для браузеров (<a href="https://chrome.google.com/webstore/detail/bblbgcheenepgnnajgfpiicnbbdmmooh" rel="nofollow">Chrome</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/pesticide/" rel="nofollow">Firefox</a>).

Но с расширениями есть одна проблема — они сбрасывается при перезагрузке страницы. В таком случае нам придется обязательно подключать pesticide как css файл чтобы избежать этого.

Я предложил Адаму исправить это положение вещей в расширении для хрома, но он не поддержал меня и решил не включать мои изменения в расширение. Поэтому было решено опубликовать еще одну версию этого расширения для хрома только без необходимости каждый раз нажимать на кнопку, чтобы увидеть библиотеку в действии. Так и появился <a href="https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/eipbgplchlidkojmppclhkechkhmlefi">Pesticide for Chrome with autoupdate</a>.

Какое расширение будете использовать вы — дело исключительно ваше. Но я думаю, не мне одному будет удобна моя модификация.

Красивой CSS разметки вам вместе с Pesticide :)
