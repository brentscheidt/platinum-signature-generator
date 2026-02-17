document.addEventListener("DOMContentLoaded", () => {
    // Inputs
    const inputs = {
        name: document.getElementById("inName"),
        title: document.getElementById("inTitle"),
        office: document.getElementById("inOffice"),
        cell: document.getElementById("inCell"),
        email: document.getElementById("inEmail"),
        photo: document.getElementById("inPhoto")
    };

    // Outputs
    const outputs = {
        name: document.getElementById("sigName"),
        title: document.getElementById("sigTitle"),
        office: document.getElementById("sigOffice"),
        cell: document.getElementById("sigCell"),
        emailLink: document.getElementById("sigEmailLink"),
        photo: document.getElementById("sigPhoto"),
        photoContainer: document.getElementById("sigPhotoContainer")
    };

    // Update Function
    function updateSignature() {
        // Text fields
        outputs.name.textContent = inputs.name.value || "Your Name";
        outputs.title.textContent = inputs.title.value || "Job Title";
        outputs.office.textContent = inputs.office.value || "(602) 435-3544";
        outputs.cell.textContent = inputs.cell.value || "(xxx) xxx-xxxx";

        // Email Link
        const email = inputs.email.value || "email@platinumroofingaz.com";
        outputs.emailLink.textContent = email;
        outputs.emailLink.href = `mailto:${email}`;

        // Photo Logic
        const photoUrl = inputs.photo.value.trim();
        if (photoUrl) {
            outputs.photo.src = photoUrl;
            outputs.photoContainer.style.display = "block";
        } else {
            outputs.photoContainer.style.display = "none";
        }
    }

    // Attach Listeners
    Object.values(inputs).forEach(input => {
        input.addEventListener("input", updateSignature);
    });

    // Copy Functionality
    document.getElementById("copyBtn").addEventListener("click", async () => {
        const signatureNode = document.getElementById("signaturePreview");

        // We need to copy the *HTML* for Gmail to respect formatting (tables, styles)
        // Clipboard API with 'text/html' is the modern way
        const htmlContent = signatureNode.innerHTML;
        const textContent = signatureNode.innerText;

        try {
            const clipboardItem = new ClipboardItem({
                'text/html': new Blob([htmlContent], { type: 'text/html' }),
                'text/plain': new Blob([textContent], { type: 'text/plain' })
            });

            await navigator.clipboard.write([clipboardItem]);
            showToast();
        } catch (err) {
            console.error("Copy failed:", err);
            // Fallback for older browsers
            alert("Copy failed. Please select the signature manually and copy.");
        }
    });

    function showToast() {
        const toast = document.getElementById("toast");
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2000);
    }
});
