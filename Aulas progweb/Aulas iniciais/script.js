const paragrafo = document.getElementById('paragrafoAtual')
const botao = document.getElementById('btnMensagem')
const titulo = document.getElementById('tituloAtual')
const header = document.getElementById('headerAtual')
const body = document.body
const formLogin = document.getElementById('login-form')
const formRegister = document.getElementById('register-form')
const formCep = document.getElementById('cep-form')
const resultadoCep = document.getElementById('resultadoCep')

botao.addEventListener('click', function() {
    paragrafo.textContent = 'outra frase'
    titulo.textContent = 'outro titulo'
    body.style.backgroundColor = '#8C98CA'
    paragrafo.style.color = '#fe0101'
    header.style.color = '#000000'
    header.textContent = 'Isso aqui é SABOOOOR header'
    header.style.fontSize = '200px'
});

formLogin.addEventListener('submit', function(e) {
    e.preventDefault()
    const user = document.getElementById('usuario').value
    const pass = document.getElementById('senha').value
    console.log(user, pass)
});


formRegister.addEventListener('submit', function(e) {
    e.preventDefault()
    const primeiroNome = document.getElementById('primeiroNome').value
    const sobreNome = document.getElementById('sobreNome').value
    const dataNascimento = document.getElementById('dataNascimento').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('registerSenha').value
    const cpf = document.getElementById('cpf').value

    console.log(primeiroNome, sobreNome, dataNascimento, email, senha, cpf)
});

formCep.addEventListener('submit', async function(e) {

    e.preventDefault()

    const cep = document.getElementById('cep').value

    try {

        const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const dados = await resposta.json()

        if(dados.erro) {
            resultadoCep.innerHTML = 'CEP não encontrado!'
            return
        }

        resultadoCep.innerHTML = `
            <h3>Resultado:</h3>
            <p><strong>Rua:</strong> ${dados.logradouro}</p>
            <p><strong>Bairro:</strong> ${dados.bairro}</p>
            <p><strong>Cidade:</strong> ${dados.localidade}</p>
            <p><strong>Estado:</strong> ${dados.uf}</p>
        `

    } catch(error) {

        resultadoCep.innerHTML = 'Erro ao consultar a API!'

        console.log(error)
    }

});
