const HTML = `
    <div class="header-menu">
      <div class="header-menu__left">
        <a class="header-menu__icon" href="#">
          <!-- Стоит ли содержание приравнивать к обертке? -->
          <!-- Могу ли я указать высоту так? Данный способ не устарел? -->
          <img class="header-menu__icon" src="../img/docs-logo.png" alt="Docs" height="30" />
        </a>

        <div class="header-menu__wrap">
          <div class="header-menu__title" contenteditable="true">
            Новый документ
          </div>

          <div class="header-menu__document-pref">
            <a class="material-icons material-icons_size_s">star_border</a>
            <a class="material-icons material-icons_size_s" data-tip="Переместить"> folder_open </a>
            <a class="material-icons material-icons_size_s" data-tip="Посмотреть статус документа"> cloud_queue </a>
          </div>
        </div>

        <ul class="header-menu__preferences">
          <li class="preferences__item">Файл</li>
          <li class="preferences__item">Правка</li>
          <li class="preferences__item">Вид</li>
          <li class="preferences__item">Вставка</li>
          <li class="preferences__item">Формат</li>
          <li class="preferences__item">Инструменты</li>
          <li class="preferences__item">Дополнения</li>
          <li class="preferences__item">Справка</li>
        </ul>
        <span class="header-menu__last-change">
          Последнее изменение 6 часов назад
        </span>
      </div>

      <div class="header-menu__right">
        <i class="material-icons comment" href="##">comment</i>

        <button class="btn header-menu__btn">
          <span class="material-icons lock">lock</span>Настройки Доступа
        </button>

        <img class="header-menu__avatar" src="../img/cool-man.png" width="30" height="30" alt="" />
      </div>
    </div>
`


export function headerMenu($root: HTMLElement): void {
  $root.innerHTML = HTML

}