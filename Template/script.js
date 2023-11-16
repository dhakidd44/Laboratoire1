// Fonction asynchrone pour récupérer et afficher les données depuis un endpoint
async function fetchData(url, containerId, listId) {
    try {
        // Effectuer une requête GET vers l'endpoint spécifié
        const response = await fetch(url);

        // Extraire les données JSON de la réponse
        const data = await response.json();

        // Récupérer les éléments HTML container et list par leurs IDs
        const container = document.getElementById(containerId);
        const list = document.getElementById(listId);

        // Effacer le contenu précédent de la liste
        list.innerHTML = '';

        // Parcourir les données et créer un élément de liste pour chaque élément
        data.forEach(item => {
            // Créer un nouvel élément de liste
            const listItem = document.createElement('li');

            // Supposons que chaque objet a une propriété 'name' à afficher
            listItem.textContent = item.name;

            // Ajouter l'élément de liste à la liste
            list.appendChild(listItem);
        });

        // Ajouter la liste au conteneur
        container.appendChild(list);
    } catch (error) {
        // Gérer les erreurs, afficher dans la console pour le débogage
        console.error('Erreur de récupération des données:', error);
    }
}

// Attendre que la fenêtre soit entièrement chargée avant d'exécuter le code
// Appeler fetchData pour chaque endpoint avec les IDs des conteneurs HTML correspondants
window.onload = function () {
    fetchData('http://localhost:8000/restaurants/get_restaurants_json/', 'restaurants-container', 'restaurants-list');
    fetchData('http://localhost:8000/dishes/get_dishes_json/', 'dishes-container', 'dishes-list');
    fetchData('http://localhost:8000/servers/get_servers_json/', 'servers-container', 'servers-list');
};
