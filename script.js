// Handle form submission
document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const job = {};
  formData.forEach((value, key) => {
    job[key] = value.trim();
  });

  fetch('https://script.google.com/macros/s/AKfycbxNFYq1Tr18w1iVjl-9V2PVYiELmpZI39qVkSyA9OR3bLhUAJd_QbGdS8c28406HTrWqA/exec', {
    method: 'POST',
    body: JSON.stringify(job),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.text())
    .then(data => {
      alert('✅ Job posted successfully!');
      document.getElementById('jobForm').reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      alert('❌ Failed to post job. Please try again.');
    });
});

// Handle dark mode toggle
const toggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
