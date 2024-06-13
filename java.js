<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script>
    function scrollToParagraph(paragraphId) {
        document.getElementById(paragraphId).scrollIntoView({ behavior: 'smooth'});
    }
</script>

// Fungsi untuk menambahkan kelas slide-in pada paragraf saat dimuat
window.addEventListener('load', function() {
    var paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach(function(paragraph) {
        paragraph.classList.add('slide-in');
    });
});
