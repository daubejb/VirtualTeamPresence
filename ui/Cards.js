var cards = {
  createTeam: function () {
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

    var footer = CardService.newFixedFooter()
      .setPrimaryButton(CardService.newTextButton()
        .setText('feedback + issues')
        .setOpenLink(CardService.newOpenLink()
          .setUrl('https://github.com/daubejb/VirtualTeamPresence/issues/new')));

    var section = CardService.newCardSection()
      .addWidget(textInput)
      .addWidget(buttonSet);

    var card = CardService.newCardBuilder()
      .addSection(section)
      .setFixedFooter(footer)

    return card;
  }

}