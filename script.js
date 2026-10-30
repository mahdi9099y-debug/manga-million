// ================= داده‌های مانگا =================
const MANGA = [
 {id:1, title:"کلاه‌نمدی و شمشیرزن", orig:"One Piece-style", genre:"اکشن", rating:4.9, langs:"۹۶ زبان", pages:"۱٬۰۵۰ فصل", badge:"پرطرفدارترین", desc:"دریانوردی جوان با کلاهی از نی و رویایی بزرگ، در جست‌وجوی بزرگ‌ترین گنج دریاها همراه ناخدای عجیبش به سوی گرند لاین می‌رانَد. داستانی درباره دوستی، رؤیا و آزادی.", c1:"#e63946", c2:"#451423"},
 {id:2, title:"نینجای یتیم", orig:"Ninja-style", genre:"اکشن", rating:4.8, langs:"۵۵ زبان", pages:"۷۰۰ فصل", badge:"مدرنیزه", desc:"پسری یتیم با روباهی نه‌طبقه درون بدنش می‌خواهد هوکاگه شود؛ رهبر روستایش. از تنهایی و طردشدگی تا پذیرفته‌شدن، سفری پر از درد و امید.", c1:"#ff8c1a", c2:"#3d2200"},
 {id:3, title:"شمشیرزن روح‌ها", orig:"Soul-style", genre:"اکشن", rating:4.7, langs:"۲۸ زبان", pages:"۶۸۶ فصل", badge:"", desc:"نوجوانی که می‌تواند ارواح را ببیند، شمشیرزنی مرگ را به ارث می‌برد و وارد جنگی هزارساله میان ارواح و هالوها می‌شود.", c1:"#3fb0ff", c2:"#0a1e33"},
 {id:4, title:"خانواده جاسوس", orig:"Spy-style", genre:"کمدی", rating:4.8, langs:"۳۴ زبان", pages:"۹۵ فصل", badge:"تازه", desc:"بزرگ‌ترین جاسوس جهان برای مأموریتی خانوادگی، دختری ذهن‌خوان و قاتلی حرفه‌ای را به‌عنوان همسر می‌گیرد — و هیچ‌کس هویت واقعی دیگری را نمی‌داند!", c1:"#e0559b", c2:"#2b0d1d"},
 {id:5, title:"نMARY ستاره‌ها", orig:"Idol-style", genre:"درام", rating:4.6, langs:"۲۲ زبان", pages:"۱۶۶ فصل", badge:"پرطرفدار", desc:"رؤیای درخشش زیر نور صحنه، پشت پرده‌ای از رازها. داستان تاریک و درخشان دنیای آیدل‌ها و دوقلوهایی که راز مادرشان را دنبال می‌کنند.", c1:"#a05cff", c2:"#1a0d33"},
 {id:6, title:"شیطان‌سنگ نقره‌ای", orig:"Dark-style", genre:"اکشن", rating:4.5, langs:"۱۸ زبان", pages:"۲۱۰ فصل", badge:"", desc:"پسری که به شیطان تبدیل شد تا زنده بماند، در دنیایی از نفرین‌شدگان و جادوی تاریک می‌جنگد.", c1:"#3ddc84", c2:"#0a2417"},
 {id:7, title:"نامه‌های باغبان", orig:"Slice-style", genre:"عاشقانه", rating:4.4, langs:"۱۲ زبان", pages:"۹۸ فصل", badge:"", desc:"در گوشه‌ای آرام از توکیو، دختری نامه‌هایی را که هرگز فرستاده نشدند می‌خواند و قلب‌های خسته را ترمیم می‌کند.", c1:"#ff6b81", c2:"#33101a"},
 {id:8, title:"پادشاه شکسته", orig:"Kingdom-style", genre:"تاریخی", rating:4.7, langs:"۱۵ زبان", pages:"۷۸۰ فصل", badge:"حماسی", desc:"در دوران جنگ‌های بی‌پایان، یتیمی فقیر از میدان بردگی تا فرماندهی سپاه بالا می‌رود تا توحید سرزمینش را رقم بزند.", c1:"#c9a227", c2:"#2c2205"},
 {id:9, title:"مدرسه شبح‌ها", orig:"Horror-style", genre:"ترسناک", rating:4.3, langs:"۹ زبان", pages:"۱۲۰ فصل", badge:"", desc:"راهنمایی مدرسه که هرگز نباید طبقه چهارم را ببیند... تا شبی که صدای زنگ از طبقه بالای خالی به گوش رسید.", c1:"#6b7280", c2:"#0d0f14"},
 {id:10, title:"دیوانه‌ی سرعت", orig:"Racing-style", genre:"ورزشی", rating:4.2, langs:"۸ زبان", pages:"۳۴۰ فصل", badge:"", desc:"از پیست‌های کوهستانی تا گرند‌پری جهانی؛ پسری که موتورش را با قلبش می‌راند.", c1:"#2ec4b6", c2:"#082a26"},
 {id:11, title:"راز قلعه چریکی", orig:"Mystery-style", genre:"معمایی", rating:4.6, langs:"۱۱ زبان", pages:"۲۴۰ فصل", badge:"", desc:"کارآگاه نوجوانی با ذهنی چون تیغ، پرونده‌های شهر را یکی پس از دیگری حل می‌کند — اما پرونده‌ی ناپدیدشدن پدرش، الگوی تمام ماجراهاست.", c1:"#5c7cfa", c2:"#101a33"},
 {id:12, title:"آشپز سرخ", orig:"Food-style", genre:"کمدی", rating:4.4, langs:"۱۰ زبان", pages:"۱۸۰ فصل", badge:"", desc:"آشپزخانه‌ای کوچک در کوچه‌پس‌کوی اوساکا، غذاهایی که ذهن را منفجر می‌کنند و رقابتی که هیچ‌وقت تمام نمی‌شود!", c1:"#ff9f1c", c2:"#33210a"},
];
const GENRES = [
 {name:"اکشن", emoji:"⚔️", c1:"#e63946", c2:"#451423"},
 {name:"کمدی", emoji:"😂", c1:"#ff9f1c", c2:"#33210a"},
 {name:"درام", emoji:"🎭", c1:"#a05cff", c2:"#1a0d33"},
 {name:"عاشقانه", emoji:"💖", c1:"#ff6b81", c2:"#33101a"},
 {name:"تاریخی", emoji:"🏯", c1:"#c9a227", c2:"#2c2205"},
 {name:"ترسناک", emoji:"👻", c1:"#6b7280", c2:"#0d0f14"},
 {name:"ورزشی", emoji:"🏎️", c1:"#2ec4b6", c2:"#082a26"},
 {name:"معمایی", emoji:"🔍", c1:"#5c7cfa", c2:"#101a33"},
];
const LANGS = ["فارسی","English","العربية","","","हिन्दी","Español","Français","Türkçe","","Português","Русский","ไทย","Việt","پښتو","اردو"];
const $ = id => document.getElementById(id);
const coverStyle = (m, big) => `background:linear-gradient(160deg,${m.c1},${m.c2})`;
// ================= هدر =================
const header = $("header");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 40));
$("menuBtn").onclick = () => $("nav").classList.toggle("open");
document.querySelectorAll(".nav-link").forEach(a => a.onclick = () => $("nav").classList.remove("open"));
$("langBtn").onclick = function(){
 const tags = [...document.querySelectorAll(".lang-tag")];
 const i = tags.findIndex(t => t.classList.contains("on"));
 tags.forEach(t => t.classList.remove("on"));
 tags[(i+1) % tags.length]?.classList.add("on");
 this.textContent = (tags[(i+1)%tags.length]?.textContent || "FA") + " ▾";
};
// ================= بنر =================
const heroCovers = $("heroCovers");
MANGA.slice(0,6).forEach(m => {
 const d = document.createElement("div");
 d.className = "mini-cover";
 d.style.cssText = coverStyle(m);
 d.textContent = m.title;
 d.onclick = () => openModal(m);
 heroCovers.appendChild(d);
});
$("startBtn").onclick = () => document.getElementById("catalog").scrollIntoView({behavior:"smooth"});
$("browseBtn").onclick = () => document.getElementById("catalog").scrollIntoView({behavior:"smooth"});
// ================= زبان‌ها =================
LANGS.forEach((l,i) => {
 const s = document.createElement("span");
 s.className = "lang-tag" + (i===0? " on": "");
 s.textContent = l;
 $("langsList").appendChild(s);
});
// ================= کاروسل =================
const carousel = $("carousel");
const featured = MANGA.filter(m => m.badge || m.rating >= 4.6);
function renderCarousel(list){
 carousel.innerHTML = "";
 list.forEach(m => {
 const c = document.createElement("div");
 c.className = "car-card";
 c.innerHTML = `
 <div class="car-cover" style="${coverStyle(m)}">
 ${m.badge? `<span class="car-tag">${m.badge}</span>`: ""}
 <h3>${m.title}</h3>
 </div>
 <div class="car-body">
 <span class="car-lang">🌐 ${m.langs}</span>
 <span class="car-rate">★ ${m.rating}</span>
 </div>`;
 c.onclick = () => openModal(m);
 carousel.appendChild(c);
 });
}
renderCarousel(featured);
$("nextBtn").onclick = () => carousel.scrollBy({left:-280, behavior:"smooth"});
$("prevBtn").onclick = () => carousel.scrollBy({left:280, behavior:"smooth"});
// ================= فیلترها =================
let activeGenre = "همه";
function renderFilters(){
 const f = $("filters");
 f.innerHTML = "";
 ["همه",...GENRES.map(g => g.name)].forEach(g => {
 const b = document.createElement("button");
 b.className = "filter-btn" + (g === activeGenre? " active": "");
 b.textContent = g;
 b.onclick = () => { activeGenre = g; renderFilters(); renderGrid(); };
 f.appendChild(b);
 });
}
// ================= گرید =================
function renderGrid(){
 const q = $("searchInput").value.trim();
 const list = MANGA.filter(m =>
 (activeGenre === "همه" || m.genre === activeGenre) &&
 (!q || m.title.includes(q) || m.orig.toLowerCase().includes(q.toLowerCase()) || m.genre.includes(q))
 );
 $("mangaGrid").innerHTML = "";
 $("emptyState").hidden = list.length > 0;
 $("countBadge").textContent = `${list.length} عنوان`;
 list.forEach((m,i) => {
 const c = document.createElement("div");
 c.className = "card";
 c.style.animationDelay = (i * 40) + "ms";
 c.innerHTML = `
 <div class="card-cover" style="${coverStyle(m)}">
 <span class="card-pages">${m.pages}</span>
 <h3>${m.title}</h3>
 </div>
 <div class="card-body">
 <span class="card-genre">${m.genre}</span>
 <span class="card-rate">★ ${m.rating}</span>
 </div>`;
 c.onclick = () => openModal(m);
 $("mangaGrid").appendChild(c);
 });
}
renderFilters();
renderGrid();
$("searchInput").addEventListener("input", renderGrid);
// ================= ژانرها =================
GENRES.forEach(g => {
 const count = MANGA.filter(m => m.genre === g.name).length;
 const c = document.createElement("div");
 c.className = "genre-card";
 c.innerHTML = `
 <div class="genre-emoji">${g.emoji}</div>
 <div class="genre-name">${g.name}</div>
 <div class="genre-count">${count} عنوان</div>`;
 c.onclick = () => {
 activeGenre = g.name;
 renderFilters(); renderGrid();
 document.getElementById("catalog").scrollIntoView({behavior:"smooth"});
 };
 $("genreCards").appendChild(c);
});
// ================= مودال =================
const modal = $("modal");
function openModal(m){
 $("modalCover").style.cssText = coverStyle(m);
 $("modalCover").textContent = m.title;
 $("modalGenre").textContent = m.genre;
 $("modalTitle").textContent = m.title;
 $("modalRating").textContent = `⭐ ${m.rating} از ۵`;
 $("modalLangs").textContent = `🌐 ${m.langs}`;
 $("modalPages").textContent = `📄 ${m.pages}`;
 $("modalDesc").textContent = m.desc;
 modal.classList.add("open");
 document.body.style.overflow = "hidden";
}
function closeModal(){
 modal.classList.remove("open");
 document.body.style.overflow = "";
}
$("modalClose").onclick = closeModal;
$("modalBackdrop").onclick = closeModal;
document.addEventListener("keydown", e => e.key === "Escape" && closeModal());
$("readBtn").onclick = function(){
 this.textContent = "✨ نسخه نمایشی — خواندن واقعی به کاتالوگ واقعی نیاز دارد!";
 setTimeout(() => this.textContent = "📖 شروع خواندن — رایگان", 2200);
};