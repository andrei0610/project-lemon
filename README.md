Project-lemon este o aplicatie web dezvoltata in intregime in JavaScript cu care elevii pot rezolva variante de BAC la disciplina informatica. Totdodata reprezentant proiectul la Metode de Dezvoltare Software a echipei formate din:
* [Punguta Cristina](https://github.com/cristinapunguta)
* [Lungu Teodora](https://github.com/teoo)
* [Ilie Stefan](https://github.com/thekoplegend)
* [Stoicescu Cristian]()
* [Constantinescu Andrei](https://github.com/andrei0610)

## Prerequisites
Pentru a putea dezvolta aplicatia trebuie sa ai instalate urmatoarele:
* [Node.js](http://www.nodejs.org)

  ```bash
  # OSX
  $ brew install node

  #Ubuntu
  $ sudo apt-get install nodejs
  ```
* [MongoDB](http://www.mongodb.org)

  ```bash
  # OSX
  $ brew install mongodb

  # Ubuntu:
  $ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
  $ echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
  $ sudo apt-get update
  $ sudo apt-get install mongodb-10gen
  $ sudo mongod --config /etc/mongodb.conf
  ```
* [Bower](http://bower.io)

  ```bash
  $ npm install -g bower
  ```

* [Grunt](http://www.www.gruntjs.com)

  ```bash
  $ sudo npm install -g grunt-cli
  ```
## Cum poti contribui
Pentru a contribui ai nevoie de [Node.js](http://www.nodejs.org) instalat.

Ca sa contribui:

1. Clonezi proiectul

  ```bash
  $ git clone https://github.com/andrei0610/project-lemon.git
  ```
2. Navighezi in folderul lui

  ```bash
  $ cd project-lemon
  ```
3. Instalezi dependentele cu ajurotul `npm`

  ```bash
  $ npm install
  ```
4. Pornesti serverul

  ```bash
  $ grunt
```
Felicitari! Deschide browserul la adresa [http://localhost:3000](http://localhost:3000) pentru a o vizulaliza. La orice schimbare a fisierelor sale, [grunt](http://gruntjs.com) o sa refreshuiasca pagina pentru a vedea modificarile aduse.

##TODO
* Documentatie
* Redesign app
* Adaugare validare la exercitii
* Deploy pe [DigitalOcean](www.digitalocean.com)
