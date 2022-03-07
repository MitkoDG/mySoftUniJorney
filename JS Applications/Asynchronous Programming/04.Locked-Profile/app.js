




async function lockedProfile() {

    const url = 'http://localhost:3030/jsonstore/advanced/profiles';

    const res = await fetch(url);
    const data = await res.json();
    
    let index = 1;

    const main = document.querySelector('#main');
    main.removeChild(document.querySelector('.profile'));

    for (const user in data) {
        displayProfiles(index, user);
        index++;
    }

    function displayProfiles(index, user) {
        // Initialization
        const { username, age, email } = data[user];

        const profile = document.createElement('div');
        profile.classList.add('profile');

        // image
        const img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');
        profile.appendChild(img);

        // Radio buttons
        appendRadioButtons('Lock', index, profile, true);
        appendRadioButtons('Unlock', index, profile, false);

        // Username
        const hr = document.createElement('hr');
        profile.appendChild(hr);
        appendField('Username', index, profile, username);

        // Hidden section
        const hidden = document.createElement('div');
        hidden.classList.add('hiddenInfo');
        hidden.id = `user${index}HiddenFields`;
        const hiddenHr = document.createElement('hr');
        // NOTE: Hid the <hr> directly in the CSS to save some effort
        hidden.appendChild(hiddenHr);

        appendField('Email', index, hidden, email);
        appendField('Age', index, hidden, age);
        profile.appendChild(hidden);

        // Button
        const button = document.createElement('button');
        button.textContent = 'Show more';
        profile.appendChild(button);

        main.appendChild(profile);

        button.addEventListener('click', toggleInfo);
    }


    function appendRadioButtons(text, index, context, checked) {
        const label = document.createElement('label');
        label.textContent = text;

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `user${index}Locked`;
        radio.value = text.toLowerCase();
        radio.checked = checked;

        context.appendChild(label);
        context.appendChild(radio);
    }

    function appendField(text, index, context, value) {
        const label = document.createElement('label');
        if (text === 'Username') {
            label.textContent = text;
        } else {
            label.textContent = text + ':';
        }

        const input = document.createElement('input');
        input.disabled = true;
        input.readOnly = true;

        if (text === 'Email') {
            input.type = 'email';
        }

        input.value = value;
        input.name = `user${index}${text}`;

        context.appendChild(label);
        context.appendChild(input);
    }

    function toggleInfo(event) {
        event.preventDefault();
        const hiddenInfo = this.parentNode.querySelector('div');
        const unlockedBtn = this.parentNode.querySelector('input[value="unlock"]');
        if (unlockedBtn.checked) {
                  this.textContent = 'Hide it';
            } else {
                this.textContent = 'Show more'
            }
        }  hiddenInfo.classList.toggle('hiddenInfo');

            if (this.textContent === 'Show more') {
        
    }
}