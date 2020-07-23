function navigateToCard(e) {
  var destinationCardName = e.parameters.navigation;

  switch (destinationCardName) {
    case 'createNewTeam': var card = cards.createNewTeam().build();
  };

  var nav = CardService.newNavigation().pushCard(card);
  return CardService.newActionResponseBuilder()
    .setNavigation(nav)
    .build();
}