curl -X POST -d '
{
"username": "yoshi",
"text": "i have not paid taxes since 2006"
}
' 'https://kaaro-intern-challenge.firebaseio.com/comments.json'

curl 'https://kaaro-intern-challenge.firebaseio.com/comments.json'
