export interface NicheData {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  keywords: string[];
  photos: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  heroImage: {
    src: string;
    alt: string;
  };
}

export const NICHE_DATA: Record<string, NicheData> = {
  'moto': {
    slug: 'moto',
    title: 'Motociclism Feminin',
    tagline: 'Pasiunea pentru moto este o formă de libertate. Aici împart experiența mea pe două roți.',
    intro: `Motociclismul nu este doar un mod de transport — este o stare de spirit. Pentru o femeie pe motor, fiecare drum devine o declarație de independență, curaj și încredere în sine.

Aici găsești experiența mea reală: de la primele lecții pe motor și alegerea echipamentului potrivit, până la rute frumoase din România și sfaturi practice pentru începătoare. Motociclismul feminin nu mai e tabu — e o comunitate puternică, vibrantă și autentic feminină.

În această categorie împărtășesc ce am învățat din experiență directă: ce echipament merită investiția, cum să alegi primul motor potrivit pentru tine, și cum să te descurci în trafic ca femeie biker.`,
    keywords: ['motofete romania', 'biker girl romania', 'fete pe motor', 'motociclism feminin'],
    photos: [
      {
        src: '/images/blog/moto/sonia-profile-small.jpg',
        alt: 'Sonia motociclistă România',
        caption: 'Pasiunea pentru moto',
      },
      {
        src: '/images/author.jpg',
        alt: 'Sonia portrait',
        caption: 'Lifestyle creator',
      },
    ],
    heroImage: {
      src: '/images/blog/moto/main-image.jpg',
      alt: 'Motociclism feminin România',
    },
  },
  'grwm': {
    slug: 'grwm',
    title: 'GRWM — Get Ready With Me',
    tagline: 'Rutina de pregătire este momentul meu favorit din zi. Hai să o trăim împreună.',
    intro: `GRWM (Get Ready With Me) este mai mult decât o tendință de pe TikTok — este un ritual personal de transformare. Momentul în care îți acorzi atenție, în care te conectezi cu tine însăți înainte să ieși în lume.

Pe această categorie împart rutinele mele reale: machiajul pentru o ieșire în club, look-ul natural pentru zi, pregătirea pentru evenimente speciale. Folosesc produse pe care le am de ani de zile, alături de noi descoperiri pe care le testez constant.

Fiecare GRWM este diferit pentru că fiecare ocazie cere altă energie. Aici găsești și sfaturi practice — ce produse merită banii tăi, cum să optimizezi timpul, și cum să creezi un look care durează toată noaptea.`,
    keywords: ['grwm romania', 'rutina makeup', 'get ready with me', 'machiaj club'],
    photos: [
      {
        src: '/images/blog/grwm/grwm-selfie-machiaj-oglinda-1.jpg',
        alt: 'Sonia GRWM machiaj oglindă',
        caption: 'Selfie din timpul rutinei',
      },
      {
        src: '/images/blog/grwm/grwm-pensula-machiaj-spate-2.jpg',
        alt: 'Sonia aplicând machiaj cu pensula',
        caption: 'Pregătire pentru ieșire',
      },
    ],
    heroImage: {
      src: '/images/blog/grwm/grwm-selfie-machiaj-oglinda-1.jpg',
      alt: 'GRWM Sonia rutina machiaj',
    },
  },
  'hot-girl-summer': {
    slug: 'hot-girl-summer',
    title: 'Hot Girl Summer',
    tagline: 'Vara nu e doar un anotimp — e o atitudine. Confidence, libertate și energie pură.',
    intro: `Hot Girl Summer nu înseamnă doar bikini și piscină. Este filozofia de a-ți trăi vara la maxim — cu încredere, cu stil, cu bucuria de a fi exact cum ești. Conceptul lansat de Megan Thee Stallion a devenit un manifesto pentru toate femeile care își iau înapoi puterea.

Pe această categorie găsești tot ce ține de vara mea premium: outfit-uri pentru zi și seară, locații frumoase descoperite, cocktail-uri preferate, vibe-uri de călătorie. Vara este momentul perfect să experimentezi cu styling-ul tău, să descoperi noi laturi ale personalității tale.

Hot Girl Summer e atitudinea cu care ieși din casă — fie că mergi la piață sau la cel mai exclusivist beach club. E despre cum te simți, nu despre cum te judecă alții.`,
    keywords: ['hot girl summer romania', 'lifestyle vara', 'outfit vara romania', 'confidence feminin'],
    photos: [
      {
        src: '/images/blog/hot-girl-summer/hot-girl-summer-colanti-pahar-spate-1.jpg',
        alt: 'Hot Girl Summer Sonia colanți cu pahar',
        caption: 'Vibe de vară premium',
      },
      {
        src: '/images/blog/hot-girl-summer/hot-girl-summer-rochie-profil-2.jpg',
        alt: 'Rochie de vară Sonia profil lateral',
        caption: 'Rochie eleganta de vară',
      },
    ],
    heroImage: {
      src: '/images/blog/hot-girl-summer/hot-girl-summer-colanti-pahar-spate-1.jpg',
      alt: 'Hot Girl Summer Sonia lifestyle vară',
    },
  },
  'ootd': {
    slug: 'ootd',
    title: 'OOTD — Outfit of the Day',
    tagline: 'Stilul personal este cea mai mare formă de exprimare. Aici sunt outfit-urile mele.',
    intro: `OOTD (Outfit of the Day) este momentul când îți spui povestea prin haine. Fără cuvinte, doar prin alegerea texturilor, culorilor și siluetelor. Fiecare outfit este o expresie a stării tale de moment.

Aici împart outfit-urile mele preferate pentru toate ocaziile: casual pentru cafea cu prietenele, smart casual pentru ieșire la cină, elegant pentru evenimente speciale, sport chic pentru zile productive. Combinațiile sunt gândite ca să funcționeze pentru femei reale, cu vieți active.

Fashion-ul nu trebuie să fie scump pentru a fi impactant. Cele mai frumoase outfit-uri ale mele combină piese premium cu basic-uri accesibile, mereu cu atenție la detalii și proporții.`,
    keywords: ['ootd romania', 'outfit fashion feminin', 'tinute femei', 'fashion blog romania'],
    photos: [
      {
        src: '/images/blog/ootd/ootd-mirror-selfie-fullbody-1.jpg',
        alt: 'OOTD Sonia mirror selfie full body',
        caption: 'Outfit casual zi de zi',
      },
      {
        src: '/images/blog/ootd/ootd-outfit-elegant-2.jpg',
        alt: 'OOTD Sonia outfit elegant rochie',
        caption: 'Elegant pentru seară',
      },
    ],
    heroImage: {
      src: '/images/blog/ootd/ootd-mirror-selfie-fullbody-1.jpg',
      alt: 'OOTD fashion feminin Sonia',
    },
  },
  'gym-girl': {
    slug: 'gym-girl',
    title: 'Gym Girl — Fitness Aesthetic',
    tagline: 'Antrenamentul este self-care în formă pură. Forță fizică, claritate mentală, încredere.',
    intro: `Gym Girl este mai mult decât un trend — este un stil de viață care celebrează puterea feminină. Sala de fitness a devenit spațiul nostru de transformare, locul unde construim nu doar mușchi, ci și disciplină, încredere și energie pozitivă.

Pe această categorie împart rutinele mele de antrenament, outfit-urile preferate pentru sală, suplimentele pe care le folosesc și mindset-ul care mă ține motivată. Nu sunt antrenor profesionist — sunt o femeie care a descoperit puterea consistenței în antrenament.

Estetica "gym girl" actuală combină funcționalitatea cu stilul: leggings buni care țin la antrenament dur, set-uri matching care arată bine în mirror selfie-uri, accesorii care fac diferența. Aici găsești recomandări reale din ce port eu zilnic.`,
    keywords: ['gym girl romania', 'fitness feminin', 'antrenament femei', 'gym outfit'],
    photos: [
      {
        src: '/images/blog/gym-girl/gym-girl-sport-outfit-mirror-1.jpg',
        alt: 'Gym Girl Sonia sport outfit mirror selfie',
        caption: 'Sport outfit pentru antrenament',
      },
      {
        src: '/images/blog/gym-girl/gym-girl-dupa-antrenament-2.jpg',
        alt: 'Sonia după antrenament fitness',
        caption: 'Vibe după antrenament',
      },
    ],
    heroImage: {
      src: '/images/blog/gym-girl/gym-girl-sport-outfit-mirror-1.jpg',
      alt: 'Gym Girl fitness feminin Sonia',
    },
  },
  'lifestyle-premium': {
    slug: 'lifestyle-premium',
    title: 'Lifestyle Premium',
    tagline: 'Rafinamentul nu se cumpără — se cultivă. Aici sunt momentele mele de lux autentic.',
    intro: `Lifestyle Premium nu înseamnă neapărat brand-uri scumpe — înseamnă să trăiești cu intenție. Fiecare detaliu contează: cum îți aranjezi spațiul, ce parfum porți, cum îți servești cafeaua de dimineață, cum te îmbraci pentru o seară acasă.

Pe această categorie împart filozofia mea despre lux în viața de zi cu zi. Nu trebuie să mergi în Maldive ca să trăiești premium — poți crea momente de rafinament în propria casă, în propriul oraș, în propria rutină. E despre standarde personale înalte.

Vei găsi aici recomandările mele pentru parfumuri, accesorii, restaurante de descoperit, decoruri pentru spațiu, și gesturile mici care fac diferența între o viață ordinară și una de calitate.`,
    keywords: ['lifestyle premium femei', 'rafinament feminin', 'lux accesibil', 'viata premium'],
    photos: [
      {
        src: '/images/blog/lifestyle-premium/lifestyle-premium-masa-cocktail-1.jpg',
        alt: 'Lifestyle Premium masă elegantă cu cocktail',
        caption: 'Masă elegantă acasă',
      },
      {
        src: '/images/blog/lifestyle-premium/lifestyle-premium-accesoriu-lux-2.jpg',
        alt: 'Accesoriu premium lifestyle Sonia',
        caption: 'Detalii de rafinament',
      },
    ],
    heroImage: {
      src: '/images/blog/lifestyle-premium/lifestyle-premium-masa-cocktail-1.jpg',
      alt: 'Lifestyle Premium Sonia eleganta',
    },
  },
  'soft-girl-baddie': {
    slug: 'soft-girl-baddie',
    title: 'Soft Girl & Baddie',
    tagline: 'Două estetici, aceeași femeie. Pentru că nu trebuie să alegi între delicat și puternic.',
    intro: `Soft Girl și Baddie sunt două dintre cele mai puternice estetici feminine ale momentului — și ele coexistă perfect în aceeași persoană. Soft Girl celebrează feminin-romanticul, paste-ul, drăgălașul. Baddie reprezintă forța, atitudinea, confidence-ul ridicat.

Pe această categorie explorez ambele estetici pentru că, sincer, nu vreau să aleg între ele. Pot fi soft Girl într-o duminică liniștită cu o cafea în mână, și Baddie sâmbătă seara la club cu rochie neagră și attitude. Asta e libertatea modernă a femeilor.

Vei găsi aici outfit-urile, machiajele și mood-urile specifice fiecărei estetici — plus cum să le combini fără să par confuzie de identitate. Versatilitatea este cea mai sexy calitate.`,
    keywords: ['soft girl aesthetic', 'baddie aesthetic', 'feminin aesthetic', 'baddie outfit'],
    photos: [
      {
        src: '/images/blog/soft-girl-baddie/soft-girl-pastel-aesthetic-1.jpg',
        alt: 'Soft Girl aesthetic Sonia pastel',
        caption: 'Soft Girl mood',
      },
      {
        src: '/images/blog/soft-girl-baddie/baddie-negru-profil-2.jpg',
        alt: 'Baddie aesthetic Sonia negru profil',
        caption: 'Baddie attitude',
      },
    ],
    heroImage: {
      src: '/images/blog/soft-girl-baddie/soft-girl-pastel-aesthetic-1.jpg',
      alt: 'Soft Girl vs Baddie Sonia',
    },
  },
  'glow-up': {
    slug: 'glow-up',
    title: 'Glow Up & Skincare',
    tagline: 'Transformarea autentică începe cu tine. Aici e jurnalul meu de glow up real.',
    intro: `Glow Up nu este despre a deveni altcineva — este despre a deveni cea mai bună versiune a ta. Schimbarea reală vine de la consistență: în rutina de skincare, în alimentație, în mindset, în alegerile zilnice.

Pe această categorie documentez parcursul meu real de transformare. Produsele de skincare care funcționează cu adevărat pentru tipul meu de piele, suplimentele pe care le iau, schimbările în rutina de seară care au făcut diferența. Nu vând iluzii — împărtășesc ce mi-a funcționat mie.

Glow Up include și aspecte invizibile: gestionarea stresului, somnul de calitate, hidratarea constantă, atitudinea pozitivă. Frumusețea exterioară reflectă armonia interioară. Aici găsești totul — fără filtre, fără promisiuni miraculoase.`,
    keywords: ['glow up femei romania', 'rutina skincare', 'transformare feminina', 'skincare romania'],
    photos: [
      {
        src: '/images/blog/glow-up/glow-up-skincare-rutina-1.jpg',
        alt: 'Glow Up skincare rutina Sonia',
        caption: 'Rutina mea de skincare',
      },
      {
        src: '/images/blog/glow-up/glow-up-aplicare-crema-2.jpg',
        alt: 'Aplicare cremă skincare Sonia',
        caption: 'Hidratare zilnică',
      },
    ],
    heroImage: {
      src: '/images/blog/glow-up/glow-up-skincare-rutina-1.jpg',
      alt: 'Glow Up Sonia skincare transformare',
    },
  },
};

export function getNicheData(slug: string): NicheData | null {
  return NICHE_DATA[slug] ?? null;
}
