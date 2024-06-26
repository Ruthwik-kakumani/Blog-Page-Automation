// Function to generate HTML content for description paragraphs
function generateDescriptionHTML(description) {
    var paragraphs = description.split('\n');
    var descriptionHTML = '';
    for (var i = 0; i < paragraphs.length; i++) {
        descriptionHTML += '<p><span>' + paragraphs[i] + '</span></p>';
    }
    return descriptionHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    var listPointCount = 0; // Counter for list points
    var contentSectionsHTML = ''; // Variable to store multiple content sections

    // Function to create inputs for list points
    function createListPointInputs() {
        listPointCount++;
        var listPointDiv = document.createElement('div');
        listPointDiv.classList.add('list-point');
        listPointDiv.style.border = '1px solid #ccc'; // Add border to the div
        listPointDiv.style.padding = '10px';
        listPointDiv.style.marginBottom = '10px';

        var headerLabel = document.createElement('label');
        headerLabel.textContent = 'List Point Header:';
        var headerInput = document.createElement('input');
        headerInput.type = 'text';
        headerInput.name = 'listPointHeader_' + listPointCount;
        headerInput.required = true;

        var descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = 'List Point Description:';
        var descriptionTextarea = document.createElement('textarea');
        descriptionTextarea.name = 'listPointDescription_' + listPointCount;
        descriptionTextarea.rows = 3;
        descriptionTextarea.required = true;

        var removeButton = document.createElement('button');
        removeButton.type = 'button';
        removeButton.textContent = 'Remove List Point';
        removeButton.classList.add('removeListPoints'); // Added class for styling
        removeButton.style.backgroundColor = '#dc3545'; // Red color
        removeButton.style.color = '#fff'; // White text
        removeButton.style.border = 'none'; // No border
        removeButton.style.padding = '5px 10px'; // Padding
        removeButton.style.borderRadius = '3px'; // Rounded corners
        removeButton.style.cursor = 'pointer'; // Pointer cursor
        removeButton.addEventListener('click', function() {
            listPointDiv.remove();
        });

        listPointDiv.appendChild(headerLabel);
        listPointDiv.appendChild(headerInput);
        listPointDiv.appendChild(descriptionLabel);
        listPointDiv.appendChild(descriptionTextarea);
        listPointDiv.appendChild(removeButton);

        document.getElementById('listPointsContainer').appendChild(listPointDiv);
    }

    // Event listener for "Add List Points" button
    document.getElementById('addListPoints').addEventListener('click', function() {
        createListPointInputs();
    });

    // Event listener for form submission
    document.getElementById('contentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var contentHeader = document.getElementById('contentHeaderInput').value.trim(); // Trim whitespace
        var contentImageUrl = document.getElementById('contentImageUrl').value.trim(); // Trim whitespace
        var contentDescription = document.getElementById('contentDescription').value.trim(); // Trim whitespace

        // Collect list points
        var listPoints = document.querySelectorAll('.list-point');
        var listPointsHTML = '';

        listPoints.forEach(function(point) {
            var header = point.querySelector('input[type="text"]').value.trim();
            var description = point.querySelector('textarea').value.trim();
            listPointsHTML += `
                <li class="key_points">
                    <div class="head_title_points">
                        <h5>${header}</h5>
                        <p><span>${description}</span></p>
                    </div>
                </li>`;
        });

        // Store the content section
        var contentSectionHTML = `
        <div class="content_div">
            <div class="title_div">
                <h1>${contentHeader}</h1>
            </div>
            <div class="title_img">
                <img src="${contentImageUrl}" alt="${contentHeader} Image" class="dupl_img">
            </div>
            <div class="content_text">
                <div class="upper_content">
                    ${generateDescriptionHTML(contentDescription)}
                    <div class="design_process_points">
                        <ul class="process_points">
                            ${listPointsHTML}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
        contentSectionsHTML += contentSectionHTML;

        // Reset form and list points
        document.getElementById('contentForm').reset();
        document.getElementById('listPointsContainer').innerHTML = '';

        // Reset response message
        document.getElementById('response').innerHTML = 'Content section added successfully! Add another content section or download the HTML.';

    });

    // Event listener for "Add Another Content" button
    document.getElementById('addAnotherContent').addEventListener('click', function() {
        // Clear form and list points
        document.getElementById('contentForm').reset();
        document.getElementById('listPointsContainer').innerHTML = '';

        // Reset response message
        document.getElementById('response').innerHTML = '';

        // Optionally, you can also reset the content header and image URL fields
        document.getElementById('contentHeaderInput').value = '';
        document.getElementById('contentImageUrl').value = '';
    });

    // Event listener for "Download HTML" button
    document.getElementById('downloadHTML').addEventListener('click', function() {
        // Generate HTML content for the blog post
        var htmlContent = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="styles/header-footer.css">
            <link rel="stylesheet" href="styles/empathy_style.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Empathy in Design: How Innovid Puts Clients First | Innovid</title>
            <script src="script/script.js"></script>
            <link rel="icon" href="Blogs/Images/innovid-favicon-logo.png">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer"
            />
            <script src="script/header.js"></script>
        </head>
        <body>
            <header>
                <section class="header-section">
                    <div class="header-logo">
                        <a href="https://innovid.in/"><img src="images/Innovid-Logo.png" alt="Innovid Logo"></a>
                    </div>
                    <div class="header-menu">
                        <div class="mob-menu">
                            <a id="menu-icon" class="menu-icon" onclick="onMenuClick()">
                                <i id="menu" class="fa fa-bars"></i>
                            </a>
                        </div>
                        <div id="navigation-bar" class="desk-menu">
                            <ul>
                                <li><a href="index.html" class="nav-item" id="home_li">Home</a></li>
                                <li><a href="about.html" class="nav-item" id="about_li">About</a></li>
                                <li><a href="work.html" class="nav-item" id="work_li">Work</a></li>
                                <li><a href="career.html" class="nav-item" id="career_li">Career</a></li>
                                <li><a href="contact.html" class="nav-item" id="contact_li">Contact</a></li>
                                <li><a href="Blogs.html" class="nav-item active" id="blogs_li">Blogs</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section class="content_section" id="content_section">
                    ${contentSectionsHTML}
                </section>
            </main>
            <footer>
                <section>
                    <div>
                        <div class="footer-section ">
                            <div class="column1 ">
                                <div class="footer-logo ">
                                    <img src="images/Innovid-Logo.png " alt="Innovid Logo ">
                                </div>
                                <div class="sub-copy ">
                                    <p>UI/UX Design Company with a <br><span style="font-weight: 700; ">Human Centered Design</span><br> Approach</p>
                                </div>
                                <div class="social-icons ">
                                    <a href="https://www.facebook.com/profile.php?id=61550083426744 " target="_blank "><i class="fa fa-facebook " aria-hidden="true "></i></a>
                                    <a href="https://www.instagram.com/innovid.in/ " target="_blank "><i class="fa fa-instagram " aria-hidden="true "></i></a>
                                    <a href="https://twitter.com/InnovidIndia " target="_blank "><i class="fa fa-twitter " aria-hidden="true "></i></a>
                                    <a href="https://www.linkedin.com/company/innovid-in " target="_blank "><i class="fa fa-linkedin " aria-hidden="true "></i></a>
                                </div>
                            </div>
                            <div class="column2 ">
                                <h3>Resources</h3>
                                <p><a href="Blogs.html ">Blog</a></p>
                                <p><a href="work.html ">Our Work</a></p>
                            </div>
                            <div class="column3 ">
                                <h3>Company</h3>
                                <p><a href="about.html ">About Us</a></p>
                                <p><a href="services.html ">Services</a></p>
                            </div>
                            <div class="column4 ">
                                <h3>Reach out to us</h3>
                                <p><i class="fa fa-map-marker " aria-hidden="true "></i> Whitefield Bangalore, 560066</p>
                                <p><i class="fa fa-envelope-o " aria-hidden="true "></i> contact.innovid@gmail.com</p>
                                <p><i class="fa fa-phone " aria-hidden="true "></i> +91 93909 32643</p>
                            </div>
                        </div>
                        <div class="footer-copy ">
                            <p>© 2023 Innovid - UI/UX Design Company with a Human Centered Design Approach</p>
                        </div>
                    </div>
                </section>
            </footer>
        </body>
        </html>`;

        // Create a Blob object for the HTML content
        var blob = new Blob([htmlContent], { type: 'text/html' });

        // Create a link element
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `BlogPost.html`; // Filename
        document.body.appendChild(a);
        a.click(); // Click on the link to trigger download
        document.body.removeChild(a); // Clean up

        // Show confirmation message
        document.getElementById('response').innerHTML = 'HTML file generated and downloaded successfully!';
    });
});