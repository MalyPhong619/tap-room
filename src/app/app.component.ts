import { Component } from '@angular/core';
import { Keg } from './models/kegs.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tap Room';
  kegs : Keg[] = [
    new Keg('WildCraft', 'Rome Beauty', 7, 6.8, 'Cider'),
    new Keg('Swift', 'Swift Heirloom Batch 1: Sauvie Island Keeved Cider', 12, 6.2, 'Dry Cider'),
    new Keg('Machine House', 'Bramling Cross', 5, 6.5, 'IPA'),
    new Keg('pFriem', 'Oyster Stout', 7, 5.8, 'Stout'),
    new Keg('Founders', 'KBS', 11, 2.3, 'Imperial Stout'),
    new Keg('Culmination / Wayfinder', 'Ol\' Money', 6, 0.4, 'English Barleywine'),
    new Keg('Moonraker', 'Foam Walker', 9, 7.6, 'Stout'),
    new Keg('Gigantic', 'Corpse Reviver #2', 7, 9.3, 'Sour Ale'),
    new Keg('Block 15', 'Wonka\'s Wit', 9, 4.5, 'Wild Witbier'),
    new Keg('Little Beast', 'Wolf Camp', 7, 6.3, 'Hoppy Saison'),
    new Keg('Ex Novo', 'Antwerp Delight', 6, 5.9, 'Belgian Pale Ale'),
    new Keg('Wayfinder / Bailey\'s Taprooom / Bee Local', 'Hausbier: Beez In The Trap', 6, 4.8, 'English Summer Ale'),
    new Keg('pFriem', 'Dark Czech Lager', 6, 5.5, 'Czech Dark Lager'),
    new Keg('Pizza Port', 'ChronicAle', 5, 4.9, 'American Amber Ale'),
    new Keg('Manifest', 'Best Lager', 5, 3.8, 'Light Lager'),
    new Keg('Pelican', 'Pilsner', 6, 4.8, 'German Pilsner'),
    new Keg('Logsdon Farmhouse', 'Weisse City', 6, 4.9, 'Hefeweizen'),
    new Keg('Bend', 'Devil\'s Cabbage', 6, 7.3, 'West Coast IPA'),
    new Keg('El Segundo', 'Dreamin\' of Sunshine', 7, 7.2, 'IPA'),
    new Keg('Modern Times', 'Dfreamspeaker', 8, 7.2, 'Hazy IPA'),
    new Keg('Georgetown', 'Meowsa', 8, 8.0, 'Imperial IPA'),
    new Keg('Hopworks 2012', 'Noggin Floggin', 6, 11.2, 'American Barleywine'),
    new Keg('Fremont', 'Winter Ale', 7, 8.0, 'Imperial Winter Warmer- Hops'),
  ]

    selectedKeg = null;

    editName(keg) {
    this.selectedKeg = keg;
  }

  finishEditing() {
    this.selectedKeg = null;
  }


  newBeer(){
    const inputBrand = ((document.getElementById("brand") as HTMLInputElement).value);
    const inputName = ((document.getElementById("name") as HTMLInputElement).value);
    const inputPrice = (parseInt((document.getElementById("price") as HTMLInputElement).value));
    const inputContent = (parseInt((document.getElementById("content") as HTMLInputElement).value));
    const inputType = ((document.getElementById("type") as HTMLInputElement).value);

    const entry = new Keg(inputBrand, inputName, inputPrice, inputContent, inputType);

    this.kegs.push(entry);
  }



  pourBeer(keg){
    keg.kegVolumn = keg.kegVolumn - keg.pourVolumn;

  }

  newTap(keg) {
    keg.kegVolumn = 124;
  }

  alertTen(keg) {
      if (keg.kegVolumn <= 10 ) {
        return "bg-danger";
      }
  }

fiveDollarPint(keg) {
    if (keg.price >= 5) {
      return "bg-warning";
  }
}

// strongerBeers(keg) {
//   angular.forEach(keg)
//     if (keg.alcoholContent <= 5.5) {
//       return keg[ ];
//     }
//   }


}
