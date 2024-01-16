function addRule() {
    // You can add logic here to handle the selected property, operator, and value
    // For this example, let's just log the values to the console
    var property = document.getElementById("property").value;
    var operator = document.getElementById("operator").value;
    var value = document.getElementById("value").value;

    console.log("Property: " + property);
    console.log("Operator: " + operator);
    console.log("Value: " + value);
}
function myFunction() {
    alert("Do you want to save it ?");
  }
  function myFunctionn() {
    alert("Do you want to save it ?");
  }

  
        $('.portfolio-item').isotope({
  
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

      $('.portfolio-menu ul li').click(function(){
      $('.portfolio-menu ul li').removeClass('active');
      $(this).addClass('active');

      var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter:selector
    });
    return false;




      });

      function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }




   