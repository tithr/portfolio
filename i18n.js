(() => {
  const EN = {
        'meta.index': 'portfolio of a student who loves design and nevy.',
    'meta.nevy': 'nevy: an iOS app in progress to log meals with a photo. Case by Tiago Rosario.',
    'title.nevy': 'nevy · tr portfolio',
    'aria.home': 'back to the top',
    'aria.nav': 'main navigation',
    'aria.lang': 'language',
    'nav.about': 'about',
    'nav.work': 'work',
    'nav.contact': 'contact',
    'nav.status': 'available to create',
    'footer.made': 'made in lowercase',

        'hero.eyebrow': 'student',
    'hero.title': 'curious ideas,<br /><em>made to be felt.</em>',
    'hero.text': 'i am a student who loves design. I turn concepts, references and conversations into experiences that feel meaningful.',
    'hero.cta': 'view idea <span>↓</span>',
    'hero.orb': 'design<br />in<br />motion',
    'intro.eyebrow': '01 / manifesto',
    'intro.p1': 'i do not see design as decoration. To me, it is a way to give things <strong>clarity, presence and personality</strong>.',
    'intro.p2': 'I am learning every day, collecting good references and building my own way of seeing.',
    'work.eyebrow': '02 / selected work',
    'work.title': 'how i made things<br />along the way.',
    'p1.art': 'nevy:<br />food in<br />one photo.',
    'p1.info': 'iOS app · in progress',
    'p2.art': 'everything<br />starts<br />with a<br />sketch.',
    'p2.info': 'sinais · art direction',
    'p3.art': 'look,<br />test,<br />repeat.',
    'p3.info': 'interactive guide · first commit',
    'p4.art': 'less<br />noise,<br />more meaning.',
    'p4.info': 'ritmo · mobile experience',
    'p5.art': 'one idea<br />at a<br />time.',
    'p5.info': 'entre linhas · visual diary',
    'soon': 'coming soon',
    'nevy.eyebrow': '03 / a note on nevy',
    'nevy.title': 'nevy is part<br />of my process.',
    'nevy.p1': '<strong>nevy</strong> is the project I am building to explore, in practice, how technology and design can turn ideas into experiences that are simple, useful and human.',
    'nevy.p2': 'I am excited to see where it can go. Every test, conversation and detail opens a new path toward creating something that truly makes sense.',
    'nevy.link': 'see the <b>nevy</b> case ↗',
    'contact.eyebrow': '04 / shall we talk?',
    'contact.cta': 'say hello<span>.</span>',

        'case.back': '← work',
    'case.eyebrow': '01 / case',
    'case.lead': 'an iOS app in progress to log what you eat with a photo, and see food and workouts in the same place.',
    'case.role.t': 'role', 'case.role.d': 'product, ui/ux and development',
    'case.platform.t': 'platform', 'case.platform.d': 'iOS, SwiftUI',
    'case.tools.t': 'tools', 'case.tools.d': 'Figma',
    'case.status.t': 'status', 'case.status.d': 'in progress, 2026',
    'case.strip': 'nevy screens',
    'alt.ola': 'welcome screen: hi, i am nevy. Tracking what you eat should be as easy as taking a photo.',
    'alt.hoje': 'today screen with the list of meals, the calorie total, the macros and the camera button in the middle.',
    'alt.camera': 'camera pointed at a plate with broccoli, carrots, cabbage, rice and ground beef.',
    'alt.objetivo': 'onboarding asking for the goal: lose weight, be healthier or build muscle.',
    'alt.camera2': 'camera identifying a plate.',
    'alt.resultado': 'result: plate identified, with macros, a list of estimated foods and the log button.',
    'alt.hoje2': 'today screen with meals, a total of 1,179 calories and macros.',
    'alt.historico': 'history with a calendar and shortcuts to log a run and a workout.',
    'alt.treino': 'workout in progress with exercises marked as done, skipped and not started.',
    'case.context.e': 'context',
    'case.context.h': 'logging what you eat is too much work.',
    'case.context.p': 'most food apps ask you to type every item, split food and activity into different products and show numbers without saying what they mean. It takes effort before it helps.',
    'case.question.e': 'question',
    'case.question.h': 'what if logging a meal were as easy as taking a photo?',
    'case.question.p': 'that sentence is on the first screen of the app and became the rule for everything else: if a step makes logging slower than taking a photo, it needs a good reason to be there.',
    'case.process.e': 'process',
    'case.process.h': 'four design decisions.',
    'd1.h': 'show value before asking for data.',
    'd1.p': 'the onboarding starts by showing what the app does and only then asks for the goal. Each option opens a short explanation, and terms like basal metabolic rate are explained on the screen itself.',
    'd2.h': 'the ai suggests, the person confirms.',
    'd2.p': 'the photo produces an estimate. The result shows the macros, each food with an approximate portion (“~100g”) and a short text on how the plate was identified. Everything can be edited before saving, and nothing goes into the history until the person taps log. If the analysis fails, you can still log by hand.',
    'd3.h': 'the whole day on one screen.',
    'd3.p': 'the main screen shows what was eaten, the calorie total and the macros, without opening anything. Meals are written the way a person would say them (“two apples”), and the camera sits in the middle, close to the thumb.',
    'd4.h': 'food and workouts in the same history.',
    'd4.p': 'a bar switches between diet and workout, and the calendar shows both together. In a workout, each exercise has a color and also a label (done, skipped, not started), so you can read its state without relying on color alone.',
    'case.visual.e': 'visual language',
    'case.visual.h': 'glass only where it helps.',
    'case.visual.p': 'the app uses translucent surfaces in the style of Apple’s Liquid Glass on buttons and cards, but what organizes the screen is the text and the contrast. The monospaced font and the lowercase make the tone closer to a conversation, and animations only appear in transitions.',
    'case.next.e': 'next steps',
    'case.next.h': 'the road to the first version.',
    't1.b': 'definition', 't1.s': 'scope, Figma review and architecture',
    't2.b': 'foundation', 't2.s': 'SwiftUI project, accounts, design system and onboarding',
    't3.b': 'food', 't3.s': 'today screen, camera, analysis, editing and history',
    't4.b': 'activity', 't4.s': 'workouts, runs and integration with iPhone Health',
    't5.b': 'consistency', 't5.s': 'day streaks, progress and reports',
    't6.b': 'launch', 't6.s': 'testing, accessibility, performance and the App Store',
    'case.follow.e': 'want to follow along?',
    'case.follow.cta': 'let’s talk<span>.</span>',

        'meta.pc': 'first commit: five steps to get your first idea on GitHub. by Tiago Rosario.',
    'title.pc': 'first commit · tr portfolio',
    'pc.eyebrow': '02 / project',
    'pc.h1': 'first commit<span>.</span>',
    'pc.lead': 'five steps to get your first idea on GitHub. the page is the project — scroll and follow along.',
    'pc.role.d': 'idea, writing, design and code',
    'pc.kind.t': 'type', 'pc.kind.d': 'interactive page',
    'pc.tools.d': 'html, css and javascript',
    'pc.status.d': 'live, 2026',
    'pc.why.e': 'why',
    'pc.why.h': 'the first commit stops more people than the code does.',
    'pc.why.p': 'every git tutorial assumes you already know what a repository, a remote and a branch are. beginners do not get stuck on the logic: they get stuck on the fear of doing something wrong in a public place. i made this guide starting from zero. by the end you have a working link.',
    'pc.guide.e': 'the guide',
    'pc.guide.h': 'five steps.',
    'pc.aria.progress': 'guide progress',
    'pc.guide.of': ' of 5 done',
    'pc.guide.reset': 'start over',
    'pc.copy': 'copy',
    'pc.s1.t': 'create the account and install git',
    'pc.s1.p': 'create an account at github.com. Then install git on your computer: on macOS, open Terminal and type <code>git --version</code> and the system offers to install it. On Windows, download it from git-scm.com.',
    'pc.s1.n': 'to check that it worked, the command below has to answer with a version number.',
    'pc.s1.c': 'git installed and account created',
    'pc.s2.t': 'say who you are',
    'pc.s2.p': 'git signs every change with a name and an email. you do this once. use the same email as your GitHub account so your commits show up on your profile.',
    'pc.s2.c': 'name and email configured',
    'pc.s3.t': 'turn your folder into a repository',
    'pc.s3.p': 'open the terminal inside your project folder. The first command creates the repository, the second marks every file and the third saves that state with a message. That is all a commit is: a photo of the project with a note explaining it.',
    'pc.s3.n': 'none of this goes to the internet yet. Up to here everything happens only on your computer, which is why there is no way to break anything.',
    'pc.s3.c': 'first commit done',
    'pc.s4.t': 'connect to github and push',
    'pc.s4.p': 'on GitHub, click New repository, give it a name and create it without checking any extra option. The next screen shows an address ending in .git. Replace the two fields below with yours and copy the ready-made commands.',
    'pc.s4.user': 'your username',
    'pc.s4.repo': 'repository name',
    'pc.s4.n': 'the first time, git asks you to sign in. Use the browser window that opens, or a token instead of the password: GitHub no longer accepts your account password in the terminal.',
    'pc.s4.c': 'code live on github',
    'pc.s5.t': 'publish it as a site',
    'pc.s5.p': 'if your project has an index.html, it can become a website in a minute. In the repository, go to Settings, then Pages, and under Branch pick main and the root folder. Save and wait a moment.',
    'pc.s5.n': 'your site address looks like this:',
    'pc.s5.p2': 'from here the cycle is always the same: change a file, <code>git add .</code>, <code>git commit -m "what changed"</code> and <code>git push</code>. It is the same command that published this guide.',
    'pc.s5.c': 'site published',
    'pc.finish': 'done. Your first idea is public, address and all.',
    'pc.learn.e': 'what i learned',
    'pc.learn.h': 'what i would do differently.',
    'pc.learn.p': 'i started writing everything as running text and it did not work. beginners get lost in the middle of a long paragraph. breaking it into steps that open one at a time, each with a box to tick, changed everything. in the next version i want to rethink step 4 — it depends on a GitHub screen that changes every so often.'
  };

  const KEY = 'tr-lang';
  const store = {
    get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } },
    set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  };

  const textEls = [...document.querySelectorAll('[data-i18n]')];
  textEls.forEach((el) => { el._pt = el.tagName === 'TITLE' ? el.textContent : el.innerHTML; });
  const attrEls = [...document.querySelectorAll('[data-i18n-attr]')].map((el) => ({
    el,
    pairs: el.dataset.i18nAttr.split(';').map((p) => p.split(':').map((s) => s.trim())).filter((p) => p.length === 2)
  }));
  attrEls.forEach(({ el, pairs }) => { el._ptAttr = Object.fromEntries(pairs.map(([a]) => [a, el.getAttribute(a)])); });

  const missing = new Set();
  const t = (key, fallback, lang) => {
    if (lang === 'pt') return fallback;
    if (!(key in EN)) { missing.add(key); return fallback; }
    return EN[key];
  };

  const apply = (lang) => {
    textEls.forEach((el) => {
      const v = t(el.dataset.i18n, el._pt, lang);
      if (el.tagName === 'TITLE') el.textContent = v; else el.innerHTML = v;
    });
    attrEls.forEach(({ el, pairs }) => pairs.forEach(([attr, key]) => el.setAttribute(attr, t(key, el._ptAttr[attr], lang))));
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-br';
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    if (missing.size) console.warn('[i18n] missing english for:', [...missing].join(', '));
  };

  const initial = store.get() || ((navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en');
  apply(initial);
  document.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => { store.set(b.dataset.lang); apply(b.dataset.lang); }));
  window.trI18n = { apply, keys: Object.keys(EN), missing };
})();
