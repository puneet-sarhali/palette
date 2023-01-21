import { Component } from '@angular/core';
import themeData from './themeData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = themeData;
  variables= themeData[0];

  constructor() {
    this.changeTheme(themeData[0])
  }

  private changeTheme(data: any){
    this.changeVar("--my-primary-100", data.primary[100]);
    this.changeVar("--my-primary-200", data.primary[200]);
    this.changeVar("--my-primary-300", data.primary[300]);
    this.changeVar("--my-primary-400", data.primary[400]);
    this.changeVar("--my-primary-500", data.primary[500]);
    this.changeVar("--my-primary-600", data.primary[600]);
    this.changeVar("--my-primary-700", data.primary[700]);
    this.changeVar("--my-primary-800", data.primary[800]);
    this.changeVar("--my-primary-900", data.primary[900]);
    this.changeVar("--my-accent-100", data.accent[100]);
    this.changeVar("--my-accent-200", data.accent[200]);
    this.changeVar("--my-accent-300", data.accent[300]);
    this.changeVar("--my-accent-400", data.accent[400]);
    this.changeVar("--my-accent-500", data.accent[500]);
    this.changeVar("--my-accent-600", data.accent[600]);
    this.changeVar("--my-accent-700", data.accent[700]);
    this.changeVar("--my-accent-800", data.accent[800]);
    this.changeVar("--my-accent-900", data.accent[900]);
  }
  private changeVar(from: string, to: string) {
    document.documentElement.style.setProperty(from, to);
  }

  onThemeChange($event: any){
    this.changeTheme($event);
    this.variables = $event;
  }

  private views = ["dashboard", "feedback", "portfolio"]
}
