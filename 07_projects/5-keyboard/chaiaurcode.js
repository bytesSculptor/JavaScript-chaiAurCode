console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
        <table>
            <thead>
                <tr>
                    <th colspan="3">Press Key and watch</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th> 
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? 'space' : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `
})