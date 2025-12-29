// Embedded sticker catalog to avoid fetch issues on file://.
const STICKER_CATALOG = [
  {
    "No": 1,
    "Title": "Serie A Trophy",
    "Section": "Introduction",
    "Type": "foil"
  },
  {
    "No": 2,
    "Title": "Coppa Italia Trophy",
    "Section": "Introduction",
    "Type": "foil"
  },
  {
    "No": 3,
    "Title": "Player of the Month Trophy",
    "Section": "Introduction",
    "Type": "foil"
  },
  {
    "No": 4,
    "Title": "Squadra (Atalanta)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 5,
    "Title": "Squadra (Bologna)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 6,
    "Title": "Squadra (Cagliari)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 7,
    "Title": "Squadra (Como)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 8,
    "Title": "Squadra (Cremonese)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 9,
    "Title": "Squadra (Fiorentina)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 10,
    "Title": "Squadra (Genoa)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 11,
    "Title": "Squadra (Hellas Verona)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 12,
    "Title": "Squadra (Inter)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 13,
    "Title": "Squadra (Juventus)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 14,
    "Title": "Squadra (Lazio)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 15,
    "Title": "Squadra (Lecce)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 16,
    "Title": "Squadra (Milan)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 17,
    "Title": "Squadra (Napoli)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 18,
    "Title": "Squadra (Parma)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 19,
    "Title": "Squadra (Pisa)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 20,
    "Title": "Squadra (Roma)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 21,
    "Title": "Squadra (Sassuolo)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 22,
    "Title": "Squadra (Torino)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 23,
    "Title": "Squadra (Udinese)",
    "Section": "Le Squadra della Serie A",
    "Type": "-"
  },
  {
    "No": 24,
    "Title": "Nikola Krstovic (Atalanta)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 25,
    "Title": "Ciro Immobile (Bologna)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 26,
    "Title": "Andrea Belotti (Cagliari)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 27,
    "Title": "Alvaro Morata (Como)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 28,
    "Title": "Jamie Vardy (Cremonese)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 29,
    "Title": "Edin Dzeko (Fiorentina)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 30,
    "Title": "Lorenzo Colombo (Genoa)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 31,
    "Title": "Gift Orban (Hellas Verona)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 32,
    "Title": "Manuel Akanji (Inter)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 33,
    "Title": "Jonathan David (Juventus)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 34,
    "Title": "Matteo Cancellieri (Lazio)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 35,
    "Title": "Francesco Camarda (Lecce)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 36,
    "Title": "Luka Modric (Milan)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 37,
    "Title": "Kevin De Bruyne (Napoli)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 38,
    "Title": "Patrick Cutrone (Parma)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 39,
    "Title": "Michel Aebischer (Pisa)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 40,
    "Title": "Evan Ferguson (Roma)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 41,
    "Title": "Nemanja Matic (Sassuolo)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 42,
    "Title": "Giovanni Simeone (Torino)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 43,
    "Title": "Nicolo' Zaniolo (Udinese)",
    "Section": "Nuove Firma in Citta",
    "Type": "-"
  },
  {
    "No": 44,
    "Title": "Scudetto",
    "Section": "Atalanta",
    "Type": "foil"
  },
  {
    "No": 45,
    "Title": "Marco Carnesecchi",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 46,
    "Title": "Marco Sportiello",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 47,
    "Title": "Giorgio Scalvini",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 48,
    "Title": "Berat Djimsiti",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 49,
    "Title": "Isak Hien",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 50,
    "Title": "Raoul Bellanova",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 51,
    "Title": "Odilon Kossounou",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 52,
    "Title": "Sead Kolasinac",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 53,
    "Title": "Ederson",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 54,
    "Title": "Marten de Roon",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": "54s",
    "Title": "Marten de Roon",
    "Section": "Atalanta",
    "Type": "shiny"
  },
  {
    "No": 55,
    "Title": "Nicola Zalewski",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 56,
    "Title": "Davide Zappacosta",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 57,
    "Title": "Lazar Samardzic",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 58,
    "Title": "Mario Pasalic",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 59,
    "Title": "Charles de Ketelaere",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 60,
    "Title": "Ademola Lookman",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 61,
    "Title": "Kamaldeen Sulemana",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 62,
    "Title": "Nikola Krstovic",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 63,
    "Title": "Daniel Maldini",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 64,
    "Title": "Gianluca Scamacca",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 65,
    "Title": "Ivan Juric",
    "Section": "Atalanta",
    "Type": "-"
  },
  {
    "No": 66,
    "Title": "Scudetto",
    "Section": "Bologna",
    "Type": "foil"
  },
  {
    "No": 67,
    "Title": "Lukasz Skorupski",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 68,
    "Title": "Federico Ravaglia",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 69,
    "Title": "Jhon Lucumi",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 70,
    "Title": "Martin Vitik",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 71,
    "Title": "Juan Miranda",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 72,
    "Title": "Emil Holm",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 73,
    "Title": "Lorenzo De Silvestri",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 74,
    "Title": "Nadir Zortea",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 75,
    "Title": "Remo Freuler",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 76,
    "Title": "Tommaso Pobega",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 77,
    "Title": "Lewis Ferguson",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": "77s",
    "Title": "Lewis Ferguson",
    "Section": "Bologna",
    "Type": "shiny"
  },
  {
    "No": 78,
    "Title": "Giovanni Fabbian",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 79,
    "Title": "Federico Bernardeschi",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 80,
    "Title": "Jens Odgaard",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 81,
    "Title": "Jonathan Rowe",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 82,
    "Title": "Riccardo Orsolini",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 83,
    "Title": "Nicolo' Cambiaghi",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 84,
    "Title": "Santiago Castro",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 85,
    "Title": "Thijs Dallinga",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 86,
    "Title": "Ciro Immobile",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 87,
    "Title": "Vincenzo Italiano",
    "Section": "Bologna",
    "Type": "-"
  },
  {
    "No": 88,
    "Title": "Scudetto",
    "Section": "Cagliari",
    "Type": "foil"
  },
  {
    "No": 89,
    "Title": "Elia Caprile",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 90,
    "Title": "Boris Radunovic",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 91,
    "Title": "Yerry Mina",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 92,
    "Title": "Sebastiano Luperto",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 93,
    "Title": "Gabriele Zappa",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 94,
    "Title": "Adam Obert",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 95,
    "Title": "Ze' Pedro",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 96,
    "Title": "Marco Palestra",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 97,
    "Title": "Michel Adopo",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 98,
    "Title": "Michael Folorunsho",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 99,
    "Title": "Gianluca Gaetano",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 100,
    "Title": "Matteo Prati",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 101,
    "Title": "Alessandro Deiola",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 102,
    "Title": "Gennaro Borrelli",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 103,
    "Title": "Mattia Felici",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 104,
    "Title": "Sebastiano Esposito",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 105,
    "Title": "Semih Kilicsov",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 106,
    "Title": "Zito Luvumbo",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 107,
    "Title": "Leonardo Pavoletti",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": "107s",
    "Title": "Leonardo Pavoletti",
    "Section": "Cagliari",
    "Type": "shiny"
  },
  {
    "No": 108,
    "Title": "Andrea Belotti",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 109,
    "Title": "Fabio Pisacane",
    "Section": "Cagliari",
    "Type": "-"
  },
  {
    "No": 110,
    "Title": "Scudetto",
    "Section": "Como",
    "Type": "foil"
  },
  {
    "No": 111,
    "Title": "Jean Butez",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 112,
    "Title": "Nikola Cavlina",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 113,
    "Title": "Alex Valle",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 114,
    "Title": "Diego Carlos",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 115,
    "Title": "Ignace van der Brempt",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 116,
    "Title": "Jacobo Ramon",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 117,
    "Title": "Marc Oliver Kempf",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 118,
    "Title": "Mergim Vojvoda",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 119,
    "Title": "Stefan Posch",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 120,
    "Title": "Lucas da Cunha",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": "120s",
    "Title": "Lucas da Cunha",
    "Section": "Como",
    "Type": "shiny"
  },
  {
    "No": 121,
    "Title": "Martin Baturina",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 122,
    "Title": "Maxence Caqueret",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 123,
    "Title": "Maximo Perrone",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 124,
    "Title": "Nico Paz",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 125,
    "Title": "Sergi Roberto",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 126,
    "Title": "Nicolas Kuhn",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 127,
    "Title": "Assane Diao",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 128,
    "Title": "Anastasios Douvikas",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 129,
    "Title": "Alvaro Morata",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 130,
    "Title": "Jesus Rodriguez",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 131,
    "Title": "Cesc Fabregas",
    "Section": "Como",
    "Type": "-"
  },
  {
    "No": 132,
    "Title": "Scudetto",
    "Section": "Cremonese",
    "Type": "foil"
  },
  {
    "No": 133,
    "Title": "Emil Audero",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 134,
    "Title": "Marco Silvestri",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 135,
    "Title": "Filippo Terracciano",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 136,
    "Title": "Federico Baschirotto",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 137,
    "Title": "Tommaso Barbieri",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 138,
    "Title": "Floriani Mussolini",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 139,
    "Title": "Matteo Bianchetti",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": "139s",
    "Title": "Matteo Bianchetti",
    "Section": "Cremonese",
    "Type": "shiny"
  },
  {
    "No": 140,
    "Title": "Giuseppe Pezzella",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 141,
    "Title": "Alberto Grassi",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 142,
    "Title": "Warren Bondo",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 143,
    "Title": "Jeremy Sarmiento",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 144,
    "Title": "Alessio Zerbin",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 145,
    "Title": "Michele Collocolo",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 146,
    "Title": "Martin Payero",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 147,
    "Title": "Jari Vandeputte",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 148,
    "Title": "Federico Bonazzoli",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 149,
    "Title": "Antonio Sanabria",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 150,
    "Title": "Jamie Vardy",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 151,
    "Title": "Faris Moumbagna",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 152,
    "Title": "Franco Vazquez",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 153,
    "Title": "Davide Nicola",
    "Section": "Cremonese",
    "Type": "-"
  },
  {
    "No": 154,
    "Title": "Scudetto",
    "Section": "Fiorentina",
    "Type": "foil"
  },
  {
    "No": 155,
    "Title": "David de Gea",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 156,
    "Title": "Tommaso Martinelli",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 157,
    "Title": "Luca Ranieri",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": "157s",
    "Title": "Luca Ranieri",
    "Section": "Fiorentina",
    "Type": "shiny"
  },
  {
    "No": 158,
    "Title": "Pablo Mari'",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 159,
    "Title": "Tariq Lamptey",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 160,
    "Title": "Pietro Comuzzo",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 161,
    "Title": "Dodo'",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 162,
    "Title": "Fabiano Parisi",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 163,
    "Title": "Marin Pongracic",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 164,
    "Title": "Mattia Viti",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 165,
    "Title": "Robin Gosens",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 166,
    "Title": "Jacopo Fazzini",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 167,
    "Title": "Rolando Mandragora",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 168,
    "Title": "Simon Sohm",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 169,
    "Title": "Nicolussi Caviglia",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 170,
    "Title": "Nicolo' Fagioli",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 171,
    "Title": "Edin Dzeko",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 172,
    "Title": "Moise Kean",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 173,
    "Title": "Roberto Piccoli",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 174,
    "Title": "Albert Gudmundsson",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 175,
    "Title": "Stefano Pioli",
    "Section": "Fiorentina",
    "Type": "-"
  },
  {
    "No": 176,
    "Title": "Scudetto",
    "Section": "Genoa",
    "Type": "foil"
  },
  {
    "No": 177,
    "Title": "Nicola Leali",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 178,
    "Title": "Benjamin Siegrist",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 179,
    "Title": "Johan Vasquez",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": "179s",
    "Title": "Johan Vasquez",
    "Section": "Genoa",
    "Type": "shiny"
  },
  {
    "No": 180,
    "Title": "Alessandro Marcandalli",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 181,
    "Title": "Leo Ostigard",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 182,
    "Title": "Aaron Martin",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 183,
    "Title": "Brooke Norton-Cuffy",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 184,
    "Title": "Stefano Sabelli",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 185,
    "Title": "Sebastian Otoa",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 186,
    "Title": "Patrizio Masini",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 187,
    "Title": "Ruslan Malinovskyi",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 188,
    "Title": "Albert Grønbæk",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 189,
    "Title": "Morten Frendrup",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 190,
    "Title": "Junior Messias",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 191,
    "Title": "Nicolae Stanciu",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 192,
    "Title": "Mikael Egill Ellertsson",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 193,
    "Title": "Morten Thorsby",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 194,
    "Title": "Valentin Carboni",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 195,
    "Title": "Lorenzo Colombo",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 196,
    "Title": "Vitinha",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 197,
    "Title": "Patrick Vieira",
    "Section": "Genoa",
    "Type": "-"
  },
  {
    "No": 198,
    "Title": "Scudetto",
    "Section": "Hellas Verona",
    "Type": "foil"
  },
  {
    "No": 199,
    "Title": "Lorenzo Montipo'",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 200,
    "Title": "Simone Perilli",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 201,
    "Title": "Unai Nunez",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 202,
    "Title": "Enzo Ebosse",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 203,
    "Title": "Domagoj Bradaric",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 204,
    "Title": "Bella-Kotchap",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 205,
    "Title": "Rafik Belghali",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 206,
    "Title": "Victor Nelsson",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 207,
    "Title": "Nicolas Valentini",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 208,
    "Title": "Martin Frese",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 209,
    "Title": "Suat Serdar",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": "209s",
    "Title": "Suat Serdar",
    "Section": "Hellas Verona",
    "Type": "shiny"
  },
  {
    "No": 210,
    "Title": "Al-Musrati",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 211,
    "Title": "Abdou Harroui",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 212,
    "Title": "Roberto Gagliardini",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 213,
    "Title": "Antoine Bernede",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 214,
    "Title": "Akpa Akpro",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 215,
    "Title": "Amin Sarr",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 216,
    "Title": "Daniel Mosquera",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 217,
    "Title": "Gift Orban",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 218,
    "Title": "Giovane",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 219,
    "Title": "Paolo Zanetti",
    "Section": "Hellas Verona",
    "Type": "-"
  },
  {
    "No": 220,
    "Title": "Scudetto",
    "Section": "Inter",
    "Type": "foil"
  },
  {
    "No": 221,
    "Title": "Yann Sommer",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 222,
    "Title": "Josep Martinez",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 223,
    "Title": "Stefan De Vrij",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 224,
    "Title": "Francesco Acerbi",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 225,
    "Title": "Manuel Akanji",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 226,
    "Title": "Alessandro Bastoni",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 227,
    "Title": "Yann-Aurel Bisseck",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 228,
    "Title": "Federico Dimarco",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 229,
    "Title": "Carlos Augusto",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 230,
    "Title": "Denzel Dumfries",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 231,
    "Title": "Davide Frattesi",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 232,
    "Title": "Petar Sucic",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 233,
    "Title": "Piotr Zielinski",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 234,
    "Title": "Hakan Calhanoglu",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 235,
    "Title": "Nicolo' Barella",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 236,
    "Title": "Henrikh Mkhitaryan",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 237,
    "Title": "Francesco Pio Esposito",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 238,
    "Title": "Lautaro Martinez",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": "238s",
    "Title": "Lautaro Martinez",
    "Section": "Inter",
    "Type": "shiny"
  },
  {
    "No": 239,
    "Title": "Marcus Thuram",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 240,
    "Title": "Ange-Yaon Bonny",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 241,
    "Title": "Cristian Chivu",
    "Section": "Inter",
    "Type": "-"
  },
  {
    "No": 242,
    "Title": "Scudetto",
    "Section": "Juventus",
    "Type": "foil"
  },
  {
    "No": 243,
    "Title": "Michele De Gregorio",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 244,
    "Title": "Mattia Perin",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 245,
    "Title": "Andrea Cambiaso",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 246,
    "Title": "Federico Gatti",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 247,
    "Title": "Bremer",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 248,
    "Title": "Juan Cabal",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 249,
    "Title": "Pierre Kalulu",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 250,
    "Title": "Lloyd Kelly",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 251,
    "Title": "Joao Mario",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 252,
    "Title": "Teun Koopmeiners",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 253,
    "Title": "Weston McKennie",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 254,
    "Title": "Fabio Miretti",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 255,
    "Title": "Manuel Locatelli",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": "255s",
    "Title": "Manuel Locatelli",
    "Section": "Juventus",
    "Type": "shiny"
  },
  {
    "No": 256,
    "Title": "Khephren Thuram",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 257,
    "Title": "Lois Openda",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 258,
    "Title": "Francisco Conceicao",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 259,
    "Title": "Dusan Vlahovic",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 260,
    "Title": "Kenan Yildiz",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 261,
    "Title": "Jonathan David",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 262,
    "Title": "Edon Zhegrova",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 263,
    "Title": "Igor Tudor",
    "Section": "Juventus",
    "Type": "-"
  },
  {
    "No": 264,
    "Title": "Scudetto",
    "Section": "Lazio",
    "Type": "foil"
  },
  {
    "No": 265,
    "Title": "Ivan Provedel",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 266,
    "Title": "Christos Mandas",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 267,
    "Title": "Alessio Romagnoli",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 268,
    "Title": "Luca Pellegrini",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 269,
    "Title": "Adam Marusic",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 270,
    "Title": "Mario Gila",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 271,
    "Title": "Nuno Tavares",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 272,
    "Title": "Oliver Provstgaard",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 273,
    "Title": "Fisayo Dele-Bashiru",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 274,
    "Title": "Nicolo' Rovella",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 275,
    "Title": "Mattia Zaccagni",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": "275s",
    "Title": "Mattia Zaccagni",
    "Section": "Lazio",
    "Type": "shiny"
  },
  {
    "No": 276,
    "Title": "Matias Vecino",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 277,
    "Title": "Matteo Guendouzi",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 278,
    "Title": "Reda Belahyane",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 279,
    "Title": "Danilo Cataldi",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 280,
    "Title": "Gustav Isaksen",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 281,
    "Title": "Valentin Castellanos",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 282,
    "Title": "Matteo Cancellieri",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 283,
    "Title": "Boulaye Dia",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 284,
    "Title": "Pedro",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 285,
    "Title": "Maurizio Sarri",
    "Section": "Lazio",
    "Type": "-"
  },
  {
    "No": 286,
    "Title": "Scudetto",
    "Section": "Lecce",
    "Type": "foil"
  },
  {
    "No": 287,
    "Title": "Wladimiro Falcone",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": "287s",
    "Title": "Wladimiro Falcone",
    "Section": "Lecce",
    "Type": "shiny"
  },
  {
    "No": 288,
    "Title": "Christian Fruchtl",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 289,
    "Title": "Tiago Gabriel",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 290,
    "Title": "Christ-Owen Kouassi",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 291,
    "Title": "Antonino Gallo",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 292,
    "Title": "Danilo Veiga",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 293,
    "Title": "Kialonda Gaspar",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 294,
    "Title": "Jamil Siebert",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 295,
    "Title": "Corrie Ndaba",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 296,
    "Title": "Medon Berisha",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 297,
    "Title": "Balthazar Pierret",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 298,
    "Title": "Mohamed Drame'",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 299,
    "Title": "Lassana Coulibaly",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 300,
    "Title": "Ylber Ramadani",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 301,
    "Title": "Francesco Camarda",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 302,
    "Title": "Riccardo Sottil",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 303,
    "Title": "Tete Morente",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 304,
    "Title": "Nikola Stulic",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 305,
    "Title": "Santiago Pierotti",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 306,
    "Title": "Lameck Banda",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 307,
    "Title": "Eusebio Di Francesco",
    "Section": "Lecce",
    "Type": "-"
  },
  {
    "No": 308,
    "Title": "Scudetto",
    "Section": "Milan",
    "Type": "foil"
  },
  {
    "No": 309,
    "Title": "Mike Maignan",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": "309s",
    "Title": "Mike Maignan",
    "Section": "Milan",
    "Type": "shiny"
  },
  {
    "No": 310,
    "Title": "Pietro Terracciano",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 311,
    "Title": "Koni de Winter",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 312,
    "Title": "David Odogu",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 313,
    "Title": "Fikayo Tomori",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 314,
    "Title": "Pervis Estupinan",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 315,
    "Title": "Strahinja Pavlovic",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 316,
    "Title": "Zachary Athekame",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 317,
    "Title": "Matteo Gabbia",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 318,
    "Title": "Adrien Rabiot",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 319,
    "Title": "Alexis Saelemaekers",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 320,
    "Title": "Ardon Jashari",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 321,
    "Title": "Youssouf Fofana",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 322,
    "Title": "Luka Modric",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 323,
    "Title": "Ruben Loftus-Cheek",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 324,
    "Title": "Samuele Ricci",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 325,
    "Title": "Christian Pulisic",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 326,
    "Title": "Christopher Nkunku",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 327,
    "Title": "Rafael Leao",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 328,
    "Title": "Santiago Gimenez",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 329,
    "Title": "Massimiliano Allegri",
    "Section": "Milan",
    "Type": "-"
  },
  {
    "No": 330,
    "Title": "Scudetto",
    "Section": "Napoli",
    "Type": "foil"
  },
  {
    "No": 331,
    "Title": "Alex Meret",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 332,
    "Title": "Vanja Milinkovic-Savic",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 333,
    "Title": "Alessandro Buongiorno",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 334,
    "Title": "Giovanni Di Lorenzo",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": "334s",
    "Title": "Giovanni Di Lorenzo",
    "Section": "Napoli",
    "Type": "shiny"
  },
  {
    "No": 335,
    "Title": "Leonardo Spinazzola",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 336,
    "Title": "Mathias Olivera",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 337,
    "Title": "Sam Beukema",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 338,
    "Title": "Amir Rrahmani",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 339,
    "Title": "Eljif Elmas",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 340,
    "Title": "Billy Gilmour",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 341,
    "Title": "Stanislav Lobotka",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 342,
    "Title": "Andre'-Frank Auguissa",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 343,
    "Title": "Kevin De Bruyne",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 344,
    "Title": "Scott McTominay",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 345,
    "Title": "Lorenzo Lucca",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 346,
    "Title": "Romelu Lukaku",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 347,
    "Title": "Noa Lang",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 348,
    "Title": "Rasmus Hojlund",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 349,
    "Title": "David Neres",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 350,
    "Title": "Matteo Politano",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 351,
    "Title": "Antonio Conte",
    "Section": "Napoli",
    "Type": "-"
  },
  {
    "No": 352,
    "Title": "Scudetto",
    "Section": "Parma",
    "Type": "foil"
  },
  {
    "No": 353,
    "Title": "Zion Suzuki",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 354,
    "Title": "Edoardo Corvi",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 355,
    "Title": "Abdoulaye Ndiaye",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 356,
    "Title": "Emanuele Valeri",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 357,
    "Title": "Mathias Lovik",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 358,
    "Title": "Enrico Delprato",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": "358s",
    "Title": "Enrico Delprato",
    "Section": "Parma",
    "Type": "shiny"
  },
  {
    "No": 359,
    "Title": "Alessandro Circati",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 360,
    "Title": "Mariano Troilo",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 361,
    "Title": "Lautaro Valenti",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 362,
    "Title": "Christian Ordonez",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 363,
    "Title": "Adrian Bernabe'",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 364,
    "Title": "Nahuel Estevez",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 365,
    "Title": "Mandela Keita",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 366,
    "Title": "Oliver Sorensen",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 367,
    "Title": "Gaetano Oristanio",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 368,
    "Title": "Pontus Almqvist",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 369,
    "Title": "Jacob Ondrejka",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 370,
    "Title": "Patrick Cutrone",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 371,
    "Title": "Milan Djuric",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 372,
    "Title": "Mateo Pellegrino",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 373,
    "Title": "Carlos Cuesta",
    "Section": "Parma",
    "Type": "-"
  },
  {
    "No": 374,
    "Title": "Scudetto",
    "Section": "Pisa",
    "Type": "foil"
  },
  {
    "No": 375,
    "Title": "Simone Scuffet",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 376,
    "Title": "Adrian Semper",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 377,
    "Title": "Mateus Lusuardi",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 378,
    "Title": "Samuele Angori",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 379,
    "Title": "Raul Albiol",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 380,
    "Title": "Antonio Caracciolo",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": "380s",
    "Title": "Antonio Caracciolo",
    "Section": "Pisa",
    "Type": "shiny"
  },
  {
    "No": 381,
    "Title": "Simone Canestrelli",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 382,
    "Title": "Arturo Calabresi",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 383,
    "Title": "Michel Aebischer",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 384,
    "Title": "Lorran",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 385,
    "Title": "Isak Vural",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 386,
    "Title": "Idrissa Toure'",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 387,
    "Title": "Matteo Tramoni",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 388,
    "Title": "Juan Cuadrado",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 389,
    "Title": "Marius Marin",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 390,
    "Title": "Stefano Moreo",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 391,
    "Title": "Mehdi Leris",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 392,
    "Title": "M'Bala Nzola",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 393,
    "Title": "Henrik Meister",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 394,
    "Title": "Calvin Stengs",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 395,
    "Title": "Alberto Gilardino",
    "Section": "Pisa",
    "Type": "-"
  },
  {
    "No": 396,
    "Title": "Scudetto",
    "Section": "Roma",
    "Type": "foil"
  },
  {
    "No": 397,
    "Title": "Mile Svilar",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 398,
    "Title": "Pierluigi Gollini",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 399,
    "Title": "Kostas Tsimikas",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 400,
    "Title": "Gianluca Mancini",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 401,
    "Title": "Angelino",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 402,
    "Title": "Zeki Celik",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 403,
    "Title": "Mario Hermoso",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 404,
    "Title": "Evan Ndicka",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 405,
    "Title": "Wesley",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 406,
    "Title": "Bryan Cristante",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 407,
    "Title": "Lorenzo Pellegrini",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 408,
    "Title": "Niccolo' Pisilli",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 409,
    "Title": "Neil El Aynaoui",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 410,
    "Title": "Manu Kone",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 411,
    "Title": "Leon Bailey",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 412,
    "Title": "Stephan El Shaarawy",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": "412s",
    "Title": "Stephan El Shaarawy",
    "Section": "Roma",
    "Type": "shiny"
  },
  {
    "No": 413,
    "Title": "Paulo Dybala",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 414,
    "Title": "Artem Dovbyk",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 415,
    "Title": "Evan Ferguson",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 416,
    "Title": "Matias Soule'",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 417,
    "Title": "Gian Piero Gasperini",
    "Section": "Roma",
    "Type": "-"
  },
  {
    "No": 418,
    "Title": "Scudetto",
    "Section": "Sassuolo",
    "Type": "foil"
  },
  {
    "No": 419,
    "Title": "Stefano Turati",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 420,
    "Title": "Arijanet Muric",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 421,
    "Title": "Filippo Romagna",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": "421s",
    "Title": "Filippo Romagna",
    "Section": "Sassuolo",
    "Type": "shiny"
  },
  {
    "No": 422,
    "Title": "Sebastian Walukiewicz",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 423,
    "Title": "Woyo Coulibaly",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 424,
    "Title": "Tarik Muharemovic",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 425,
    "Title": "Josh Doig",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 426,
    "Title": "Jay Idzes",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 427,
    "Title": "Daniel Boloca",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 428,
    "Title": "Luca Lipani",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 429,
    "Title": "Kristian Thorstvedt",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 430,
    "Title": "Aster Vranckx",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 431,
    "Title": "Nemanja Matic",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 432,
    "Title": "Ismael Kone'",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 433,
    "Title": "Alieu Fadera",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 434,
    "Title": "Andrea Pinamonti",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 435,
    "Title": "Cristian Volpato",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 436,
    "Title": "Domenico Berardi",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 437,
    "Title": "Walid Cheddira",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 438,
    "Title": "Armand Laurentie'",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 439,
    "Title": "Fabio Grosso",
    "Section": "Sassuolo",
    "Type": "-"
  },
  {
    "No": 440,
    "Title": "Scudetto",
    "Section": "Torino",
    "Type": "foil"
  },
  {
    "No": 441,
    "Title": "Franco Israel",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 442,
    "Title": "Alberto Paleari",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 443,
    "Title": "Valentino Lazaro",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 444,
    "Title": "Cristiano Biraghi",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 445,
    "Title": "Guillermo Maripan",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 446,
    "Title": "Marcus Pedersen",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 447,
    "Title": "Adam Masina",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 448,
    "Title": "Saul Coco",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 449,
    "Title": "Ardian Ismajli",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 450,
    "Title": "Kristjan Asllani",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 451,
    "Title": "Cesare Casadei",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 452,
    "Title": "Ivan Ilic",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 453,
    "Title": "Tino Anjorin",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 454,
    "Title": "Gvidas Gineitis",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 455,
    "Title": "Nikola Vlasic",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 456,
    "Title": "Ché Adams",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 457,
    "Title": "Zakaria Aboukhlal",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 458,
    "Title": "Giovanni Simeone",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 459,
    "Title": "Cyril Ngonge",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 460,
    "Title": "Duvan Zapata",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": "460s",
    "Title": "Duvan Zapata",
    "Section": "Torino",
    "Type": "shiny"
  },
  {
    "No": 461,
    "Title": "Marco Baroni",
    "Section": "Torino",
    "Type": "-"
  },
  {
    "No": 462,
    "Title": "Scudetto",
    "Section": "Udinese",
    "Type": "foil"
  },
  {
    "No": 463,
    "Title": "Razvan Sava",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 464,
    "Title": "Maduka Okoye",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 465,
    "Title": "Saba Goglichidze",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 466,
    "Title": "Nicolo' Bertola",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 467,
    "Title": "Thomas Kristensen",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 468,
    "Title": "Oumar Solet",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 469,
    "Title": "Hassane Kamara",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 470,
    "Title": "Alessandro Zanoli",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 471,
    "Title": "Kingsley Ehizibue",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 472,
    "Title": "Jordan Zemura",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 473,
    "Title": "Jesper Karlström",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": "473s",
    "Title": "Jesper Karlström",
    "Section": "Udinese",
    "Type": "shiny"
  },
  {
    "No": 474,
    "Title": "Sandi Lovric",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 475,
    "Title": "Jakub Piotrowski",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 476,
    "Title": "Lennon Miller",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 477,
    "Title": "Jurgen Ekkelenkamp",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 478,
    "Title": "Arthur Atta",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 479,
    "Title": "Nicolo' Zaniolo",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 480,
    "Title": "Adam Buksa",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 481,
    "Title": "Iker Bravo",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 482,
    "Title": "Keinan Davis",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 483,
    "Title": "Kosta Runjaic",
    "Section": "Udinese",
    "Type": "-"
  },
  {
    "No": 484,
    "Title": "Charles De Ketelaere (Atalanta)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 485,
    "Title": "Riccardo Orsolini (Bologna)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 486,
    "Title": "Nico Paz (Como)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 487,
    "Title": "Moise Kean (Fiorentina)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 488,
    "Title": "Lautaro Martinez (Inter)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 489,
    "Title": "Kenan Yildiz (Juventus)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 490,
    "Title": "Mattia Zaccagni (Lazio)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 491,
    "Title": "Christian Pulisic (Milan)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 492,
    "Title": "Romelu Lukaku (Napoli)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 493,
    "Title": "Adrian Bernabe' (Parma)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 494,
    "Title": "Paulo Dybala (Roma)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 495,
    "Title": "Domenico Berardi (Sassuolo)",
    "Section": "Gem Squad",
    "Type": "shiny"
  },
  {
    "No": 496,
    "Title": "Raoul Bellanova (Atalanta)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 497,
    "Title": "Assane Diao (Como)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 498,
    "Title": "Federico Dimarco (Inter)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 499,
    "Title": "Giovane (Hellas Verona)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 500,
    "Title": "Joao Mario (Juventus)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 501,
    "Title": "Nuno Tavares (Lazio)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 502,
    "Title": "Rafael Leao (Milan)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 503,
    "Title": "Noa Lang (Napoli)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 504,
    "Title": "Juan Cuadrado (Pisa)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 505,
    "Title": "Armand Laurentie' (Sassuolo)",
    "Section": "Turbofreccia",
    "Type": "shiny"
  },
  {
    "No": 506,
    "Title": "Santiago Castro (Bologna)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 507,
    "Title": "Jesus Rodriguez (Como)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 508,
    "Title": "Pietro Comuzzo (Fiorentina)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 509,
    "Title": "Valentin Carboni (Genoa)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 510,
    "Title": "Francesco Camarda (Lecce)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 511,
    "Title": "Cesare Casadei (Torino)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 512,
    "Title": "Arthur Atta (Udinese)",
    "Section": "Color Up",
    "Type": "shiny"
  },
  {
    "No": 513,
    "Title": "Elia Caprile (Cagliari)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 514,
    "Title": "David De Gea (Fiorentina)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 515,
    "Title": "Lorenzo Montipo' (Hellas Verona)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 516,
    "Title": "Nicola Leali (Genoa)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 517,
    "Title": "Wladimiro Falcone (Lecce)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 518,
    "Title": "Mike Maignan (Milan)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 519,
    "Title": "Zion Suzuki (Parma)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 520,
    "Title": "Mile Svilar (Roma)",
    "Section": "Super Glovez",
    "Type": "shiny"
  },
  {
    "No": 521,
    "Title": "Federico Bernardeschi (Bologna)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 522,
    "Title": "Federico Bonazzoli (Cremonese)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 523,
    "Title": "Nicolae Stanciu (Genoa)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 524,
    "Title": "Nicolo' Barella (Inter)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 525,
    "Title": "Valentin Castellanos (Lazio)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 526,
    "Title": "Luka Modric (Milan)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 527,
    "Title": "Scott McTominay (Napoli)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 528,
    "Title": "Matias Soule' (Roma)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 529,
    "Title": "Nikola Vlasic (Torino)",
    "Section": "Trick Maestro",
    "Type": "shiny"
  },
  {
    "No": 530,
    "Title": "Giorgio Scalvini (Atalanta)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 531,
    "Title": "Yerry Mina (Cagliari)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 532,
    "Title": "Federico Baschirotto (Cremonese)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 533,
    "Title": "Alessandro Bastoni (Inter)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 534,
    "Title": "Bremer (Juventus)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 535,
    "Title": "Kialonda Gaspar (Lecce)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 536,
    "Title": "Andre'-Frank Anguissa (Napoli)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 537,
    "Title": "Idrissa Toure' (Pisa)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 538,
    "Title": "Manu Kone' (Roma)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 539,
    "Title": "Oumar Solet (Udinese)",
    "Section": "Boom d'Impatio",
    "Type": "shiny"
  },
  {
    "No": 540,
    "Title": "Pio Esposito (Inter) / Sebastiano Esposito (Cagliari)",
    "Section": "Power Bros",
    "Type": "shiny"
  },
  {
    "No": 541,
    "Title": "Marcus Thuram (Inter) / Khephren Thuram (Juventus)",
    "Section": "Power Bros",
    "Type": "shiny"
  },
  {
    "No": 542,
    "Title": "Daniel Maldini (Atalanta) / Paolo Maldini (Milan)",
    "Section": "Family Legacy",
    "Type": "shiny"
  },
  {
    "No": 543,
    "Title": "Louis Buffon (Pisa) / Gianluigi Buffon (Juventus)",
    "Section": "Family Legacy",
    "Type": "shiny"
  },
  {
    "No": 544,
    "Title": "Avelino / Bari (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 545,
    "Title": "Avellino (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 546,
    "Title": "Bari (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 547,
    "Title": "Carrarese / Catanzaro (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 548,
    "Title": "Carrarese (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 549,
    "Title": "Catanzaro (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 550,
    "Title": "Cesena / Empoli (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 551,
    "Title": "Cesena (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 552,
    "Title": "Empoli (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 553,
    "Title": "Frosinone / Juve Stabia (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 554,
    "Title": "Frosinone (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 555,
    "Title": "Juve Stabia (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 556,
    "Title": "Mantova / Modena (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 557,
    "Title": "Mantova (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 558,
    "Title": "Modena (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 559,
    "Title": "Monza / Padova (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 560,
    "Title": "Monza (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 561,
    "Title": "Padova (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 562,
    "Title": "Palermo / Pescara (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 563,
    "Title": "Palermo (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 564,
    "Title": "Pescara (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 565,
    "Title": "Reggiana / Sampdoria (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 566,
    "Title": "Reggiana (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 567,
    "Title": "Sampdoria (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 568,
    "Title": "Spezia / Sudtirol (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 569,
    "Title": "Spezia (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 570,
    "Title": "Sudtirol (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 571,
    "Title": "Venezia / Virtus Entella (Scudetto)",
    "Section": "Serie B",
    "Type": "foil"
  },
  {
    "No": 572,
    "Title": "Venezia (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 573,
    "Title": "Virtus Entella (Squadra)",
    "Section": "Serie B",
    "Type": "-"
  },
  {
    "No": 574,
    "Title": "Albinoleffe / Alcione Milano / Arzignano / Cittadella (Scudetto)",
    "Section": "Serie C - Girone A",
    "Type": "foil"
  },
  {
    "No": 575,
    "Title": "Albinoleffe / Alcione Milano (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 576,
    "Title": "Arzignano / Cittadella (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 577,
    "Title": "Dolomiti / Giana Erminio / Inter U23 / Vicenza (Scudetto)",
    "Section": "Serie C - Girone A",
    "Type": "foil"
  },
  {
    "No": 578,
    "Title": "Dolomiti / Giana Erminio (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 579,
    "Title": "Inter U23 / Vicenza (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 580,
    "Title": "Lecco / Lumezzane / Novara / Ospitaletto (Scudetto)",
    "Section": "Serie C - Girone A",
    "Type": "foil"
  },
  {
    "No": 581,
    "Title": "Lecco / Lumezzane (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 582,
    "Title": "Novara / Ospitaletto (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 583,
    "Title": "Pergolettese / Pro Patria / Pro Vercelli / Renate (Scudetto)",
    "Section": "Serie C - Girone A",
    "Type": "foil"
  },
  {
    "No": 584,
    "Title": "Pergolettese / Pro Patria (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 585,
    "Title": "Pro Vercelli / Renate (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 586,
    "Title": "Trento / Triestina / Union Brescia / Virtus Veron (Scudetto)",
    "Section": "Serie C - Girone A",
    "Type": "foil"
  },
  {
    "No": 587,
    "Title": "Trento / Triestina (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 588,
    "Title": "Union Brescia / Virtus Veron (Squadra)",
    "Section": "Serie C - Girone A",
    "Type": "-"
  },
  {
    "No": 589,
    "Title": "Arezzo / Ascoli / Bra / Campobasso (Scudetto)",
    "Section": "Serie C - Girone B",
    "Type": "foil"
  },
  {
    "No": 590,
    "Title": "Arezzo / Ascoli (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 591,
    "Title": "Bra / Campobasso (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 592,
    "Title": "Carpi / Forli / Gubbio / Guidonia Montecelio (Scudetto)",
    "Section": "Serie C - Girone B",
    "Type": "foil"
  },
  {
    "No": 593,
    "Title": "Carpi / Forli (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 594,
    "Title": "Gubbio / Guidonia Montecelio (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 595,
    "Title": "Juventus / Livorno / Perugia / Pianese (Scudetto)",
    "Section": "Serie C - Girone B",
    "Type": "foil"
  },
  {
    "No": 596,
    "Title": "Juventus / Livorno (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 597,
    "Title": "Perugia / Pianese (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 598,
    "Title": "Pineto / Pontedera / Ravenna / Rimini (Scudetto)",
    "Section": "Serie C - Girone B",
    "Type": "foil"
  },
  {
    "No": 599,
    "Title": "Pineto / Pontedera (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 600,
    "Title": "Ravenna / Rimini (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 601,
    "Title": "Sambenedettese / Ternana / Torres / Vis Pesaro (Scudetto)",
    "Section": "Serie C - Girone B",
    "Type": "foil"
  },
  {
    "No": 602,
    "Title": "Sambenedettese / Ternana (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 603,
    "Title": "Torres / Vis Pesaro (Squadra)",
    "Section": "Serie C - Girone B",
    "Type": "-"
  },
  {
    "No": 604,
    "Title": "Atalanta U23 / Cerignola / Picerno / Benevento (Scudetto)",
    "Section": "Serie C - Girone C",
    "Type": "foil"
  },
  {
    "No": 605,
    "Title": "Atalanta U23 / Cerignola (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 606,
    "Title": "Picerno / Benevento (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 607,
    "Title": "Casarano / Casertana / Catania / Cavese (Scudetto)",
    "Section": "Serie C - Girone C",
    "Type": "foil"
  },
  {
    "No": 608,
    "Title": "Casarano / Casertana (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 609,
    "Title": "Catania / Cavese (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 610,
    "Title": "Cosenza / Crotone / Foggia / Giugliano (Scudetto)",
    "Section": "Serie C - Girone C",
    "Type": "foil"
  },
  {
    "No": 611,
    "Title": "Cosenza / Crotone (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 612,
    "Title": "Foggia / Giugliano (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 613,
    "Title": "Latina / Monopoli / Potenza / Salernitana (Scudetto)",
    "Section": "Serie C - Girone C",
    "Type": "foil"
  },
  {
    "No": 614,
    "Title": "Latina / Monopoli (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 615,
    "Title": "Potenza / Salernitana (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 616,
    "Title": "Siracusa / Sorrento / Altamura / Trapani (Scudetto)",
    "Section": "Serie C - Girone C",
    "Type": "foil"
  },
  {
    "No": 617,
    "Title": "Siracusa / Sorrento (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": 618,
    "Title": "Altamura / Trapani (Squadra)",
    "Section": "Serie C - Girone C",
    "Type": "-"
  },
  {
    "No": "CEL1",
    "Title": "Sticker CEL1",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL2",
    "Title": "Sticker CEL2",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL3",
    "Title": "Sticker CEL3",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL4",
    "Title": "Sticker CEL4",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL5",
    "Title": "Sticker CEL5",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL6",
    "Title": "Sticker CEL6",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL7",
    "Title": "Sticker CEL7",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL8",
    "Title": "Sticker CEL8",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL9",
    "Title": "Sticker CEL9",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL10",
    "Title": "Sticker CEL10",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL11",
    "Title": "Sticker CEL11",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL12",
    "Title": "Sticker CEL12",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL13",
    "Title": "Sticker CEL13",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL14",
    "Title": "Sticker CEL14",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL15",
    "Title": "Sticker CEL15",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL16",
    "Title": "Sticker CEL16",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL17",
    "Title": "Sticker CEL17",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL18",
    "Title": "Sticker CEL18",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL19",
    "Title": "Sticker CEL19",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL20",
    "Title": "Sticker CEL20",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL21",
    "Title": "Sticker CEL21",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL22",
    "Title": "Sticker CEL22",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL23",
    "Title": "Sticker CEL23",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL24",
    "Title": "Sticker CEL24",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL25",
    "Title": "Sticker CEL25",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL26",
    "Title": "Sticker CEL26",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL27",
    "Title": "Sticker CEL27",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL28",
    "Title": "Sticker CEL28",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL29",
    "Title": "Sticker CEL29",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL30",
    "Title": "Sticker CEL30",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL31",
    "Title": "Sticker CEL31",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL32",
    "Title": "Sticker CEL32",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL33",
    "Title": "Sticker CEL33",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL34",
    "Title": "Sticker CEL34",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL35",
    "Title": "Sticker CEL35",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL36",
    "Title": "Sticker CEL36",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL37",
    "Title": "Sticker CEL37",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL38",
    "Title": "Sticker CEL38",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL39",
    "Title": "Sticker CEL39",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL40",
    "Title": "Sticker CEL40",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL41",
    "Title": "Sticker CEL41",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL42",
    "Title": "Sticker CEL42",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL43",
    "Title": "Sticker CEL43",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL44",
    "Title": "Sticker CEL44",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL45",
    "Title": "Sticker CEL45",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL46",
    "Title": "Sticker CEL46",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL47",
    "Title": "Sticker CEL47",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL48",
    "Title": "Sticker CEL48",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL49",
    "Title": "Sticker CEL49",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL50",
    "Title": "Sticker CEL50",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL51",
    "Title": "Sticker CEL51",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL52",
    "Title": "Sticker CEL52",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL53",
    "Title": "Sticker CEL53",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL54",
    "Title": "Sticker CEL54",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL55",
    "Title": "Sticker CEL55",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL56",
    "Title": "Sticker CEL56",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL57",
    "Title": "Sticker CEL57",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL58",
    "Title": "Sticker CEL58",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL59",
    "Title": "Sticker CEL59",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "CEL60",
    "Title": "Sticker CEL60",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K1",
    "Title": "Sticker K1",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K2",
    "Title": "Sticker K2",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K3",
    "Title": "Sticker K3",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K4",
    "Title": "Sticker K4",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K5",
    "Title": "Sticker K5",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "K6",
    "Title": "Sticker K6",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY1",
    "Title": "Sticker STY1",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY2",
    "Title": "Sticker STY2",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY3",
    "Title": "Sticker STY3",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY4",
    "Title": "Sticker STY4",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY5",
    "Title": "Sticker STY5",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY6",
    "Title": "Sticker STY6",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY7",
    "Title": "Sticker STY7",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY8",
    "Title": "Sticker STY8",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY9",
    "Title": "Sticker STY9",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY10",
    "Title": "Sticker STY10",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY11",
    "Title": "Sticker STY11",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY12",
    "Title": "Sticker STY12",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY13",
    "Title": "Sticker STY13",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY14",
    "Title": "Sticker STY14",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY15",
    "Title": "Sticker STY15",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY16",
    "Title": "Sticker STY16",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY17",
    "Title": "Sticker STY17",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY18",
    "Title": "Sticker STY18",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY19",
    "Title": "Sticker STY19",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "STY20",
    "Title": "Sticker STY20",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG1",
    "Title": "Sticker UPG1",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG2",
    "Title": "Sticker UPG2",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG3",
    "Title": "Sticker UPG3",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG4",
    "Title": "Sticker UPG4",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG5",
    "Title": "Sticker UPG5",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG6",
    "Title": "Sticker UPG6",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG7",
    "Title": "Sticker UPG7",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG8",
    "Title": "Sticker UPG8",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG9",
    "Title": "Sticker UPG9",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG10",
    "Title": "Sticker UPG10",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG11",
    "Title": "Sticker UPG11",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG12",
    "Title": "Sticker UPG12",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG13",
    "Title": "Sticker UPG13",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG14",
    "Title": "Sticker UPG14",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG15",
    "Title": "Sticker UPG15",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG16",
    "Title": "Sticker UPG16",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG17",
    "Title": "Sticker UPG17",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG18",
    "Title": "Sticker UPG18",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG19",
    "Title": "Sticker UPG19",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG20",
    "Title": "Sticker UPG20",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG21",
    "Title": "Sticker UPG21",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG22",
    "Title": "Sticker UPG22",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG23",
    "Title": "Sticker UPG23",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG24",
    "Title": "Sticker UPG24",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG25",
    "Title": "Sticker UPG25",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG26",
    "Title": "Sticker UPG26",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG27",
    "Title": "Sticker UPG27",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG28",
    "Title": "Sticker UPG28",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG29",
    "Title": "Sticker UPG29",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG30",
    "Title": "Sticker UPG30",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG31",
    "Title": "Sticker UPG31",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG32",
    "Title": "Sticker UPG32",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG33",
    "Title": "Sticker UPG33",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG34",
    "Title": "Sticker UPG34",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG35",
    "Title": "Sticker UPG35",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG36",
    "Title": "Sticker UPG36",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG37",
    "Title": "Sticker UPG37",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG38",
    "Title": "Sticker UPG38",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG39",
    "Title": "Sticker UPG39",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG40",
    "Title": "Sticker UPG40",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG41",
    "Title": "Sticker UPG41",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG42",
    "Title": "Sticker UPG42",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG43",
    "Title": "Sticker UPG43",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG44",
    "Title": "Sticker UPG44",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG45",
    "Title": "Sticker UPG45",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG46",
    "Title": "Sticker UPG46",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG47",
    "Title": "Sticker UPG47",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG48",
    "Title": "Sticker UPG48",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG49",
    "Title": "Sticker UPG49",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG50",
    "Title": "Sticker UPG50",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG51",
    "Title": "Sticker UPG51",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG52",
    "Title": "Sticker UPG52",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG53",
    "Title": "Sticker UPG53",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG54",
    "Title": "Sticker UPG54",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG55",
    "Title": "Sticker UPG55",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG56",
    "Title": "Sticker UPG56",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG57",
    "Title": "Sticker UPG57",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG58",
    "Title": "Sticker UPG58",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG59",
    "Title": "Sticker UPG59",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG60",
    "Title": "Sticker UPG60",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG61",
    "Title": "Sticker UPG61",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG62",
    "Title": "Sticker UPG62",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG63",
    "Title": "Sticker UPG63",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG64",
    "Title": "Sticker UPG64",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG65",
    "Title": "Sticker UPG65",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG66",
    "Title": "Sticker UPG66",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG67",
    "Title": "Sticker UPG67",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG68",
    "Title": "Sticker UPG68",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG69",
    "Title": "Sticker UPG69",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG70",
    "Title": "Sticker UPG70",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG71",
    "Title": "Sticker UPG71",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG72",
    "Title": "Sticker UPG72",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG73",
    "Title": "Sticker UPG73",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG74",
    "Title": "Sticker UPG74",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG75",
    "Title": "Sticker UPG75",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG76",
    "Title": "Sticker UPG76",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG77",
    "Title": "Sticker UPG77",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG78",
    "Title": "Sticker UPG78",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG79",
    "Title": "Sticker UPG79",
    "Section": "-",
    "Type": "-"
  },
  {
    "No": "UPG80",
    "Title": "Sticker UPG80",
    "Section": "-",
    "Type": "-"
  }
];

const STICKER_INDEX = {};
const STICKER_IDS = STICKER_CATALOG.map(item => {
  const id = String(item.No);
  STICKER_INDEX[id] = item;
  return id;
});

// Already loaded, exposed as a promise for API compatibility.
const catalogReady = Promise.resolve(STICKER_CATALOG);
