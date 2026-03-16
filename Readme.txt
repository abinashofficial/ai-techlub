//docker build -t ai-techlub .
//docker run -p 80:80 ai-techlub



if you use only vercel:-
vercel.json ->
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}