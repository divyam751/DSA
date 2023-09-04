// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const jobURL = `${baseServerURL}/jobs`;
let mainSection = document.getElementById("data-list-wrapper");

let paginationWrapper = document.getElementById("pagination-wrapper");

// job
let jobRoleInput = document.getElementById("job-role");
let jobImageInput = document.getElementById("job-image");
let jobCompanyNameInput = document.getElementById("job-companyName");
let jobExperienceRequiredInput = document.getElementById(
  "job-experienceRequired"
);
let jobEmploymentTypeInput = document.getElementById("job-employmentType");
let jobpackageCTCInput = document.getElementById("job-packageCTC");
let jobKeySkillsInput = document.getElementById("job-keySkills");
let jobCreateBtn = document.getElementById("add-job");

// Update job
let updateJobIdInput = document.getElementById("update-job-id");
let updateJobRoleInput = document.getElementById("update-job-role");
let updateJobImageInput = document.getElementById("update-job-image");
let updateJobCompanyNameInput = document.getElementById(
  "update-job-companyName"
);
let updateJobExperienceRequiredInput = document.getElementById(
  "update-job-experienceRequired"
);
let updateJobEmploymentTypeInput = document.getElementById(
  "update-job-employmentType"
);
let updateJobPackageCTCInput = document.getElementById("update-job-packageCTC");
let updateJobKeySkillsInput = document.getElementById("update-job-keySkills");
let updateJobBtn = document.getElementById("update-job");

//Update packageCTC
let updatePackageJobId = document.getElementById("update-package-job-id");
let updatePackageJobPackage = document.getElementById(
  "update-package-job-package"
);
let updatePackageJobBtn = document.getElementById("update-package-job");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterGoogle = document.getElementById("filter-Google");
let filterMicrosoft = document.getElementById("filter-Microsoft");
let filtercapgemini = document.getElementById("filter-capgemini");

//Search by title/colour

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Jobs Data
let jobsData = [];
let queryParamString = null;
let pageNumber = 1;