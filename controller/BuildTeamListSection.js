function buildTeamListSection(myTeams) {

  var teamsSection = CardService.newCardSection();

  if (myTeams == null) {
    teamsSection.addWidget(CardService.newTextParagraph().setText('You have no teams. Click `CREATE NEW TEAM`'));

  } else {

    myTeams.forEach(function (team) {
      var clickAction = CardService.newAction()
        .setFunctionName('navigateToCard')
        .setLoadIndicator(CardService.LoadIndicator.SPINNER)
        .setParameters({ team: team.name });

      var teamSummaryWidget = CardService.newKeyValue()
        .setContent(team.name)
        .setOnClickAction(clickAction);
      teamsSection.addWidget(teamsSummaryWidget)
    });
  }
  return teamsSection;
}