const widget = document.getElementById("widget");
console.log(widget);

window.addEventListener("load", function () {
	widget.classList.remove("no-widget");
	widget.classList.add("widget");
});

// Cette fonction est utilisée chaque fois que nous voulons désactiver un
// widget personnalisé. Elle prend un paramètre
// select : le nœud DOM avec la classe select à désactiver
function deactivateSelect(select) {
	// Si le widget n'est pas actif, il n'y a rien à faire
	if (!select.classList.contains("active")) return;
	// Nous devons obtenir la liste des options pour le widget personnalisé
	var optList = select.querySelector(".optList");
	// Nous cachons la liste des options
	optList.classList.add("hidden");
	// et nous désactivons le widget personnalisé lui-même
	select.classList.remove("active");
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut (des)activer le widget
// Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` à activer
// selectList : la liste de tous les nœuds DOM de la classe `select`
function activeSelect(select, selectList) {
	// Si le widget est déjà actif il n'y a rien à faire
	if (select.classList.contains("active")) return;
	// Nous devons désactiver tous les widgets personnalisés
	// comme la fonction deactivateSelect remplit toutes les fonctionnalités de la
	// fonction de rappel forEach, nous l'utilisons directement sans utiliser
	// une fonction anonyme intermédiaire.
	selectList.forEach(deactivateSelect);
	// Et nous activons l'état du widget donné
	// select.classList.add("active");
}

// Cette fonction sera utilisée chaque fois que l'utilisateur veut enrouler/dérouler la
// liste des options
// Elle prend un paramètre :
// select : le nœud DOM de la liste à basculer
function toggleOptList(select) {
	// La liste est prise à partir du widget
	var optList = select.querySelector(".optList");
	// Nous changeons la classe de la liste pour l'enrouler/dérouler
	optList.classList.toggle("hidden");
	select.classList.toggle("active");
}

// Cett fonction sera utilisée chaque fois qu'il faut mettre en surbrillance
// une option.  Elle prend deux paramètres :
// select : le nœud DOM de la classe `select`
//          contenant l'option à mettre en surbrillance
// option : le nœud DOM de la classe `option` à mettre en surbrillance
function highlightOption(select, option) {
	// Obtenir la liste de toutes les options disponibles pour l'élémént sélectionné
	var optionList = select.querySelectorAll(".option");
	// Supprimer la surbrillance pour toutes les options
	optionList.forEach(function (other) {
		other.classList.remove("highlight");
	});
	// Mettre en surbrillance l'option correcte
	option.classList.add("highlight");
}

// Nous lions le widget aux événements dès le chargement du document
window.addEventListener("load", function () {
	var selectList = document.querySelectorAll(".select");
	// Chaque widget personnalisé doit être initialisé
	selectList.forEach(function (select) {
		// de même que tous les éléments `option`
		var optionList = select.querySelectorAll(".option");
		// Chaque fois que l'utilisateur passe le pointeur de souris
		// sur une option, nous mettons en surbrillance la dite option
		optionList.forEach(function (option) {
			option.addEventListener("mouseover", function () {
				// Note : les variables `select` et `option` sont des "closures"
				// disponibles dans la portée de notre appel de fonction.
				highlightOption(select, option);
			});
		});
		// Chaque fois que l'utilisateur clique sur un élément personnalisé
		select.addEventListener("click", function () {
			// Note : la variable `select` est une "closure"
			// available dans la portée de notre appel de fonction.
			// Nous basculons la visibilité de la liste des options
			toggleOptList(select);
		});
		// Dans le cas où le widget obtient le focus
		// Le widget obtient le focus chaque fois que l'utilisateur clique dessus
		// ou presse la touche Tab pour avoir accès au widget
		select.addEventListener("focus", function () {
			// Note : les variable `select` et `selectList` sont des "closures"
			// disponibles dans la portée de notre appel de fonction.
			// Nous activons le widget
			activeSelect(select, selectList);
		});
		// Dans le cas où le widget perd le focus
		select.addEventListener("blur", function () {
			// Note : la variable `select` est une "closure"
			// disponible dans la portée de notre appel de fonction.
			// Nous désactivons le widget
			deactivateSelect(select);
		});
	});
});
// Cette fonction met à jour la valeur affichée et la synchronise avec celle
// du widget natif. Elle prend deux paramètres :
// select : le nœud DOM de la classe `select` contenant la valuer à mettre à jour
// index  : l'index de la valeur choisie
function updateValue(select, index) {
	// Nous devons obtenir le widget natif correspondant au widget personnalisé
	// Dans notre exemple, le widget natif est un parent du widget personnalisé
	var nativeWidget = select.previousElementSibling;
	// Nou devons aussi obtenir la valeur de remplacement du widget personnalisé
	var value = select.querySelector(".value");
	// Et nous avons besoin de toute la liste des options
	var optionList = select.querySelectorAll(".option");
	// Nous nous assurons qu'aucune option n'est sélectionnée
	optionList.forEach(function (other) {
		other.setAttribute("aria-selected", "false");
	});
	// Nous nous assurons que l'option choisie est sélectionnée
	optionList[index].setAttribute("aria-selected", "true");
	// Nous définissons l'index choisi à l'index du choix
	nativeWidget.selectedIndex = index;
	// Nous mettons à jour la valeur de remplacement en accord
	value.innerHTML = optionList[index].innerHTML;
	// Et nous mettons en surbrillance l'option correspondante du widget personnalisé
	highlightOption(select, optionList[index]);
}

// Cette fonction renvoie l'index courant dans le widget natif
// Elle prend un paramètre :
// select : le nœud DOM avec la classe `select` relative au widget natif
function getIndex(select) {
	// Nous avons besoin d'avoir accès au widget natif pour le widget personnalisé
	// Dans notre exemple, le widget natif est un parent du widget personnalisé

	var nativeWidget = select.previousElementSibling;
	return nativeWidget.selectedIndex;
}

// Nous lions le widget aux événements dès le chargement du document
window.addEventListener("load", function () {
	var selectList = document.querySelectorAll(".select");
	// Chaque widget personnalisé doit être initialisé
	selectList.forEach(function (select) {
		var optionList = select.querySelectorAll(".option"),
			selectedIndex = getIndex(select);
		// Nous rendons le widget personnalisé capable d'avoir le focus
		select.tabIndex = 0;
		// Nous faisons en sorte que le widget natif ne puisse plus avoir le focus
		select.previousElementSibling.tabIndex = -1;
		// Nous nous assurons que la valeur sélectionnée par défaut est bien affichée
		updateValue(select, selectedIndex);
		// Chaque fois que l'utilisateur clique sur une option, nous mettons à
		// jour la valeur en accord
		optionList.forEach(function (option, index) {
			option.addEventListener("click", function () {
				updateValue(select, index);
			});
		});
		// Chaque fois que l'utilisateur utilise le clavier sur un widget
		// avec focus, les valeurs sont mises à jour en accord
		select.addEventListener("keyup", function (e) {
			var length = optionList.length,
				index = getIndex(select);
			// Quand l'utilisateur presse ⇓, nous allons à l'option suivante
			if (e.keyCode === 40 && index < length - 1) {
				index++;
			}
			// Quand l'utilisateur presse ⇑, nous sautons à l'option suivante
			if (e.keyCode === 38 && index > 0) {
				index--;
			}
			// Quand l'utilisateur presse enter, nous mettons à jour la valeur en accord
			if (e.keyCode === 13) {
				var optList = select.querySelector(".optList");
				// Nous changeons la classe de la liste pour l'enrouler/dérouler
				optList.classList.toggle("hidden");
				select.classList.toggle("active");
			}
			updateValue(select, index);
		});
	});
});
