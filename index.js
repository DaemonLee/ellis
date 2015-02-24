var relay = require('irc-steam-relay');

relay({
  //username: '',
  //password: '',
  //authCode: '', NEEDED ONLY FOR FIRST LONG IN.
  chatroom: '103582791437120964',
  server: 'irc.escapecraft.net',
  port: '31337',
  nick: 'ellis',
  channel: '#steam'//,

  //msgFormat: /* how to format messages from Steam on IRC, for example '<%s> %s'. Defaults to '\u000302%s\u000f: %s' (blue nick) */,
  //msgFormatGame: /* same as above, but for in-game users. Defaults to msgFormat if provided, otherwise '\u000303%s\u000f: %s' (green nick) */,
  //emoteFormat: /* same as msgFormat, but for emote messages (/me foo). Defaults to '\u000302%s %s' (all blue) */,
  //emoteFormatGame: /* same as above, for for in-game users. Defaults to emoteFormat if provided, otherwise '\u000303%s %s' (all green) */
});
