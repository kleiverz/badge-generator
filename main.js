 const canvas = document.getElementById('badgeCanvas');
        const ctx = canvas.getContext('2d');
        const form = document.getElementById('badgeForm');
        const imageFile = document.getElementById('imageFile');
        const textInput = document.getElementById('textInput');
        const downloadBtn = document.getElementById('downloadBtn');

        const badgeImage = new Image();
        badgeImage.src = 'badge-v2.jpg';
        badgeImage.onload = () => {
            ctx.drawImage(badgeImage, 0, 0, canvas.width, canvas.height);
        };

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const file = imageFile.files[0];
            const text = textInput.value;

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new Image();
                    img.onload = () => {
                         };
                    img.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        downloadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg');
            link.download = 'badge.jpg';
            link.click();
        });