const handleSubscription = async () => {
    const dataArr = document.forms['mc-form']
    const data = {}

    for (const i of dataArr) {
        if (i.name != "submit")
            data[i.name] = i.value
    }
    document.forms['mc-form'].reset()
    try {
        const res = await fetch(`https://fierce-woodland-63982.herokuapp.com/api/newsletter/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            document.querySelector(`#mc-form`).setAttribute('data-err', false)
            document.querySelector(`#mc-form`).setAttribute('data-res', 'Subscribed sucessfully!')

            setTimeout(() => {
                document.querySelector(`#mc-form`).setAttribute('data-err', false)
                document.querySelector(`#mc-form`).setAttribute('data-res', '')
            }, 2000);
        } else {
            document.querySelector(`#mc-form`).setAttribute('data-err', true)
            document.querySelector(`#mc-form`).setAttribute('data-res', 'Try again later!')

            setTimeout(() => {
                document.querySelector(`#mc-form`).setAttribute('data-err', false)
                document.querySelector(`#mc-form`).setAttribute('data-res', '')
            }, 2000);
        }

    } catch (e) {

        document.querySelector(`#mc-form`).setAttribute('data-err', true)
        document.querySelector(`#mc-form`).setAttribute('data-res', 'Try again later!')

        setTimeout(() => {
            document.querySelector(`#mc-form`).setAttribute('data-err', false)
            document.querySelector(`#mc-form`).setAttribute('data-res', '')
        }, 2000);
    }
}