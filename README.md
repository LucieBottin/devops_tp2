# TP2 Devops

Pour ce TP il était question de créer une api avec l'output du TP précédent et de configuer une GitHub action afin de push une nouvelle image docker à chaque commit du code dans le repo. 

### Etape 1 : Création de l'api
Pour cela j'ai créé une api en JavaScript qui permet de donner les résultats météorologiques à une latitude et une longitude données en utilisant Express. 

Cependant, je n'ai pas réussi à récupérer les varibales d'environnements donc je les ai placées en brut dans le code. Pour lancer l'api il faut lancer :
```
node api.js 240aa650f4db4e154a07d0459c30a347
```

### Etape 2 : Github action

A l'aide d'un fichier .yaml j'ai tenté de réaliser la GitHub action mais peu importe ce que j'ai pu essayer, il me provient toujours la même erreur au moment de Docker Login : "Username and password required". 
J'ai pourtant bien mis mes credentials dans les secrets de mon repository et je sais qu'ils sont corrects car j'ai tenté de les mettre en brut dans le code et cela a fonctionné. Il n'arrive donc pas à aller chercher les secrets depuis le code et je n'ai pas su le résoudre.

Pour conclure, je n'ai pas réussi ce TP, je vais tenter de me documenter d'avantage afin de trouver la solution. 

Voici les URLs vers mon image DockerHub et mon repo GitHub :
* https://hub.docker.com/repository/docker/luciebottin/devopstp2
* https://github.com/LucieBottin/devops_tp2