class CustomModal {
    static show({ title = "Success", message = "Your work is saved!", buttonText = "OK", onConfirm }) {
        // Remove existing modal if present
        let existingModal = document.querySelector(".custom-modal-overlay");
        if (existingModal) existingModal.remove();

        // Modal HTML structure
        let modalHtml = `
            <div class="custom-modal-overlay">
                <div class="custom-modal">
                    <div class="custom-modal-header">
                        <div class="checkmark-container">
                            <svg class="checkmark" viewBox="0 0 52 52">
                                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark-check" fill="none" d="M14 27l7 7 16-16"/>
                            </svg>
                        </div>
                    </div>
                    <div class="custom-modal-body">
                        <h3>${title}</h3>
                        <p>${message}</p>
                    </div>
                    <div class="custom-modal-footer">
                        <button class="custom-modal-confirm">${buttonText}</button>
                    </div>
                </div>
            </div>
        `;

        let modalContainer = document.createElement("div");
        modalContainer.innerHTML = modalHtml;
        document.body.appendChild(modalContainer);

        // Close modal event
        modalContainer.querySelector(".custom-modal-confirm").onclick = () => {
            if (onConfirm) onConfirm();
            modalContainer.remove();
        };
    }
}
