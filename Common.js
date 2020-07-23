/**
* Callback for rendering the homepage card.
* @return {CardService.Card} The card to show to the user.
*/
function onHomepage(e) {
  console.log(e);
  return createHomeCard(true);
}


function createHomeCard(isHomepage) {
  // Explicitly set the value of isHomepage as false if null or undefined.
  if (!isHomepage) {
    isHomepage = false;
  }
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
  
  return card.build();
}

/**
* Callback for the "Create team" button.
* @param {Object} e The event object, documented {@link
*     https://developers.google.com/gmail/add-ons/concepts/actions#action_event_objects
*     here}.
* @return {CardService.ActionResponse} The action response to apply.
*/
function createTeam(e) {
  console.log(e);
  var teamName = e.formInput.team_name;
  console.log(e.formInput);
  
  var requestId = Math.floor(Math.random() * 1000000000000);
  
  var restrictions = {
    domainUsersOnly: false,
    driveMembersOnly: false
  }
  
  var capabilities = {
    retrictions: restrictions
  }
  
  var resource = {"name": teamName};
  
  Drive.Teamdrives.insert(resource, requestId)
}
