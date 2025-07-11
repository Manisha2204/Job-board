const jobContainer = document.getElementById('jobContainer');

fetch("https://script.google.com/macros/s/AKfycbxNFYq1Tr18w1iVjl-9V2PVYiELmpZI39qVkSyA9OR3bLhUAJd_QbGdS8c28406HTrWqA/exec")
  .then(res => res.json())
  .then(data => renderJobs(data))
  .catch(err => {
    console.error("Error loading jobs:", err);
    jobContainer.innerHTML = "<p>Failed to load jobs. Please try again later.</p>";
  });

function renderJobs(jobs) {
  jobContainer.innerHTML = "";
  jobs.forEach((job, index) => {
    const card = document.createElement("div");
    card.classList.add("job-card");

    card.innerHTML = `
      <div class="job-inner">
        <div class="job-front">
          <div class="company">${job.company_name}</div>
          <div class="title">${job.job_title}</div>
          <div class="info-row">
            <div class="info-box">${job.employment_type}</div>
            <div class="info-box">${job.experience}</div>
          </div>
          <div class="footer">
            <div class="salary">₹ ${job.salary_range}</div>
            <button class="apply-btn" data-index="${index}">Apply Now</button>
          </div>
        </div>
        <div class="job-back">
          <div class="actions">
            <button class="back-btn">← Back to Listings</button>
            <button class="apply-btn">Apply Now</button>
          </div>
          <h2>${job.job_title}</h2>
          <div class="detail"><strong>Location:</strong> ${job.location}</div>
          <div class="detail"><strong>Summary:</strong> ${job.job_summary}</div>
          <div class="detail"><strong>Responsibilities:</strong> ${job.responsibilities}</div>
          <div class="detail"><strong>Skills:</strong> ${job.skills_qualifications}</div>
          <div class="detail"><strong>Benefits:</strong> ${job.benefits}</div>
          <div class="detail"><strong>Company Info:</strong> ${job.company_info}</div>
        </div>
      </div>
    `;

    jobContainer.appendChild(card);
  });

  // Flip functionality
  document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.job-card');
      card.classList.add('flip');
    });
  });

  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const card = this.closest('.job-card');
      card.classList.remove('flip');
    });
  });
}

