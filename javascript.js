function checkAge() {
    alert("เกมนี้ต้องมีอายุ18ปีขึ้นไป");
}
 function sendEmail() {
        const name = document.getElementById('name').value;
        const fromEmail = document.getElementById('fromEmail').value;
        const message = document.getElementById('message').value;
        const mailtoLink = `mailto:jjopo332@gmail.com?subject=ติดต่อจาก ${name}&body=ชื่อ: ${name}%0Aอีเมล: ${fromEmail}%0A%0Aข้อความ:%0A${message}`;
        window.location.href = mailtoLink;
    }