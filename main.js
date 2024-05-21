let userId = document.querySelector('.form__first_inp')
let userPassword = document.querySelector('.form__second_inp')
let loginBtn = document.querySelector('.form__btn')
let errorText = document.querySelector('.p-error')

let users = [
    {
        id: 1,
        modmeid: '123456',
        password: '78900'
    }
]

loginBtn.addEventListener('click', () => {

    users.map((v) => {
        if (v.modmeid === userId.value && v.password === userPassword.value) {
            window.location.href = 'https://navfal2010.github.io/Flags/'
        }
        else {
            errorText.innerHTML = 'Login xato'
            errorText.style.color = 'red'


        }

    })
    userId.value = null
    userPassword.value = null
})

