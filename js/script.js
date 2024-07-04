// javascript revou mini project

//script for auto slide
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


//script for submit data
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById('message').value;
    var isValid = true;

    // Validasi Nama
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validasi Tanggal Lahir
    if (birthdate === '') {
        document.getElementById('birthdateError').textContent = 'Tanggal lahir harus diisi';
        isValid = false;
    } else {
        document.getElementById('birthdateError').textContent = '';
    }

    // Validasi Jenis Kelamin
    if (!gender) {
        document.getElementById('genderError').textContent = 'Jenis kelamin harus dipilih';
        isValid = false;
    } else {
        document.getElementById('genderError').textContent = '';
    }

    // Validasi Pesan
    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    // Jika semua valid, tampilkan data yang sudah diinput
    if (isValid) {
        document.getElementById('submittedName').textContent = name;
        document.getElementById('submittedBirthdate').textContent = birthdate;
        document.getElementById('submittedGender').textContent = gender.value === 'male' ? 'Laki-laki' : 'Perempuan';
        document.getElementById('submittedMessage').textContent = message;

        // Tampilkan area yang menunjukkan data yang sudah diinput
        document.getElementById('formResult').style.display = 'block';
    } 
});
