const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const START_URL = 'http://www.pariserve.com';
const MAX_PAGES = 100; // Sécurité pour pas qu'il tourne à l'infini

// Ensemble pour stocker les pages uniques trouvées
const foundUrls = new Set();
// File d'attente des pages à visiter
const queue = [START_URL];
// Pages déjà visitées pour ne pas tourner en rond
const visited = new Set();

async function crawl() {
  console.log(`🚀 Démarrage du Crawler Profond sur ${START_URL}...`);

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    // On prend la prochaine URL dans la file
    let currentUrl = queue.shift();

    // Nettoyage de l'URL pour éviter les doublons (http vs https, / à la fin)
    if (currentUrl.endsWith('/')) currentUrl = currentUrl.slice(0, -1);
    
    if (visited.has(currentUrl)) continue;
    visited.add(currentUrl);

    try {
      console.log(`Processing (${visited.size}/${MAX_PAGES}): ${currentUrl}`);
      
      // On télécharge la page
      const response = await axios.get(currentUrl, { timeout: 5000 });
      const html = response.data;
      const $ = cheerio.load(html);

      // On cherche TOUS les liens
      $('a').each((index, element) => {
        let href = $(element).attr('href');

        if (href) {
          // 1. Nettoyage des liens bizarres de 1997
          href = href.split('#')[0]; // Enlever les ancres
          
          // 2. Gestion des URLs relatives vs absolues
          let absoluteUrl = '';
          if (href.startsWith('http')) {
            absoluteUrl = href;
          } else if (href.startsWith('/')) {
            absoluteUrl = 'http://www.pariserve.com' + href;
          } else {
            // Lien relatif simple (ex: "louvre.htm")
            // Il faut le recoller au dossier parent, mais pour faire simple on le colle à la racine ici
            absoluteUrl = 'http://www.pariserve.com/' + href;
          }

          // 3. On ne garde que les liens internes de pariserve.com
          if (absoluteUrl.includes('pariserve.com') && !absoluteUrl.includes('mailto:')) {
            
            // On ajoute à la liste des résultats si c'est une page HTML
            if (absoluteUrl.match(/\.(html|htm|asp|php)$/i) || absoluteUrl.endsWith('/')) {
              // Si on ne l'a pas déjà, on l'ajoute à la liste ET à la file d'attente
              if (!foundUrls.has(absoluteUrl)) {
                foundUrls.add(absoluteUrl);
                queue.push(absoluteUrl);
              }
            }
          }
        }
      });

    } catch (error) {
      // Ignorer les erreurs 404 ou timeouts, c'est normal sur un vieux site
      // console.log(`   ❌ Erreur sur ${currentUrl}`);
    }
  }

  console.log('-----------------------------------');
  console.log(`✅ FINI ! ${foundUrls.size} pages trouvées.`);
  
  // Conversion en tableau propre
  const finalLinks = Array.from(foundUrls).sort();
  console.log(finalLinks);

  fs.writeFileSync('old-urls.json', JSON.stringify(finalLinks, null, 2));
  console.log('💾 Sauvegardé dans old-urls.json');
}

crawl();