---
layout: post
title: На чем тестировать JavaScript фреймворки
categories: front-end
description: На чем испробовать новую технологию или фреймоврк если нет сайд/пет проекта? Пара интересных задачек в этой заметке.
tags: [frameworks, js, react, flux, redux, testing]

image: test-framework/frameworks.jpg
imageWidth: 638
imageHeight: 479
imageCaption: Разнообразие JavaScript фреймворков
imageTitle: Разнообразие JavaScript фреймворков
---

Вы увидели новый фреймворк, который конечно в миллион раз лучше текущего. Заманчиво, но использовать его в боевом проекте нельзя, т.к. нет опыта работы с ним, непонятны сильные и слабые стороны.

Для этой цели подходят сторонние проекты. В зависимости от проекта, вы можете не найти слабые и сильные стороны фреймворка. А что делать если таких проектов нет?

<!-- more -->

Первое, что приходит в голову — [TodoMVC](http://todomvc.com){:rel='nofollow'}. Попробуйте реализовать сами, а потом сверьтесь с решением, если такое существует. Обычно, на этом идеи заканчиваются, но только не у нас 😏

Когда я проходил [курс по архитектуре](front-end/smartjs_started_a_course_on_architecture), у меня было интересное задание — реализовать базу данных ситхов. Как нам объяснили позже, это задание придумал André Staltz, чтобы показать недостатки Flux архитектуры. Но другим архитектурам тоже приходится не сладко.

{% include media-image.html url="test-framework/sith-database.gif" alt="Flux Challenge — база данных ситхов" caption="Flux Challenge — база данных ситхов" link="https://github.com/staltz/flux-challenge" %}

Подробнее о задании читайте в репозитории [Flux challenge](https://github.com/staltz/flux-challenge){:rel='nofollow'}, или на русском [у меня](https://github.com/ymatuhin/architect/blob/master/learning-1-sith-backbone/README.md){:rel='nofollow'}.

Так же есть еще одно не тривиальное, но простое задание, чтобы показать проблему взаимодействия Redux и react-router — [friend-list](https://github.com/DerekCuevas/friend-list). Там же в репозитории можно посмотреть решения на [Cycle.js](http://cycle.js.org/).

{% include media-image.html url="test-framework/friendlist.gif" alt="Friend List" caption="Friend List" link="https://github.com/DerekCuevas/friend-list" %}

А на чем вы тестируете новые технологии?
