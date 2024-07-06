// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>
            {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    
};

//typed js
const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Programmer','Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.getElementById('readMoreBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag
    var moreText = document.getElementById('moreText');
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        moreText.classList.add('hidden');
        this.textContent = 'Read More';
    }
});

function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the thank you message
    const thankYouMessage = document.getElementById('thankYouMessage');
    thankYouMessage.style.display = 'block';

    // Hide the thank you message after 30 seconds (30000 milliseconds)
    setTimeout(() => {
        thankYouMessage.style.display = 'none';
    }, 30000);

    // Reset the form fields
    document.getElementById('contactForm').reset();
}