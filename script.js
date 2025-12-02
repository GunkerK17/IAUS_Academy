const endDate = new Date("2025-12-06T23:59:59").getTime();

function updateUnit(type, value) {
    const unit = document.querySelector(`.flip-unit[data-type="${type}"]`);
    const card = unit.querySelector(".flip-card");
    const current = card.querySelector(".number");
    const next = card.querySelector(".next-number");

    if (current.innerHTML === value) return;

    next.innerHTML = value;
    card.classList.add("animate");

    setTimeout(() => {
        current.innerHTML = value;
        card.classList.remove("animate");
    }, 600);
}

function runCountdown() {
    const now = Date.now();
    let diff = endDate - now;

    if (diff < 0) diff = 0;

    const d = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const h = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const m = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0");
    const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

    updateUnit("days", d);
    updateUnit("hours", h);
    updateUnit("mins", m);
    updateUnit("secs", s);
}

runCountdown();
setInterval(runCountdown, 1000);

function updateUnit(type, value) {
    const unit = document.querySelector(`.flip-unit[data-type="${type}"]`);
    const card = unit.querySelector(".flip-card");
    const current = card.querySelector(".number");
    const next = card.querySelector(".next-number");

    if (current.innerHTML === value) return;

    next.innerHTML = value;

    card.classList.add("animate");

    setTimeout(() => {
        current.innerHTML = value;
        card.classList.remove("animate");
    }, 600);
}
