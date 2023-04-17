// Array of objects, where each object contains information about a speaker.
const speakersInfo = [
  {
    image: './Images/Speakers/ahmed-ali-siddiquie.jpg',
    name: 'Ahmed Ali Siddique',
    position: 'IBA Center of Excellence in Islamic Finance IBA Karachi Pakistan',
    intro: 'He was named in the Islamica 500 for 2016 as among the 500 of the worlds most prominent and influential personalities who build up and pioneer the Islamic economy and the Halal industry',
  },
  {
    image: './Images/Speakers/dr-athar.jpg',
    name: 'Dr. Athar',
    position: 'Vice Chancellor, The Islamia University of Bahawalpur Pakistan',
    intro: 'Based on his tremendous contributions to Science, Engineering & Technology education, he was decorated with the civil award of Tamgha-e-Imtiaz by the President of Pakistan on 14 August 2012.',
  },
  {
    image: './Images/Speakers/dr-jawad-iqbal.png',
    name: 'Dr. Jawad Iqbal',
    position: 'Faculty of Management Sciences & Commerce',
    intro: 'Prof. Dr. Jawad Iqbal is the Professor/Director, at School of Business, Management and Administrative Sciences IUB.',
  },
  {
    image: './Images/Speakers/dr-mohd-ghazali.jpg',
    name: 'Dr. Mohd Ghazali',
    position: 'Convenor 10th GWC & Chairman, International Waqf Action Council',
    intro: 'He is the Senior Consultant of Tindakan Strategi Sendirian Berhad (TS), Protem Chairman, IDB Alumni, President USC Alumni Malaysia and Life Member & PTD Alumni Association.',
  },
  {
    image: './Images/Speakers/dr.humayon-dar.png',
    name: 'Dr. Humayon Dar',
    position: 'Cambridge Institute of Islamic Finance United Kingdom',
    intro: 'Dar is founding editor of Global Islamic Finance Repor, GIFR is an influential yearbook in Islamic banking and finance.',
  },
  {
    image: './Images/Speakers/dr-mohd-kabir.jpg',
    name: 'Dr. Mohd Kabir',
    position: 'Professor of Economics and Finance in the University of New Orleans',
    intro: 'Dr. Kabirs publication record include more than 350 book chapters and papers published in refereed journals. He is one of the most cited researcher in finance literature.',
  },
];

// Select ul element containing the list of speakers-info.
const speakers = document.querySelector('.speakers-info');

// Loop that iterates over the speakersInfo array and generates an li element for each speaker.
speakersInfo.forEach((speaker) => {
  const li = document.createElement('li');
  li.innerHTML = ` <div class="speaker-image">
      <img src="${speaker.image}" alt="${speaker.name}'s photo">
    </div>
    <div class="speaker-details">
      <h3>${speaker.name}</h3>
      <i class="speaker-position">${speaker.position}</i>
      <hr class="grey-line">
      <p class="speaker-intro">${speaker.intro}</p>
    </div>
  `;
  speakers.appendChild(li);
});

// Select NodeList containing all the li elements and more-speakers button.
const speakersList = document.querySelectorAll('.speakers-info>li');
const showMoreSpeakers = document.querySelector('.more-speakers');
// Boolean variable that indicates whether the full list of speakers is currently displayed or not.
let fullListDisplayed = false;

showMoreSpeakers.addEventListener('click', () => {
  if (fullListDisplayed) {
    // If the full list is currently displayed, show only the first two speakers.
    for (let i = 2; i < speakersList.length; i += 1) {
      speakersList[i].style.display = 'none';
    }
    showMoreSpeakers.innerHTML = 'MORE<i class="fa-solid fa-chevron-down"></i>';
    fullListDisplayed = false;
  } else {
    // If only the first two speakers are currently displayed, show the full list.
    for (let i = 2; i < speakersList.length; i += 1) {
      speakersList[i].style.display = 'flex';
    }
    showMoreSpeakers.innerHTML = 'LESS<i class="fa-solid fa-chevron-up"></i>';
    fullListDisplayed = true;
  }
});
