const searchInput = document.getElementById('search');
const searchResults = document.getElementById('searchResults');

    // List of documents for search
    const documents = [
  { name: "PAN Card", link: "/Identity-certificate/pan.html" },
  { name: "Aadhaar Card", link: "/Identity-certificate/adhaar.html" },
  { name: "Driving License", link: "/Identity-certificate/driving-license.html" },
  { name: "Voter ID", link: "/Identity-certificate/voter.html" },
  { name: "Birth Certificate", link: "/Identity-certificate/birth-certificate.html" },
  // Travel Documents
  { name: "Passport", link: "/Travel-certificate/passport.html" },
  { name: "International Driving Permit", link: "/Travel-certificate/idp.html" },
  { name: "Vehicle RC", link: "/Travel-certificate/vehicle-rc.html" },
  // Financial Documents
  { name: "Bank Account", link: "/Financial-certificate/bank-account.html" },
  { name: "Credit Card", link: "/Financial-certificate/credit-card.html" },
  { name: "Debit Card", link: "/Financial-certificate/debit-card.html" },
  // Other Documents
  // { name: "BPL Card", link: "/bpl-card.html" },
  { name: "Caste Certificate", link: "/Eligibility-Based-Certificate/caste-certificate.html" },
  { name: "Disability ID Card", link: "/Eligibility-Based-Certificate/disability-id-card.html" },
  { name: "Domicile Certificate", link: "/Eligibility-Based-Certificate/domicile-certificate.html" },
  { name: "Senior Citizen Certificate", link: "/Eligibility-Based-Certificate/senior-citizen-certifi.html" }
];

    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      searchResults.innerHTML = "";

      if (query.trim() === "") return;

      const filteredDocs = documents.filter(doc => doc.name.toLowerCase().includes(query));

      if (filteredDocs.length === 0) {
        searchResults.innerHTML = "<p class='no-result'>No results found</p>";
      } else {
        filteredDocs.forEach(doc => {
          const div = document.createElement('div');
          div.classList.add('search-item');
          div.innerHTML = `<a href="${doc.link}">${doc.name}</a>`;
          searchResults.appendChild(div);
        });
      }
    });