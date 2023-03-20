@ECHO OFF

set /p ask=Run npm [yes/no]? 

if %ask%==yes (

    echo ======================
    echo INSTALANDO PACOTES NPM
    echo ======================
    echo.

    npm install
)

echo ======================
echo INICIANDO SERVIDOR WEB
echo ======================
echo.

ng serve -o

echo ======================
echo INICIANDO JASMINE TESTES 
echo ======================
echo.

start ng test