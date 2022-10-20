# git config
git config --list
git config --global core.safecrlf warn
git config --global core.quotepath off
git config --global init.defaultBranch main
git config --global core.autocrlf

git init # инициализация репозитория
git add . # добавить все файлф в track
git commit -m # сделать коммит
git status - # текущий статус
git diff - # показывает все текущие изменения
git diff --color-words # более развернуто
git checckout . # вернуться к последнему коммиту