function attachEvents() {
    document.getElementById('submit').addEventListener('click',onSubmit)
    document.getElementById('refresh').addEventListener('click',onRefresh)

}
attachEvents()
let url = 'http://localhost:3030/jsonstore/messenger'
let list = document.getElementById('messages');

async function onSubmit() {
    let author = document.querySelector('[name="author"]').value;
    let content = document.querySelector('[name="content"]').value;

    let newMsg = await createMsg({author, content});

    // list.value+= '\n' + `${author}: ${content}`
    await onRefresh()

}

async function onRefresh() {
    list.value = ''
    let res = await fetch(url);
    let data = await res.json();

    Object.values(data).forEach(m=>{
        list.value += (`${m.author}: ${m.content}'\n'`)
    })

}

async function createMsg(message) {
    const options = {
        method: 'post',
        headers:{
            'content-type': 'aplication-json'
        },
        body: JSON.stringify(message)
    };
    const res = await fetch(url, options);
    const result = res.json()

    return result;
}