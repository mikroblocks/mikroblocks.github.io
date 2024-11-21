// script.js

// Drag-and-Drop-Funktionen für die Blöcke
document.querySelectorAll('.block').forEach(block => {
    block.addEventListener('dragstart', dragStart);
});

const workspace = document.getElementById('workspace-area');
workspace.addEventListener('dragover', dragOver);
workspace.addEventListener('drop', drop);

function dragStart(e) {
    e.dataTransfer.setData('text', e.target.innerHTML);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const newBlock = document.createElement('div');
    newBlock.className = 'block';
    newBlock.textContent = data;
    workspace.appendChild(newBlock);
}

// Workspace zurücksetzen
function resetWorkspace() {
    workspace.innerHTML = '';
}

// Export (Platzhalter)
function exportToDeb() {
    alert('Export-Funktion kommt bald!');
}

// ---------------- Kostüm-Editor ----------------

// Kostüm-Editor öffnen und schließen
const costumeEditor = document.getElementById('costume-editor');
const canvas = document.getElementById('costume-canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function showCostumeEditor() {
    costumeEditor.classList.remove('hidden');
}

function closeCostumeEditor() {
    costumeEditor.classList.add('hidden');
}

// Zeichenfunktionen
canvas.addEventListener('mousedown', () => (drawing = true));
canvas.addEventListener('mouseup', () => (drawing = false));
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = document.getElementById('color').value;
    ctx.beginPath();
    ctx.arc(
        e.clientX - rect.left,
        e.clientY - rect.top,
        document.getElementById('brush-size').value,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

// Zeichenfläche leeren
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Kostüm speichern (Platzhalter)
function saveCostume() {
    const imgData = canvas.toDataURL();
    alert('Kostüm gespeichert!');
    closeCostumeEditor();
}
