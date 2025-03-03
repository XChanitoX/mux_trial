require("dotenv").config();
const Mux = require("@mux/mux-node");

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

const run = async () => {
  const stream = await mux.video.liveStreams.create({
    playback_policy: ["public"],
    new_asset_settings: {
      playback_policy: ["public"],
    },
  });
  console.log(stream);
};

run();
