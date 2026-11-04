# PortoCraft Backend - Railway Deployment Guide

## Environment Variables Required:
```
SUPABASE_URL=https://nykgnlqsjatyrioghrry.supabase.co
SUPABASE_ANON_KEY=sb_publishable_7zIf7YsFx3OJ2t0_Vlqmzg_VWK5wRl9
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
JWT_SECRET=<generate-secure-random-string>
OPENAI_API_KEY=<your-openai-key>
PORT=3000
NODE_ENV=production
```

## Deploy Steps:
1. Push this branch to GitHub
2. Open Railway dashboard
3. Create new service → Connect GitHub → Select riskiriski-eng/MAKE--pr
4. Add environment variables above
5. Deploy

## Post-Deployment:
- Test health endpoint: `https://<railway-url>/health`
- Test auth: `POST https://<railway-url>/api/auth/login`
- Monitor logs in Railway dashboard
