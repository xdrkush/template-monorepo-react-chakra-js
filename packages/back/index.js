console.log('Hello je suis le Back !!!')

const app = require('express')()

app.get('/test', (req, res) => {
    res.json({message: 'Test OK !'})
})

app.listen(3030, () => {
    console.log('Votre api est run sur le port ' + 3030)
})