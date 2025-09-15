# Daily Sunset Notifier

Sends a discord message to a specified Discord channel showing the sunset quality. A food reminder to go outside.

## How to run

Setup cron job that runs the following command:

```bash
node --env-file=.env index.js
```

## Env Vars

- `DISCORD_TOKEN`: Discord Bot Token
- `DISCORD_ADMIN_CHANNEL_ID`: Discord Channel ID
- `SUNSET_API_KEY`: API Key from [sunsethue](https://sunsethue.com/dev-api/portal)

## TODO

- [ ] Only get notified when sunset is actually good
- [ ] (MAYBE) Get reminder an hour before sunset
- [ ] Better formatted messages + colors
- [ ] Cross reference other APIs
