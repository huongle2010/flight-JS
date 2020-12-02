const vols = [{
    destination: 'Martinique',
    date_depart: '01/25/2019',
    compagnie_aerienne: 'Ryanair',
    numVol: 'xxxxx',
    prix: '350',
    dureeTrajet: '6'
  },
  {
    destination: 'Londres',
    date_depart: '07/25/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '150',
    dureeTrajet: '2'
  },
  {
    destination: 'Paris',
    date_depart: '08/12/2019',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '50',
    dureeTrajet: '1'
  },
  {
    destination: 'Mexico',
    date_depart: '09/03/2019',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '1350',
    dureeTrajet: '8'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/12/2020',
    compagnie_aerienne: 'Air france',
    numVol: 'xxxxx',
    prix: '750',
    dureeTrajet: '14'
  },
  {
    destination: 'Tokyo',
    date_depart: '12/11/2020',
    compagnie_aerienne: 'Lufthansa',
    numVol: 'xxxxx',
    prix: '850',
    dureeTrajet: '14'
  }
  ];

  //Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)
console.log(vols);

// afficher 
vols.forEach ((vol) => {
    console.log(vol.dureeTrajet);
});
//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)
vols.forEach ((vol) => {
 if (vol.dureeTrajet < 7){
        console.log(vol);
    }
  });

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)
vols.forEach ((vol) => {
    if (vol.destination == 'Tokyo' && vol.compagnie_aerienne == 'Air france'){
           console.log(vol);
       }
     });

//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france
vols.forEach ((vol) => {
    if (vol.prix < 700 && vol.compagnie_aerienne == 'Air france'){
           console.log(vol);
       }
     });

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures

vols.forEach ((vol) => {
    if (vol.prix < 900 && vol.compagnie_aerienne == 'Lufthansa' && vol.dureeTrajet < 15){
           console.log(vol);
       }
     });

//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher

vols.forEach ((vol) => {
        const dateYear = vol.date_depart.split('/');
        if (dateYear[2] > "2019"){
          const newPrix = vol.prix * 0.8;
          console.log(newPrix);

        }
     });

//  Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".
const date1 = new Date ('06/02/2019');
const date2 = new Date ('09/06/2019');
console.log(date2);
vols.forEach ((vol) => {
  const date = new Date (vol.date_depart);
  if (date > date1 && date < date2){
    console.log(vol);
  }
})

//Afficher tous les vols à partir de la date d'aujourd'hui
const dateToday = new Date();
console.log(dateToday);
vols.forEach ((vol) => {
  const date = new Date (vol.date_depart);
  if (date > dateToday){
    console.log(vol);
  }
})

//Un petit coup de main...
//Il faut récupèrer la date du jour avec l'objet 'date' (new Date()) fournis par Javascript.

//La fonction suivante permet de comparer deux dates et renvoie 'true' si date1 est supérieur à date2
//Pour comparer deux, celles-ci doivent avoir le même format.
    