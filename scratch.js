//function createTeam(e) {
//  console.log(e);
//  // Get the text that was shown in the current cat image. This was passed as a
//  // parameter on the Action set for the button.
//  var text = e.parameters.text;
//  
//  var service = getOAuthService();
////  service.reset();
//  console.log(service.hasAccess());
//  if (service.hasAccess()) {
//    console.log('Yay, I happened!');
//    var newSharedDriveName = 'Jeffs Team';
//    var id = Math.floor(Math.random() * 1000000000000);
//    var url = 'https://www.googleapis.com/drive/v3/drives?requestId=' + id + '&key=' + CREDENTIALS.api_key;
//    
//    var body = {
//      "name": newSharedDriveName,
//    }
//    var params = {
//      headers: {
//      Authorization: 'Bearer ' + service.getAccessToken()
//      },
//      method: 'post',
//      payload: JSON.stringify(body),
//      contentType: 'application/json',
//      muteHttpExceptions: true
//    };
//    var response = UrlFetchApp.fetch(url, params).getContentText();
//    console.log('response: ' + response);
//  }
//  
//  // The isHomepage parameter is passed as a string, so convert to a Boolean.
//  var isHomepage = e.parameters.isHomepage === 'true';
//  
//  // Create a new team drive with the name entered
//
//  
//  // Create an action response that instructs the add-on to replace
//  // the current card with the new one.
////  var navigation = CardService.newNavigation()
////  .updateCard(card);
////  var actionResponse = CardService.newActionResponseBuilder()
////  .setNavigation(navigation);
////  return actionResponse.build();
//}


