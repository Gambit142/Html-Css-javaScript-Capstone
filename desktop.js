const playersProfile = [
  {
    players: ['Skarra Ajibade', 'Bedrama Hassan'],
    clubs: ['96 Champions Fc', 'El-Grinada Fc'],
    countries: ['Nigeria', 'Egypt'],
    descriptions: {
      detail1: `Skarra has been the tournament's most proficient goal scorer since its inception. 
    He has 25caps and 34 goals in his name`,
      detail2: `Tagged the 'Xavi' of 5-A-SIDE tournament, Bedrama has a pass complete rate of 94% and 
        82 assists in this competition since inception`,
    },
    images: ['Images/Superstar-1.png', 'Images/Superstar-2.png'],
  },
  {
    players: ['Meputo Tsumadigo', 'Hamdi Temel'],
    clubs: ['Diamond Fc', 'Blue Liners Fc'],
    countries: ['Uganda', 'Morroco'],
    descriptions: {
      detail1: `Aka 'Bus-Stop', this phenomenal player is a rock solid defender any team should have. 
    He has complete tackle success rate of 80%`,
      detail2: `Hamdi is a dangerous striker. He is a nightmare of defenders and very clinical in front
      of goal. He has 26 goals to his name`,
    },
    images: ['Images/Superstar-3.png', 'Images/Superstar-4.png'],
  },
  {
    players: ['Iniza Uwase', 'Tchani Bithri'],
    clubs: ['Sunrise Fc', 'Zamafax Fc'],
    countries: ['Rwanda', 'Tunisia'],
    descriptions: {
      detail1: `Iniza is the Ngolo Kante of this competition because of his solid displays 
    in front of the defense. He has most completed tackles`,
      detail2: `He is a colossal figure in front of the goal. He has the most clean sheets (15) in the 
        tournament.`,
    },
    images: ['Images/Superstar-5.png', 'Images/Superstar-6.png'],
  },
];

console.log(playersProfile);
function createPlayersProfile(superstar) {
    const profile = `
  <div class="row col-md-12 players-info-container d-flex flex-column d-md-flex flex-md-row ">
    <div class="col-12 gap-4 mt-3 d-flex justify-content-center flex-row col-md-6">
      <div class="col-5"><img src=${superstar.images[0]} alt="Competition Top Player" class="img-player"></div>
      <div class="col-5 d-flex flex-column">
        <h3 class="player-name">${superstar.players[0]}</h3>
        <p class="player-country fw-bold fst-italic">${superstar.clubs[0]}<br>Nigeria</p>
        <p class="player-description">${superstar.descriptions.detail1}</p>
      </div>
    </div>
    <div class="col-12 gap-4 mt-3 d-flex justify-content-center flex-row col-md-6">
      <div class="col-5 "><img src=${superstar.images[1]} alt="Competition Top Player" class="img-player"></div>
      <div class="col-5 d-flex flex-column">
        <h3 class="player-name">${superstar.players[1]}</h3>
        <p class="player-country">${superstar.clubs[1]}<br>Nigeria</p>
        <p class="player-description">${superstar.descriptions.detail2}</p>
      </div>
    </div>
  </div>`;
  return profile;
}

const profileContainer = document.getElementById('target-div');

playersProfile.forEach((card) => {
  profileContainer.innerHTML += createPlayersProfile(card);
})


