let form = document.getElementById('contact_form')

form.addEventListener('submit', (e) => {
    
    e.preventDefault()

    Swal.fire({
        title: 'Verify you are a human',
        html: `<div id="recaptcha-container"></div>`,
        showCancelButton: true,
        confirmButtonText: 'Send',
        didOpen: () => {
            grecaptcha.render('recaptcha-container', {
                sitekey: RECAPTCHA_SITE_KEY
            })
        },
        preConfirm: () => {
            let token = grecaptcha.getResponse()
            if (!token) {
                Swal.showValidationMessage('Please complete captcha')
                return false
            }
            return token
        }
    }).then(result => {
        if (!result.isConfirmed) {
            return
        }

        let token = result.value
        fetch('/send-message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
                token
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                Swal.fire('Sent', 'Your message has been sent', 'success')
                form.reset()
                grecaptcha.reset()
            } else {
                Swal.fire('Error', 'Captcha failed or server error', 'error')
            }
        })
    })
})