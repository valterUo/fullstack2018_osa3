"# fullstack2018_osa3"

https://shrouded-bastion-88474.herokuapp.com/

Muutama huomio: Yritin löytää sovelluksesta toimimattomuutta. Mikään consoli tai pyyntö ei aiheuta asiaankuulumatonta erroria. Ainoa asia on se, että osoitteeseen https://shrouded-bastion-88474.herokuapp.com/api/persons avautuu sama sivu kuin osoitteeseen https://shrouded-bastion-88474.herokuapp.com/. Myös osoitteeseen https://shrouded-bastion-88474.herokuapp.com/info avautuu pääsivu. En ymmärrä, mistä tämä johtuu. Jos erotan frontendin backendistä ja käytän sovellusta vain backendistä, kaikki sivut näyttäytyvät, kuten toimii, joten vika lienee siinä, kuinka kytkin frontendin backendiin. Tein kaiken kuitenkin mielestäni kuin ohjeissa neuvottiin. Postmanista käsin kaikki kuitenkin toimii ja lisäksi duplikaattien tekeminen ei ole mahdollista millään tavalla.

Vahingossa osoitteesta tuli hieman "ruma", sillä laitoin ohjelman herokuun remote-komennolla, enkä githubista. En ole tutustunut githubin käyttöön liiemmin.

Mongoosessa sain statics-metodit toimimaan suhteellisen kivuttomasti schemoja käyttämällä.

–Valter Uotila

P.S. Kokeilin Zeitia myös meidän aikaisempaan harjoitustehtävään: https://maiden-dsnevmzfpm.now.sh/
P.P.S. Siellä on sellainen bugi, että jos tuloksissa näkyy kaksi maata tyylillä Niger ja Nigeria tai Dominican tai Dominican Republic niin ensimmäinen hakutuloksista ei aukeakaan. 