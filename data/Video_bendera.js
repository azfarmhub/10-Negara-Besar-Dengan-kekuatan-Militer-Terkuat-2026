function aktifkanVideoBendera() {
    const videoBendera = document.querySelectorAll('.bendera video');
    const putarVideo = (video) => {
        const pemutaran = video.play();
        if (pemutaran) {
            pemutaran.catch((error) => {
                if (error.name === 'AbortError') return;
                video.controls = true;
                console.warn('Pemutaran otomatis bendera ditolak browser:', error);
            });
        }
    };

    if (!('IntersectionObserver' in window)) {
        videoBendera.forEach(putarVideo);
        return;
    }

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
                putarVideo(video);
            } else {
                video.pause();
            }
        });
    }, { rootMargin: '80px' });

    videoBendera.forEach((video) => {
        videoObserver.observe(video);
    });
}
