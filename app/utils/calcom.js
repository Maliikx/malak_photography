// utils/calcom.js
import { Cal } from "@calcom/sdk";

const cal = new Cal({
  apiKey: process.env.CAL_API_KEY,
});

export default cal;