import Mux from '@mux/mux-node';
import dotenv from 'dotenv';

dotenv.config();

const { Video, Data } = new Mux();

// assume process.env.MUX_TOKEN_ID and process.env.MUX_TOKEN_SECRET contain your credentials
const muxClient = new Mux(); // Success!

const assets = Video.Assets.get('5CY00Lk00omn5zaf3E6B6UxFR9Gi02CiBKBtptFT02Owvio')
  .then(results => {
    console.log(results.recording_times);
  })
  .catch(error => {
    console.warn(error);
  });
