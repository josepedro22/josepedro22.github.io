// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('validationCustom05');
    const today = new Date().toISOString().split('T')[0]; // Obtém a data de hoje no formato YYYY-MM-DD
    dateInput.setAttribute('min', today);

});

  // Fechar o menu ao clicar fora dele
  document.addEventListener('click', function (event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');

    // Verifica se o menu está aberto e o clique não foi dentro do menu ou no botão de toggle
    if (navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)) {
        // Fecha o menu
        const collapseInstance = bootstrap.Collapse.getInstance(navbarCollapse);
        collapseInstance.hide();
    }
});

(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
          event.preventDefault(); // Prevent default behavior for demonstration

          if (!form.checkValidity()) {
              // Error popup
              Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'Please fill out all required fields correctly.',
                  timer: 5000,
                  showConfirmButton: false,
                  toast: true,
                  position: 'top-end'
              });
          } else {
              // Success popup
              Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  text: 'Form submitted successfully.',
                  timer: 3000,
                  timerProgressBar: true, // Adds progress bar to the timer
                  showConfirmButton: false,
                  toast: true,
                  position: 'top-end',
                  didClose: () => {
                      // Reload the page after the popup closes
                      window.location.reload();
                      window.scrollTo(0, 0);
                  }
              });
          }

          form.classList.add('was-validated');
      }, false);
  });
})();
