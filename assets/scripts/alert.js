const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alertLogado = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">
        <div>${message}</div>
        <a href="dashboard.html">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </a>
        </div>`
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('botaoEntrar')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alertLogado('Parabéns, você está logado!', 'success')
    })
}

console.log("teste");