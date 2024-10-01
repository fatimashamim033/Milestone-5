// Get DOM elements
const generateResumeBtn = document.getElementById('generate-resume') as HTMLButtonElement;
const resumeContainer = document.getElementById('resume') as HTMLDivElement;


generateResumeBtn.addEventListener('click', () => {
    // Get input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fName = (document.getElementById('fName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('link') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Validate the form fields (basic validation)
    if (!name || !fName || !email || !phone || !linkedin || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    // Create the resume content dynamically using template literals
    const resumeContent = `
        <h3>Personal Information</h3>
        <p contenteditable="true" ><strong>Name:</strong> ${name}</p>
        <p contenteditable="true"><strong>Father's Name:</strong> ${fName}</p>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
        <p contenteditable="true"><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the dynamically generated resume in the resume container
    resumeContainer.innerHTML = resumeContent;
});

// Toggle skills visibility/Hide
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skill = document.getElementById("skills") as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skill.style.display === 'none'|| skill.style.display === '') {
        skill.style.display = 'block';       //show the textarea if it is hidden
    } else {
        skill.style.display = 'none';       //hide the textarea if it is visible 
    }
});

//--------
// Get DOM elements
//const generateResumeBtn = document.getElementById('generate-resume') as HTMLButtonElement;
//const resumeContainer = document.getElementById('resume') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLSpanElement;
const copyLinkBtn = document.getElementById('copy-link') as HTMLButtonElement;
const downloadPdfBtn = document.getElementById('download-pdf') as HTMLButtonElement;

generateResumeBtn.addEventListener('click', () => {
    // Get input values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fName = (document.getElementById('fName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const linkedin = (document.getElementById('link') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Validate the form fields (basic validation)
    if (!name || !fName || !email || !phone || !linkedin || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }

    // Create the resume content dynamically using template literals
    const resumeContent = `
        <h3>Personal Information</h3>
        <p contenteditable="true" ><strong>Name:</strong> ${name}</p>
        <p contenteditable="true"><strong>Father's Name:</strong> ${fName}</p>
        <p contenteditable="true"><strong>Email:</strong> ${email}</p>
        <p contenteditable="true"><strong>Phone:</strong> ${phone}</p>
        <p contenteditable="true"><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the dynamically generated resume in the resume container
    resumeContainer.innerHTML = resumeContent;

    // Generate a unique URL based on the user's name
    const username = name.toLowerCase().replace(/\s+/g, '-');
    const uniqueUrl = `https://yourdomain.com/resume/${username}`;

    // Display the shareable link
    shareableLink.innerHTML = `<a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;

    // Enable copy and download buttons
    copyLinkBtn.disabled = false;
    downloadPdfBtn.disabled = false;
});

// Copy the shareable link to clipboard
copyLinkBtn.addEventListener('click', () => {
    const linkText = shareableLink.textContent || '';
    navigator.clipboard.writeText(linkText).then(() => {
        alert('Link copied to clipboard');
    });
});

// Convert the resume to a PDF and download
downloadPdfBtn.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume-output') as HTMLElement;
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Use html2pdf library to generate the PDF from the resume content
    html2pdf().from(resumeElement).set(opt).save();
});


