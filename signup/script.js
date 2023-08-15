document.addEventListener('DOMContentLoaded', function () {
    const idInput = document.querySelectorAll('.custom-input')[1];
    const pwInput = document.querySelectorAll('.custom-input')[2];
    const idLabel = document.getElementById('id-label');
    const pwLabel = document.getElementById('pw-label');
    const customButton = document.querySelector('.custom-button');

    customButton.addEventListener('click', function () {
        if (idInput.value.trim() === '') {
            const existingIdSpan = idLabel.querySelector('span');
            if (!existingIdSpan) {
                const span = document.createElement('span');
                span.innerText = '*아이디를 입력해주세요';
                idLabel.appendChild(span);
            }
        } else {
            const existingIdSpan = idLabel.querySelector('span');
            if (existingIdSpan) {
                idLabel.removeChild(existingIdSpan);
            }
        }

        if (pwInput.value.trim() === '') {
            const existingPwSpan = pwLabel.querySelector('span');
            if (!existingPwSpan) {
                const span = document.createElement('span');
                span.innerText = '*비밀번호를 입력해주세요';
                pwLabel.appendChild(span);
            }
        } else {
            const existingPwSpan = pwLabel.querySelector('span');
            if (existingPwSpan) {
                pwLabel.removeChild(existingPwSpan);
            }
        }
    });

    idInput.addEventListener('input', function () {
        const existingIdSpan = idLabel.querySelector('span');
        if (idInput.value.trim() === '' && !existingIdSpan) {
            const span = document.createElement('span');
            span.innerText = '*아이디를 입력해주세요';
            idLabel.appendChild(span);
        } else if (idInput.value.trim() !== '') {
            if (existingIdSpan) {
                idLabel.removeChild(existingIdSpan);
            }
        }
    });

    pwInput.addEventListener('input', function () {
        const existingPwSpan = pwLabel.querySelector('span');
        if (pwInput.value.trim() === '' && !existingPwSpan) {
            const span = document.createElement('span');
            span.innerText = '*비밀번호를 입력해주세요';
            pwLabel.appendChild(span);
        } else if (pwInput.value.trim() !== '' && existingPwSpan) {
            pwLabel.removeChild(existingPwSpan);
        }
    });
});
