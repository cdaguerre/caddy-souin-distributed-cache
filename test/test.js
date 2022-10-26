import {
  check,
  sleep
} from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    rampup: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [{
        duration: '20s',
        target: 100
      }, ],
    },
  },
};

export default function () {
  const res = http.get(`http://caddy/`);
  sleep(1)
  check(res, {
    'is status 200': (r) => r.status === 200,
    'body includes text': (r) => r.body && r.body.includes("Hello world"),
    'cache hit': (r) => r.headers.Age > -1,
  });
}
