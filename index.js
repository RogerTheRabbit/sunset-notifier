import discord from "./discord/discord.js";

fetch(
  `https://api.sunsethue.com/forecast?latitude=${process.env.LATITUDE}&longitude=${process.env.LONGITUDE}&days=1`,
  {
    headers: { "x-api-key": process.env.SUNSET_API_KEY },
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const sunset = data.data.filter((data) => data["type"] === "sunset")[0];
    const message = `Quality: ${sunset["quality_text"]} (${sunset["quality"]})
        Time: ${new Date(sunset["time"]).toLocaleString("en-US", {
          timeZone: process.env.TIMEZONE,
        })}`;
    discord.sendMessage({
      title: "SUNSET",
      description: message,
    });
  })
  .catch((error) => {
    discord.sendMessage({
      title: "SUNSET - FAILURE",
      description: error,
    });
  });
