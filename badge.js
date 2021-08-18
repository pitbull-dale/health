$(document).ready(function () {
    const dateDiv = $('#cleared-date');
    const today = new Date();
    const todayString = today.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    dateDiv.text(todayString);
    const studentName = $('#student-name');
    studentName.on('input', (e) => {
        const input = e.target.innerText;
        const newLine = input.indexOf('\n');
        if (newLine >= 0) {
            studentName.text(input.substr(0, newLine));
        }
    });
});