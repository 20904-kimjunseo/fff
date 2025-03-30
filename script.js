document.getElementById('pickBtn').addEventListener('click', pickCleaningDuty);

function pickCleaningDuty() {
    const allNumbers = Array.from({ length: 25 }, (_, i) => i + 1); // 1부터 25까지 배열 생성
    const pickedNumbers = [];

    // 5명을 랜덤으로 뽑기
    while (pickedNumbers.length < 5) {
        const randomIndex = Math.floor(Math.random() * allNumbers.length);
        const pickedNumber = allNumbers.splice(randomIndex, 1)[0]; // 랜덤으로 번호 선택하고 배열에서 제거
        pickedNumbers.push(pickedNumber);
    }

    // SweetAlert2로 결과 표시
    displayResults(pickedNumbers);
}

function displayResults(pickedNumbers) {
    // SweetAlert2로 뽑힌 당번 리스트 표시
    const pickedList = pickedNumbers.map(number => `번호: ${number}`).join('<br>');

    Swal.fire({
        title: '청소 당번이 뽑혔습니다!',
        html: `<div>${pickedList}</div>`,
        icon: 'success',
        confirmButtonText: '확인',
        confirmButtonColor: '#4CAF50',
        background: '#f4f9f9',
        showCloseButton: true
    });
}
