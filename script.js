
let kunden = [...kundenData];
let artikelData = [...artikelData];
let aktuellerKunde = null;
let warenkorb = [];

const kundeSuche = document.getElementById('kundeSuche');
const suchErgebnisse = document.getElementById('suchErgebnisse');
const aktuellerKundeAnzeige = document.getElementById('aktuellerKunde');
const sperrhinweis = document.getElementById('sperrhinweis');

kundeSuche.addEventListener('input', () => {
  const query = kundeSuche.value.toLowerCase().trim();
  suchErgebnisse.innerHTML = '';
  if (query.length === 0) return;

  const treffer = kunden.filter(k =>
    k.name.toLowerCase().includes(query) || (k.ort && k.ort.toLowerCase().includes(query))
  );

  if (treffer.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'Kein Kunde gefunden.';
    suchErgebnisse.appendChild(li);
    return;
  }

  treffer.slice(0, 10).forEach(k => {
    const li = document.createElement('li');
    li.textContent = `${k.name} (${k.ort})`;
    li.onclick = () => {
      aktuellerKunde = k;
      aktuellerKundeAnzeige.textContent = `Kunde: ${k.name} (${k.ort})`;
      sperrhinweis.textContent = k.gesperrt ? '⚠️ Achtung: Dieser Kunde ist gesperrt!' : '';
      suchErgebnisse.innerHTML = '';
      kundeSuche.value = '';
    };
    suchErgebnisse.appendChild(li);
  });
});

document.getElementById('scanInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const nummer = e.target.value.trim();
    const artikel = artikelData.find(a => a.artikelnummer === nummer);
    if (!artikel) {
      alert('Artikel nicht gefunden.');
      return;
    }
    const vorhandener = warenkorb.find(w => w.artikelnummer === nummer);
    const vielfaches = 1;
    if (vorhandener) {
      vorhandener.menge += vielfaches;
    } else {
      warenkorb.push({ ...artikel, menge: vielfaches });
    }
    updateWarenkorb();
    e.target.value = '';
  }
});

function updateWarenkorb() {
  const liste = document.getElementById('warenkorbListe');
  const preis = document.getElementById('gesamtpreis');
  liste.innerHTML = '';
  let summe = 0;
  warenkorb.forEach((item, index) => {
    const einheit = item.einheit || 'Stk';
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.name}</strong> (${einheit})<br>
      <button onclick="mengeAnpassen(${index}, -1)">-</button>
      ${item.menge} × ${item.preis.toFixed(2)} € = ${(item.menge * item.preis).toFixed(2)} €
      <button onclick="mengeAnpassen(${index}, 1)">+</button>
    `;
    liste.appendChild(li);
    summe += item.menge * item.preis;
  });
  preis.textContent = 'Gesamt: ' + summe.toFixed(2) + ' €';
}

function mengeAnpassen(index, richtung) {
  const artikel = warenkorb[index];
  const einheitMenge = 1;
  artikel.menge += richtung * einheitMenge;
  if (artikel.menge < 1) {
    warenkorb.splice(index, 1);
  }
  updateWarenkorb();
}

function abschliessen() {
  if (!aktuellerKunde) {
    alert('Bitte zuerst einen Kunden auswählen!');
    return;
  }

  const lieferdatum = document.getElementById('lieferdatum').value;
  const kommentar = document.getElementById('kommentar').value;

  const daten = warenkorb.map(item => {
    return {
      kundenname: aktuellerKunde.name,
      ort: aktuellerKunde.ort,
      artikelnummer: item.artikelnummer,
      artikelname: item.name,
      menge: item.menge,
      preis: item.preis.toFixed(2),
      gesamtpreis: (item.menge * item.preis).toFixed(2),
      lieferdatum,
      kommentar,
      zeitstempel: new Date().toISOString()
    };
  });

  fetch("https://script.google.com/macros/s/AKfycbxh85pl-28DFpPjNaMJeJgluG7YUn7kTAdlXbCc6W7l7d9OwAO_9GhtiLw3SrM7XnhD/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(daten)
  })
  .then(res => {
    if (res.ok) {
      alert("✅ Bestellung gespeichert");
      warenkorb = [];
      updateWarenkorb();
    } else {
      alert("❌ Fehler beim Speichern");
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Netzwerkfehler");
  });
}

function exportiereBestellungen() {
  alert("Exportfunktion folgt.");
}
