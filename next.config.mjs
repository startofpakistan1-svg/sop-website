/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    // Force https for a year, including subdomains.
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    // Stop other sites embedding this one in an iframe (clickjacking).
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    // Don't let the browser guess file types.
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Send the domain, not the full URL, when visitors click away.
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Nothing on this site needs a camera, mic or location.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    // Keep cross-origin resource sharing sane.
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig = {
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Images and icons never change once published — cache them hard.
        source: "/:all*(svg|png|jpg|jpeg|webp|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
