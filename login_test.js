Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'wagalencar1998@outlook.com')
    I.fillField('#password', '123456')
/// fiellField serve para dizer no primeiro parâmetro o campo escolhido e no segundo o que será inserido    
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
/// waitForText serve para validação ou aguardo do texto que irá aparecer na tela 

}).tag('@sucesso')
/// Tags servem como parâmetro de rodagem, logo, ao inserir o "npx codeceptjs run" basta adicionar --grep 'nome da tag'  

Scenario('Tentando Logar digitando apenas o e-mail ',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'wagalencar1998@outlook.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}).tag('@email')

Scenario('Tentando Logar digitando apenas a senha ',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('@senha')

Scenario('Tentando Logar sem preencher os campos de e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

}).tag('@embranco')

