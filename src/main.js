import './style.css'

const page = document.body.dataset.page || 'home'

const icon = (name) => `<span class="icon icon-${name}" aria-hidden="true">${name === 'arrow' ? '↗' : name === 'spark' ? '✦' : '●'}</span>`

const shell = (content) => `
  <header class="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
    <a class="brand" href="./">GALANG<span>.</span></a>
    <nav class="hidden items-center gap-8 text-sm font-semibold text-stone-500 md:flex" aria-label="Navigasi utama">
      <a class="nav-link ${page === 'home' ? 'active' : ''}" href="./">Beranda</a>
      <a class="nav-link ${page === 'task' ? 'active' : ''}" href="./tugas-javascript.html">Lab JavaScript</a>
      <a class="nav-link" href="#contact">Kontak</a>
    </nav>
    <a class="button button-dark hidden sm:inline-flex" href="./tugas-javascript.html">Coba kalkulator ${icon('arrow')}</a>
    <a class="text-sm font-bold text-stone-900 sm:hidden" href="./tugas-javascript.html" aria-label="Buka lab JavaScript">Lab ↗</a>
  </header>
  <main>${content}</main>
  <footer id="contact" class="mx-auto mt-20 flex w-full max-w-6xl flex-col gap-5 border-t border-stone-200 px-5 py-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <p>© 2026 Galang. Dibuat dengan rasa ingin tahu.</p>
    <div class="flex gap-5 font-semibold text-stone-800"><a href="mailto:hello@galang.dev">Email</a><a href="https://github.com/galangkusuma" target="_blank" rel="noreferrer">GitHub ↗</a></div>
  </footer>`

const home = `
  <section class="hero-grid mx-auto max-w-6xl px-5 pb-20 pt-12 lg:px-8 lg:pt-24">
    <div class="max-w-3xl">
      <p class="eyebrow">Portfolio / maker multidisiplin</p>
        <h1 class="display mt-6 text-stone-950">Merakit bunyi, visual, dan ide jadi <em>pengalaman.</em></h1>
        <p class="mt-7 max-w-xl text-lg leading-8 text-stone-500">Saya Galang. Saya tertarik dalam hal-hal teknis audio engineering, technology troubleshooting, menggambar, editing, musik, dan game development 2D yang membuat proses kreatif terasa lebih dekat.</p>
        <div class="mt-9 flex flex-wrap items-center gap-4"><a class="button button-dark" href="#work">Lihat eksplorasi ${icon('arrow')}</a><a class="button button-light" href="mailto:hello@galang.dev">Mari ngobrol</a></div>
    </div>
    <div class="hero-art mt-14 lg:mt-8" aria-label="Ilustrasi abstrak profil Galang"><div class="art-ring"></div><div class="art-card"><span>selected<br>signals</span><strong>01</strong></div><div class="art-note">available for<br><b>new stories</b></div></div>
  </section>
  <div class="ticker border-y border-stone-200"><div>AUDIO <span>✦</span> 2D GAMES <span>✦</span> VISUALS <span>✦</span> CODE <span>✦</span> AUDIO <span>✦</span> 2D GAMES <span>✦</span> VISUALS <span>✦</span> CODE</div></div>
  <section id="work" class="mx-auto max-w-6xl px-5 py-20 lg:px-8"><div class="mb-10 flex items-end justify-between gap-5"><div><p class="eyebrow">Selected explorations</p><h2 class="section-title mt-3">Beberapa hal yang saya <em>utak-atik.</em></h2></div><span class="hidden text-sm text-stone-400 sm:block">01 — 04</span></div>
    <div class="grid gap-5 md:grid-cols-2"><article class="project-card project-yellow"><div class="project-number">01 / AUDIO</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Recording & mix</p><h3>Signal / Noise</h3><p>Merawat detail kecil dalam rekaman supaya musik punya ruang untuk bernapas.</p></div><a href="mailto:hello@ichinikyuu.studio" aria-label="Hubungi Galang tentang audio">↗</a></article><article class="project-card project-pink"><div class="project-number">02 / VISUAL</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Illustration & edit</p><h3>Frame by frame</h3><p>Menggambar, menyusun, dan mengedit sampai sebuah cerita punya ritmenya sendiri.</p></div><a href="mailto:hello@galang.dev" aria-label="Hubungi Galang tentang visual">↗</a></article><article class="project-card project-blue"><div class="project-number">03 / 2D GAMES</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">Game development</p><h3>Pixel playground</h3><p>Eksperimen game 2D dengan sprite, level design, game feel, dan audio interaktif.</p></div><a href="mailto:hello@galang.dev" aria-label="Hubungi Galang tentang game development 2D">↗</a></article><article class="project-card project-lilac"><div class="project-number">04 / CODE</div><div><p class="text-sm font-bold uppercase tracking-widest text-stone-500">JavaScript lab</p><h3>Shape maths</h3><p>Eksperimen kecil untuk mengubah rumus dasar menjadi alat yang bisa dipakai.</p></div><a href="./tugas-javascript.html" aria-label="Buka kalkulator luas jajar genjang">↗</a></article></div>
  </section>
  <section id="toolkit" class="mx-auto max-w-6xl px-5 pb-10 lg:px-8"><div class="toolkit-band"><div><p class="eyebrow">Tailwind field notes</p><h2 class="section-title mt-4 max-w-2xl">Belajar lewat <em>membuat.</em></h2><p class="mt-5 max-w-xl leading-7 text-stone-500">Halaman ini juga jadi ruang praktik: utility classes untuk styling, responsive breakpoints, state hover dan focus, serta fondasi warna, spacing, sizing, flexbox, dan grid.</p></div><div class="principle-grid"><span>Utility classes</span><span>Responsive</span><span>Hover / focus</span><span>Colors</span><span>Spacing</span><span>Sizing</span><span>Flexbox</span><span>Grid</span><span>2D game systems</span><span>Game feel</span></div></div></section>
  <section class="mx-auto max-w-6xl px-5 pb-10 lg:px-8"><div class="about-band"><p class="eyebrow">A little more</p><h2 class="section-title mt-4 max-w-2xl">Saya percaya karya yang baik bukan cuma terlihat rapi, tapi juga <em>terasa jelas.</em></h2><a class="mt-8 inline-flex font-bold underline decoration-2 underline-offset-8" href="mailto:hello@galang.dev">Mulai percakapan ↗</a></div></section>`

const task = `
  <section class="mx-auto max-w-6xl px-5 pb-20 pt-12 lg:px-8 lg:pt-20"><div class="max-w-3xl"><p class="eyebrow">JavaScript lab / geometry</p><h1 class="display mt-6 text-stone-950">Parallelogram<span class="text-coral">.</span></h1><p class="mt-6 max-w-xl text-lg leading-8 text-stone-500">Kalkulator interaktif untuk mencari luas jajar genjang. Masukkan alas dan tinggi, lalu lihat rumusnya bekerja.</p></div>
    <div class="task-layout mt-14"><form id="area-form" class="task-form"><div class="flex items-start justify-between"><div><p class="eyebrow">01 / Input ukuran</p><h2 class="mt-2 text-2xl font-bold">Seberapa besar bentuknya?</h2></div><span class="geometry-mark" aria-hidden="true">▱</span></div><div class="mt-8 grid gap-5 sm:grid-cols-2"><label class="field"><span>Alas</span><div><input id="base-input" type="number" min="0" step="any" value="12" required><b>cm</b></div></label><label class="field"><span>Tinggi</span><div><input id="height-input" type="number" min="0" step="any" value="7" required><b>cm</b></div></label></div><p class="formula-hint">Rumus: luas = alas × tinggi</p><button class="button button-dark mt-8 w-full justify-center" type="submit">Hitung luas ${icon('arrow')}</button></form>
    <aside class="result-panel"><div><p class="eyebrow text-stone-400">02 / Hasil kalkulasi</p><h2 class="mt-3 text-2xl font-bold">Rumus jadi nyata.</h2><p class="mt-3 text-sm leading-6 text-stone-400">Ubah angka kapan saja. Hasil akan diperbarui saat kamu menekan tombol.</p></div><div class="mt-14 border-y border-white/15 py-7"><p class="text-sm text-stone-400">Luas jajar genjang</p><output id="area-total" class="total-price">84 cm²</output><p id="area-message" class="mt-3 text-sm text-stone-400">12 cm × 7 cm</p></div><div class="shape-preview" aria-hidden="true"><span></span></div><p class="mt-auto pt-8 text-xs leading-5 text-stone-500">* Satuan luas mengikuti satuan panjang yang kamu masukkan.</p></aside></div>
  </section>`

document.querySelector('#app').innerHTML = shell(page === 'task' ? task : home)

if (page === 'task') {
  const form = document.querySelector('#area-form')
  const areaTotal = document.querySelector('#area-total')
  const areaMessage = document.querySelector('#area-message')
  const baseInput = document.querySelector('#base-input')
  const heightInput = document.querySelector('#height-input')
  const formatNumber = (value) => new Intl.NumberFormat('id-ID', { maximumFractionDigits: 2 }).format(value)
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const base = Number(baseInput.value)
    const height = Number(heightInput.value)
    const area = base * height
    areaTotal.textContent = `${formatNumber(area)} cm²`
    areaMessage.textContent = `${formatNumber(base)} cm × ${formatNumber(height)} cm`
  })
}
