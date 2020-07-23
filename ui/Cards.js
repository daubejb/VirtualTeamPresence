var cards = {
  homeCard: function () {
    var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
        .setText('feedback + issues')
        .setOpenLink(CardService.newOpenLink()
          .setUrl('https://github.com/daubejb/VirtualTeamPresence/issues/new')
        )
      );

    var createNewTeamAction = CardService.newAction()
      .setFunctionName('navigateToCard')
      .setParameters({ 'navigation': 'createNewTeam' });

    var button = CardService.newTextButton()
      .setText('Create new team')
      .setOnClickAction(createNewTeamAction)
      .setTextButtonStyle(CardService.TextButtonStyle.TEXT);

    var buttonSet = CardService.newButtonSet()
      .addButton(button);

    var section = CardService.newCardSection()
      .addWidget(buttonSet);

    var card = CardService.newCardBuilder()
      .addSection(section)
      .setFixedFooter(footer);

    return card;
  },
  createNewTeam: function () {
    var action = CardService.newAction()
      .setFunctionName('createTeam')
      .setParameters({});

    var button = CardService.newTextButton()
      .setText('Create team')
      .setOnClickAction(action)
      .setTextButtonStyle(CardService.TextButtonStyle.TEXT);

    var buttonSet = CardService.newButtonSet()
      .addButton(button);

    var textInput = CardService.newTextInput()
      .setFieldName("team_name")
      .setTitle("Team name")
      .setHint("Razor blade team");



    var section = CardService.newCardSection()
      .addWidget(textInput)
      .addWidget(buttonSet);

    var card = CardService.newCardBuilder()
      .addSection(section)

    return card;
  }

}