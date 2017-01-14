# redirect-to

A micro service to redirect all requests to target URL.

The intnended use case is to redirect users to root when landing on the www subdomain.

## Get Started

**Run cmd:** ``` $ REDIRECT_URL=https://target-domain.com node index ```

**Result:** localhost:3000/about --> https://target-domain.com/about

## Environment Variables

- REDIRECT_URL: target url to redirect to
- PORT: port to listen on (default 3000)
- HTTP_CODE: http status code (default 302)
