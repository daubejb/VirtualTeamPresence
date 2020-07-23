//function getOAuthService(user) {
//  return OAuth2.createService("Service Account")
//  .setTokenUrl('https://accounts.google.com/o/oauth2/token')
//  .setPrivateKey(CREDENTIALS.private_key)
//  .setIssuer(CREDENTIALS.client_email)
//  .setSubject('daubejb@jeffdaube.com')
//  .setPropertyStore(PropertiesService.getScriptProperties())
//  .setParam('access_type', 'offline')
//  .setScope('https://www.googleapis.com/auth/drive');
//}
//
//function reset() {
//  var service = getOAuthService();
//  service.reset();
//}
//
//
//var CREDENTIALS = {
//  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNA6kyD44zXuz/\nx37rLUt06W7atMU3Mt+Kcxt1EoPYSFxk0dIECwcxxo09/o73L1Ca0/EYApw1L71F\nIvB5nxyrq8NJwnjXCBiyLe/vrMdnM7KUNQhaPYeE6stKYd99NqpNgFxcpyV0Cdzi\nfyoUYmKSbQlZBVx2WMEa8W9pCTePrnB/jGl4BOxpDF66sTwGO+iBJK+D/XIlc7a7\n4wnsjirBN9IC/F6ha5WxG2z8c8nznJgANT6h+7CondqpoqqJKq5dhz+Tg2GiVaKc\ne3jUCX9xNOu1nuV7l0I38PuU09TBKs273Fy9u4zO0EUzmK9+qq6jX4Ez8p8izERR\ntg997r7NAgMBAAECggEAFxrkhKnQIuX9283F9gdCy8hLIAbjexcWrmnOnGEbztJI\n52vmOWJsyyVPYb9AqYcBlJFySHxy0mOw9wu7Aln2RzqyZauvJrzY26vlsKNOTck7\nxQw9Br6MeWRkyNtC7r+sbdOblS2ZQPyjkjs2qNl1tn7nYMsD4qqaCMlQ/wt04ZJZ\njsthkYquYTTuOlQZaUkjRm3FxKUac28TsAlzz5lkjdzK923HRN3LsNrNUSkJ8qP/\nXjrRWQ8dib74bzmFs983T8uJ/L7ccqCUrvd3BWGac6xndJ6cvEaW2pmMpXzaeZij\nC7rmF7AsL9IkvPbZ1oeIcj7EQDUwkzA7AvBGCeb3QQKBgQDycgiiDI3y5Zdu6L39\nkY6CUPG6J4d/3ywyfIpBCYg6oDORQrcCbfJMgH9nkRmwqi9p3LTB1CaoxbKvV9mL\nE0V+N4yek0YXUfn4dpy0ntBkJ+HHqoX8gzn8ZENwTH8aIacRrVW8nq3K7V0+xfXa\nga5tWQqM2GoNH+QzBnWASsWu5QKBgQDYeeYzhwurZLPUdtoW9ulFwun1EcXD8y4+\nv/dBmzwkJSEPu+DAjfgfb75CbCvknU5VFr2SyGi7U69oqUT3WFU88ASwGlgBrxVU\nEVihy7IlSyqwGrEo7Ax5tOK9KEDEGrpEd2jS6ar67nhX6RwdYVBOicmIvRYqKAjH\nop7e18LpyQKBgCvjqNxtGWVXWsqhJ4O3zeyZaqkgbs8fP4kEMqMDbr3uMmehhC/U\nZ4Ch4m6FPflVVa/8XFyaY0U6RNapOKCMpI/sznAGiTG/jVkFX+jytxbqgVz76bWE\nrAKcw/iYYIoCfZQdpN+4eg26Wp76hz8/Kqxw6hAFPW2S0GTMTokjABZhAoGBAK/u\nMcZCxJsgln3fsdLkDCVkCVvge8eKhVT+EmbBUJlXi40L9dbICpUR7aBx5SJBLf49\nIwh905AarP30Q1Z59Zw2vLiaUFfeAQl3p36m2zsv4ZuJtd06KdFnzrZIVoqJ5kPq\nf8iZmxmgYTGhA/Zkti1+EcoNUkwkiS4l3dPhqkjxAoGBANcWx16NsS5KvlYjwPXx\n63r+jLjHAuI3oas8txSLjnx+0mnsmpBU/ulSBU/Xw8/j5+Q4kSoDAsdGZ3KBKYzo\nr+vJlTdpbzALyHH/rQ85BKFxRkLUT9M/aPeKHaTcBvBSC8+gdRqb8go/v22/xkI5\niP8KlhZHMGChh9TxtLdxxwi5\n-----END PRIVATE KEY-----\n",
//  "client_email": "drive-creator@virtual-team-presence.iam.gserviceaccount.com",
//  "client_id": "112268328775823899237",
//  "user_email": "daubejb@jeffdaube.com",
//  "api_key": "AIzaSyAfT_qUG_xpqz24wWtYckHMMqCsAcGpYmc"
//};