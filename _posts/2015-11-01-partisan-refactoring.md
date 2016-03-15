---
layout: post
title: Партизанский рефакторинг, или как улучшить проект, чтобы заказчик этого не понял
categories: front-end
description: Как незаметно проводить рефакторинг одновременно улучшая архитектуру приложения.
tags: [react, smartjs, архитектура, рефакторинг]

image: refactoring/cat.jpg
imageWidth: 438
imageHeight: 500
imageCaption: Знаете ли вы что-нибудь про рефакторинг? о_О
---

Сегодня мы поговорим о говнокоде. В следующих статьях мы обсудим архитектуру, но знание как построить «хорошую» архитектуру может разбиться о рабочие будни. Дома вы напишите «идеальный проект», но на работе вас поджидает jQuery. Но мы, как профессионалы, будем готовы к этому.

<!-- more -->

Представьте, что вы попали на проект с «плохим» кодом. Вам не понятно что и как там работает. Вам придется писать в нем новую функциональность или исправлять старые ошибки (баги).

Если это исправление багов, то у нас сильно связанный модуль. В котором тесно сплетены три слоя абстракции (нет разделения между Model, View и Controller).

Часто, примером такого кода является работа с jQuery. Делается AJAX запрос, после получения мы изменяем/подготавливаем данные, а потом выводим результат в HTML. И все это в одной функции.

Чтобы такой проект развивался, мы будем его дописывать и переписывать действующий код по мере необходимости. В этом нам помогут **чистые функции**.

В математике функция — отражение аргументов на результат.
При `x = 3`, функция вида `y = x^2` всегда равна 9.

В программировании, чтобы функция была чистой, она должна отвечать нескольким условиям:

1. функция не меняет ничего вне себя;
2. не изменяет аргументы;
3. результатом работы является новый объект или патч;

Но если от этого объекта зависят другие части, то заменить его новым объектом мы не можем. В этом случае функция должна генерировать *патч*, который мы склеим с объектом (через extend/merge) и получим желаемый результат.

Это позволяет нам представить работу с объектом бизнес логики как цепочку изменений. Где при применении каждого патча мы сможем залогировать изменения.

```bash
[ Q — 1 — 2 — 3 ] -> W
  |   |   |   |
  | —→|   |   |
      | —→|   |
          | —→|
              |
              ↓
```
Q — исходный объект, W — новое (измененное) состояние.

## А если нам придется изменять HTML?
Тогда мы сможем перерисовывать HTML на каждом этапе свертки (в местах где `—→|`).
Проблема в том, что таких маленьких изменений станет много. А перерисовывать HTML, на каждое изменение, так себе вариант. Пользователь заметит задержки в работе интерфейса.

Представим, что у нас HTML элемент, который неизвестно как и кто меняет. Типичная ситуация на таком проекте. Сначала найдем места, откуда происходят изменения. Для этого воспользуемся точкой останова (англ. breakpoint) на элементе в инструментах разработчика.

![Точка останова в инструментах разработчика Google Chrome](/assets/img/refactoring/subtree.png)

После установки мы получим список мест, которые меняют этот HTML или его дочерние элементы. Скорее всего вы найдете не все места, но это единственный доступный способ, который дает нам точки для старта.

*Окей, нашли. Что дальше?*

Хорошо бы заменить места, где код работают напрямую с HTML на функцию. Которая принимает текущее состояние, а на выходе генерируется HTML строка или происходит замена разметки в документе. Таким образом у нас будет только одно место в котором HTML меняться, что позволит логировать и дебажить любые изменения.

*Окей, заменили.*

А с тормозами то что? Что с ними делать?
Логично проверить изменились ли данные, перед тем как перерисовать HTML. И в дальнейшем перерисовывать только измененные данные если такие есть.

Поздравляю, мы только что изобрели __React__.

> [React](https://facebook.github.io/react/) — открытая JavaScript библиотека для создания пользовательского интерфейса, написанная компанией Facebook.

React стоится на компонентах. У них есть props (данные, которые передали снаружи), state (внутреннее состояние объекта) и функция Render (которая отображает props и state). Props-ы доступны только для чтения. Это основная идея реакта. Поскольку это не фреймворк, а библиотека, то мы можем завязать только один компонент на него, вне зависимости от основного фреймворка в приложении.

Таким образом можно провести партизанский рефакторинг, постепенно заменяя старые компоненты, на новые. За отображение которых будет отвечать React, или любая другая библиотека, способная на это.