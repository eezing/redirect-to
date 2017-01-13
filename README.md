# redirect-to

A micro service to redirect all GET requests to target URL defined in **process.env.REDIRECT_URL**

The intnended use case is to redirect users to root when landing on the www subdomain.

**Attention:**

- Uses redirect code 301 (Moved Permanently)
- Only GET requests

## Get Started

**Run cmd:** ``` $ REDIRECT_URL=https://target-domain.com node index ```

**Result:** localhost:3000/about --> https://target-domain.com/about
