import './style.css'

const page = document.body.dataset.page || 'home'

const icon = (name) => `<span class="icon icon-${name}" aria-hidden="true">${name === 'arrow' ? '↗' : name === 'spark' ? '✦' : '●'}</span>`

const shell = (content) => `
  <header class="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
    <a class="brand" href="./">GALANG<span>.</span></a>
    <nav class="hidden items-center gap-8 text-sm font-semibold text-stone-500 md:flex" aria-label="Navigasi utama">
      <a class="nav-link ${page === 'home' ? 'active' : ''}" href="./">Beranda</a>
      <a class="nav-link ${page === 'task' ? 'active' : ''}" href="./tugas-javascript.html">Tugas JavaScript</a>
      <a class="nav-link" href="#contact">Kontak</a>
    </nav>
    <a class="button button-dark hidden sm:inline-flex" href="./tugas-javascript.html">Lihat eksperimen ${icon('arrow')}</a>
    <a class="text-sm font-bold text-stone-900 sm:hidden" href="./tugas-javascript.html" aria-label="Buka tugas JavaScript">Menu ↗</a>
  </header>
  <main>${content}</main>
  <footer id="contact" class="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-5 border-t border-stone-200 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <p>© 2026 Galang. Dibuat dengan rasa ingin tahu.</p>
    <div class="flex gap-5 font-semibold text-stone-800"><a href="mailto:hello@nara.dev">Email</a><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </footer>`

const home = `
  <section class="hero-grid mx-auto max-w-6xl px-5 pb-20 pt-12 lg:px-8 lg:pt-24">
    <div class="max-w-3xl">
      <p class="eyebrow">Portfolio / Creative developer</p>
      <h1 class="display mt-6 text-stone-950">Membuat ide terasa <em>hidup</em> di layar.</h1>
      <p class="mt-7 max-w-xl text-lg leading-8 text-stone-500">Saya Galang, mahasiswa yang mengeksplorasi audio engineering, musik, game development, ilustrasi, animasi, dan pengalaman digital.</p>
      <div class="mt-9 flex flex-wrap items-center gap-4"><a class="button button-dark" href="#work">Lihat karya ${icon('arrow')}</a><a class="button button-light" href="mailto:hello@nara.dev">Mari ngobrol</a></div>
    </div>
    <div class="hero-art mt-14 lg:mt-8" aria-label="Ilustrasi abstrak profil Nara"><div class="art-ring"></div><div class="art-card"><span>selected<br>thoughts</span><strong>01</strong></div><div class="art-note">available for<br><b>new stories</b></div></div>
  </section>
  <div class="ticker border-y border-stone-200"><div>STRATEGY <span>✦</span> DESIGN <span>✦</span> DEVELOPMENT <span>✦</span> STRATEGY <span>✦</span> DESIGN <span>✦</span> DEVELOPMENT</div></div>
  <section id="work" class="mx-auto max-w-6xl px-5 py-20 lg:px-8"><div class="mb-10 flex items-end justify-between gap-5"><div><p class="eyebrow">Selected work</p><h2 class="section-title mt-3">Beberapa hal yang pernah saya <em>bangun.</em></h2></div><span class="hidden text-sm text-stone-400 sm:block">01 — 03</span></div>
    <div class="grid gap-5 md:grid-cols-3"><article class="project-card project-yellow"><div class="project-number">01</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Brand platform</p><h3>Ruang Temu</h3><p>Identitas digital untuk komunitas kreatif yang ingin tumbuh bersama.</p></div><a href="./tugas-javascript.html" aria-label="Lihat studi kasus Ruang Temu">↗</a></article><article class="project-card project-pink"><div class="project-number">02</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Web experience</p><h3>Sunday Notes</h3><p>Majalah digital kecil dengan ritme visual yang tenang dan hangat.</p></div><a href="mailto:hello@nara.dev" aria-label="Hubungi Nara tentang Sunday Notes">↗</a></article><article class="project-card project-blue"><div class="project-number">03</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Interaction</p><h3>Budget Buddy</h3><p>Eksperimen JavaScript untuk membuat angka terasa lebih bersahabat.</p></div><a href="./tugas-javascript.html" aria-label="Lihat eksperimen Budget Buddy">↗</a></article></div>
  </section>
  <section class="mx-auto max-w-6xl px-5 pb-10 lg:px-8"><div class="about-band"><p class="eyebrow">A little more</p><h2 class="section-title mt-4 max-w-2xl">Saya percaya website yang baik bukan hanya terlihat bagus, tapi juga <em>mengerti</em> penggunanya.</h2><a class="mt-8 inline-flex font-bold underline decoration-2 underline-offset-8" href="mailto:hello@nara.dev">Mulai percakapan ↗</a></div></section>`

const task = `
  <section class="mx-auto max-w-6xl px-5 pb-20 pt-12 lg:px-8 lg:pt-20"><div class="max-w-3xl"><p class="eyebrow">Satu Tugas JavaScript Terakhir / 2026</p><h1 class="display mt-6 text-stone-950">Budget Buddy<span class="text-coral">.</span></h1><p class="mt-6 max-w-xl text-lg leading-8 text-stone-500">Kalkulator sederhana untuk membantu memperkirakan biaya proyek digital berdasarkan kebutuhan yang dipilih.</p></div>
    <div class="task-layout mt-14"><form id="budget-form" class="task-form"><div class="flex items-start justify-between"><div><p class="eyebrow">01 / Pilih kebutuhan</p><h2 class="mt-2 text-2xl font-bold">Apa yang ingin dibuat?</h2></div><span class="text-3xl">✦</span></div><div class="mt-8 grid gap-3 sm:grid-cols-2"><label class="choice"><input type="checkbox" name="feature" value="Landing page" data-price="3500000"><span><b>Landing page</b><small>Halaman fokus konversi</small></span><strong>+3.5jt</strong></label><label class="choice"><input type="checkbox" name="feature" value="Design system" data-price="2500000"><span><b>Design system</b><small>Komponen siap berkembang</small></span><strong>+2.5jt</strong></label><label class="choice"><input type="checkbox" name="feature" value="Animasi interaktif" data-price="1800000"><span><b>Animasi interaktif</b><small>Gerak yang punya tujuan</small></span><strong>+1.8jt</strong></label><label class="choice"><input type="checkbox" name="feature" value="Dashboard" data-price="4500000"><span><b>Dashboard</b><small>Data yang mudah dibaca</small></span><strong>+4.5jt</strong></label></div><div class="mt-8 border-t border-stone-200 pt-6"><label class="block text-sm font-bold" for="timeline">Target pengerjaan: <output id="timeline-output">4 minggu</output></label><input id="timeline" class="mt-4 w-full accent-stone-900" type="range" min="2" max="12" value="4"><div class="flex justify-between text-xs text-stone-400"><span>2 minggu</span><span>12 minggu</span></div></div><button class="button button-dark mt-8 w-full justify-center" type="submit">Hitung estimasi ${icon('arrow')}</button></form>
    <aside class="result-panel"><div><p class="eyebrow text-stone-400">02 / Estimasi awal</p><h2 class="mt-3 text-2xl font-bold">Mari lihat angkanya.</h2><p class="mt-3 text-sm leading-6 text-stone-400">Pilih kebutuhan di sebelah kiri untuk mendapatkan gambaran biaya.</p></div><div class="mt-14 border-y border-white/15 py-7"><p class="text-sm text-stone-400">Perkiraan mulai dari</p><output id="total" class="total-price">Rp 0</output><p id="result-message" class="mt-3 text-sm text-stone-400">Belum ada fitur dipilih</p></div><p class="mt-auto pt-8 text-xs leading-5 text-stone-500">* Estimasi ini adalah simulasi untuk kebutuhan tugas JavaScript, bukan penawaran resmi.</p></aside></div>
  </section>`

document.querySelector('#app').innerHTML = shell(page === 'task' ? task : home)

if (page === 'task') {
  const form = document.querySelector('#budget-form')
  const total = document.querySelector('#total')
  const message = document.querySelector('#result-message')
  const timeline = document.querySelector('#timeline')
  const timelineOutput = document.querySelector('#timeline-output')
  const formatRupiah = (value) => `Rp ${new Intl.NumberFormat('id-ID').format(value)}`
  const update = () => {
    const selected = [...form.querySelectorAll('input[name="feature"]:checked')]
    const base = selected.reduce((sum, input) => sum + Number(input.dataset.price), 0)
    const rushFee = Number(timeline.value) < 4 ? 0.15 : 0
    total.textContent = formatRupiah(base ? base * (1 + rushFee) : 0)
    message.textContent = selected.length ? `${selected.length} fitur dipilih${rushFee ? ' · termasuk biaya percepatan' : ''}` : 'Belum ada fitur dipilih'
    timelineOutput.textContent = `${timeline.value} minggu`
  }
  form.addEventListener('change', update)
  form.addEventListener('submit', (event) => { event.preventDefault(); update(); message.textContent = message.textContent === 'Belum ada fitur dipilih' ? 'Pilih minimal satu fitur dulu' : `${message.textContent} · estimasi diperbarui` })
  update()
}
