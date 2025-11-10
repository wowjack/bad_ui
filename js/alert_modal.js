const alertText = `
By accessing this website you hereby agree to grant Jack's 
Bargains and its affiliates unlimited, perpetual, irrevocable, worldwide rights to collect, 
store, process, and monetize any and all data generated during your visit including but not 
limited to browsing history, mouse movements, keystroke patterns, biometric data, facial 
recognition data, voice recordings, geolocation tracking, and any other identifiable 
information. You forfeit any right to privacy, legal recourse, class action participation, 
or arbitration concerning data usage. This agreement supersedes all prior agreements and 
cannot be modified except by Jack's Bargains at its sole discretion. Your continued use of 
this website constitutes ongoing acceptance of these terms regardless of updates or changes 
made without notice. You waive all intellectual property rights to any ideas, suggestions, 
or feedback provided to Jack's Bargains. By proceeding you certify that you are of legal 
age and have the authority to enter into this binding agreement. 
`;



$(() => {
  // Split text into individual characters with line breaks
  const formattedText = alertText.split(' ').join('<br>');
  $('#alertModalBody').html(formattedText);
  
  // Show modal on page load
  const modal = new bootstrap.Modal(document.getElementById('alertModal'));
  modal.show();
  
  // Dismiss modal when button is clicked
  $('#dismissModalBtn').on('click', function() {
    modal.hide();
  });
});