import { Component } from '@angular/core';
import themeData from './themeData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = themeData;
  selectedPalette = themeData[0];
  viewClicked = {
    id: 3,
    name: "Portfolio",
    img: "portfolio.png"
  };

  constructor() {
    this.changeTheme(themeData[0])
  }

  private changeTheme(data: any) {
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
    this.changeVar("--my-gray-100", data.gray[100]);
    this.changeVar("--my-gray-200", data.gray[200]);
    this.changeVar("--my-gray-300", data.gray[300]);
    this.changeVar("--my-gray-400", data.gray[400]);
    this.changeVar("--my-gray-500", data.gray[500]);
    this.changeVar("--my-gray-600", data.gray[600]);
    this.changeVar("--my-gray-700", data.gray[700]);
    this.changeVar("--my-gray-800", data.gray[800]);
    this.changeVar("--my-gray-900", data.gray[900]);
    this.changeVar("--bg", data.bg);
    this.changeVar("--bg-focus", data["bg-focus"]);
    this.changeVar("--primary-clear", data["primary-clear"]);
    this.changeVar("--primary-dull", data["primary-dull"]);
    this.changeVar("--accent-clear", data["accent-clear"]);
    this.changeVar("--accent-dull", data["accent-dull"]);
    this.changeVar("--clear", data["clear"]);
    this.changeVar("--dull", data["dull"]);


  }
  private changeVar(from: string, to: string) {
    document.documentElement.style.setProperty(from, to);
  }

  onThemeChange($event: any) {
    this.changeTheme($event);
    this.selectedPalette = $event;
  }

  views = [
    {
      id: 1,
      name: "Portfolio",
      img: "portfolio.png"
    },
    {
      id: 2,
      name: "Feedback",
      img: "feedback.png"
    },
    {
      id: 3,
      name: "Mobile App",
      img: "mobile-app.png"
    },
    {
      id: 4,
      name: "Dashboard",
      img: "dashboard.png"
    },
  ]

  onViewClicked(view: { id: number, name: string, img: string }) {
    this.viewClicked = view;
  }
}
