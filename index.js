document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const firstName = form.firstName.value.trim();
    const middleName = form.middleName.value.trim();
    const lastName = form.lastName.value.trim();
    const maritalStatus = form.maritalStatus.value;
    const churchDenomination = form.ChurchDenomination.value.trim();
    const bibleStudyClass = form.bibleStudyClass.value;
    const pictureInput = form.picture.files[0];
    const fullName = `${firstName} ${middleName} ${lastName}`.trim();
    const uniqueID = "CONS/25/" + Math.floor(100000 + Math.random() * 900000);

    if (!firstName || !lastName || !maritalStatus || !churchDenomination || !bibleStudyClass) {
        alert("Please fill all required fields.");
        return;
    }

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            showSuccessBanner(); // show success first
            if (pictureInput) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    generateTag(fullName, uniqueID, maritalStatus, churchDenomination, bibleStudyClass, e.target.result);
                };
                reader.readAsDataURL(pictureInput);
            } else {
                generateTag(fullName, uniqueID, maritalStatus, churchDenomination, bibleStudyClass, null);
            }
            form.reset();
        } else {
            alert("Form submission failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Submission error:", error);
        alert("An error occurred.");
    });
});

function showSuccessBanner() {
    const banner = document.createElement("div");
    banner.innerText = "You have successfully registered for this meeting";
    banner.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #28a745;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    `;
    document.body.appendChild(banner);
    setTimeout(() => {
        banner.remove();
    }, 5000);
}

function generateTag(name, id, maritalStatus, church, bibleClass, imageUrl) {
    const printWindow = window.open("", "", "width=800,height=600");

    const defaultImage = "https://www.w3schools.com/howto/img_avatar.png";

    const tagHTML = `
    <html>
    <head>
        <title>2025 Consecration Tag</title>
        <style>
            @media print {
                body {
                    margin: 0;
                    size: 75mm 105mm;
                }
                .print-btn {
                    display: none;
                }
            }
            body {
                font-family: 'Segoe UI', sans-serif;
                background: #fff;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                margin: 0;
            }
            .tag {
                width: 75mm;
                height: 105mm;
                border: 2px solid #000;
                border-radius: 8px;
                background: #f1f1f1;
                padding: 10px;
                box-sizing: border-box;
                text-align: center;
                box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            }
            .tag h2 {
                background-color: #003366;
                color: white;
                padding: 6px 0;
                margin: 0 0 8px 0;
                border-radius: 4px;
                font-size: 14pt;
            }
            .tag img {
                width: 30mm;
                height: 30mm;
                border-radius: 50%;
                object-fit: cover;
                margin: 8px 0;
                border: 1.5px solid #333;
            }
            .tag p {
                font-size: 11pt;
                margin: 3px 0;
            }
            .print-btn {
                margin-top: 20px;
                padding: 10px 20px;
                background: #007bff;
                color: #fff;
                border: none;
                border-radius: 5px;
                font-size: 12pt;
                cursor: pointer;
            }
        </style>
    </head>
    <body>
        <div class="tag">
            <h2>2025 CONSECRATION</h2>
            <img src="${imageUrl || defaultImage}" alt="Attendee Photo" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Status:</strong> ${maritalStatus}</p>
            <p><strong>Church:</strong> ${church}</p>
            <p><strong>Class:</strong> ${bibleClass}</p>
        </div>
        <button class="print-btn" onclick="window.print()">Download Tag</button>
    </body>
    </html>
    `;

    printWindow.document.write(tagHTML);
    printWindow.document.close();
}



















// SEO
 type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "Event",
  "name": "2025 Consecration",
  "startDate": "2025-01-01T10:00:00",
  "endDate": "2025-01-01T18:00:00",
  "location": {
    "@type": "Place",
    "name": "Consecrated Family Church",
    "address": "123 Church Street, City, Country"
  },
  "description": "Register for the 2025 Consecration event. Sign up now and get your registration tag.",
  "image": "URL to an image of the event",
  "offers": {
    "@type": "Offer",
    "url": "URL to the registration form",
    "priceCurrency": "USD",
    "price": "0.00",
    "eligibleRegion": "Worldwide"
  }
}
























