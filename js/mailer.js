const handleMail = async () => {
    const dataArr = document.forms['app_dev_form']
    const data = {}

    for (const i of dataArr) {
        if (i.name != "submit")
            data[i.name] = i.value ? i.value : "none"
    }
    document.forms['app_dev_form'].reset()

    try {
        const res = await fetch(`https://fierce-woodland-63982.herokuapp.com/api/mail/sendmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', false)
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', 'Email sent sucessfully!')

            setTimeout(() => {
                document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', false)
                document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', '')
            }, 2000);
        } else {
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', true)
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', 'Try again later!')

            setTimeout(() => {
                document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', false)
                document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', '')
            }, 2000);
        }

    } catch (e) {

        document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', true)
        document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', 'Try again later!')

        setTimeout(() => {
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-err', false)
            document.querySelector(`form[name='app_dev_form']`).setAttribute('data-res', '')
        }, 2000);
    }
}