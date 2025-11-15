Natafit static site

Путь к сайту: `C:\Users\yayah\Downloads\Natafit_site\.main`

Как открыть сайт в Chrome:

1) Через Проводник: открой папку `C:\Users\yayah\Downloads\Natafit_site\.main` и дважды кликни `index.html` — файл откроется в браузере по умолчанию (или правый клик -> Открыть с помощью -> Google Chrome).

2) Через PowerShell (если Chrome установлен и в PATH):

```powershell
Start-Process "chrome" "file:///C:/Users/yayah/Downloads/Natafit_site/.main/index.html"
```

3) Через PowerShell с явным путём к Chrome (стандартная установка):

```powershell
& '"C:\Program Files\Google\Chrome\Application\chrome.exe"' "C:\Users\yayah\Downloads\Natafit_site\.main\index.html"
```

Содержимое папки `.main`: `index.html`, `services.html`, `schedule.html`, `contact.html`, папка `css` и `assets` с двумя логотипами (`logo.svg`, `logo_N.svg`).

Если хочешь, могу перенести файл в другое место или запаковать в ZIP для скачивания.