/* ===== RENDERING ENGINE ===== */

// Build module cards on load
function initModules() {
    const grid = document.getElementById('modulesGrid');
    grid.innerHTML = MODULES.map((m, i) => `
        <div class="module-card" id="moduleCard${i}" onclick="openModule(${i})">
            <div class="module-number">${String(i+1).padStart(2,'0')}</div>
            <h3>${m.title}</h3>
            <p>${m.desc}</p>
        </div>`).join('');
}

function renderModule(idx) {
    const m = MODULES[idx];
    const mq = MODULE_QUESTIONS[idx] || [];
    const prev = idx > 0 ? idx - 1 : null;
    const next = idx < MODULES.length - 1 ? idx + 1 : null;

    let questionsHTML = '';
    if (mq.length) {
        questionsHTML = `<div class="module-questions"><h3>Bilgini Test Et</h3>`;
        mq.forEach((q, qi) => { questionsHTML += renderQuestion(q, `mq_${idx}_${qi}`); });
        questionsHTML += `</div>`;
    }

    document.getElementById('moduleContent').innerHTML = `
        <div class="module-header">
            <button class="btn btn-outline back-btn" onclick="showModulesGrid()">&#8592; Modüller</button>
            <div><h2>${m.title}</h2></div>
        </div>
        <div class="module-body">${m.content}</div>
        ${questionsHTML}
        <div class="module-nav">
            ${prev !== null ? `<button class="btn btn-outline" onclick="openModule(${prev})">&#8592; Önceki</button>` : '<span></span>'}
            ${next !== null ? `<button class="btn btn-primary" onclick="openModule(${next})">Sonraki &#8594;</button>` : `<button class="btn btn-secondary" onclick="showSection('exam')">Sınava Geç &#8594;</button>`}
        </div>`;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function renderQuestion(q, id) {
    let inner = '';
    switch(q.type) {
        case 'mc':
            inner = `<div class="q-label">Çoktan Seçmeli</div>
                <div class="q-text">${q.q}</div>
                <div class="mc-options">${q.opts.map((o,i) => `
                    <div class="mc-option" data-id="${id}" data-idx="${i}" onclick="selectMC(this,'${id}')">
                        <span class="option-marker">${String.fromCharCode(65+i)}</span><span>${o}</span>
                    </div>`).join('')}</div>
                <button class="check-answer-btn" onclick="checkMC('${id}',${q.ans})">Kontrol Et</button>
                <div class="answer-feedback" id="fb_${id}"></div>`;
            break;
        case 'tf':
            inner = `<div class="q-label">Doğru / Yanlış</div>
                <div class="q-text">${q.q}</div>
                <div class="tf-options">
                    <div class="tf-option" data-id="${id}" data-val="true" onclick="selectTF(this,'${id}')">Doğru</div>
                    <div class="tf-option" data-id="${id}" data-val="false" onclick="selectTF(this,'${id}')">Yanlış</div>
                </div>
                <button class="check-answer-btn" onclick="checkTF('${id}',${q.ans})">Kontrol Et</button>
                <div class="answer-feedback" id="fb_${id}"></div>`;
            break;
        case 'fill':
            inner = `<div class="q-label">Boşluk Doldurma</div>
                <div class="q-text">${q.q}</div>
                <input type="text" class="fill-blank-input" id="input_${id}" placeholder="Cevabınızı yazın...">
                <button class="check-answer-btn" onclick="checkFill('${id}','${q.ans}')">Kontrol Et</button>
                <div class="answer-feedback" id="fb_${id}"></div>`;
            break;
        case 'drag':
            const shuffled = [...q.items].sort(() => Math.random() - 0.5);
            inner = `<div class="q-label">Sürükle ve Bırak</div>
                <div class="q-text">${q.q}</div>
                <div class="drag-container" id="src_${id}">${shuffled.map(it => `<div class="drag-item" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)">${it}</div>`).join('')}</div>
                <div class="drop-zone" id="drop_${id}" ondragover="dragOver(event)" ondrop="dropItem(event)" ondragleave="dragLeave(event)">
                    <span class="drop-zone-label">Buraya sırayla bırakın</span>
                </div>
                <button class="check-answer-btn" onclick="checkDrag('${id}',${JSON.stringify(q.ans)})">Kontrol Et</button>
                <div class="answer-feedback" id="fb_${id}"></div>`;
            break;
        case 'match':
            const sl = [...q.left].map((l,i) => ({t:l,i:i}));
            const sr = [...q.right].sort(() => Math.random() - 0.5).map((r,i) => ({t:r,oi:q.right.indexOf(r)}));
            inner = `<div class="q-label">Eşleştirme</div>
                <div class="q-text">${q.q}</div>
                <div class="match-container" id="match_${id}" data-ansmap='${JSON.stringify(q.ansMap)}'>
                    <div class="match-left">${sl.map(l => `<div class="match-item" data-side="left" data-idx="${l.i}" onclick="selectMatch(this,'${id}')">${l.t}</div>`).join('')}</div>
                    <div class="match-right">${sr.map(r => `<div class="match-item" data-side="right" data-idx="${r.oi}" onclick="selectMatch(this,'${id}')">${r.t}</div>`).join('')}</div>
                </div>
                <div class="answer-feedback" id="fb_${id}"></div>`;
            break;
    }
    return `<div class="question-item" id="qi_${id}">${inner}</div>`;
}

// ===== Question Interactions =====
function selectMC(el, id) {
    playClick();
    document.querySelectorAll(`.mc-option[data-id="${id}"]`).forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function selectTF(el, id) {
    playClick();
    document.querySelectorAll(`.tf-option[data-id="${id}"]`).forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
}

function checkMC(id, ans) {
    playClick();
    const opts = document.querySelectorAll(`.mc-option[data-id="${id}"]`);
    const selected = document.querySelector(`.mc-option[data-id="${id}"].selected`);
    if (!selected) return;
    const idx = parseInt(selected.dataset.idx);
    opts.forEach((o,i) => {
        o.classList.remove('selected');
        if (i === ans) o.classList.add('correct');
        else if (i === idx) o.classList.add('wrong');
        o.style.pointerEvents = 'none';
    });
    showFeedback(id, idx === ans);
}

function checkTF(id, ans) {
    playClick();
    const selected = document.querySelector(`.tf-option[data-id="${id}"].selected`);
    if (!selected) return;
    const val = selected.dataset.val === 'true';
    document.querySelectorAll(`.tf-option[data-id="${id}"]`).forEach(o => {
        o.classList.remove('selected');
        const ov = o.dataset.val === 'true';
        if (ov === ans) o.classList.add('correct');
        else if (ov === val && val !== ans) o.classList.add('wrong');
        o.style.pointerEvents = 'none';
    });
    showFeedback(id, val === ans);
}

function checkFill(id, ans) {
    playClick();
    const input = document.getElementById('input_' + id);
    const val = input.value.trim().toLowerCase();
    const correct = val === ans.toLowerCase();
    input.classList.add(correct ? 'correct' : 'wrong');
    input.disabled = true;
    if (!correct) input.value = input.value + ' (Doğru cevap: ' + ans + ')';
    showFeedback(id, correct);
}

function showFeedback(id, correct) {
    const fb = document.getElementById('fb_' + id);
    fb.className = 'answer-feedback ' + (correct ? 'correct' : 'wrong');
    fb.textContent = correct ? 'Doğru cevap!' : 'Yanlış cevap.';
}

// Drag & Drop
function dragStart(e) { e.target.classList.add('dragging'); e.dataTransfer.setData('text/plain', e.target.textContent); }
function dragEnd(e) { e.target.classList.remove('dragging'); }
function dragOver(e) { e.preventDefault(); e.currentTarget.classList.add('drag-over'); }
function dragLeave(e) { e.currentTarget.classList.remove('drag-over'); }
function dropItem(e) {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    const text = e.dataTransfer.getData('text/plain');
    const dragging = document.querySelector('.drag-item.dragging');
    if (dragging) {
        const label = e.currentTarget.querySelector('.drop-zone-label');
        if (label) label.remove();
        e.currentTarget.appendChild(dragging);
        dragging.classList.remove('dragging');
        dragging.ondblclick = function() {
            const src = this.closest('.question-item').querySelector('.drag-container');
            src.appendChild(this);
        };
    }
}

function checkDrag(id, ans) {
    playClick();
    const zone = document.getElementById('drop_' + id);
    const items = [...zone.querySelectorAll('.drag-item')].map(d => d.textContent);
    const correct = JSON.stringify(items) === JSON.stringify(ans);
    zone.classList.add(correct ? 'correct' : 'wrong');
    showFeedback(id, correct);
}

// Matching
let matchState = {};
function selectMatch(el, id) {
    playClick();
    if (el.classList.contains('matched')) return;
    if (!matchState[id]) matchState[id] = {left: null, right: null};
    const side = el.dataset.side;
    const container = document.getElementById('match_' + id);

    // Deselect same side
    container.querySelectorAll(`.match-item[data-side="${side}"]`).forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
    matchState[id][side] = parseInt(el.dataset.idx);

    if (matchState[id].left !== null && matchState[id].right !== null) {
        const ansMap = JSON.parse(container.dataset.ansmap);
        const correct = ansMap[matchState[id].left] === matchState[id].right;
        const leftEl = container.querySelector(`.match-item[data-side="left"][data-idx="${matchState[id].left}"]`);
        const rightEl = container.querySelector(`.match-item[data-side="right"][data-idx="${matchState[id].right}"]`);

        if (correct) {
            leftEl.classList.remove('selected'); leftEl.classList.add('matched');
            rightEl.classList.remove('selected'); rightEl.classList.add('matched');
        } else {
            leftEl.classList.add('wrong-match'); rightEl.classList.add('wrong-match');
            setTimeout(() => {
                leftEl.classList.remove('selected','wrong-match');
                rightEl.classList.remove('selected','wrong-match');
            }, 800);
        }
        matchState[id] = {left: null, right: null};

        // Check if all matched
        const allMatched = container.querySelectorAll('.match-item.matched').length === container.querySelectorAll('.match-item').length;
        if (allMatched) showFeedback(id, true);
    }
}

// ===== EXAM =====
function renderExam() {
    const container = document.getElementById('examQuestions');
    container.innerHTML = EXAM_QUESTIONS.map((q, i) => renderQuestion(q, `exam_${i}`)).join('');
    updateExamProgress();
}

function updateExamProgress() {
    const total = EXAM_QUESTIONS.length;
    const answered = document.querySelectorAll('#examQuestions .answer-feedback.correct, #examQuestions .answer-feedback.wrong').length;
    const pct = Math.round((answered / total) * 100);
    document.getElementById('examProgressFill').style.width = pct + '%';
    document.getElementById('examProgressText').textContent = `${answered} / ${total}`;
}

function gradeExam() {
    const correct = document.querySelectorAll('#examQuestions .answer-feedback.correct').length;
    const total = EXAM_QUESTIONS.length;
    const score = Math.round((correct / total) * 100);
    const deg = Math.round((score / 100) * 360);

    document.getElementById('examContent').style.display = 'none';
    document.getElementById('examResults').style.display = '';
    document.getElementById('examResults').innerHTML = `
        <div class="exam-results-card">
            <img src="logo.png" alt="İZMOK" style="width:60px;height:60px;border-radius:50%;border:2px solid var(--orange);margin-bottom:12px;">
            <h2>${score >= 70 ? 'Tebrikler!' : 'Tekrar Deneyin'}</h2>
            <p style="color:var(--text-secondary);font-size:0.9rem;">${score >= 70 ? 'Sınavı başarıyla tamamladınız.' : 'Geçme notu 70\'tir. Modülleri tekrar gözden geçirin.'}</p>
            <div class="score-circle" style="--score-deg:${deg}deg;">
                <div class="score-circle-inner"><span>${score}</span></div>
            </div>
            <div class="results-details">
                <div class="results-row"><span>Toplam Soru</span><strong>${total}</strong></div>
                <div class="results-row"><span>Doğru</span><strong style="color:var(--success)">${correct}</strong></div>
                <div class="results-row"><span>Yanlış / Boş</span><strong style="color:var(--error)">${total - correct}</strong></div>
                <div class="results-row"><span>Puan</span><strong style="color:var(--orange)">${score}</strong></div>
            </div>
            <button class="btn btn-primary btn-lg" onclick="retryExam()">Tekrar Dene</button>
        </div>`;
}

// Observe feedback changes for exam progress
const examObserver = new MutationObserver(updateExamProgress);
document.addEventListener('DOMContentLoaded', () => {
    initModules();
    const eq = document.getElementById('examQuestions');
    if (eq) examObserver.observe(eq, {subtree: true, attributes: true, attributeFilter: ['class']});
});
