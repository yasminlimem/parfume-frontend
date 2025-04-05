import {Component, inject, OnInit} from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-third-women-step',
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './third-women-step.component.html',
  styleUrl: './third-women-step.component.css'
})
export class ThirdWomenStepComponent implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);

  selectedGender: string | null = null;

  selectedCharacter: string | null = null;

  selectedFragrance: string | null = null;

  cards: any[] = []

  menDynamicCards = [
    {
      name: 'Natural',
      src: '/men-scent-dynamic-natural.jpg',
      text: 'A crisp and fresh scent that embodies the essence of nature, with hints of green leaves, ocean breeze, and soft citrus notes.'
    },
    {
      name: 'Classical',
      src: '/men-scent-dynamic-Classical.jpg',
      text: 'Timeless and sophisticated, this fragrance blends woody and spicy elements, evoking a refined and polished aura.'
    },
    {
      name: 'Musky',
      src: '/men-scent-dynamic-Musky.jpg',
      text: 'Deep, rich, and alluring, this scent carries warm musk notes combined with hints of leather and amber for a strong, confident impression.'
    }
  ];

  menCharismaticCards = [
    {
      name: 'Classical',
      src: '/men-scent-Charismatic-Classical.jpg',
      text: 'A harmonious blend of aromatic spices and smooth woods, perfect for a man who exudes confidence and charm.'
    },
    {
      name: 'Earthy',
      src: '/men-scent-Charismatic-Earthy.jpg',
      text: 'Grounded and raw, this scent is enriched with mossy, woody notes, combined with hints of patchouli and vetiver for an intense presence.'
    },
    {
      name: 'Musky',
      src: '/men-scent-Charismatic-Musky.jpg',
      text: 'Sensual and deep, this fragrance blends warm musk with subtle hints of tobacco and suede, leaving a lasting impression.'
    }
  ];

  menCasual = [
    {
      name: 'Aquatic',
      src: '/men-scent-Casual-Aquatic.jpg',
      text: 'Refreshing and cool, with marine accords, sea salt, and hints of citrus, ideal for a relaxed and effortless vibe.'
    },
    {
      name: 'Natural',
      src: '/men-scent-Casual-Natural.jpg',
      text: 'A light and airy scent featuring green herbal notes, blended with soft florals and crisp fruit undertones.'
    },
    {
      name: 'Citrus',
      src: '/men-scent-Casual-Citrus.jpg',
      text: 'Bright and energizing, this fragrance bursts with zesty orange, lemon, and grapefruit, balanced by a touch of aromatic herbs.'
    }
  ];

  menExtravagant = [
    {
      name: 'Oriental',
      src: '/men-scent-Extravagant-Oriental.jpg',
      text: 'Exotic and mysterious, this scent combines spicy cinnamon, incense, and sweet vanilla for a bold and lavish experience.'
    },
    {
      name: 'Leather',
      src: '/men-scent-Extravagant-Leather.jpg',
      text: 'A luxurious and bold fragrance with rich leather undertones, smoky oud, and a touch of spice for an unforgettable signature.'
    },
    {
      name: 'Woody',
      src: '/men-scent-Extravagant-Woody.jpg',
      text: 'Strong and rugged, this fragrance is infused with cedarwood, sandalwood, and earthy vetiver, perfect for a bold personality.'
    }
  ];

  menMasculine = [
    {
      name: 'Smoky',
      src: '/men-scent-Masculine-Smoky.jpg',
      text: 'Dark and enigmatic, this scent features smoky woods, charred embers, and deep amber for a powerfully masculine aura.'
    },
    {
      name: 'Musky',
      src: '/men-scent-Masculine-Musky.jpg',
      text: 'A refined yet bold blend of warm musk, tonka bean, and soft leather, creating an unmistakable presence.'
    },
    {
      name: 'Woody',
      src: '/men-scent-Masculine-Woody.jpg',
      text: 'A rich and earthy scent with cedar, sandalwood, and hints of smoky oud, embodying strength and warmth.'
    }
  ];

  femaleCasual = [
    {
      name: 'Fresh',
      src: '/img_1.png',
      text: 'Light and breezy, this fragrance features crisp citrus, aquatic notes, and soft florals for an uplifting aroma.'
    },
    {
      name: 'Fruity',
      src: '/img_2.png',
      text: 'Sweet and vibrant, blending juicy berries, tropical fruits, and a hint of vanilla for a playful and youthful scent.'
    },
    {
      name: 'Grass',
      src: '/grass.jpg',
      text: 'Green and refreshing, capturing the fresh-cut grass scent with soft herbal undertones and light florals.'
    }
  ];

  femaleFeminine = [
    {
      name: 'Powdery',
      src: '/img_5.png',
      text: 'Soft and elegant, with hints of iris, violet, and warm musk, evoking a classic and delicate femininity.'
    },
    {
      name: 'Floral',
      src: '/img_4.png',
      text: 'A bouquet of fresh flowers, blending rose, jasmine, and lily for a timeless, romantic fragrance.'
    },
    {
      name: 'Vanilla',
      src: '/img_3.png',
      text: 'Warm and comforting, with creamy vanilla, caramel, and a touch of spice for a sweet and inviting scent.'
    }
  ];

  femaleGlamorous = [
    {
      name: 'Oriental',
      src: '/img_7.png',
      text: 'Rich and seductive, with spicy and sweet notes of amber, cinnamon, and dark florals for a bold statement.'
    },
    {
      name: 'Floral Oriental',
      src: '/img_4.png',
      text: 'A fusion of deep florals and oriental spices, blending jasmine, patchouli, and vanilla for a luxurious scent.'
    },
    {
      name: 'Bouquet',
      src: '/img_6.png',
      text: 'A sophisticated floral arrangement with fresh blossoms, soft musk, and a hint of fruit for a radiant aroma.'
    }
  ];

  femaleSensual = [
    {
      name: 'Oriental',
      src: '/img_8.png',
      text: 'Deep and passionate, with exotic spices, warm amber, and sweet vanilla for a seductive allure.'
    },
    {
      name: 'Woody',
      src: '/img_9.png',
      text: 'A mysterious and warm blend of sandalwood, cedar, and soft musk, creating a deeply sensual aroma.'
    }
  ];

  femaleNatural = [
    {
      name: 'Citrus',
      src: '/citrus.jpeg',
      text: 'Bright and invigorating, with zesty lemon, orange, and grapefruit, offering a refreshing and uplifting scent.'
    },
    {
      name: 'Floral',
      src: '/floral.webp',
      text: 'A delicate and natural fragrance with blooming jasmine, rose, and lily-of-the-valley, embodying pure femininity.'
    }
  ];


  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap);
    this.selectedGender = this.route.snapshot.queryParamMap.get('gender');
    this.selectedCharacter = this.route.snapshot.queryParamMap.get('character');

    if (this.selectedGender === 'male') {
      // Male selected

      if (this.selectedCharacter === 'Dynamic') {
        this.cards = this.menDynamicCards;
      } else if (this.selectedCharacter === 'Charismatic') {
        this.cards = this.menCharismaticCards;
      } else if (this.selectedCharacter === 'Casual') {
        this.cards = this.menCasual;
      } else if (this.selectedCharacter === 'Masculine') {
        this.cards = this.menMasculine;
      }else if(this.selectedCharacter === 'Extravagant') {
        this.cards = this.menExtravagant;
      }

    } else if (this.selectedGender === 'female') {
      if (this.selectedCharacter === 'Glamorous') {
        this.cards = this.femaleGlamorous;
      } else if (this.selectedCharacter === 'Sensual') {
        this.cards = this.femaleSensual;
      } else if (this.selectedCharacter === 'Natural') {
        this.cards = this.femaleNatural;
      } else if (this.selectedCharacter === 'Feminine') {
        this.cards = this.femaleFeminine;
      } else if (this.selectedCharacter === 'Casual') {
        this.cards = this.femaleCasual;
      }


    } else {

    }

  }

  selectFragrance(fragrance: string): void {
    this.selectedFragrance = fragrance;

    this.router.navigate(
      ['fourthStep'],
      { queryParams: {
          gender: this.selectedGender,
          character: this.selectedCharacter,
          fragrance: fragrance } }
    ).then(() => console.log('Selected fragrance'));
  }
}
