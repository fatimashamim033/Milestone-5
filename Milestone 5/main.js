// Get DOM elements
var generateResumeBtn = document.getElementById('generate-resume');
var resumeContainer = document.getElementById('resume');
generateResumeBtn.addEventListener('click', function () {
    // Get input values from the form
    var name = document.getElementById('name').value;
    var fName = document.getElementById('fName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('link').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate the form fields (basic validation)
    if (!name || !fName || !email || !phone || !linkedin || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Create the resume content dynamically using template literals
    var resumeContent = "\n        <h3>Personal Information</h3>\n        <p contenteditable=\"true\" ><strong>Name:</strong> ".concat(name, "</p>\n        <p contenteditable=\"true\"><strong>Father's Name:</strong> ").concat(fName, "</p>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p contenteditable=\"true\"><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the dynamically generated resume in the resume container
    resumeContainer.innerHTML = resumeContent;
});
// Toggle skills visibility/Hide
var toggleButton = document.getElementById('toggle-skills');
var skill = document.getElementById("skills");
toggleButton.addEventListener('click', function () {
    if (skill.style.display === 'none' || skill.style.display === '') {
        skill.style.display = 'block'; //show the textarea if it is hidden
    }
    else {
        skill.style.display = 'none'; //hide the textarea if it is visible 
    }
});
//--------
// Get DOM elements
//const generateResumeBtn = document.getElementById('generate-resume') as HTMLButtonElement;
//const resumeContainer = document.getElementById('resume') as HTMLDivElement;
var shareableLink = document.getElementById('shareable-link');
var copyLinkBtn = document.getElementById('copy-link');
var downloadPdfBtn = document.getElementById('download-pdf');
generateResumeBtn.addEventListener('click', function () {
    // Get input values from the form
    var name = document.getElementById('name').value;
    var fName = document.getElementById('fName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var linkedin = document.getElementById('link').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Validate the form fields (basic validation)
    if (!name || !fName || !email || !phone || !linkedin || !education || !experience || !skills) {
        alert('Please fill out all fields.');
        return;
    }
    // Create the resume content dynamically using template literals
    var resumeContent = "\n        <h3>Personal Information</h3>\n        <p contenteditable=\"true\" ><strong>Name:</strong> ".concat(name, "</p>\n        <p contenteditable=\"true\"><strong>Father's Name:</strong> ").concat(fName, "</p>\n        <p contenteditable=\"true\"><strong>Email:</strong> ").concat(email, "</p>\n        <p contenteditable=\"true\"><strong>Phone:</strong> ").concat(phone, "</p>\n        <p contenteditable=\"true\"><strong>LinkedIn:</strong> <a href=\"").concat(linkedin, "\" target=\"_blank\">").concat(linkedin, "</a></p>\n\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the dynamically generated resume in the resume container
    resumeContainer.innerHTML = resumeContent;
    // Generate a unique URL based on the user's name
    var username = name.toLowerCase().replace(/\s+/g, '-');
    var uniqueUrl = "https://yourdomain.com/resume/".concat(username);
    // Display the shareable link
    shareableLink.innerHTML = "<a href=\"".concat(uniqueUrl, "\" target=\"_blank\">").concat(uniqueUrl, "</a>");
    // Enable copy and download buttons
    copyLinkBtn.disabled = false;
    downloadPdfBtn.disabled = false;
});
// Copy the shareable link to clipboard
copyLinkBtn.addEventListener('click', function () {
    var linkText = shareableLink.textContent || '';
    navigator.clipboard.writeText(linkText).then(function () {
        alert('Link copied to clipboard');
    });
});
// Convert the resume to a PDF and download
downloadPdfBtn.addEventListener('click', function () {
    var resumeElement = document.getElementById('resume-output');
    var opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Use html2pdf library to generate the PDF from the resume content
    html2pdf().from(resumeElement).set(opt).save();
});
