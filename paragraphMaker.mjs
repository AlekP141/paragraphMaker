import clipboardy from 'clipboardy';

// The input text
let text = `Les graines de sésame sont un trésor nutritif et culinaire, appréciées depuis des millénaires pour leurs nombreux bienfaits. Riches en protéines, en acides gras essentiels, et en vitamines, elles ajoutent non seulement une saveur délicate et une texture croquante aux plats, mais contribuent également à une alimentation équilibrée. Notre riche gamme de produits :graines, pâtes, poudres, sésames assaisonnées, farines, etc.



Le sésame noir offre de nombreux bienfaits. Il possède des propriétés antioxydantes et est riche en fibres, ce qui aide à réduire le cholestérol et favorise le transit intestinal. De plus, ces graines spéciales sont réputées pour stimuler la mémoire.
Pâte de sésame: Les graines de sésame grillées sont moulues et pétries avec soin jusqu'à obtenir une pâte lisse et homogène.
Sésame assaisonné à l'algue japonaise d’AOSA:  Au Japon, les algues comestibles, comme l'AOSA, sont célébrées depuis des millénaires pour leur goût umami et leurs bienfaits. L'AOSA, riche en vitamines C et A et sans calories, est utilisé dans la composition de nombreux produits alimentaires. Depuis le IVe siècle, les communautés côtières récoltent des algues, reconnues pour leurs minéraux essentiels et leur importance culturelle. Les algues sont un pilier de la gastronomie japonaise.
Farine de Soja. Les fèves de soja, souvent appelées « viande des champs », sont soigneusement rôties puis moulues en une poudre fine. Après avoir été décortiquées, elles offrent une texture particulièrement lisse.`;

// Split the text into paragraphs based on the newline characters
let paragraphs = text.split(/\n+/);

// Wrap each paragraph in <p> tags and join them without gaps
let wrappedText = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

// Output the result
console.log(wrappedText);
clipboardy.writeSync(wrappedText);

console.log('Text copied to clipboard successfully!');
