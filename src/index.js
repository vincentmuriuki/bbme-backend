/* eslint-disable import/no-named-as-default-member */
import express from 'express';

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
