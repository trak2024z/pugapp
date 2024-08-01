var express = require('express');
var pug = require('pug');
var router = express.Router();

// Funkcja do renderowania z pliku
const funkcjaDoRenderowania = pug.compileFile('views/index.pug');

// Trasa używająca funkcji do renderowania z pliku
router.get('/just-render', function(req, res, next) {
    res.send(funkcjaDoRenderowania({ title: 'Moja aplikacja-tylko renderowanie' }));
});

// Trasa używająca res.render do renderowania za pomocą silnika szablonów
router.get('/compile-render', function(req, res, next) {
    res.render('index', { title: 'Moja aplikacja-kompilacja i renderowanie' });
});

// Funkcja do renderowania z kodu szablonu
const funkcjaDoRenderowania2 = pug.compile('p Witaj w #{tytul}');

// Wyświetlanie wyniku renderowania w konsoli
const wynikRenderowania = funkcjaDoRenderowania2({ tytul: 'Inny przykład' });
console.log(wynikRenderowania);


// Nowa trasa używająca funkcji do renderowania z kodu szablonu
router.get('/inline-template', function(req, res, next) {
    const html = funkcjaDoRenderowania2({ tytul: 'Inny przykład - inline template' });
    res.send(html);
});

module.exports = router;
