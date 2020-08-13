# next-boilerplate

## How run
1. create `.env.local` from copy `.env.local.example`
2. generate certificate by command and move to `server/cert/` (*localhost.key* & *localhost.crt*)
   
``` 
    openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
      -keyout localhost-privkey.pem -out localhost-cert.pem
```

## What change
1. generate favicons `public/icons`
2. change `public/logo`
3. change `public/manifest`
4. change GA_TRACKING_ID `src/utils/gtag`

