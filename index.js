// Tiny MCE

tinymce.init({
  selector: 'textarea',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen powerpaste advtable advcode editimage tableofcontents mergetags inlinecss'
});

// Copy button text to clipboard

const copyButton = document.getElementById('copyButton');

      copyButton.addEventListener('click', () => {
        const buttonContent = copyButton.textContent;

        navigator.clipboard.writeText(buttonContent)
          .then(() => {
            console.log('Button content copied to clipboard: ' + buttonContent);
          })
          .catch(err => {
            console.error('Failed to copy button content: ', err);
            alert('Failed to copy button content. Please try again.');
          });
      });
