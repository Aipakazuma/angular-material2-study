# 試したメモ

```sh
$ ng init
$ npm install @angular/material ng2-md-datable --save
```
[https://github.com/angular/material2](https://github.com/angular/material2)
[https://github.com/fredguile/ng2-md-datatable](https://github.com/angular/material2)

# material design lite 勉強メモ

## grid

* bootstrapと同じかな？
  * .container -> .row -> .col-x-xx が、.mdl-grid -> .mdl-cellみたいな感じ
* .mdl-gridの大きさは自分で決める
  * .mdl-grid { max-width: 980px; }
* mdl-cellは色々種類がある
  * [https://getmdl.io/components/index.html#layout-section/grid](https://getmdl.io/components/index.html#layout-section/grid)
  * bootstrapと同じで12カラム ... cellで幅を調整する
  * mdl-cell mdl-cell--x-col という感じ
  * desktop tablet phone というdevice毎に調整できるクラスもある
    * mdl-cell--9-col-desktop - デスクトップのときに9cellにする
    * mdl-cell--12-col-phone - スマホのときに12cellにする
    * mdl-cell--6-col-table - タブレットのときに6cellにする
  * 特定のデバイスで消したいときは mdl-cell--hide-tablet のようにすればおｋ

## layout

mdl-layoutと、mdl-js-layoutを付与したclassを用意
※bodyには付与しちゃダメらしい

```html
<div class="mdl-layout mdl-js-layout">
</div>
```

headerを追加。mdl-layout__headerは大きめのスクリーンだとnavigationのlinkを表示します。

スクリーンが小さくなるとnavigationは隠れるようになり、menu iconが表示されるようになる。

```html
<div class="mdl-layout mdl-js-layout">
  <header class="mdl-layout__header">
    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row">
    	<span class="mdl-layout__title">Simple Layout</span>
    </div>
  </header>
</div>
```





## navigation

# AngularMaterial2Study

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
