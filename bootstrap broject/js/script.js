
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
      // 1. Hide tooltip immediately when clicked
      $(this).tooltip('hide');
      
      // 2. Show "Copied!" message
      const messageDiv = this.nextElementSibling;
      messageDiv.textContent = 'Copied!';
      messageDiv.classList.add('show');
      
      // 3. Show alert after tiny delay
      setTimeout(() => {
        alert("تم نسخ النص");
      }, 1);
      
      // 4. Hide message after 1 second
      setTimeout(() => {
        messageDiv.classList.remove('show');
        setTimeout(() => messageDiv.textContent = '', 100);
      }, 1000);
    });
  });
  
  // Tooltip initialization with hover behavior
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
      trigger: 'manual'
    });
    
    // Show on hover, hide when mouse leaves
    $('.copy-btn')
      .on('mouseenter', function(){
        $(this).tooltip('show');
      })
      .on('mouseleave', function(){
        $(this).tooltip('hide');
      });
  });

  