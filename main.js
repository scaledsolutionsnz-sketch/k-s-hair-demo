/* K & S Hair — interactions */
(function(){
  // Intro overlay
  var intro=document.getElementById('intro');
  if(intro){
    window.addEventListener('load',function(){setTimeout(function(){intro.classList.add('done');},1500);});
    setTimeout(function(){intro.classList.add('done');},2600); // safety
  }

  // Sticky nav
  var nav=document.querySelector('header.nav');
  function onScroll(){ if(!nav)return; nav.classList.toggle('solid',window.scrollY>40); }
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});

  // Mobile menu
  var burger=document.querySelector('.burger');
  var links=document.querySelector('.nav-links');
  if(burger&&links){
    burger.addEventListener('click',function(){links.classList.toggle('open');});
    links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('open');});});
  }

  // Reveal on scroll
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.14});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});

  // Hero rotation
  var slides=document.querySelectorAll('.hero-slides .slide');
  var dots=document.querySelectorAll('.dots button');
  if(slides.length>1){
    var i=0;
    var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    function go(n){
      slides[i].classList.remove('active'); if(dots[i])dots[i].classList.remove('on');
      i=(n+slides.length)%slides.length;
      slides[i].classList.add('active'); if(dots[i])dots[i].classList.add('on');
    }
    dots.forEach(function(d,idx){d.addEventListener('click',function(){go(idx);});});
    if(!reduce){ setInterval(function(){go(i+1);},6000); }
  }
})();
