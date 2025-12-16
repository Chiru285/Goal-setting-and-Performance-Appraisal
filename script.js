const form = document.getElementById("appraisalForm");
const progressBar = document.getElementById("progressBar");
const fields = form.querySelectorAll("input, textarea, select");

fields.forEach(field => {
    field.addEventListener("input", updateProgress);
});

function updateProgress() {
    let filled = 0;
    fields.forEach(field => {
        if (field.value.trim() !== "") filled++;
    });
    let progress = (filled / fields.length) * 100;
    progressBar.style.width = progress + "%";
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const appraisalData = {};
    fields.forEach(field => {
        appraisalData[field.id] = field.value;
    });

    localStorage.setItem("HRSD_Appraisal", JSON.stringify(appraisalData));

    document.getElementById("message").innerText =
        "✔ Appraisal successfully submitted";

    progressBar.style.width = "0%";
    form.reset();
});
