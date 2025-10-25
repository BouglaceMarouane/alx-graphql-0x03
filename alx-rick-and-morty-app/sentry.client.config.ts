import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: "https://<YOUR_SENTRY_DSN_HERE>", // Replace with DSN from Sentry dashboard
  tracesSampleRate: 1.0, // Adjust sampling for performance monitoring
});
