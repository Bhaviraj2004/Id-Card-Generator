document.getElementById('idForm').addEventListener('submit', function(e) {
    e.preventDefault();
    window.open('ID.html', '_blank');

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('Lastname').value;
    const className = document.getElementById('Class').value;
    const rollNo = document.getElementById('Roll').value;
    const fatherName = document.getElementById('fathername').value;
    const photo = document.getElementById('photo').files[0];
    
    
    localStorage.setItem('name', name);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('class', className);
    localStorage.setItem('rollNo', rollNo);
    localStorage.setItem('fatherName', fatherName);
    

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('photo', e.target.result);
        
            window.location.href = 'ID.html';
        };
        reader.readAsDataURL(photo);
    } else {
     
        window.location.href = 'ID.html';
    }
});

