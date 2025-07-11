
function speichereBestellung() {
  if (!aktuellerKunde) {
    alert("Bitte zuerst einen Kunden auswählen oder erfassen!");
    return;
  }

  const lieferdatum = document.getElementById("lieferdatum").value;
  const kommentar = document.getElementById("kommentar").value;

  const bestellung = {
    kunde: aktuellerKunde,
    warenkorb: warenkorb,
    lieferdatum: lieferdatum,
    kommentar: kommentar
  };

  fetch("https://script.google.com/macros/s/AKfycbxh85pl-28DFpPjNaMJeJgluG7YUn7kTAdlXbCc6W7l7d9OwAO_9GhtiLw3SrM7XnhD/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bestellung)
  })
  .then(response => {
    if (response.ok) {
      alert("✅ Bestellung erfolgreich online gespeichert!");
      warenkorb = [];
      updateWarenkorb();
    } else {
      alert("⚠️ Fehler beim Speichern!");
    }
  })
  .catch(error => {
    console.error("Fehler beim Speichern:", error);
    alert("❌ Netzwerkfehler beim Speichern.");
  });
}

let aktuellerKunde = null;
let warenkorb = [];

function updateWarenkorb() {
  console.log("Warenkorb aktualisiert.");
}

function neukundeSpeichern() {
  console.log("Neukunde gespeichert (Platzhalter)");
}

function exportiereBestellungen() {
  console.log("Export (Platzhalter)");
}

function loescheAlleBestellungen() {
  console.log("Alle Bestellungen gelöscht (Platzhalter)");
}
