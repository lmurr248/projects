function helloWorld(){
var helloWorld = "Hello World!";
document.getElementById("header").innerHTML = helloWorld;
}


// Tiny MCE

tinymce.init({
      selector: '#text-editor',
      toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
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
