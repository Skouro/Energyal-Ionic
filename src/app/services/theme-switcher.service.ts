

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private themes: Theme[] = [];
  private currentTheme: number = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document, private http: HttpClient) {

    this.themes = [
      {
        'name': "first",
        "styles": [

          { "themeVariable": "--ion-color-primary", "value": "#2f32a0" },
          { "themeVariable": "--ion-color-primary-rgb", "value": "47, 50, 160" },
          { "themeVariable": "--ion-color-primary-contrast", "value": "#ffffff" },
          { "themeVariable": "--ion-color-primary-contrast-rgb", "value": "255, 255, 255" },
          { "themeVariable": "--ion-color-primary-shade", "value": "#272983" },
          { "themeVariable": "--ion-color-primary-tint", "value": "#5457B1" },
          {"themeVariable": "--ion-background-color", "value": "#6B6B6B"},,
          {"themeVariable": "--ion-text-color", "value": "#FFFFFF"},

          { "themeVariable": "--ion-color-secondary", "value": "#5b5fde" },
          { "themeVariable": "--ion-color-secondary-rgb", "value": "91, 95, 222" },
          { "themeVariable": "--ion-color-secondary-contrast", "value": "#ffffff" },
          { "themeVariable": "--ion-color-secondary-contrast-rgb", "value": "255, 255, 255" },
          { "themeVariable": "--ion-color-secondary-shade", "value": "#4B4EB6" },
          { "themeVariable": "--ion-color-secondary-tint", "value": "#787CE4" },


          { "themeVariable": "--ion-color-tertiary", "value": "#f4a942" },
          { "themeVariable": "--ion-color-tertiary-rgb", "value": "244,169,66" },
          { "themeVariable": "--ion-color-tertiary-contrast", "value": "#fff" },
          { "themeVariable": "--ion-color-tertiary-contrast-rgb", "value": "255,255,255" },
          { "themeVariable": "--ion-color-tertiary-shade", "value": "#d7953a" },
          { "themeVariable": "--ion-color-tertiary-tint", "value": "#f5b255" },


          { "themeVariable": "--ion-color-success", "value": "#10dc60" },
          { "themeVariable": "--ion-color-success-rgb", "value": "16,220,96" },
          { "themeVariable": "--ion-color-success-contrast", "value": "#fff" },
          { "themeVariable": "--ion-color-success-contrast-rgb", "value": "255,255,255" },
          { "themeVariable": "--ion-color-success-shade", "value": "#0ec254" },
          { "themeVariable": "--ion-color-success-tint", "value": "#28e070" },


          { "themeVariable": "--ion-color-warning", "value": "#ffce00" },
          { "themeVariable": "--ion-color-warning-rgb", "value": "255,206,0" },
          { "themeVariable": "--ion-color-warning-contrast", "value": "#000" },
          { "themeVariable": "--ion-color-warning-contrast-rgb", "value": "0,0,0" },
          { "themeVariable": "--ion-color-warning-shade", "value": "#e0b500" },
          { "themeVariable": "--ion-color-warning-tint", "value": "#ffd31a" },


          { "themeVariable": "--ion-color-danger", "value": "#f53d3d" },
          { "themeVariable": "--ion-color-danger-rgb", "value": "245,61,61" },
          { "themeVariable": "--ion-color-danger-contrast", "value": "#fff" },
          { "themeVariable": "--ion-color-danger-contrast-rgb", "value": "255,255,255" },
          { "themeVariable": "--ion-color-danger-shade", "value": "#d83636" },
          { "themeVariable": "--ion-color-danger-tint", "value": "#f65050" },


          { "themeVariable": "--ion-color-light", "value": "#f4f4f4" },
          { "themeVariable": "--ion-color-light-rgb", "value": "244,244,244" },
          { "themeVariable": "--ion-color-light-contrast", "value": "#000" },
          { "themeVariable": "--ion-color-light-contrast-rgb", "value": "0,0,0" },
          { "themeVariable": "--ion-color-light-shade", "value": "#8290e0" },
          { "themeVariable": "--ion-color-light-tint", "value": "#f5f5f5" },

          { "themeVariable": "--ion-color-medium", "value": "#ccd1e1" },
          { "themeVariable": "--ion-color-medium-rgb", "value": "152,154,162" },
          { "themeVariable": "--ion-color-medium-contrast", "value": "#000" },
          { "themeVariable": "--ion-color-medium-contrast-rgb", "value": "0,0,0" },
          { "themeVariable": "--ion-color-medium-shade", "value": "#86888f" },
          { "themeVariable": "--ion-color-medium-tint", "value": "#a2a4ab" },


          { "themeVariable": "--ion-color-dark", "value": "#110A3B" },
          { "themeVariable": "--ion-color-dark-rgb", "value": "34,34,34" },
          { "themeVariable": "--ion-color-dark-contrast", "value": "#fff" },
          { "themeVariable": "--ion-color-dark-contrast-rgb", "value": "255,255,255" },
          { "themeVariable": "--ion-color-dark-shade", "value": "#190e60" },
          { "themeVariable": "--ion-color-dark-tint", "value": "#2e256d" }

        ]
      }
    ];
  }

  cycleTheme(): void {

    if (this.themes.length > this.currentTheme + 1) {
      this.currentTheme++;
    } else {
      this.currentTheme = 0;
    }

    this.setTheme(this.themes[this.currentTheme].name);

  }

  setTheme(name): void {

    let theme = this.themes.find(theme => theme.name === name);

    this.domCtrl.write(() => {

      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }

}
